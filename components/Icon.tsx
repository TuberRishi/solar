import React from 'react';

interface IconProps {
    name: string;
    className?: string;
    filled?: boolean;
}

export const Icon: React.FC<IconProps> = ({ name, className = "", filled = false }) => {
    // Material symbols outlined class is default, we can add 'material-symbols-filled' if configured,
    // but the google font link provided is just Outlined with weight range.
    // To 'fill' usually you set font-variation-settings, but here we stick to the basic class.
    return (
        <span 
            className={`material-symbols-outlined select-none ${className}`}
            style={filled ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
            {name}
        </span>
    );
};