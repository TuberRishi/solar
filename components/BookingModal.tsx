import React, { useState } from 'react';
import { Icon } from './Icon';
import { Button } from './Button';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState<'form' | 'success'>('form');
    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setStep('success');
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
            
            <div className="relative bg-surface-dark border border-white/10 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-[scaleIn_0.3s_ease-out]">
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                >
                    <Icon name="close" />
                </button>

                {step === 'form' ? (
                    <div className="p-6 md:p-8">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-white mb-2">Book Your Cleaning</h2>
                            <p className="text-gray-400 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                                <input 
                                    required
                                    type="text" 
                                    className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                                <input 
                                    required
                                    type="tel" 
                                    className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Panel Count (Approx)</label>
                                <select className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
                                    <option>1 - 10 Panels</option>
                                    <option>10 - 25 Panels</option>
                                    <option>25 - 50 Panels</option>
                                    <option>50+ Panels</option>
                                    <option>Commercial / Industrial</option>
                                </select>
                            </div>

                            <Button 
                                type="submit" 
                                disabled={isLoading} 
                                fullWidth 
                                className="mt-2"
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <Icon name="progress_activity" className="animate-spin" />
                                        Processing...
                                    </span>
                                ) : "Confirm Booking Request"}
                            </Button>
                        </form>
                    </div>
                ) : (
                    <div className="p-8 flex flex-col items-center text-center">
                        <div className="size-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                            <Icon name="check_circle" className="text-5xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Request Received!</h2>
                        <p className="text-gray-400 mb-8">
                            Thank you for choosing 4 Friends Solar. One of our partners will call you shortly to confirm your appointment.
                        </p>
                        <Button onClick={onClose} fullWidth variant="outline">
                            Close
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};