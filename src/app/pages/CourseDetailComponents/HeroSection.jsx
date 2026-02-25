import React from "react";
import {
    StarPurple500Sharp as StarIcon,
    SystemUpdateAltTwoTone as UpdateIcon,
    PublicTwoTone as PublicIcon,
} from "@mui/icons-material";
import { motion } from "motion/react";

export default function HeroSection() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full bg-gradient-to-r from-[#0183ab] to-[#14627a] pt-12 pb-20 overflow-hidden"
        >
            {/* Decorative background element */}
            <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "50%", opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] pointer-events-none"
            />

            <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                <motion.nav
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center gap-2 text-sm text-white/70 mb-8 font-medium"
                >
                    <span className="hover:text-white cursor-pointer transition-colors">IT & Software</span>
                    <span className="text-white/40">&gt;</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Network & Security</span>
                    <span className="text-white/40">&gt;</span>
                    <span className="text-white font-semibold">Kubernetes</span>
                </motion.nav>

                <div className="max-w-4xl">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
                        className="inline-flex items-center gap-2 bg-amber-400/90 backdrop-blur-sm rounded-full mb-8 px-4 py-1.5 shadow-lg shadow-black/10"
                    >
                        <StarIcon className="!text-xs text-black" />
                        <span className="text-black font-extrabold text-[10px] uppercase tracking-widest">Bestseller</span>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="font-['Public_Sans'] font-extrabold text-4xl md:text-5xl lg:text-7xl text-white mb-8 leading-[1.05] tracking-tight"
                    >
                        Introduction to <br className="hidden md:block" /> Kubernetes
                    </motion.h1>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="font-['Public_Sans'] font-medium text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-2xl"
                    >
                        Master the fundamentals of container orchestration. Learn to deploy, scale, and manage containerized applications with confidence in this comprehensive primer.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-wrap items-center gap-x-10 gap-y-6 text-white/80"
                    >
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                                <span className="text-xs font-bold">SB</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-wider font-bold opacity-60">Created by</span>
                                <span className="text-sm font-bold text-[#f3ca8c] hover:underline cursor-pointer">SpongeBob SquarePants</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5">
                            <UpdateIcon className="!text-lg opacity-70" />
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-wider font-bold opacity-60">Last Updated</span>
                                <span className="text-sm font-bold">12/2023</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5">
                            <PublicIcon className="!text-lg opacity-70" />
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-wider font-bold opacity-60">Language</span>
                                <span className="text-sm font-bold">English</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
