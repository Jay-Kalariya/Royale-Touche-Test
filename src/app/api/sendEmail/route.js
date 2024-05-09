import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { fullName, email, Phone, Whatsapp, Address, Pincode } = await request.json();

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Prepare email content
    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: process.env.SMTP_MAIL,
      subject: "Send Email Tutorial",
      html: `
        <p>New Inquiry Form from this site </p>
        <div style="border: 1px dashed black; padding: 20px;">
          <ul style="list-style-type: none; padding: 0; margin: 0;">
            <li><strong>Name:</strong> ${fullName}</li><br /><br />
            <li><strong>Email:</strong> ${email}</li> <br /><br />
            <li><strong>Phone:</strong> ${Phone}</li> <br /><br />
            <li><strong>Address:</strong> ${Whatsapp}</li><br /><br /> 
            <li><strong>Description:</strong> ${Address}</li> <br />
            <li><strong>Description:</strong> ${Pincode}</li> <br />
          </ul>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Return error response
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
