import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'glass';
    hover?: boolean;
}

export function Card({ children, className = '', variant = 'default', hover = true }: CardProps) {
    const baseStyles = 'rounded-xl p-6 transition-all duration-300';

    const variants = {
        default: 'bg-card border border-border shadow-md',
        glass: 'glass dark:glass-dark shadow-xl',
    };

    const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';

    return (
        <div className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}>
            {children}
        </div>
    );
}
