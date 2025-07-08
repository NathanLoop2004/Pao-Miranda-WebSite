import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }
  const { nombre, email, mensaje, tipoConsulta } = req.body;
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jinderloop@gmail.com',
      subject: `Nuevo contacto: ${tipoConsulta}`,
      html: `
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Tipo de consulta:</b> ${tipoConsulta}</p>
        <p><b>Mensaje:</b><br/>${mensaje}</p>
      `,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error enviando email' });
  }
}