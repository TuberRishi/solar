import React from 'react';
import { Navbar } from './components/Navbar';
import { ComparisonSlider } from './components/ComparisonSlider';
import { Button } from './components/Button';
import { Icon } from './components/Icon';
import { TeamMember, Service, Benefit } from './types';

// Data Definitions
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScRFf7E6KokHk4e9RmgVLxfcGAMp4i0TcJrmdZpEdJNZs_vYA/viewform";

const TEAM_DATA: TeamMember[] = [
    { name: "Rushikesh Marghade", role: "Partner", phone: "8010471219" },
    { name: "Rushikesh Alewad", role: "Partner", phone: "9579700218" },
    { name: "Pawan Ghate", role: "Partner", phone: "9359750295" },
    { name: "Nikhil Paulzagade", role: "Partner", phone: "7875692644" },
];

const SERVICES_DATA: Service[] = [
    { icon: "cleaning_services", title: "5-Step Deep Cleaning" },
    { icon: "trending_up", title: "Performance Guarantee" },
    { icon: "search_check", title: "Technical Inspection" },
    { icon: "engineering", title: "Expert Personnel" },
];

const BENEFITS_DATA: Benefit[] = [
    {
        icon: "shield",
        title: "Protect Investment",
        description: "Regular maintenance prevents long-term damage and corrosion."
    },
    {
        icon: "bolt",
        title: "Increase Output",
        description: "Clean panels absorb more sunlight, generating more electricity for your home."
    },
    {
        icon: "history",
        title: "Extend Lifespan",
        description: "Proper care ensures your solar system lasts for decades."
    },
];

const IMAGES = {
    hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWfynZ3p6rXGo8FWekYSjZ6fd11sUOK50ShkAE6a0OdvsJEwRPXh5gsyQQS6_Oeq7kxE63wjgeKVZmEgzRLWrZehh5kDKyxUS5-jf_Owhxwwt39Cx6m5gO6Fq7VqbPDh7Cp5zqdj0ReJLHHR8M2gSV8gTXBv9gYRbjA9EOqcM7IqM-SHeUgKofGGq21t-qhZw-xTmeSCRma53TaDZktJ6AlsTAQ3CS1EjJxumVZzydtovP57gniQj2NP7qD3rZHcDK7e2S7MHDFfkr',
    clean: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtA733c6rmuNsX0xIF18AN8DRlTmwhP0IBJgfrfg7bzw0gEr_kkZ-reWUI9bTtLCdwLGuvX2f2gmvlhwlUFSLEvRb1oz2zkqqJLti1udC85278NdYOJQbn6yDQDaqgoYGnvwkIWqor9t2sEyvg9Ww37fEfEZ7JWSu7IerwfqwY-ZX0gj6uEgesTQL8dITqnv99zi0NFq_-U7Z0GlUAxkZO2ZJscdRE42y5BnibbxJTUTIX9pWIKMSl7f2NvYWF1JVGVryug7RkMMXD',
    dirty: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH5vwVj7JN7G08-9wW2g_3Ybq-Dx51JI0wcoPsjC2PyGQtcmkm8iIejO6cAjDcs5gMA-H7YXPq0Ik_3U_JmoxUbP4MdcQdGOPRAjz_S62yYU8w6Cq-6at7J8LWMZ1YjcKcA9UHoMycPJWTTtOAM387j93guZF9wkGq338Y-wIvRxCXiLn6hWUfqgNh6NIvFrxQReHAtm1Zjv9y-vbkt66LM3HPPw2Wuo7bVf6vL-3jmTAqQeJDr6keQ69AM3DDEUEmg2a3UPfhr8nv'
};

