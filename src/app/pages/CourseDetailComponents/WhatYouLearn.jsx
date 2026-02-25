import React from "react";
import { motion } from "motion/react";

export default function WhatYouLearn() {
    const learningPoints = [
        "Gain basic understanding of Kubernetes Fundamentals",
        "Architecture and components of K8s",
        "Deploying and managing containerized apps",
        "Scaling applications horizontally",
        "Service discovery and load balancing",
        "Storage orchestration and management",
        "Self-healing and automated rollouts",
        "Secret and configuration management"
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm hover:shadow-md transition-shadow"
        >
            <h2 className="font-['Public_Sans'] font-extrabold text-2xl text-slate-900 mb-8 border-l-4 border-[#14627a] pl-4">
                What you'll learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {learningPoints.map((point, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex gap-4 items-start group"
                    >
                        <div className="mt-1 bg-teal-50 text-teal-600 p-1 rounded-md group-hover:bg-teal-600 group-hover:text-white transition-colors">
                            <svg className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="font-['Public_Sans'] font-semibold text-[15px] text-slate-600 leading-tight">
                            {point}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
