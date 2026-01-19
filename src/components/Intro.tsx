"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Intro() {
    const { t } = useLanguage();

    return (
        <section id="intro" className="py-24 px-6 bg-[#FAF8F2] relative overflow-hidden">
            {/* Background Texture/Pattern could go here */}

            {/* Refined Grid Layout */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                {/* Left Column: Text Content (Spans 7 columns) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:col-span-7"
                >
                    <div className="inline-block border-b border-[#9a7d45] pb-2 mb-6">
                        <span className="text-[#1a3c34] font-serif tracking-[0.2em] uppercase text-xs font-bold">
                            {t('intro.tag')}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a3c34] mb-8 leading-none">
                        {t('intro.title1')} <br />
                        <span className="italic text-[#9a7d45] text-3xl md:text-4xl lg:text-5xl relative -top-2">{t('intro.title2')}</span>
                    </h2>

                    <p className="text-lg text-[#1a3c34]/80 font-serif leading-relaxed mb-10 max-w-xl mx-auto">
                        {t('intro.desc')}
                    </p>

                    {/* Refined Stats Grid */}
                    <div className="grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8 border-t border-[#1a3c34]/10 pt-8 max-w-md mx-auto">
                        {[
                            { label: t('intro.stat.rooms'), value: "9" },
                            { label: t('intro.stat.capacity'), value: t('intro.stat.people') },
                            { label: t('intro.stat.baths'), value: "9" },
                            { label: t('intro.stat.location'), value: "Llanogrande" }
                        ].map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center lg:items-center text-center">
                                <span className="text-3xl md:text-4xl font-serif text-[#1a3c34]">{stat.value}</span>
                                <span className="text-[10px] uppercase tracking-widest text-[#1a3c34]/60 font-sans mt-1">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column: Vertical Video (Spans 5 columns) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:col-span-5 flex justify-center lg:justify-end"
                >
                    {/* Vertical Video Container - Max width constrained */}
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white max-w-sm w-full aspect-[9/16] lg:-translate-x-[15%]">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls={false}
                        >
                            <source src="/videos/intro_video2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {/* Inner shadow overlay */}
                        <div className="absolute inset-0 ring-1 ring-black/5 rounded-[2rem] pointer-events-none" />
                    </div>

                    {/* Decorative elements adjusted for vertical layout */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#9a7d45]/20 rounded-full blur-2xl -z-10" />
                    <div className="absolute top-10 -left-10 w-24 h-24 bg-[#1a3c34]/10 rounded-full blur-2xl -z-10" />
                </motion.div>

            </div>
        </section>
    );
}
