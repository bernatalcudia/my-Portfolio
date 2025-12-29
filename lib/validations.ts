import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string()
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .max(100, 'El nombre no puede exceder 100 caracteres'),
    email: z.string()
        .email('Por favor, introduce un email válido')
        .max(255, 'El email no puede exceder 255 caracteres'),
    message: z.string()
        .min(10, 'El mensaje debe tener al menos 10 caracteres')
        .max(1000, 'El mensaje no puede exceder 1000 caracteres')
});

export type ContactFormData = z.infer<typeof contactSchema>;
