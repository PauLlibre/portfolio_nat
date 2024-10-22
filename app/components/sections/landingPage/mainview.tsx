"use client";

import Image from "next/image";
import threeCircles from "../../../public/images/2blackdots.jpg";
import nataliaBertran from "../../../public/images/nati.jpeg";
import { Barlow } from "next/font/google";
import WhatsAppButton from "@/app/components/sections/landingPage/whatsapp";
const barlow = Barlow({ subsets: ["latin"], weight: ["400", "700"] });

export default function MainView() {
  return (
    <main
      className={`flex flex-col w-full gap-4 pb-10 px-4 sm:px-8 md:px-20 lg:px-40 mt-20 sm:mt-40 lg:mt-60 ${barlow.className}`}
    >
      <section className="flex flex-col lg:flex-row gap-10 text-justify">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">
            BERLIN PSICOLOGIA
          </h1>
          <p className="font-mono uppercase tracking-wider text-gray-500 text-sm sm:text-base">
            PSICOTERAPIA / TERAPIA CORPORAL / WORKSHOPS
          </p>
          <blockquote className="font-mono tracking-wider text-gray-500 pt-4 italic text-sm sm:text-base">
            <p>&ldquo; El trauma no es sólo un evento del pasado; es la huella que
            deja en cuerpo y mente. &ldquo;</p>
            <cite className="mt-2">― Bessel A. van der Kolk</cite>
          </blockquote>
          <div className="lg:hidden w-full h-64 sm:h-80 relative rounded-xl flex justify-center items-center my-6">
            <Image
              src={threeCircles}
              alt="Natalia Bertran"
              className="rounded-xl"
              fill
              style={{ objectFit: "cover", zIndex: -1 }}
            />
          </div>
          <WhatsAppButton
            phoneNumber="34612345678"
            message="Hola, me gustaría solicitar más información."
          />
          <div className="font-mono uppercase tracking-wider text-xl sm:text-2xl mt-4">
            Un espacio seguro para ti
          </div>
          <div
            className="flex flex-col text-gray-500 font-mono
tracking-wider text-gray-500 text-sm sm:text-base"
          >
            <div className="mb-2">
              Aquí encontrarás un lugar donde te acompañaré a conectar con lo
              que te está pasando de una forma profunda y cuidadosa.
            </div>
            <div className="mb-2">
              Si sientes que hay emociones o experiencias que no has logrado
              comprender o expresar del todo, quiero que sepas que no estás
              sol@.
            </div>
            <div>
              Mi trabajo es estar aquí para ti, para que, paso a paso, podamos
              integrar esas experiencias y avanzar hacia una mayor sensación de
              bienestar.
            </div>
          </div>
          <button
            onClick={() => (window.location.href = "/work")}
            className="border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition-colors relative group w-48 mt-4 mb-10 text-sm sm:text-base"
          >
            Cómo trabajo
          </button>
        </div>
        <div className="hidden lg:flex w-full lg:w-1/2 h-64 sm:h-80 lg:h-full relative rounded-xl justify-center lg:justify-end items-center">
          <Image
            src={threeCircles}
            alt="Natalia Bertran"
            className="rounded-xl"
            width={500}
            height={500}
            style={{ objectFit: "cover", zIndex: -1 }}
          />
        </div>
      </section>

      <hr className="w-full h-1 bg-gradient-to-r from-transparent via-black-300 to-transparent my-8 mt-10 sm:mt-20 mb-10 sm:mb-20" />

      <section
        id="quien-soy"
        className="flex flex-col lg:flex-row w-full justify-start gap-10 text-justify"
      >
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-full relative rounded-xl flex justify-center lg:justify-start items-center mb-6 lg:mb-0">
          <Image
            src={nataliaBertran}
            alt="Natalia Bertran, psicóloga y terapeuta corporal en Barcelona"
            className="rounded-xl"
            fill
            style={{ objectFit: "cover", zIndex: -1 }}
          />
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl">QUIÉN SOY</h2>
          <div className="flex flex-col text-gray-500 font-mono tracking-wider text-gray-500 mt-4 text-sm sm:text-base">
            <p className="mb-2">
              Hola! Soy Natalia Bertran, psicóloga sanitaria y terapeuta
              corporal, especialista en trauma. Berlin Psicología es un espacio
              donde podrás explorar y sanar desde un enfoque que integra mente,
              cuerpo y emociones en Barcelona.
            </p>
            <blockquote>
              <p className="italic pt-4 pb-4">
                &ldquo;El dolor no escuchado se queda en el cuerpo&ldquo;
              </p>
            </blockquote>
            <p>
              Mi objetivo es ayudarte a darle voz a lo que sientes de manera
              respetuosa y sin prisa, ofreciendo terapia psicológica y corporal en Barcelona.
            </p>
          </div>
          <h3 className="text-3xl sm:text-4xl pt-4">Cómo trabajo</h3>
          <div className="flex flex-col text-gray-500 font-mono tracking-wider text-gray-500 mt-4 text-sm sm:text-base">
            <p className="mb-2">
              Cada proceso terapéutico es único, y lo importante es encontrar
              juntos lo que mejor funcione para ti en Barcelona. No importa cómo llegues,
              aquí respetamos tus tiempos y necesidades. Utilizo diferentes
              herramientas según lo que sea más adecuado para tu proceso:
            </p>
            <ul className="ml-4 list-disc list-inside pt-4">
              <li className="mb-2">
                <strong>IFS</strong> (Sistema de Familia
                Interna): para comprender mejor las diferentes partes de ti y
                cómo se relacionan entre sí.
              </li>
              <li className="mb-2">
                <strong>Tratamiento del Trauma</strong>: para
                profundizar en las experiencias que puedan estar marcando tu
                vida de manera significativa.
              </li>
              <li className="mb-2">
                <strong>Reprocesamiento de Trauma (Método Aleceia)</strong>
                : que es muy útil para procesar experiencias traumáticas.
              </li>
              <li className="mb-2">
                <strong>Trabajo corporal</strong>: que ayuda
                a conectar lo que sientes físicamente con tus emociones y
                pensamientos.
              </li>
              <li>
                <strong>Trabajo con Arte Terapia</strong>:
                que nos permite explorar dinámicas emocionales y familiares
                desde una perspectiva artística.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="w-full h-1px bg-gradient-to-r from-transparent via-black-300 to-transparent my-8 mt-10 sm:mt-20 mb-10 sm:mb-20" />
    </main>
  );
}

