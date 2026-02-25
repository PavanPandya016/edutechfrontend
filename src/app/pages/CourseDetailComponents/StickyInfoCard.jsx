import React from "react";
import {
    Report as ReportIcon,
    PublicTwoTone as PublicIcon,
    AccessAlarms as AccessAlarmsIcon,
    PhoneAndroidTwoTone as MobileIcon,
    EmojiEventsTwoTone as CertificateIcon,
} from "@mui/icons-material";
import { motion } from "motion/react";
import svgPaths from "../../../imports/svg-sdlb4kcssi";

export default function StickyInfoCard() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", damping: 20 }}
            className="bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-8 border border-gray-100 relative overflow-hidden group"
        >
            {/* Decorative top bar */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0183ab] to-[#14627a] origin-left"
            />

            <div className="flex flex-col items-center mb-8">
                <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="bg-slate-50 p-6 rounded-2xl mb-4 group-hover:bg-slate-100 transition-colors duration-300"
                >
                    <svg className="w-16 h-16 text-[#14627a]" fill="currentColor" viewBox="0 0 24 24">
                        <path d={svgPaths.p16506300} />
                    </svg>
                </motion.div>
                <h2 className="text-2xl font-black text-slate-800 tracking-tighter uppercase italic">Kubernetes</h2>
                <p className="text-[10px] text-[#14627a] font-black uppercase tracking-[0.2em] mt-1">Cloud Orchestration</p>
            </div>

            <motion.div
                whileHover={{ y: -5 }}
                className="bg-slate-900 rounded-2xl p-6 flex items-center justify-between mb-8 shadow-xl shadow-slate-200"
            >
                <div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-white">$20</span>
                        <span className="text-white/40 text-[10px] uppercase font-bold decoration-red-500/50 line-through">$100</span>
                    </div>
                    <p className="text-[10px] text-white/50 font-bold uppercase mt-1 tracking-wider">Early bird price</p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white hover:bg-[#f3ca8c] text-slate-900 font-extrabold text-[11px] uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-lg shadow-white/5"
                >
                    Enroll Now
                </motion.button>
            </motion.div>

            <div className="space-y-6">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-gray-50 pb-2">Includes</p>

                <div className="grid gap-5">
                    {[
                        { icon: <AccessAlarmsIcon />, title: "Full Lifetime Access", sub: "Learn at your own pace" },
                        { icon: <PublicIcon />, title: "One-on-One Mentorship", sub: "Weekly 30-min sessions" },
                        { icon: <CertificateIcon />, title: "Course Certification", sub: "Recognized by industry leaders" },
                        { icon: <MobileIcon />, title: "Mobile & TV Access", sub: "Learn anyware, anytime" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            className="flex items-center gap-4 group/item"
                        >
                            <div className="size-5 shrink-0 text-slate-300 group-hover/item:text-[#14627a] transition-colors">
                                {React.cloneElement(item.icon, { className: "!text-xl" })}
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">{item.title}</p>
                                <p className="text-[9px] text-slate-400 font-medium">{item.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-8 pt-6 border-t border-dashed border-gray-100 flex items-center justify-center gap-2"
            >
                <ReportIcon className="text-amber-400 !text-sm" />
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">30-day money-back guarantee</p>
            </motion.div>
        </motion.div>
    );
}
