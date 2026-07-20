"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf, Coffee, Award, Compass, ArrowLeft, Heart, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <div className="relative min-h-screen text-stone-100 font-sans bg-stone-950 selection:bg-emerald-700 selection:text-white">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=2000&q=80"
                    alt="Coffee farm backdrop"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-20 pointer-events-none filter grayscale mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-stone-950 via-emerald-950/70 to-stone-950" />
            </div>

            {/* Header Navigation */}
            <header className="relative z-30 flex justify-between items-center px-6 md:px-12 py-5 max-w-7xl mx-auto backdrop-blur-sm bg-stone-950/30 rounded-full my-4 border border-white/5">
                <Link
                    href="/"
                    className="flex items-center space-x-2 text-xs font-semibold uppercase text-stone-300 hover:text-emerald-400 transition-colors tracking-widest group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home</span>
                </Link>

                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-emerald-900/40 rounded-xl border border-emerald-500/20">
                        <Leaf className="h-5 w-5 text-emerald-400 fill-emerald-400/20" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif tracking-widest text-lg font-bold text-amber-100/90 leading-none">AURA</span>
                        <span className="font-sans text-[10px] tracking-[0.35em] text-emerald-400 font-medium mt-1">BOTANICA</span>
                    </div>
                </div>
            </header>

            {/* Main Hero Section */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-24 space-y-24">
                
                {/* Section Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="text-center max-w-3xl mx-auto space-y-6"
                >
                    <motion.div variants={fadeIn}>
                        <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-medium tracking-wider uppercase">
                            <Compass className="w-3.5 h-3.5" />
                            <span>Our Origin & Philosophy</span>
                        </span>
                    </motion.div>

                    <motion.h1 variants={fadeIn} className="text-4xl sm:text-6xl font-serif text-stone-50 tracking-wide leading-tight">
                        CRAFTED AT THE INTERSECTION OF <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-200">NATURE & PRECISION</span>.
                    </motion.h1>

                    <motion.p variants={fadeIn} className="text-stone-400 text-base md:text-lg font-light leading-relaxed">
                        Aura Botanica began with a simple vision: to honor the raw, botanical essence of single-origin coffee beans while refining the brewing process into an exact art form.
                    </motion.p>
                </motion.div>

                {/* Grid Visual & Story */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Visual Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 relative h-[450px] sm:h-[520px] w-full"
                    >
                        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
                                alt="Roasting Process"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                        </div>

                        {/* Floating Stat Badge */}
                        <div className="absolute -bottom-6 -right-2 sm:right-6 bg-stone-900/90 border border-emerald-500/30 backdrop-blur-md p-6 rounded-2xl shadow-2xl max-w-xs space-y-2">
                            <div className="flex items-center space-x-2 text-emerald-400">
                                <Award className="w-5 h-5" />
                                <span className="text-xs font-semibold uppercase tracking-wider">Micro-Batch Roasting</span>
                            </div>
                            <p className="text-stone-300 text-xs font-light leading-relaxed">
                                We roast strictly in 5kg micro-batches to maximize control over nuance, body, and acidity profiles.
                            </p>
                        </div>
                    </motion.div>

                    {/* Story Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-4xl font-serif text-stone-100">
                                Rooted in Trinidad’s Rich Ecosystem
                            </h2>
                            <p className="text-stone-400 text-sm md:text-base font-light leading-relaxed">
                                Inspired by dense tropical canopies and fertile soil, our beans are sourced directly from sustainable high-elevation farms. We believe that great coffee carries the terroir of its native soil—from earthy, woodsy notes to delicate botanical florals.
                            </p>
                            <p className="text-stone-400 text-sm md:text-base font-light leading-relaxed">
                                Every cup served at Aura Botanica adheres to exact extraction ratios. Whether it's a tight 1:1 Ristretto or a silkily textured Flat White, we treat water temperature, grind distribution, and pressure profiling as essential alchemy.
                            </p>
                        </div>

                        {/* Values Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2 text-amber-300">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span className="text-xs font-semibold uppercase tracking-wider">100% Direct Trade</span>
                                </div>
                                <p className="text-stone-400 text-xs font-light">Fairly sourced directly from independent growers.</p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center space-x-2 text-emerald-400">
                                    <Heart className="w-4 h-4" />
                                    <span className="text-xs font-semibold uppercase tracking-wider">Zero Waste Goal</span>
                                </div>
                                <p className="text-stone-400 text-xs font-light">Spent grounds repurposed into botanical compost.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Counter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-stone-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm text-center"
                >
                    <div className="space-y-1">
                        <span className="text-3xl sm:text-5xl font-serif font-bold text-amber-200">100%</span>
                        <p className="text-stone-400 text-xs uppercase tracking-widest">Arabica Organic</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-3xl sm:text-5xl font-serif font-bold text-emerald-400">12</span>
                        <p className="text-stone-400 text-xs uppercase tracking-widest">Precision Brews</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-3xl sm:text-5xl font-serif font-bold text-amber-200">5kg</span>
                        <p className="text-stone-400 text-xs uppercase tracking-widest">Max Batch Size</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-3xl sm:text-5xl font-serif font-bold text-emerald-400">0%</span>
                        <p className="text-stone-400 text-xs uppercase tracking-widest">Artificial Flavors</p>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="relative z-20 border-t border-white/5 bg-stone-950 py-6 px-6 md:px-12">
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