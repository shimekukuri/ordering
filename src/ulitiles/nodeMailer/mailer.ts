import nodemailer from 'nodemailer';
import { prisma } from '../prisma/db';

enum locations {
  access,
  whitwell,
  jasper,
  cates,
  null,
}

export const transporter = nodemailer.createTransport({
  port: 465,
  auth: {
    user: process.env.NODEMAILER_USERNAME,
    pass: process.env.NODEMAILER_PASSWORD,
  },
  host: 'smtp.gmail.com',
  secure: true,
});

export type mailOptions = {
  to: string;
};

type extendedMailOptions = mailOptions & {
  from?: string;
  subject?: string;
  text?: string;
};

const extendMailType = (options: mailOptions): extendedMailOptions => {
  return {
    ...options,
    subject: undefined,
    text: undefined,
  };
};

export const sendOrderEmail = async (
  options: mailOptions,
  orderId: string,
  location: string
) => {
  const orderItems = await prisma.orderItem.findMany({
    where: { orderId: orderId },
  });

  const body = await Promise.all(
    orderItems.map(async (x) => {
      const item = await prisma.item.findFirst({ where: { id: x.itemId } });
      console.log('body item:', item);
      return { item: item?.name, quantity: x.quantity };
    })
  );

  if (!orderItems) {
    return new Error('orderItems Not Found');
  }

  const date = new Date();
  const extendedOptions = extendMailType(options);
  extendedOptions.from = process.env.NODEMAILER_USERNAME;
  extendedOptions.subject =
    location + '::' + date.toLocaleDateString() + `::${orderId}`;
  extendedOptions.text = JSON.stringify(body);

  try {
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Server is ready to take our messages');
          resolve(success);
        }
      });
    });
  } catch (error) {
    console.error(error);
    return;
  }

  await new Promise((resolve, reject) => {
    transporter.sendMail(extendedOptions, async (error, info) => {
      if (error) {
        console.error('Mailer ERROR', error);
        reject(error);
      }
      console.log(info);

      await prisma.order.update({
        where: { id: orderId },
        //@ts-expect-error
        data: { submited: true, location: location },
      });
      resolve(true);
    });
  });

  return 'executed';
};

export const sendGenericEmail = async (
  options: mailOptions,
  subject: string
) => {
  const extendedOptions = extendMailType(options);
  extendedOptions.from = process.env.NODEMAILER_USERNAME;
  extendedOptions.subject = subject;

  try {
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Server is ready to take our messages');
          resolve(success);
        }
      });
    });
  } catch (error) {
    console.error(error);
    return;
  }

  await new Promise((resolve, reject) => {
    transporter.sendMail(extendedOptions, async (error, info) => {
      if (error) {
        console.error('Mailer ERROR', error);
        reject(error);
      }
      console.log(info);
      resolve(true);
    });
  });

  return 'executed';
};
