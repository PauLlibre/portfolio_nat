"use client";

import RootLayout from "../components/layout/layout";
import { Barlow } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import terapiaIndividual from "../public/images/terapia_individual2.png";
import terapiaCorporal from "../public/images/terapia_corporal.png";
import terapiaCorporal2 from "../public/images/terapia_corporal2.jpeg";
import workshops1 from "../public/images/workshop1.png";
import workshops2 from "../public/images/workshop2.png";
import workshops3 from "../public/images/workshop3.png";

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
      title: "PSICOTERAPIA",
      content: `
<p>Te acompaño en un proceso de <strong>sanación integral</strong>, trabajando <strong>cuerpo, mente y alma</strong>, para que logres una <strong>transformación profunda y duradera</strong>. Este enfoque se adapta a tus necesidades particulares, integrando las técnicas más adecuadas para tu crecimiento personal.</p>

<h3><strong>Abordaje Personalizado:</strong></h3>
<p>Adapto mi enfoque a tus necesidades únicas, integrando técnicas corporales, psicológicas y energéticas para promover tu crecimiento personal.</p>

<h3><strong>Sanación Integral:</strong></h3>
<p>Trabajamos juntos para liberar bloqueos físicos, emocionales y energéticos que te impiden vivir una vida plena.</p>

<h3><strong>Transformación Profunda:</strong></h3>
<p>El objetivo es ayudarte a descubrir tu verdadero potencial y alcanzar una transformación duradera que se refleje en tu bienestar físico, mental y emocional.</p>

<h3><strong>Mi compromiso:</strong></h3>
<ul>
  <li>Te brindo un <strong>espacio seguro y confidencial</strong> para que puedas expresarte con libertad.</li>
  <li>Te acompaño en tu proceso de transformación con <strong>empatía, respeto y profesionalismo</strong>.</li>
  <li>Te ayudo a desarrollar herramientas para que puedas vivir una vida más plena y consciente.</li>
</ul>

<p>Para obtener más información sobre mis servicios y tarifas, contáctame. Estoy aquí para ayudarte a alcanzar tu máximo potencial.</p>`,
      image: terapiaIndividual,
    },
    {
      title: "TERAPIA FISICOEMOCIONAL",
      content: `
<p>Experimenta <strong>alivio físico y emocional</strong> con sesiones personalizadas que te ayudarán a <strong>liberar tensiones y bloqueos</strong>. Es ideal para complementar tu proceso terapéutico o enfocarte en áreas específicas que te preocupan.</p>

<h3><strong>Cuidados egipcios-esenios:</strong></h3>
<p>Mi enfoque en terapia corporal se nutre de las tradiciones milenarias de los cuidados egipcios y esenios, combinando técnicas ancestrales con un profundo conocimiento de la anatomía y fisiología humana.</p>

<h3><strong>BENEFICIOS</strong></h3>
<ul>
  <li><strong>Liberación de Tensiones Físicas y Emocionales:</strong> Disminución de dolor, fatiga muscular y estrés.</li>

  <li><strong>Mejora del Flujo Energético:</strong> Armonización de los chakras y mayor vitalidad.</li>

  <li><strong>Mayor Conciencia Corporal:</strong> Profundizar en la conexión con el cuerpo para mejorar el movimiento y la flexibilidad.</li>

  <li><strong>Promueve el Equilibrio Interior:</strong> Alivio del estrés, aumento de la energía vital y una mayor sensación de paz interior.</li>

  <li><strong>Sesiones Personalizadas:</strong> Cada sesión se adapta a tus necesidades particulares, combinando técnicas de acuerdo a tu cuerpo, tu historia y tus objetivos.</li>
</ul>

<p>Te apoyo para que puedas comprender y experimentar tu cuerpo de forma consciente y con mayor autonomía.</p>`,
      additionalImages: [terapiaCorporal, terapiaCorporal2],
    },
    {
      title: "TALLERES GRUPALES",
      content: `
<p>Ofrezco una <strong>experiencia terapéutica integral</strong> que va más allá de las sesiones individuales. Además de acompañar tu camino personal, creo <strong>talleres y cursos adaptados a tus necesidades</strong>, pensados para explorar temas sensibles y fomentar la conexión contigo mism@ y con las demás personas.</p>

<h3><strong>Un espacio seguro para la sanación:</strong></h3>
<p>El entorno grupal ofrece un espacio único para la sanación y el crecimiento. Al compartir nuestras experiencias y conectar con otros, podemos:</p>

<ul>
  <li><strong>Descubrir tu poder interior en relación:</strong> Descubrir que no estamos solos en nuestras luchas y que hay un camino y luz en la conexión y la empatía.</li>

  <li><strong>Explorar la memoria corporal y emocional:</strong> Utilizamos el arte como herramienta de expresión para conectar con nuestras emociones, sanar heridas del pasado y re-descubrir nuestro potencial.</li>

  <li><strong>Encontrar apoyo y comprensión:</strong> Sentirse validado y aceptado por otros que comparten experiencias similares.</li>

  <li><strong>Desarrollar herramientas para la vida:</strong> Aprender a gestionar nuestras emociones, fortalecer nuestra autoestima y construir relaciones sanas.</li>
</ul>

<p>¿Estás list@ para explorar tu potencial en un ambiente de apoyo y crecimiento?<br>Contacta conmigo para más información sobre los talleres y cursos que ofrezco.</p>`,
      additionalImages: [workshops1, workshops2, workshops3],
    },
  ];

  const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <RootLayout>
      <motion.div
        {...fadeInOut}
        className="flex flex-col items-center justify-center min-h-screen p-4 max-w-7xl mx-auto mt-12"
      >
        <AnimatePresence mode="wait">
          {!showCategories && (
            <motion.div
              key="initial"
              {...fadeInOut}
              className="w-full flex flex-col items-center"
            >
              <h1
                className={`${barlow.className} text-2xl sm:text-3xl md:text-4xl mb-4 text-center`}
              >
                Cómo trabajo
              </h1>
              <motion.button
                onClick={() => setShowCategories(true)}
                className={`${barlow.className} mt-4 p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </motion.div>
          )}
          {showCategories && !selectedCategory && (
            <motion.div
              key="categories"
              {...fadeInOut}
              className="flex flex-col items-center w-full"
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
              className={`flex flex-col ${barlow.className} w-full relative mt-8`}
            >
              <motion.button
                onClick={() => setSelectedCategory(null)}
                className="self-start mb-4 p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center w-10 h-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </motion.button>
              <div className="flex flex-col lg:flex-row w-full gap-8">
                {/* Left Column */}
                <div className="lg:w-1/2 pr-0 lg:pr-4">
                  {selectedCategory.image && (
                    <motion.div {...fadeInOut}>
                      <Image
                        src={selectedCategory.image}
                        alt={selectedCategory.title}
                        width={500}
                        height={300}
                        className="mb-4 rounded-lg w-full object-cover"
                      />
                    </motion.div>
                  )}
                  {selectedCategory.additionalImages && (
                    <Swiper
                      modules={[Pagination, Navigation]}
                      spaceBetween={10}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      navigation
                      className="mySwiper"
                    >
                      {selectedCategory.additionalImages.map((img, index) => (
                        <SwiperSlide key={index}>
                          <Image
                            src={img}
                            alt={`Image ${index + 1}`}
                            width={500}
                            height={300}
                            className="rounded-lg w-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </div>
                {/* Right Column */}
                <motion.div
                  {...fadeInOut}
                  transition={{ delay: 0.2 }}
                  className="lg:w-1/2"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 mt-4 lg:mt-0">
                    {selectedCategory.title}
                  </h2>
                  <div
                    className="flex flex-col gap-8 text-gray-500 font-mono tracking-wider text-sm sm:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: selectedCategory.content,
                    }}
                  ></div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </RootLayout>
  );
}
