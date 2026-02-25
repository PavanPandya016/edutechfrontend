import React from "react";
import { motion } from "motion/react";

export default function ExploreTopics() {
    const topics = ['Kubernetes', 'Cloud Native', 'Containers', 'Microservices', 'DevOps'];
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
        >
            <h2 className="font-['Public_Sans'] font-extrabold text-xl text-slate-900 mb-6 uppercase tracking-wider">
                Explore related topics
            </h2>
            <div className="flex flex-wrap gap-3">
                {topics.map((topic, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-50 border border-slate-100 rounded-xl px-6 py-2.5 cursor-pointer hover:bg-[#14627a] hover:text-white hover:border-[#14627a] hover:shadow-lg transition-all duration-300"
                    >
                        <p className="font-['Public_Sans'] font-bold text-sm">
                            {topic}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
