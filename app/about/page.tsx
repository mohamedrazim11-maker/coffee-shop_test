import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'framer-motion/m';
import { Leaf, Coffee, ArrowLeft, Award, Sparkles, Compass, Sprout } from 'lucide-react';
import { NAV_LINKS } from '@/constants/flavors';

export const metadata: Metadata = {
    title: 'Our Story',
    description: 'Learn about Aura Botanica, our single-estate Trinidad coffee origin, precise extraction ratios, and our sustainable micro-roastery philosophy.',
    openGraph: {
        title: 'Our Story | Aura Botanica',
        description: 'Where deep wild nature meets exceptional, micro-roasted coffee.',
        images: ['https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&h=630&q=80'],
    },
};

export default function AboutPage() {
    const stats = [
        { label: 'Single Estate Elevation', value: '1,200m', icon: Compass },
        { label: 'Extraction Precision', value: '1:1.5–1:2', icon: Coffee },
        { label: 'Botanical Varieties', value: '100% Arabica', icon: Sprout },
        { label: 'Micro-Batch Size', value: '5 kg', icon: Sparkles },
    ];

    const values = [
        {
            title: 'Shade-Grown Heritage',
            description: 'Our beans are cultivated under dense tropical forest canopies in Trinidad, preserving local biodiversity and allowing the cherries to mature slowly for complex flavor profiles.',
            icon: Leaf,
        },
        {
            title: 'Precision Micro-Roasting',
            description: 'Every batch is roasted in small 5kg quantities, adjusting air flow and temperature profiles to bring out natural notes of dark cocoa, nutmeg, and wild berries.',
            icon: Coffee,
        },
        {
            title: 'Sustainable Stewardship',
            description: 'We prioritize ecological balance through zero-waste processing, organic compost recycling, and direct-trade partnerships with estate stewards.',
            icon: Award,
        },
    ];

    return (
        <div className="relative min-h-screen text-stone-100 font-sans bg-stone-950 selection:bg-emerald-700 selection:text-white">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=2000&q=80"
                    alt="Coffee Plantation Canopy"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-stone-950 via-emerald-950/70 to-stone-950 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-950/80 to-stone-950" />
            </div>

            {/* --- HEADER --- */}
            <header className="relative z-30 flex justify-between items-center px-6 md:px-12 py-5 max-w-7xl mx-auto backdrop-blur-sm bg-stone-950/20 rounded-full my-4 border border-white/5">
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="p-2 bg-emerald-900/40 rounded-xl border border-emerald-500/20 group-hover:border-emerald-400 transition-colors">
                        <Leaf className="h-5 w-5 text-emerald-400 fill-emerald-400/20 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif tracking-widest text-lg font-bold text-amber-100/90 leading-none">AURA</span>
                        <span className="font-sans text-[10px] tracking-[0.35em] text-emerald-400 font-medium mt-1">BOTANICA</span>
                    </div>
                </Link>

                <nav className="flex items-center space-x-8 md:space-x-10">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-xs font-semibold uppercase text-stone-300 hover:text-amber-200 transition-colors tracking-widest relative group py-2"
                        >
                            {link.label}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-500 to-amber-300 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>
            </header>

            {/* --- HERO / INTRODUCTION --- */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Home</span>
                    </Link>
                </div>

                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
                    <div className="lg:col-span-7 space-y-6">
                        <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-medium tracking-wider uppercase">
                            <Leaf className="w-3.5 h-3.5" />
                            <span>Our Roots & Ethos</span>
                        </span>
                        <h1 className="text-4xl sm:text-6xl font-serif text-stone-50 tracking-wide leading-tight">
                            CRAFTED AT THE INTERSECTION OF <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">NATURE</span> & <span className="text-amber-200">PRECISION</span>.
                        </h1>
                        <p className="text-stone-300 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                            Aura Botanica was founded on a simple realization: extraordinary coffee requires absolute reverence for its ecological source. Rooted in the high-elevation canopies of single-estate Trinidad terroir, we bridge organic botany with uncompromising extraction standards.
                        </p>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="absolute w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -z-10" />
                        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-white/10 p-3 bg-stone-900/40 backdrop-blur-md">
                            <Image
                                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                                alt="Barista preparing pour over coffee"
                                fill
                                sizes="(max-width: 1024px) 100vw, 500px"
                                className="object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </section>

                {/* --- STATS SECTION --- */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.label}
                                className="bg-stone-900/40 border border-white/5 p-6 rounded-2xl backdrop-blur-sm text-center flex flex-col items-center justify-center space-y-2 hover:border-emerald-500/30 transition-colors"
                            >
                                <Icon className="w-5 h-5 text-emerald-400 mb-1" />
                                <span className="text-2xl md:text-3xl font-serif font-bold text-amber-100">{stat.value}</span>
                                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">{stat.label}</span>
                            </div>
                        );
                    })}
                </section>

                {/* --- CORE PHILOSOPHY / VALUES --- */}
                <section className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-amber-300/80 text-xs tracking-[0.3em] font-semibold uppercase">The Principles</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-stone-100">Botanical Craftsmanship</h2>
                        <p className="text-stone-400 text-sm font-light">How we preserve single-origin integrity from soil to cup.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={value.title}
                                    className="bg-stone-900/50 border border-white/5 hover:border-emerald-500/40 p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="p-3 bg-emerald-950/60 rounded-xl border border-emerald-500/20 text-emerald-400 w-fit mb-6">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-serif font-semibold text-stone-100 mb-3">{value.title}</h3>
                                    <p className="text-stone-400 text-xs font-light leading-relaxed">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>

            {/* --- FOOTER --- */}
            <footer className="relative z-20 border-t border-white/5 bg-stone-950 py-6 px-6 md:px-12 mt-20">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center text-[10px] tracking-[0.2em] text-stone-500 font-medium">
                    <div className="flex items-center space-x-2 text-stone-400">
                        <Coffee className="h-3.5 w-3.5 text-amber-400/70" />
                        <span>ORIGIN: SINGLE ESTATE TRINIDAD</span>
                    </div>
                    <div>© 2026 AURA BOTANICA. ALL RIGHTS RESERVED.</div>
                </div>
            </footer>
        </div>
    );
}