"use client"

import RootLayout from "../components/layout/layout"
import { Barlow } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import terapiaIndividual from "../public/images/terapia_individual.png"
import terapiaCorporal from "../public/images/terapia_corporal.png"
import workshops1 from "../public/images/workshop1.png"
import workshops2 from "../public/images/workshop2.png"
import workshops3 from "../public/images/workshop3.png"
import { motion, AnimatePresence } from "framer-motion";

import { StaticImageData } from "next/image";
const barlow = Barlow({ subsets: ["latin"], weight: ["400", "700"] });

interface Category {
    title: string;
    content: string;
    image?: StaticImageData;
    additionalImages?: StaticImageData[];
}

export default function Work() {
    const [showCategories, setShowCategories] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    const categories: Category[] = [
        {
            title: "TERAPIA INDIVIDUAL",
            content: "Te acompaño en un proceso de <strong>sanación integral</strong>, trabajando <strong>cuerpo, mente y alma</strong>, para que logres una <strong>transformación profunda y duradera</strong>. Este enfoque se adapta a tus necesidades particulares, integrando las técnicas más adecuadas para tu crecimiento personal. \n\n<strong>Abordaje Personalizado:</strong> Adapto mi enfoque a tus necesidades únicas, integrando técnicas corporales, psicológicas y energéticas para promover tu crecimiento personal.\n\n<strong>Sanación Integral:</strong> Trabajamos juntos para liberar bloqueos físicos, emocionales y energéticos que te impiden vivir una vida plena.\n\n<strong>Transformación Profunda:</strong> El objetivo es ayudarte a descubrir tu verdadero potencial y alcanzar una transformación duradera que se refleje en tu bienestar físico, mental y emocional.\n\n<strong>Mi compromiso:</strong>  \nTe brindo un <strong>espacio seguro y confidencial</strong> para que puedas expresarte con libertad.\nTe acompaño en tu proceso de transformación con <strong>empatía, respeto y profesionalismo</strong>.\nTe ayudo a desarrollar herramientas para que puedas vivir una vida más plena y consciente.\n\nPara obtener más información sobre mis servicios y tarifas, contáctame. Estoy aquí para ayudarte a alcanzar tu máximo potencial.",
            image: terapiaIndividual
        },
        {
            title: "TERAPIA CORPORAL",
            content: "Experimenta <strong>alivio físico y emocional</strong> con sesiones personalizadas que te ayudarán a <strong>liberar tensiones y bloqueos</strong>. Es ideal para complementar tu proceso terapéutico o enfocarte en áreas específicas que te preocupan.\n\n<strong>Cuidados egipcios-esenios:</strong> Mi enfoque en terapia corporal se nutre de las tradiciones milenarias de los cuidados egipcios y esenios, combinando técnicas ancestrales con un profundo conocimiento de la anatomía y fisiología humana. \n \n<strong>BENEFICIOS</strong> \n\n<strong>Liberación de Tensiones Físicas y Emocionales:</strong> Disminución de dolor, fatiga muscular y estrés.\n<strong>Mejora del Flujo Energético:</strong> Armonización de los chakras y mayor vitalidad. \n<strong>Mayor Conciencia Corporal:</strong> Profundizar en la conexión con el cuerpo para mejorar el movimiento y la flexibilidad. \n<strong>Promueve el Equilibrio Interior:</strong> Alivio del estrés, aumento de la energía vital y una mayor sensación de paz interior.\n<strong>Sesiones Personalizadas:</strong> Cada sesión se adapta a tus necesidades particulares, combinando técnicas de acuerdo a tu cuerpo, tu historia y tus objetivos.\nTe apoyo para que puedas comprender y experimentar tu cuerpo de forma consciente y con mayor autonomía.",
            image: terapiaCorporal
        },
        {
            title: "WORKSHOPS",
            content: "Ofrezco una <strong>experiencia terapéutica integral</strong>, que va más allá de las sesiones individuales. Además de acompañar tu camino personal, creo <strong>talleres y cursos adaptados a tus necesidades</strong>, pensados para explorar temas sensibles y fomentar la conexión con unx mismx y con las demás personas.  \n\n<strong>Un espacio seguro para la sanación:</strong> \n\nEl entorno grupal ofrece un espacio único para la sanación y el crecimiento. Al compartir nuestras experiencias y conectar con otros, podemos: \n\n<strong>Descubre tu poder interior en relación:</strong> Descubrir que no estamos solos en nuestras luchas y que hay un camino y luz en la conexión y la empatía.\n<strong>Explorar la memoria corporal y emocional:</strong> Utilizamos el arte como herramienta de expresión para conectar con nuestras emociones, sanar heridas del pasado y re-descubrir nuestro potencial. \n<strong>Encontrar apoyo y comprensión:</strong> Sentirse validado y aceptado por otros que comparten experiencias similares.\n<strong>Desarrollar herramientas para la vida:</strong> Aprender a gestionar nuestras emociones, fortalecer nuestra autoestima y construir relaciones sanas.\n\n¿Estás listx para explorar tu potencial en un ambiente de apoyo y crecimiento?  \nContacta conmigo para más información sobre los talleres y cursos que ofrezco.",
            additionalImages: [workshops1, workshops2, workshops3]
        }
    ];

    const fadeInOut = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 }
    };

    return (
        <RootLayout>
            <motion.div 
                {...fadeInOut}
                className="flex flex-col items-center justify-center min-h-screen p-4 max-w-7xl mx-auto"
            >
                <AnimatePresence mode="wait">
                    {!showCategories && (
                        <motion.div 
                            key="initial"
                            {...fadeInOut}
                            className="w-full flex flex-col items-center"
                        >
                            <h1 className={`${barlow.className} text-2xl sm:text-3xl md:text-4xl mb-4`}>Cómo trabajo</h1>
                            <motion.button 
                                onClick={() => setShowCategories(true)}
                                className={`${barlow.className} mt-4 p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </motion.button>
                        </motion.div>
                    )}
                    {showCategories && !selectedCategory && (
                        <motion.div 
                            key="categories"
                            {...fadeInOut}
                            className="flex flex-col items-center justify-center min-h-screen w-full"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
                                {categories.map((category, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`${barlow.className} w-full p-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300`}
                                    >
                                        {category.title}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                    {selectedCategory && (
                        <motion.div 
                            key="selected"
                            {...fadeInOut}
                            className={`flex flex-col ${barlow.className} w-full relative mt-20`}
                        >
                            <motion.button
                                onClick={() => setSelectedCategory(null)}
                                className="self-start mb-4 p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </motion.button>
                            <div className="flex flex-col lg:flex-row w-full gap-8">
                                <div className="lg:w-1/2 pr-0 lg:pr-4">
                                    {selectedCategory.image && (
                                        <motion.div {...fadeInOut}>
                                            <Image src={selectedCategory.image} alt={selectedCategory.title} width={500} height={300} className="mb-4 rounded-lg w-full" />
                                        </motion.div>
                                    )}
                                    {selectedCategory.additionalImages && (
                                        <div className="flex flex-col gap-2 max-h-[calc(85vh-10rem)] overflow-y-auto w-full">
                                            {selectedCategory.additionalImages.map((img, index) => (
                                                <motion.div
                                                    key={index}
                                                    {...fadeInOut}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <Image src={img} alt={`Workshop ${index + 1}`} width={300} height={200} className="object-cover rounded-lg w-full" style={{ maxHeight: '180px' }} />
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <motion.div 
                                    {...fadeInOut}
                                    transition={{ delay: 0.2 }}
                                    className="lg:w-1/2"
                                >
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 mt-8 lg:mt-0">{selectedCategory.title}</h2>
                                    <p className="whitespace-pre-line text-gray-500 font-mono tracking-wider text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: selectedCategory.content }}></p>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </RootLayout>
    )
}