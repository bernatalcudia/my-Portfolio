'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/lib/validations';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useTranslations } from '@/lib/translations';

export function ContactForm() {
    const { language } = useLanguage();
    const t = useTranslations(language);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Error al enviar el mensaje');
            }

            setSubmitStatus('success');
            reset();

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t.contact.name} <span className="text-red-500">*</span>
                </label>
                <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder={t.contact.namePlaceholder}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.name.message}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.contact.email} <span className="text-red-500">*</span>
                </label>
                <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder={t.contact.emailPlaceholder}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t.contact.message} <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    rows={6}
                    {...register('message')}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                    placeholder={t.contact.messagePlaceholder}
                />
                {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.message.message}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                size="lg"
            >
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        {t.contact.sending}
                    </span>
                ) : (
                    t.contact.send
                )}
            </Button>

            {submitStatus === 'success' && (
                <div
                    role="status"
                    aria-live="polite"
                    className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 flex items-center gap-2"
                >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{t.contact.success}</span>
                </div>
            )}

            {submitStatus === 'error' && (
                <div
                    role="alert"
                    aria-live="assertive"
                    className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 flex items-center gap-2"
                >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>{t.contact.error}</span>
                </div>
            )}
        </form>
    );
}