const App: React.FC = () => {

    const handleBookClick = () => {
        window.open(GOOGLE_FORM_URL, '_blank');
    };

    return (
        <div className="min-h-screen pb-24 md:pb-0">
            <Navbar onBookClick={handleBookClick} />

            <main className="max-w-5xl mx-auto">
                {/* Hero Section */}
                <header className="@container">
                    <div className="@[480px]:p-4">
                        <div
                            className="relative flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-2xl items-center justify-center p-6 text-center overflow-hidden"
                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(23, 22, 18, 0.95) 100%), url("${IMAGES.hero}")` }}
                        >
                            {/* Subtle animated overlay */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

                            <div className="flex flex-col gap-4 max-w-lg z-10 animate-[fadeInUp_0.8s_ease-out]">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase w-fit mx-auto backdrop-blur-md">
                                    Premier Cleaning Service
                                </span>
                                <h1 className="text-white text-4xl font-black leading-[1.1] tracking-[-0.033em] @[480px]:text-6xl drop-shadow-2xl">
                                    Maximize Your Solar <span className="gold-text-gradient">Efficiency</span>
                                </h1>
                                <p className="text-gray-200 text-base font-medium leading-relaxed @[480px]:text-lg drop-shadow-md max-w-sm mx-auto">
                                    Don't let dust cost you money. Restore up to 25% efficiency with professional cleaning.
                                </p>
                            </div>

                            <div className="z-10 animate-[fadeInUp_1s_ease-out_0.2s_both]">
                                <Button onClick={handleBookClick} iconName="arrow_forward">
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Impact Section */}
                <section className="px-4 py-12 md:py-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                        <div>
                            <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-2">The Impact</h2>
                            <p className="text-gray-400">See the difference professional cleaning makes.</p>
                        </div>
                        <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 w-fit">
                            Up to 25% Energy Loss Restored
                        </span>
                    </div>

                    <ComparisonSlider
                        beforeImage={IMAGES.dirty}
                        afterImage={IMAGES.clean}
                    />
                </section>

                {/* Services Grid */}
                <section id="services" className="px-4 py-8 md:py-16">
                    <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center md:text-left">Premium Services</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {SERVICES_DATA.map((service, index) => (
                            <div
                                key={index}
                                className="bg-surface-dark p-6 rounded-2xl border border-white/5 hover:border-primary/50 hover:bg-surface-dark-highlight/50 transition-all duration-300 group flex flex-col items-center md:items-start gap-4 text-center md:text-left hover:-translate-y-1 shadow-lg"
                            >
                                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors text-primary duration-300">
                                    <Icon name={service.icon} className="text-2xl" />
                                </div>
                                <h3 className="font-bold text-base text-gray-100">{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-us" className="px-4 py-12 md:py-20 my-8 bg-surface-dark/50 border-y border-white/5 md:rounded-3xl md:border md:mx-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">Why Choose Us?</h2>
                        <div className="flex flex-col gap-10">
                            {BENEFITS_DATA.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-6 group">
                                    <div className="size-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shrink-0 shadow-[0_8px_30px_rgba(212,175,53,0.3)] text-black group-hover:scale-110 transition-transform duration-300">
                                        <Icon name={benefit.icon} className="text-3xl" />
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="font-bold text-xl text-white mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section id="team" className="px-4 py-12 md:py-20">
                    <div className="flex flex-col items-center text-center mb-12">
                        <Icon name="groups" className="text-primary text-5xl mb-4 opacity-80" />
                        <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Meet The 4 Friends</h2>
                        <p className="text-gray-400 mt-3 max-w-md">Dedicated partners committed to powering your sustainable future.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {TEAM_DATA.map((member, index) => (
                            <div
                                key={index}
                                className="bg-surface-dark p-5 rounded-xl border border-white/5 flex items-center justify-between hover:border-primary/30 transition-colors group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="size-12 shrink-0 rounded-full bg-surface-dark-highlight flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors">
                                        <Icon name="person" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-white font-medium text-lg leading-tight">{member.name}</h4>
                                        <a href={`tel:${member.phone}`} className="text-gray-400 hover:text-primary text-sm flex items-center gap-1.5 mt-1 transition-colors">
                                            <Icon name="call" className="text-[16px]" />
                                            {member.phone}
                                        </a>
                                    </div>
                                </div>
                                <span className={`text-xs font-bold tracking-widest uppercase self-start mt-1 text-primary`}>
                                    {member.role}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-surface-dark border-t border-white/5 px-6 pt-16 pb-32 md:pb-16 text-center mt-12">
                <div className="max-w-5xl mx-auto flex flex-col items-center">

                    {/* Logo / Brand */}
                    <div className="flex items-center gap-3 mb-6">
                        <img src="/logo.png" alt="4 Friends Solar Cleaning Services" className="h-36 w-auto object-contain" />
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 items-center mb-12">
                        <a className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group" href="mailto:4fsolarcleaningservices@gmail.com">
                            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                                <Icon name="mail" className="text-xl" />
                            </div>
                            4fsolarcleaningservices@gmail.com
                        </a>
                    </div>

                    <p className="text-xs text-gray-700">© 2024 4 Friends Solar Cleaning Services.</p>
                </div>
            </footer>

            {/* Sticky Mobile Footer CTA */}
            <div className="fixed bottom-0 left-0 w-full p-4 bg-background-dark/90 backdrop-blur-lg border-t border-surface-dark-highlight z-40 safe-area-bottom md:hidden animate-[slideUp_0.5s_ease-out]">
                <button
                    onClick={handleBookClick}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-black font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
                >
                    <Icon name="calendar_month" className="text-[20px]" />
                    Book Your Cleaning
                </button>
            </div>
        </div>
    );
};

export default App;