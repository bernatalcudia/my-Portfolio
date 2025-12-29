import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'solid' | 'outline' | 'learning';
    className?: string;
}

export function Badge({ children, variant = 'solid', className = '' }: BadgeProps) {
    const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-200';

    const variants = {
        solid: 'bg-primary/15 text-primary border border-primary/20 hover:bg-primary/25',
        outline: 'border-2 border-accent/50 text-accent hover:bg-accent/10',
        learning: 'bg-secondary/15 text-secondary border border-secondary/20 hover:bg-secondary/25',
    };

    return (
        <span className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
}
