// components/CoffeeShowcase.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COFFEE_FLAVORS, CoffeeFlavor } from '@/constants/flavors';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function CoffeeShowcase() {
    const [activeFlavor, setActiveFlavor] = useState<CoffeeFlavor>(COFFEE_FLAVORS[0]);

    return (
        <main className="relative min-h-screen w-full overflow-hidden text-white bg-zinc-950 flex items-center">
            {/* Ambient Glow Background Effect */}
            <div
                className="absolute inset-0 transition-all duration-1000 opacity-20 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 60% 50%, ${activeFlavor.accentColor} 0%, transparent 50%)`
                }}
            />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 w-full gap-12 relative z-10 py-12">

                {/* Left Section: Content Descriptions */}
                <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFlavor.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            <span className="text-amber-500 font-semibold tracking-widest text-sm uppercase">
                                Premium Craft Brew
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mt-2 text-zinc-100">
                                {activeFlavor.name}
                            </h1>
                            <p className="text-zinc-400 text-lg max-w-md mt-4 leading-relaxed">
                                {activeFlavor.description}
                            </p>
                            <div className="text-3xl font-mono font-medium mt-6 text-amber-400">
                                {activeFlavor.price}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center gap-4 pt-4">
                        <button className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-medium px-6 py-3 rounded-full transition-transform active:scale-95 shadow-lg shadow-amber-950/40">
                            Order Now <ShoppingBag size={18} />
                        </button>
                        <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
                            Ingredients <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Right Section: Rotating Cup Interface */}
                <div className="relative flex flex-col items-center justify-center order-1 lg:order-2 min-h-[350px]">

                    <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFlavor.id}
                                initial={{ rotate: -120, scale: 0.7, opacity: 0 }}
                                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                                exit={{ rotate: 120, scale: 0.7, opacity: 0 }}
                                transition={{ duration: 0.6, type: 'spring', stiffness: 100, damping: 14 }}
                                className="w-full h-full relative"
                            >
                                {/* Visual Cup Structure Component */}
                                <div className={`w-full h-full rounded-full bg-gradient-to-br ${activeFlavor.color} shadow-[0_0_60px_rgba(0,0,0,0.7)] flex items-center justify-center p-8 border border-white/10 relative`}>
                                    <div className="absolute inset-4 rounded-full border border-dashed border-white/10 animate-[spin_40s_linear_infinite]" />
                                    <span className="text-8xl drop-shadow-2xl select-none">{activeFlavor.image}</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Bottom Dock Control Selector */}
                    <div className="mt-12 flex gap-2 bg-zinc-900/80 backdrop-blur-md p-2 rounded-2xl border border-white/5">
                        {COFFEE_FLAVORS.map((flavor) => {
                            const isSelected = flavor.id === activeFlavor.id;
                            return (
                                <button
                                    key={flavor.id}
                                    onClick={() => setActiveFlavor(flavor)}
                                    className={`relative px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors z-10 ${isSelected ? 'text-zinc-950' : 'text-zinc-400 hover:text-zinc-200'
                                        }`}
                                >
                                    {isSelected && (
                                        <motion.div
                                            layoutId="activeTabIndicator"
                                            className="absolute inset-0 bg-amber-500 rounded-xl -z-10"
                                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                        />
                                    )}
                                    {flavor.name.split(' ')[0]}
                                </button>
                            );
                        })}
                    </div>

                </div>
            </div>
        </main>
    );
}