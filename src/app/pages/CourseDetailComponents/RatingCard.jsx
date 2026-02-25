import React from "react";
import {
    StarPurple500Sharp as StarIcon,
    StarHalfSharp as StarHalfIcon,
    OndemandVideoSharp as VideoIcon,
    NoteAddSharp as NoteIcon,
} from "@mui/icons-material";
import { motion } from "motion/react";
import svgPaths from "../../../imports/svg-sdlb4kcssi";

export default function RatingCard() {
    const containerVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.5,
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 -mt-10 relative z-20">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col md:flex-row min-h-[120px] border border-gray-100/50 backdrop-blur-sm"
            >
                {/* Verified Section */}
                <motion.div
                    variants={itemVariants}
                    className="bg-[#14627a] flex flex-col items-center justify-center p-8 md:w-40 shrink-0 relative group"
                >
                    <div className="size-8 mb-3 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="size-5" fill="none" viewBox="0 0 22 22">
                            <path d={svgPaths.p13300500} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p className="font-['Public_Sans'] text-xs text-white font-extrabold uppercase tracking-wider">Verified</p>
                    <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-white/10 hidden md:block" />
                </motion.div>

                {/* Info Grid */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                    {/* Ratings Section */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-6 hover:bg-gray-50/50 transition-colors">
                        <div className="flex items-baseline gap-1 mb-1">
                            <span className="font-['Public_Sans'] font-extrabold text-3xl text-slate-900 leading-none">4.5</span>
                            <span className="text-gray-400 text-sm font-bold">/ 5</span>
                        </div>
                        <div className="flex gap-0.5 mb-2">
                            {[...Array(4)].map((_, i) => (
                                <StarIcon key={i} className="text-amber-400 !text-sm" />
                            ))}
                            <StarHalfIcon className="text-amber-400 !text-sm" />
                        </div>
                        <p className="font-['Public_Sans'] text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">10,000+ ratings</p>
                    </motion.div>

                    {/* Learners Section */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-6 hover:bg-gray-50/50 transition-colors">
                        <div className="size-8 mb-2 text-slate-800">
                            <svg className="block size-full" fill="none" viewBox="0 0 31 26">
                                <path d={svgPaths.paaca4c0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </div>
                        <p className="font-['Public_Sans'] font-extrabold text-2xl text-slate-900 leading-none mb-1">400,000</p>
                        <p className="font-['Public_Sans'] text-[10px] text-gray-500 font-extrabold uppercase tracking-widest leading-none">Students enrolled</p>
                    </motion.div>

                    {/* Duration Section */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-6 hover:bg-gray-50/50 transition-colors text-center">
                        <VideoIcon className="text-slate-400 !text-2xl mb-2" />
                        <p className="font-['Public_Sans'] font-extrabold text-xl text-slate-900 leading-none mb-1">6.5 Hours</p>
                        <p className="font-['Public_Sans'] text-[10px] text-gray-500 font-extrabold uppercase tracking-widest leading-none">On-demand video</p>
                    </motion.div>

                    {/* Resources Section */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-6 hover:bg-gray-50/50 transition-colors text-center">
                        <NoteIcon className="text-slate-400 !text-2xl mb-2" />
                        <p className="font-['Public_Sans'] font-extrabold text-xl text-slate-900 leading-none mb-1">55 Resources</p>
                        <p className="font-['Public_Sans'] text-[10px] text-gray-500 font-extrabold uppercase tracking-widest leading-none">Coding exercises</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
