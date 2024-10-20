"use client"

import Link from "next/link";
import { Barlow } from 'next/font/google';
import { useState } from 'react';
import WhatsAppFormModal from '../sections/landingPage/WhatsAppFormModal'; // Adjust the path if necessary

const barlow = Barlow({ subsets: ['latin'], weight: ['400', '700'] });

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);

    const handleOpenWhatsAppForm = () => {
        setShowWhatsAppForm(true);
    };

    const handleCloseWhatsAppForm = () => {
        setShowWhatsAppForm(false);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Close the menu after clicking
    };

    return (
        <header className={`fixed top-0 left-0 right-0 ${barlow.className} z-50`}>
            <nav
                className="flex flex-wrap justify-between items-center text-black p-4 md:p-8 lg:px-20 xl:px-40"
                style={{ backgroundColor: "#F8F7F1" }}
            >
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="hover:text-gray-300 transition-colors relative group text-sm md:text-base"
                    >
                        BERLIN PSICOLOGIA
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>
                {/* Mobile Menu Button */}
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-gray-500 hover:border-gray-500"
                    >
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                {/* Navigation Links */}
                <ul
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } w-full lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0 space-y-4 lg:space-y-0 lg:space-x-8 xl:space-x-24 text-gray-400`}
                >
                    <li>
                        <Link
                            href="/"
                            className="block relative group hover:text-black transition-colors font-mono tracking-wider text-gray-500 text-sm md:text-base"
                            onClick={() => scrollToSection('quien-soy')} 
                        >
                            Quién soy
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/method"
                            className="block relative group hover:text-black transition-colors font-mono tracking-wider text-gray-500 text-sm md:text-base"
                        >
                            Enfoque
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/work"
                            className="block relative group hover:text-black transition-colors font-mono tracking-wider text-gray-500 text-sm md:text-base"
                        >
                            Cómo trabajo
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    {/* Add more navigation items as needed */}
                </ul>
                {/* "Pide Cita" Button */}
                <div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } lg:block mt-4 lg:mt-0`}
                >
                    <button
                        onClick={handleOpenWhatsAppForm}
                        className="w-full lg:w-auto border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition-colors relative group text-sm md:text-base"
                    >
                        Pide Cita
                    </button>
                </div>
            </nav>
            {/* Render WhatsApp Form Modal */}
            {showWhatsAppForm && (
                <WhatsAppFormModal
                    phoneNumber="34722402288"
                    message="Hola, me gustaría pedir una cita."
                    onClose={handleCloseWhatsAppForm}
                />
            )}
        </header>
    );
}
