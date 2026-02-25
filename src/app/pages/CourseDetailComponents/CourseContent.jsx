import React from "react";
import {
    ArrowRightSharp as ArrowRightIcon,
    EmojiEventsTwoTone as CertificateIcon,
    OndemandVideoSharp as VideoIcon,
    AccessAlarms as AccessAlarmsIcon,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "motion/react";

export default function CourseContent() {
    const sections = [
        { title: "Introduction to Orchestration", lectures: 6, duration: "45 min", expanded: true },
        { title: "Kubernetes Architecture & Components", lectures: 12, duration: "1h 20min" },
        { title: "Working with Pods and Deployments", lectures: 15, duration: "2h 15min" },
        { title: "Networking and Service Discovery", lectures: 8, duration: "55 min" },
        { title: "Storage and State Management", lectures: 10, duration: "1h 10min" },
        { title: "The Final Certification Exam", lectures: "50 Qs", duration: "1h", icon: <CertificateIcon /> }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 font-['Public_Sans']"
        >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                    <h2 className="font-extrabold text-2xl text-slate-900 mb-2">
                        Course content
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 font-bold uppercase tracking-widest">
                        <span>11 sections</span>
                        <span className="opacity-30">•</span>
                        <span>64 lectures</span>
                        <span className="opacity-30">•</span>
                        <span>6h 35m total length</span>
                    </div>
                </div>
                <button className="text-[#14627a] font-black text-xs uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
                    Expand all sections
                </button>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className={`group bg-white hover:bg-slate-50 transition-all cursor-pointer ${index !== sections.length - 1 ? 'border-b border-slate-100' : ''}`}
                    >
                        <div className="flex items-center gap-4 p-5 md:p-6">
                            <div className={`transition-transform duration-300 ${section.expanded ? 'rotate-90' : 'group-hover:translate-x-1'}`}>
                                <ArrowRightIcon className="text-slate-300 group-hover:text-[#14627a] !text-xl" />
                            </div>

                            <div className="flex-1">
                                <p className={`font-bold text-[15px] md:text-base ${section.expanded ? 'text-[#14627a]' : 'text-slate-800'}`}>
                                    {section.title}
                                </p>
                            </div>

                            <div className="flex gap-4 items-center text-[11px] font-black text-slate-400 uppercase tracking-widest">
                                <div className="hidden sm:flex items-center gap-1.5">
                                    {section.icon || <VideoIcon className="!text-sm opacity-50" />}
                                    <span>{section.lectures} {index < 5 ? 'Lectures' : ''}</span>
                                </div>
                                <span className="hidden sm:block opacity-20">|</span>
                                <div className="flex items-center gap-1.5">
                                    <AccessAlarmsIcon className="!text-sm opacity-50" />
                                    <span>{section.duration}</span>
                                </div>
                            </div>
                        </div>

                        <AnimatePresence>
                            {section.expanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-14 pb-6 space-y-4 overflow-hidden"
                                >
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="flex items-center justify-between group/sub">
                                            <div className="flex items-center gap-3">
                                                <VideoIcon className="!text-xs text-slate-300 group-hover/sub:text-[#14627a]" />
                                                <span className="text-sm font-medium text-slate-600 group-hover/sub:text-slate-900 transition-colors">Lecture {item}: Deep Dive into Components</span>
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-400">12:45</span>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
