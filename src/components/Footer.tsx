"use client";

import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#1a3c34] text-white py-24 px-6 border-t border-[#9a7d45]/20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
                    {/* Brand/Logo Section */}
                    <div className="space-y-6">
                        <img
                            src="/imagenes/logo/logo_la_masia-sin-fondo.png"
                            alt="Villa Grande La Masía Logo"
                            className="h-28 w-auto mb-6"
                        />
                        <p className="text-white/60 font-serif italic leading-relaxed max-w-sm">
                            {t('footer.brand_desc')}
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/fincalamasiaoficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[#9a7d45]/30 flex items-center justify-center hover:border-[#9a7d45] hover:bg-[#9a7d45]/10 transition-all">
                                <Instagram className="w-5 h-5 text-[#9a7d45]" />
                            </a>
                            <a href="https://www.tiktok.com/@fincalamasiaoficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[#9a7d45]/30 flex items-center justify-center hover:border-[#9a7d45] hover:bg-[#9a7d45]/10 transition-all">
                                <svg className="w-5 h-5 text-[#9a7d45]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.776 8.776 0 0 1-1.87-1.35v11.44c.05 1.89-.92 3.7-2.59 4.64a5.401 5.401 0 0 1-5.99-.13 5.474 5.474 0 0 1-2.48-4.67c-.07-3.48 3.53-6 6.58-4.29v4.27c-.9-.67-2.18-.56-2.95.26-.76.84-.76 2.16-.02 3.01.74.82 2.04.91 2.89.2.81-.67.79-1.91.79-2.93V.02Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-serif italic text-[#9a7d45] mb-6">{t('footer.contact')}</h3>
                        <ul className="space-y-4 font-serif italic">
                            <li className="flex items-start gap-4 text-white/80">
                                <MapPin className="w-5 h-5 text-[#9a7d45] shrink-0" />
                                <span>{t('hero.location')} <br /> {t('location.parcelacion')}</span>
                            </li>
                            <li className="flex items-center gap-4 text-white/80">
                                <Phone className="w-5 h-5 text-[#9a7d45]" />
                                <a href="tel:+573165529588" className="hover:text-[#9a7d45] transition-colors">+57 316 552 9588</a>
                            </li>
                            <li className="flex items-center gap-4 text-white/80">
                                <Mail className="w-5 h-5 text-[#9a7d45]" />
                                <a href="mailto:hola@fincalamasiaoficial.com" className="hover:text-[#9a7d45] transition-colors">hola@lamasia.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-serif italic text-[#9a7d45] mb-6">{t('footer.navigation')}</h3>
                        <ul className="space-y-4 font-serif italic">
                            <li><a href="#experiencias" className="text-white/80 hover:text-[#9a7d45] transition-colors">{t('nav.experiences')}</a></li>
                            <li><a href="#habitaciones" className="text-white/80 hover:text-[#9a7d45] transition-colors">{t('nav.rooms')}</a></li>
                            <li><a href="#testimonios" className="text-white/80 hover:text-[#9a7d45] transition-colors">{t('nav.testimonials')}</a></li>
                            <li><a href="#intro" className="text-white/80 hover:text-[#9a7d45] transition-colors">{t('nav.finca')}</a></li>
                            <li><a href="#ubicacion" className="text-white/80 hover:text-[#9a7d45] transition-colors">{t('nav.location')}</a></li>
                            <li><a href="#habitaciones" className="text-white/80 hover:text-[#9a7d45] transition-colors font-bold text-[#9a7d45]">{t('nav.reserve')}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-[#9a7d45]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 uppercase tracking-[0.2em] font-serif">
                    <p>© 2026 {t('hero.title')} {t('hero.subtitle')}. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
}
