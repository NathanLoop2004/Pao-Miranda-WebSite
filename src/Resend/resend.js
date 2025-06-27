// server/index.js
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import 'dotenv/config'; // Si usas ES Modules (import)

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  console.log('Recibí una petición:', req.body); // <-- ya lo tienes
  const { nombre, email, mensaje, tipoConsulta } = req.body;
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jinderloop@gmail.com', // SOLO tu correo verificado en Resend
      subject: `Nuevo contacto: ${tipoConsulta}`,
      html: `
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Tipo de consulta:</b> ${tipoConsulta}</p>
        <p><b>Mensaje:</b><br/>${mensaje}</p>
      `,
    });
    console.log('Intento de envío realizado');
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error); // <-- AGREGA ESTA LÍNEA
    res.status(500).json({ error: 'Error enviando email' });
  }
});

app.listen(3001, () => console.log('API escuchando en puerto 3001'));