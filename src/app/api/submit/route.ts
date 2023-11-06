import { sendOrderEmail } from '@/ulitiles/nodeMailer/mailer';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest, response: NextResponse) => {
  const req = await request.json();

  try {
    const emailReponse = await sendOrderEmail(
      { to: 'james.t.hutchinson@icloud.com' },
      req.orderId,
      req.location
    );
    return NextResponse.json('meep');
  } catch (error) {
    console.error(error);
    return NextResponse.json('failed');
  }
};

export const dynamic = 'force-dynamic';
