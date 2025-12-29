import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
    return (
        <section id={id} className={`py-16 md:py-24 ${className}`}>
            <div className="container-custom">
                {children}
            </div>
        </section>
    );
}

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-muted-foreground max-w-2xl">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
