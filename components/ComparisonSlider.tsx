import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Icon } from './Icon';

interface ComparisonSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
    beforeImage,
    afterImage,
    beforeLabel = "DIRTY",
    afterLabel = "CLEANED"
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    }, []);

    const onMouseDown = () => setIsDragging(true);
    const onTouchStart = () => setIsDragging(true);

    const onMouseUp = () => setIsDragging(false);
    const onTouchEnd = () => setIsDragging(false);

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };
    
    // Add global event listeners for drag end to prevent getting stuck if mouse leaves component
    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('touchend', onTouchEnd);
        } else {
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchend', onTouchEnd);
        }
        return () => {
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, [isDragging]);

    return (
        <div 
            className="gold-border-gradient rounded-xl overflow-hidden shadow-lg relative group select-none touch-none"
            ref={containerRef}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
        >
            <div className="relative w-full aspect-video bg-surface-dark cursor-ew-resize overflow-hidden">
                {/* Clean Image (Background - Layer 1 - AFTER) */}
                <img 
                    src={afterImage} 
                    alt="Clean solar panel"
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                />
                 {/* Label for Clean */}
                 <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-green-400 border border-green-500/30 z-10 pointer-events-none">
                    {afterLabel}
                </div>

                {/* Dirty Image (Foreground - Layer 2 - BEFORE) - Clipped via clip-path */}
                <div 
                    className="absolute inset-0 w-full h-full z-20"
                    style={{ 
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                    }}
                >
                    <img 
                        src={beforeImage} 
                        alt="Dirty solar panel"
                        className="absolute inset-0 w-full h-full object-cover"
                        draggable={false}
                    />
                    {/* Overlay to darken the dirty side slightly to match design intent */}
                    <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

                    {/* Label for Dirty - Only visible if slider allows */}
                     <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-red-400 border border-red-500/30 pointer-events-none">
                        {beforeLabel}
                    </div>
                </div>

                {/* Slider Handle Line */}
                <div 
                    className="absolute top-0 bottom-0 z-30 w-0.5 bg-primary cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 bg-white border-2 border-primary rounded-full shadow-lg flex items-center justify-center text-primary-dark"
                        onMouseDown={onMouseDown}
                        onTouchStart={onTouchStart}
                    >
                        <Icon name="unfold_more_double" className="rotate-90 text-sm font-bold" />
                    </div>
                </div>
            </div>

            <div className="p-4 bg-surface-dark">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-white text-lg">Dirty vs Clean Panels</h3>
                        <p className="text-gray-400 text-sm mt-1 leading-snug">Drag the slider to see the difference.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};