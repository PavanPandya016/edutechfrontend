import React from "react";
import { motion } from "motion/react";

export default function Description() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 font-['Public_Sans'] bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
        >
            <h2 className="font-extrabold text-2xl text-slate-900 mb-6">
                Description
            </h2>
            <div className="text-base text-slate-600 space-y-6 leading-relaxed">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="font-medium"
                >
                    <a className="cursor-pointer text-[#14627a] font-extrabold hover:underline" href="https://www.google.com/search?q=Kubernetes" target="_blank" rel="noopener noreferrer">
                        Kubernetes
                    </a>
                    {` (K8s) is an open-source platform that automates the deployment, scaling, and management of containerized applications. It has become the de-facto standard for container orchestration in the modern cloud-native world.`}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="font-medium"
                >
                    Originally developed by{' '}
                    <a className="cursor-pointer text-[#14627a] font-extrabold hover:underline" href="https://cloud.google.com/learn/what-is-kubernetes" target="_blank" rel="noopener noreferrer">
                        Google
                    </a>
                    {` and maintained by the Cloud Native Computing Foundation, it acts as an orchestration engine for managing complex, distributed microservices across clusters of virtual or physical machines.`}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="pt-4"
                >
                    <button className="text-[#14627a] font-black text-xs uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
                        Read more about the curriculum
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
}
