import React from "react";
import { motion } from "motion/react";

export default function Requirements() {
    const requirements = [
        "Basic understanding of System Administration",
        "Knowledge of command-line interfaces (Linux preferred)",
        "A laptop with at least 8GB RAM to run a local cluster",
        "Fundamental understanding of networking and YAML"
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 font-['Public_Sans']"
        >
            <h2 className="font-extrabold text-2xl text-slate-900 mb-6">
                Requirements
            </h2>
            <div className="space-y-4">
                {requirements.map((req, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4 items-center group"
                    >
                        <div className="size-2 rounded-full bg-slate-300 group-hover:bg-[#14627a] group-hover:scale-150 transition-all duration-300" />
                        <p className="font-bold text-[15px] text-slate-600">
                            {req}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
