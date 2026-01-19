'use client';

import { useEffect, useState, useRef } from 'react';

const themes = [
    {
        id: 'light',
        label: 'Light',
        icon: (
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        )
    },
    {
        id: 'dark',
        label: 'Dark',
        icon: (
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        )
    },
    {
        id: 'navy-green',
        label: 'Navy',
        icon: (
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        )
    }
] as const;

export function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark' | 'navy-green'>('light');
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Load theme from localStorage on mount
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'navy-green' | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
        applyTheme(initialTheme);
    }, []);

    // Handle clicks outside the dropdown to close it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const applyTheme = (newTheme: 'light' | 'dark' | 'navy-green') => {
        const root = document.documentElement;
        root.classList.remove('dark', 'navy-green');

        if (newTheme === 'dark') {
            root.classList.add('dark');
        } else if (newTheme === 'navy-green') {
            root.classList.add('navy-green');
        }
    };

    const handleThemeChange = (newTheme: 'light' | 'dark' | 'navy-green') => {
        setTheme(newTheme);
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        setIsOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            setIsOpen(false);
        }
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <button
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-muted"
                aria-label="Toggle theme"
            >
                <div className="w-5 h-5" />
            </button>
        );
    }

    const currentTheme = themes.find(t => t.id === theme) || themes[0];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Select theme"
                aria-expanded={isOpen}
            >
                {currentTheme.icon}
            </button>

            {isOpen && (
                <div
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-36 rounded-lg shadow-lg bg-card border border-border overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200"
                    onKeyDown={handleKeyDown}
                >
                    <div className="p-1 space-y-1">
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => handleThemeChange(t.id)}
                                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${theme === t.id
                                    ? 'bg-primary/10 text-primary font-medium'
                                    : 'text-foreground/80 hover:bg-muted hover:text-foreground'
                                    }`}
                            >
                                <span className={theme === t.id ? 'text-primary' : 'text-muted-foreground'}>
                                    {t.icon}
                                </span>
                                {t.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
