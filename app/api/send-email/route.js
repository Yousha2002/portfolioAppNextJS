import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// POST method handler
export async function POST(req) {
  const { firstname, lastname, tel, service, email, message } =
    await req.json();

  // Check if all fields are provided
  if (!firstname || !lastname || !email || !message || !tel || !service) {
    return new Response(
      JSON.stringify({ success: false, message: "All fields are required." }),
      { status: 400 }
    );
  }

  try {
    // Create reusable transporter object using the default SMTP transport (Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Using Gmail service
      auth: {
        user: process.env.EMAIL_USER, // Use environment variable for email
        pass: process.env.EMAIL_PASS, // Use environment variable for email password (app password)
      },
    });

    // Email message configuration
    const mailOptions = {
      from: email, // Sender address (from form data)
      to: process.env.EMAIL_USER, // Receiver's email (use the same email as sender or another one)
      subject: `New message from ${firstname} ${lastname}`, // Subject line
      text: `You have received a new message from ${firstname} ${lastname}\n\nEmail: ${email}\n\nMessage: ${message}\n\nService: ${service}\n\nPhone: ${tel}.`, // Plain text body
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email." }),
      { status: 500 }
    );
  }
}
