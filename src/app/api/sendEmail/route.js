import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { fullName, email, Phone, Whatsapp, Address, Pincode,City, District,State,Dealer_Name,Category,Product_Name_0,Product_Name_1,Product_Name_2,Product_Name_3,sheets,sheets_0,sheets_1,sheets_2,No_of_thickness_0,No_of_thickness_1,No_of_thickness_2,No_of_thickness_3,Invoice_File,Invoice_File1,Invoice_File2,Invoice_File3} = await request.json();

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
            <li><strong>Whatsapp:</strong> ${Whatsapp}</li><br /><br /> 
            <li><strong>Address:</strong> ${Address}</li> <br />
            <li><strong>Pincode:</strong> ${Pincode}</li> <br />
            <li><strong>City:</strong> ${City}</li> <br />
            <li><strong>District:</strong> ${District}</li> <br />
            <li><strong>State:</strong> ${State}</li> <br />
            <li><strong>Dealer_Name:</strong> ${Dealer_Name}</li> <br />
            <li><strong>Category:</strong> ${Category}</li> <br />
            <li><strong>Product_Name_0:</strong> ${Product_Name_0}</li> <br />
            <li><strong>Product_Name_1:</strong> ${Product_Name_1}</li> <br />
            <li><strong>Product_Name_2:</strong> ${Product_Name_2}</li> <br />
            <li><strong>Product_Name_3:</strong> ${Product_Name_3}</li> <br />
            <li><strong>sheets:</strong> ${sheets}</li> <br />
            <li><strong>sheets_0:</strong> ${sheets_0}</li> <br />
            <li><strong>sheets_1:</strong> ${sheets_1}</li> <br />
            <li><strong>sheets_2:</strong> ${sheets_2}</li> <br />
            <li><strong>No_of_thickness_0:</strong> ${No_of_thickness_0}</li> <br />
            <li><strong>No_of_thickness_1:</strong> ${No_of_thickness_1}</li> <br />
            <li><strong>No_of_thickness_2:</strong> ${No_of_thickness_2}</li> <br />
            <li><strong>No_of_thickness_3:</strong> ${No_of_thickness_3}</li> <br />
            <li><strong>Invoice_File:</strong> ${Invoice_File}</li> <br />
            <li><strong>Invoice_File1:</strong> ${Invoice_File1}</li> <br />
            <li><strong>Invoice_File2:</strong> ${Invoice_File2}</li> <br />
            <li><strong>Invoice_File3:</strong> ${Invoice_File3}</li> <br />

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
