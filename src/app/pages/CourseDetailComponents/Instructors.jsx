import React from "react";
import {
    StarPurple500Sharp as StarIcon,
    EmojiEventsTwoTone as CertificateIcon,
    PhoneAndroidTwoTone as MobileIcon,
    OndemandVideoSharp as VideoIcon,
} from "@mui/icons-material";
import { motion } from "motion/react";

const INSTRUCTOR_IMAGE = "https://images.unsplash.com/photo-1660463531472-a86bb8f9f48e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbnN0cnVjdG9yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzcxNjQ3MjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function Instructors() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 font-['Public_Sans']"
        >
            <h2 className="font-extrabold text-2xl text-slate-900 mb-8">
                Your Instructor
            </h2>

            <div className="flex flex-col md:flex-row gap-10 items-start mb-8">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#0183ab] to-[#14627a] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative size-40 shrink-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                        <img alt="Instructor" className="w-full h-full object-cover transition-transform duration-500" src={INSTRUCTOR_IMAGE} />
                    </div>
                </motion.div>

                <div className="flex-1">
                    <motion.h3
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl font-black text-[#14627a] mb-2 hover:underline cursor-pointer"
                    >
                        SpongeBob SquarePants
                    </motion.h3>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 italic">Head of Fry Cooking & Cloud Native Enthusiast</p>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                        {[
                            { icon: <StarIcon />, label: "4.9 Instructor Rating" },
                            { icon: <CertificateIcon />, label: "430K+ Reviews" },
                            { icon: <MobileIcon />, label: "1.3M+ Students" },
                            { icon: <VideoIcon />, label: "25 Premium Courses" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="flex items-center gap-3 text-[14px] text-slate-600 font-bold"
                            >
                                <div className="text-amber-400">{stat.icon}</div>
                                <p>{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-base text-slate-600 leading-relaxed font-medium space-y-4 bg-slate-50 p-8 rounded-3xl border border-slate-100"
            >
                <p>SpongeBob SquarePants is an optimistic yellow sea sponge who lives in a pineapple and has mastered the art of cloud orchestration alongside flipping patties.</p>
                <p>Residing in Bikini Bottom, he brings his famous infectious high-pitched laugh and unmatched dedication to the world of Kubernetes, helping millions of students manage their containerized workloads with ease.</p>
            </motion.div>
        </motion.div>
    );
}
