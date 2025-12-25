'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const turbine = formData.get('turbine') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { success: false, message: 'Veuillez remplir tous les champs obligatoires.' };
    }

    try {
        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Use verified domain across production
            to: ['kenavo.import.bzh@gmail.com'], // Use your email for testing or make it dynamic if set up
            subject: `Nouvelle demande de devis : ${name}`,
            html: `
        <h2>Nouvelle demande reçue</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Intérêt:</strong> ${turbine}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">
          ${message}
        </blockquote>
      `
        });

        if (data.error) {
            console.error("Resend Error:", data.error);
            return { success: false, message: 'Erreur lors de l\'envoi. Vérifiez votre configuration.' };
        }

        return { success: true, message: 'Votre demande a bien été envoyée !' };
    } catch (error) {
        console.error("Server Error:", error);
        return { success: false, message: 'Une erreur serveur est survenue.' };
    }
}
