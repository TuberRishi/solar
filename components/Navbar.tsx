import React, { useState } from 'react';
import { Icon } from './Icon';

interface NavbarProps {
    onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { label: 'Home', href: '#' },
        { label: 'Services', href: '#services' },
        { label: 'Why Us', href: '#why-us' },
        { label: 'Team', href: '#team' },
    ];

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);
        if (id === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-md border-b border-surface-dark-highlight">
            <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white flex size-10 shrink-0 items-center justify-center hover:bg-surface-dark rounded-full transition-colors md:hidden"
                >
                    <Icon name={isMenuOpen ? "close" : "menu"} className="text-[28px]" />
                </button>

                {/* Logo / Brand */}
                <div 
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => scrollToSection('#')}
                >
                    <div className="relative size-10 flex items-center justify-center border-2 border-primary/50 rounded-full group-hover:border-primary transition-colors">
                        <span className="font-black text-primary text-xl italic pr-0.5">4</span>
                    </div>
                    <div className="flex flex-col items-start leading-none">
                        <span className="text-lg font-black text-white tracking-wide uppercase group-hover:text-primary transition-colors">
                            Friends
                        </span>
                        <span className="text-[0.6rem] font-bold text-gray-400 tracking-[0.1em] uppercase">
                            Solar Cleaning Services
                        </span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <button 
                            key={link.label}
                            onClick={() => scrollToSection(link.href)}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                    <button 
                        onClick={onBookClick}
                        className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 px-4 py-2 rounded-lg text-sm font-bold transition-all"
                    >
                        Book Now
                    </button>
                </div>
                
                {/* Spacer for centering logic on mobile */}
                <div className="w-10 md:hidden"></div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-surface-dark border-b border-surface-dark-highlight shadow-2xl md:hidden animate-[fadeIn_0.2s_ease-out]">
                    <div className="flex flex-col p-4 gap-2">
                        {navLinks.map((link) => (
                            <button 
                                key={link.label}
                                onClick={() => scrollToSection(link.href)}
                                className="text-left px-4 py-3 rounded-lg hover:bg-white/5 text-gray-200"
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="h-px bg-white/10 my-2"></div>
                        <button 
                            onClick={() => {
                                setIsMenuOpen(false);
                                onBookClick();
                            }}
                            className="text-center bg-primary text-background-dark font-bold py-3 rounded-lg"
                        >
                            Book Your Cleaning
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};