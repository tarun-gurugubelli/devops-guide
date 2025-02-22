// app/api/sendEmail/route.js

import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  // Set up nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email (use env variable)
      pass: process.env.EMAIL_PASS, // Your email password or App Password (use env variable)
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'gurugubellitarunss1602@gmail.com',
    subject: 'Someone tried to contact you',
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
  }
}