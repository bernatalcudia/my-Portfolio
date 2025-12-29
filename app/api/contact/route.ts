import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { z } from 'zod';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate request body
        const validatedData = contactSchema.parse(body);

        // Here you would integrate with an email service like Resend, SendGrid, etc.
        // For now, we'll just log the data and return success
        console.log('Contact form submission:', {
            name: validatedData.name,
            email: validatedData.email,
            message: validatedData.message,
            timestamp: new Date().toISOString()
        });

        // Simulate email sending delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // In production, you would send an email here:
        // await sendEmail({
        //   to: 'bernatalcudia@gmail.com',
        //   from: validatedData.email,
        //   subject: `Nuevo mensaje de ${validatedData.name}`,
        //   text: validatedData.message
        // });

        return NextResponse.json(
            {
                success: true,
                message: 'Mensaje recibido correctamente'
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
