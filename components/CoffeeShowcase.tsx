"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Leaf, Coffee } from 'lucide-react';
import { NAV_LINKS } from '@/constants/flavors';

export default function CoffeeShowcase() {
    // Animation configuration variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const steamAnimation = {
        animate: {
            y: [0, -15, -30],
            x: [0, 3, -3, 0],
            opacity: [0, 0.7, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="relative min-h-screen text-stone-100 overflow-hidden font-sans">

            {/* Dynamic Immersive Background Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2000&q=80')`, // Forest backdrop
                }}
            />
            {/* Dark organic green overlay to balance contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/70 to-stone-950/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/20" />

            {/* --- HEADER --- */}
            <header className="relative z-20 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-2 cursor-pointer"
                >
                    <Leaf className="h-6 w-6 text-emerald-400 fill-emerald-400/20" />
                    <div className="flex flex-col">
                        <span className="font-serif tracking-widest text-lg font-bold text-amber-100/90 leading-none">AURA</span>
                        <span className="font-sans text-xs tracking-[0.3em] text-emerald-300 font-light">BOTANICA</span>
                    </div>
                </motion.div>

                <nav className="hidden md:flex items-center space-x-12">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-stone-300 hover:text-amber-100 transition-colors tracking-wide relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-200 transition-all group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                <div className="flex items-center space-x-6">
                    <button className="relative p-2 text-stone-300 hover:text-amber-100 transition-colors">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
                    </button>
                </div>
            </header>

            {/* --- MAIN HERO BODY --- */}
            <main className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 items-center pt-12 pb-24 gap-12">

                {/* Left Side Content Column */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="lg:col-span-7 flex flex-col space-y-8"
                >
                    <motion.div variants={fadeIn} className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-serif text-amber-50 tracking-wide leading-[1.15]">
                            BREW THE <span className="italic font-light text-emerald-300">ORDINARY</span>,
                            <br />
                            FIND YOUR <span className="underline decoration-amber-400/30 underline-offset-8">AURA</span>.
                        </h1>
                        <p className="text-stone-300 text-lg max-w-lg font-light leading-relaxed">
                            Aura Botanica: Where deep nature meets exceptional, micro-roasted coffee in every single cup.
                        </p>
                    </motion.div>

                    {/* Action CTAs */}
                    <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                        <button className="px-8 py-3 bg-transparent border border-amber-200/50 hover:border-amber-100 rounded-full text-amber-100 hover:bg-amber-100/10 transition-all font-medium text-sm tracking-wider uppercase">
                            Explore Our Blends
                        </button>
                        <button className="px-8 py-3 bg-emerald-800/80 hover:bg-emerald-700 backdrop-blur-sm text-stone-100 rounded-full transition-all font-medium text-sm tracking-wider uppercase shadow-lg shadow-emerald-950/50">
                            Visit The Cafe
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Side Visual Column (Brewers & Cups Showcase) */}
                <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[400px]">

                    {/* Coffee Brewing Glass (Chemex Analogue) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                    >
                        {/* Animated Coffee Steam Elements */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex space-x-2 pointer-events-none opacity-60">
                            <motion.div variants={steamAnimation} animate="animate" className="w-1 h-12 bg-gradient-to-t from-stone-400/40 to-transparent blur-[2px]" />
                            <motion.div variants={steamAnimation} animate="animate" transition={{ delay: 0.6 }} className="w-1.5 h-16 bg-gradient-to-t from-stone-300/30 to-transparent blur-[3px]" />
                            <motion.div variants={steamAnimation} animate="animate" transition={{ delay: 1.2 }} className="w-1 h-10 bg-gradient-to-t from-stone-400/40 to-transparent blur-[2px]" />
                        </div>

                        {/* Using standard reliable imagery for pristine render */}
                        <img
                            src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
                            alt="Artisanal Chemex Drip Brew"
                            className="w-72 h-auto object-contain rounded-2xl border border-white/10 p-2 bg-stone-900/30 backdrop-blur-sm"
                        />
                    </motion.div>

                    {/* Foreground Latte Cup Accent */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: 30 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                        className="absolute -bottom-6 -left-6 z-20 w-44 drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80"
                            alt="Freshly Poured Latte Art"
                            className="rounded-full aspect-square object-cover border-4 border-emerald-950/40"
                        />
                    </motion.div>
                </div>
            </main>

            {/* --- FLOATING BOTTOM CONTROLS --- */}
            <footer className="absolute bottom-0 w-full z-20 border-t border-white/5 bg-gradient-to-t from-stone-950/90 to-transparent py-4 px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-xs tracking-widest text-stone-400 font-light">
                    <div className="flex items-center space-x-2">
                        <Coffee className="h-4 w-4 text-amber-200/60" />
                        <span>ORIGIN: SINGLE ESTATE TRINIDAD</span>
                    </div>
                    <div>© 2026 AURA BOTANICA. ALL RIGHTS RESERVED.</div>
                </div>
            </footer>
        </div>
    );
}