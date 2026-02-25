import React from "react";
import {
    OndemandVideoSharp as VideoIcon,
    NoteAddSharp as NoteIcon,
    SystemUpdateAltTwoTone as UpdateIcon,
    PhoneAndroidTwoTone as MobileIcon,
    ClosedCaptionRounded as ClosedCaptionIcon,
    EmojiEventsTwoTone as CertificateIcon,
} from "@mui/icons-material";
import { motion } from "motion/react";

export default function CourseIncludes() {
    const features = [
        { icon: <VideoIcon />, text: "10 hours on-demand video" },
        { icon: <NoteIcon />, text: "37 coding exercises" },
        { icon: <UpdateIcon />, text: "18 downloadable articles" },
        { icon: <MobileIcon />, text: "Access on mobile and TV" },
        { icon: <ClosedCaptionIcon />, text: "Closed captions" },
        { icon: <CertificateIcon />, text: "Certificate of completion" }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 bg-slate-50/50 rounded-3xl p-8 border border-slate-100"
        >
            <h2 className="font-['Public_Sans'] font-extrabold text-2xl text-slate-900 mb-8">
                This course includes:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex gap-4 items-center group"
                    >
                        <div className="size-10 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-[#14627a] group-hover:scale-110 transition-all">
                            {React.cloneElement(feature.icon, { className: "!text-xl" })}
                        </div>
                        <p className="font-['Public_Sans'] font-bold text-sm text-slate-600 tracking-wide">
                            {feature.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
