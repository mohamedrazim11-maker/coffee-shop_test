"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, Leaf, Coffee, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/constants/flavors';

// Fallback navigation items if constants/flavors.ts fails to import cleanly
const fallbackLinks = [
    { label: "Our Beans", href: "#beans" },
    { label: "The Cafe", href: "#cafe" },
    { label: "Our Story", href: "#story" }
];

export default function CoffeeShowcase() {
    const linksToRender = NAV_LINKS || fallbackLinks;

    // Animation configuration variants
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
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
            y: [0, -20, -40],
            x: [0, 4, -4, 0],
            opacity: [0, 0.8, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="relative min-h-screen text-stone-100 overflow-x-hidden font-sans bg-stone-950 selection:bg-emerald-700 selection:text-white">
            
            {/* Dynamic Immersive Background Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2000&q=80"
                    alt="Forest backdrop"
                    fill
                    priority
                    className="object-cover transition-transform duration-1000 scale-105 select-none opacity-40 pointer-events-none"
                />
                {/* Dark organic green overlay to balance contrast */}
                <div className="absolute inset-0 bg-gradient-to-tr from-stone-950 via-emerald-950/80 to-stone-950 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-950/40 to-stone-950" />
            </div>

            {/* --- HEADER --- */}
            <header className="relative z-30 flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto backdrop-blur-sm bg-stone-950/10 rounded-full my-4 border border-white/5">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-3 cursor-pointer group"
                >
                    <div className="p-2 bg-emerald-900/40 rounded-xl border border-emerald-500/20 group-hover:border-emerald-400 transition-colors">
                        <Leaf className="h-5 w-5 text-emerald-400 fill-emerald-400/20 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif tracking-widest text-lg font-bold text-amber-100/90 leading-none">AURA</span>
                        <span className="font-sans text-[10px] tracking-[0.35em] text-emerald-400 font-medium mt-1">BOTANICA</span>
                    </div>
                </motion.div>

                <nav className="hidden md:flex items-center space-x-10">
                    {linksToRender.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-xs font-semibold uppercase text-stone-300 hover:text-amber-200 transition-colors tracking-widest relative group py-2"
                        >
                            {link.label}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-500 to-amber-300 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    <button className="relative p-2.5 text-stone-300 hover:text-amber-100 bg-stone-900/60 hover:bg-stone-900 rounded-full border border-white/5 transition-all group">
                        <ShoppingCart className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        <span className="absolute -top-1 -right-1 bg-amber-600 text-white font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-stone-950">0</span>
                    </button>
                </div>
            </header>

            {/* --- MAIN HERO BODY --- */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 items-center pt-8 pb-32 gap-16">

                {/* Left Side Content Column */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left items-center lg:items-start"
                >
                    <motion.div variants={fadeIn} className="space-y-6">
                        <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-medium tracking-wider uppercase">
                            <Coffee className="w-3.5 h-3.5" />
                            <span>Artisanal Micro-Roastery</span>
                        </span>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-stone-50 tracking-wide leading-[1.15] max-w-2xl">
                            BREW THE <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">ORDINARY</span>,
                            <br />
                            FIND YOUR <span className="relative inline-block">
                                AURA
                                <span className="absolute left-0 bottom-2 w-full h-[6px] bg-amber-400/20 -z-10 rounded" />
                            </span>.
                        </h1>
                        <p className="text-stone-400 text-base md:text-lg max-w-md font-light leading-relaxed mx-auto lg:mx-0">
                            Aura Botanica: Where deep wild nature meets exceptional, sustainably sourced, micro-roasted coffee in every Single Cup.
                        </p>
                    </motion.div>

                    {/* Action CTAs */}
                    <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button className="group flex items-center justify-center space-x-2 px-8 py-3.5 bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 text-stone-50 rounded-full transition-all font-semibold text-xs tracking-widest uppercase shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/30 ring-1 ring-emerald-500/30">
                            <span>Explore Our Blends</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-3.5 bg-stone-900/80 hover:bg-stone-800 border border-stone-800 hover:border-amber-200/40 text-amber-100/90 rounded-full transition-all font-semibold text-xs tracking-widest uppercase backdrop-blur-sm">
                            Visit The Cafe
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Side Visual Column (Brewers & Cups Showcase) */}
                <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[420px] w-full mt-12 lg:mt-0">
                    
                    {/* Radial Glow backing behind illustration */}
                    <div className="absolute w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

                    {/* Coffee Brewing Glass (Chemex Analogue) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative z-10 w-64 h-80 sm:w-72 sm:h-96 filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
                    >
                        {/* Animated Coffee Steam Elements */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex space-x-3 pointer-events-none opacity-40 z-20">
                            <motion.div variants={steamAnimation} animate="animate" className="w-[1.5px] h-12 bg-gradient-to-t from-amber-200 to-transparent blur-[1px]" />
                            <motion.div variants={steamAnimation} animate="animate" transition={{ delay: 0.8 }} className="w-[2px] h-16 bg-gradient-to-t from-stone-200 to-transparent blur-[2px]" />
                            <motion.div variants={steamAnimation} animate="animate" transition={{ delay: 1.6 }} className="w-[1.5px] h-10 bg-gradient-to-t from-amber-300 to-transparent blur-[1px]" />
                        </div>

                        <div className="relative w-full h-full rounded-3xl border border-white/10 p-3 bg-stone-900/40 backdrop-blur-md overflow-hidden group">
                            <Image
                                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
                                alt="Artisanal Chemex Drip Brew"
                                fill
                                className="object-cover rounded-2xl p-1 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* Foreground Latte Cup Accent */}
                    <motion.div
                        initial={{ opacity: 0, y: 60, x: 40 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                        className="absolute -bottom-8 left-4 sm:-left-4 z-20 w-36 h-36 sm:w-44 sm:h-44 drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-300 cursor-pointer"
                    >
                        {/* Soft rotating ring border around the cup item */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500 via-transparent to-amber-400 animate-[spin_8s_linear_infinite] opacity-60 p-[3px]" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-stone-950">
                            <Image
                                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80"
                                alt="Freshly Poured Latte Art"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* --- FLOATING BOTTOM CONTROLS --- */}
            <footer className="absolute bottom-0 w-full z-20 border-t border-white/5 bg-gradient-to-t from-stone-950 via-stone-950/90 to-transparent py-5 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center text-[10px] tracking-[0.2em] text-stone-500 font-medium">
                    <div className="flex items-center space-x-2 text-stone-400">
                        <Coffee className="h-3.5 w-3.5 text-amber-400/70" />
                        <span>ORIGIN: SINGLE ESTATE TRINIDAD</span>
                    </div>
                    <div className="hover:text-stone-400 transition-colors">© 2026 AURA BOTANICA. ALL RIGHTS RESERVED.</div>
                </div>
            </footer>
        
    );
}