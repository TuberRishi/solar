import React from 'react';
import { Icon } from './Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    iconName?: string;
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
    children, 
    variant = 'primary', 
    iconName, 
    fullWidth = false, 
    className = "",
    ...props 
}) => {
    const baseStyles = "relative group overflow-hidden rounded-xl transition-all duration-300 font-bold flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed";
    
    const variants = {
        primary: "bg-primary hover:bg-primary-light text-background-dark shadow-[0_0_20px_rgba(212,175,53,0.3)]",
        outline: "border border-primary/50 text-primary hover:bg-primary/10",
        ghost: "text-gray-300 hover:text-white hover:bg-white/5"
    };

    const widthClass = fullWidth ? "w-full" : "w-fit px-8";
    const paddingClass = variant === 'ghost' ? "p-2" : "py-3.5";

    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${widthClass} ${paddingClass} ${className}`}
            {...props}
        >
            {variant === 'primary' && (
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            )}
            {children}
            {iconName && <Icon name={iconName} className="text-[20px]" />}
        </button>
    );
};