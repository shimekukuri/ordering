import nodemailer from 'nodemailer';
import { prisma } from '../prisma/db';

console.log(process.env.NODEMAILER_USERNAME, process.env.NODEMAILER_PASSWORD);

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

export const sendOrderEmail = async (options: mailOptions, orderId: string) => {
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

  console.log('Mailer Order Items');
  if (!orderItems) {
    return new Error('orderItems Not Found');
  }

  const date = new Date();
  const extendedOptions = extendMailType(options);
  extendedOptions.from = process.env.NODEMAILER_USERNAME;
  extendedOptions.subject = date.toLocaleDateString() + `::${orderId}`;
  extendedOptions.text = JSON.stringify(body);

  await new Promise((resolve, reject) => {
    transporter.sendMail(extendedOptions, async (error, info) => {
      if (error) {
        console.error('Mailer ERROR', error);
        reject(error);
      }
      console.log(info);

      await prisma.orderItem.deleteMany({ where: { orderId: orderId } });
      await prisma.order.delete({ where: { id: orderId } });
    });
    resolve(true);
  });

  return 'executed';
};
