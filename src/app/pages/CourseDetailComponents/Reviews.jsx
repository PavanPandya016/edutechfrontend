import React from "react";
import {
    StarPurple500Sharp as StarIcon,
    StarHalfSharp as StarHalfIcon,
} from "@mui/icons-material";
import { motion } from "motion/react";

function ReviewCard({ name, date, review, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-white border border-slate-100 rounded-3xl shadow-sm p-8 hover:shadow-xl transition-all duration-300 group"
        >
            <div className="flex gap-4 items-center mb-6">
                <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="bg-gradient-to-br from-[#0183ab] to-[#14627a] rounded-2xl size-14 flex items-center justify-center shrink-0 shadow-lg text-white font-black text-xl"
                >
                    {name.charAt(0)}
                </motion.div>
                <div className="flex-1">
                    <p className="font-black text-slate-900 text-lg group-hover:text-[#14627a] transition-colors">{name}</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{date}</p>
                </div>
            </div>

            <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="text-amber-400 !text-sm" />
                ))}
            </div>

            <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-slate-100 font-serif pointer-events-none">“</span>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium italic relative z-10">{review}</p>
            </div>
        </motion.div>
    );
}

export default function Reviews() {
    const reviewsData = [
        { name: "Mitin Sharma", date: "Dec 26, 2023", review: "Life-changing course. The Kubernetes concepts finally click for me after months of trying." },
        { name: "Sarah Jenkins", date: "Jan 12, 2024", review: "The instructor's energy is amazing. Highly recommended for anyone starting their cloud journey." },
        { name: "Alex Rivera", date: "Feb 05, 2024", review: "Concise, professional, and practical. The coding exercises are the best part of the course." },
        { name: "David Chen", date: "Dec 15, 2023", review: "I never thought learning orchestration could be this fun. SpongeBob is a legend!" }
    ];

    return (
        <div className="mb-20 font-['Public_Sans']">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10"
            >
                <div className="flex items-center gap-5">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="bg-amber-400 px-4 py-2 rounded-2xl shadow-lg shadow-amber-200"
                    >
                        <span className="text-3xl font-black text-slate-900">4.5</span>
                    </motion.div>
                    <div>
                        <div className="flex gap-0.5 mb-1">
                            {[...Array(4)].map((_, i) => <StarIcon key={i} className="text-amber-400 !text-lg" />)}
                            <StarHalfIcon className="text-amber-400 !text-lg" />
                        </div>
                        <p className="text-sm font-black text-slate-400 uppercase tracking-widest">3.8K verified reviews</p>
                    </div>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-slate-900 text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-2xl hover:bg-[#14627a] transition-colors shadow-xl"
                >
                    Write a review
                </motion.button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reviewsData.map((review, index) => (
                    <ReviewCard key={index} {...review} index={index} />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
            >
                <button className="text-[#14627a] font-black text-xs uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
                    Show more reviews (3,842)
                </button>
            </motion.div>
        </div>
    );
}
