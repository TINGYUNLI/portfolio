// import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  // const { body } = await req.json();
  // const { email, subject, message } = body;
  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [process.env.TO_EMAIL],
      subject: "messages from my portfolio " + subject,
      react: (
        <>
          <h5>From : {email}</h5>
          <p>{message}</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
