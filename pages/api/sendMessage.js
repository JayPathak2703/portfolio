import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pathakjay2790@gmail.com",
        pass: "dpji ekfb giol edlb",
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: "pathakjay2790@gmail.com",
      subject: `New Contact Message: ${subject}`,
      html: `
                <h3>Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send message." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
