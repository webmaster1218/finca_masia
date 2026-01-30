"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function ServiceHighlight() {
    const { t } = useLanguage();

    return (
        <section className="py-20 px-6 bg-[#1a3c34] text-[#FAF8F2]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#9a7d45] tracking-widest uppercase text-sm mb-4 block">
                        {t('service.tag')}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                        {t('service.title')}
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto font-serif text-lg">
                        {t('service.desc')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        {
                            title: t('service.1.title'),
                            desc: t('service.1.desc'),
                            image: "/imagenes/1.webp"
                        },
                        {
                            title: t('service.2.title'),
                            desc: t('service.2.desc'),
                            image: "/imagenes/2.webp"
                        },
                        {
                            title: t('service.3.title'),
                            desc: t('service.3.desc'),
                            image: "/imagenes/salas de estar/vertical/salas_de_estar_9.webp"
                        }
                    ].map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="relative h-[450px] rounded-xl overflow-hidden group"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url('${service.image}')` }}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-500" />

                            {/* Decorative Corners */}
                            <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-[#9a7d45]/0 group-hover:border-[#9a7d45]/40 transition-all duration-700 delay-100" />
                            <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-[#9a7d45]/0 group-hover:border-[#9a7d45]/40 transition-all duration-700 delay-100" />

                            <div className="relative h-full p-10 flex flex-col items-center justify-end text-center transition-all duration-500">
                                <p className="text-white/90 leading-relaxed font-serif text-base mt-4 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 group-hover:block transition-all duration-700 line-clamp-3">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
