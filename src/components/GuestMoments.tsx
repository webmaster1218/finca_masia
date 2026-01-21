"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram, Heart } from "lucide-react";

const momentImages = [
    { url: "/imagenes/huespedes/huespedes_en_zonas_verdes.webp", titleKey: "moments.cat.relaxation" },
    { url: "/imagenes/huespedes/huespedes_comiendo_1.webp", titleKey: "moments.cat.gastronomy" },
    { url: "/imagenes/huespedes/huespedes_en_la_fachada.webp", titleKey: "moments.cat.architecture" },
    { url: "/imagenes/huespedes/huespedes_jugando_juegos_de_mesa.webp", titleKey: "moments.cat.fun" },
    { url: "/imagenes/huespedes/huespedes_tomado_vino.webp", titleKey: "moments.cat.toast" },
    { url: "/imagenes/huespedes/huespedes_en_kisko.webp", titleKey: "moments.cat.events" },
];

export function GuestMoments() {
    const { t } = useLanguage();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setScrollProgress(progress);
        }
    };

    return (
        <section className="py-24 px-6 bg-[#1a3c34] relative overflow-hidden">
            {/* Elegant background accents for consistency with Testimonials */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#9a7d45]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto mb-16 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <span className="text-[#9a7d45] font-serif tracking-[0.4em] text-xs mb-6 uppercase block">
                            {t('moments.tag')}
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                            {t('moments.title.part1')}
                            <span className="italic font-light">{t('moments.title.part2')}</span>
                            {t('moments.title.part3')} <br className="hidden md:block" /> {t('moments.title.part4')}
                        </h2>
                    </div>
                    <p className="text-white/70 font-serif text-lg max-w-sm leading-relaxed">
                        {t('moments.desc')}
                    </p>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="relative z-10">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-6 overflow-x-auto pb-12 px-6 snap-x custom-scrollbar"
                >
                    {momentImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="min-w-[300px] md:min-w-[420px] aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-2xl snap-center group border border-white/10"
                        >
                            <Image
                                src={img.url}
                                alt={t(img.titleKey)}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Instagram-like Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                <div className="flex items-center gap-3 text-white mb-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#9a7d45] to-[#c5a15a] flex items-center justify-center shadow-lg">
                                        <Instagram className="w-5 h-5" />
                                    </div>
                                    <span className="font-serif italic text-xl tracking-wide">{t(img.titleKey)}</span>
                                </div>
                            </div>

                            {/* Simple Instagram Icon on Top */}
                            <div className="absolute top-6 right-6 p-2.5 bg-black/20 backdrop-blur-md rounded-full text-white/80 opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                                <Instagram className="w-5 h-5" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* VISIBLE SCROLL INDICATOR (Only for mobile - persistent cue) */}
                <div className="max-w-7xl mx-auto px-6 mt-8 md:hidden">
                    <div className="w-full h-[3px] bg-white/10 rounded-full relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-[#9a7d45] rounded-full"
                            style={{ width: `${scrollProgress > 0 ? scrollProgress : 15}%`, minWidth: '15%' }}
                            animate={{ width: `${Math.max(15, scrollProgress)}%` }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        />
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-white/30 font-serif uppercase tracking-widest">
                        <span>{t('moments.swipe')}</span>
                        <span>{t('moments.explore')}</span>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center relative z-10">
                <a
                    href="https://www.instagram.com/fincalamasiaoficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 text-white font-serif border-b border-[#9a7d45]/50 pb-2 hover:text-[#9a7d45] hover:border-[#9a7d45] transition-all group"
                >
                    <span className="tracking-wide text-lg">{t('moments.follow')}</span>
                    <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
                </a>
            </div>
        </section>
    );
}
