import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { z } from 'zod';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate request body
        const validatedData = contactSchema.parse(body);

        console.log('📨 Contact form submission received:', validatedData);

        // Check if environment variables are configured for real email sending
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            // Import dynamically to avoid build errors if package is missing, 
            // though user should install it: npm install nodemailer
            // For now we assume standard module availability or standard simulation
            const nodemailer = require('nodemailer');

            const transporter = nodemailer.createTransport({
                service: 'gmail', // Or use strict host/port if provided
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER, // Send to yourself
                replyTo: validatedData.email, // Allow simple reply to the visitor
                subject: `Portfolio Contact: ${validatedData.name}`,
                text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nMessage: ${validatedData.message}`,
                html: `
                    <h3>New Contact Message</h3>
                    <p><strong>Name:</strong> ${validatedData.name}</p>
                    <p><strong>Email:</strong> ${validatedData.email}</p>
                    <p><strong>Message:</strong></p>
                    <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">
                        ${validatedData.message.replace(/\n/g, '<br>')}
                    </div>
                `,
            });
            console.log('✅ Email sent successfully via Nodemailer');
        } else {
            // Simulation Mode
            console.log('⚠️ No EMAIL_USER/EMAIL_PASS configured. Skipping actual email send.');
            console.log('To enable real emails, add EMAIL_USER and EMAIL_PASS to your .env file.');

            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Mensaje enviado correctamente'
            },
            { status: 200 }
        );

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Datos inválidos',
                    details: error.errors
                },
                { status: 400 }
            );
        }

        console.error('Error processing contact form:', error);

        return NextResponse.json(
            {
                success: false,
                error: 'Error interno del servidor'
            },
            { status: 500 }
        );
    }
}
