"use client";

import Image from "next/image";
import threeCircles from "../../../public/images/2blackdots.jpg";
import nataliaBertran from "../../../public/images/nati.jpeg";
import { Barlow } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: ["400", "700"] });

export default function MainView() {
  return (
    <div
      className={`flex flex-col w-full gap-4 pb-20 pl-40 pr-40 pr-20 mt-60 ${barlow.className}`}
    >
      <div className="flex gap-10 text-justify">
        <div className="flex flex-col gap-4 w-1/2">
          <div className="text-6xl">BERLIN PSICOLOGIA</div>
          <div className="font-mono uppercase tracking-wider text-gray-500">
            PSICOTERAPIA / TERAPIA CORPORAL / WORKSHOPS
          </div>
          <div className="font-mono tracking-wider text-gray-500 pt-4 italic">
            &ldquo; El trauma no es sólo un evento del pasado; es la huella que
            deja en cuerpo y mente. &ldquo;
            <p className="mt-2">― Bessel A. van der Kolk</p>
          </div>
          <button className="border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition-colors relative group w-48 mt-4 mb-10">
            Solicita información
          </button>
          <div className="font-mono uppercase tracking-wider text-2xl">
            Un espacio seguro para ti
          </div>
          <div
            className="flex flex-col text-gray-500 font-mono
tracking-wider text-gray-500"
          >
            <div>
              Aquí encontrarás un lugar donde te acompañaré a conectar con lo
              que te está pasando de una forma profunda y cuidadosa.
            </div>
            <div>
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
          <button className="border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition-colors relative group w-48 mt-4 mb-10">
            Cómo trabajo
          </button>
        </div>
        <div className="w-1/2 h-full relative rounded-xl flex justify-end items-center">
          <Image
            src={threeCircles}
            alt="Natalia Bertran"
            width={500}
            height={600}
            className="rounded-xl object-cover"
            style={{ zIndex: -1 }}
          />
        </div>
      </div>
      {/* mirar */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-black-300 to-transparent my-8 mt-20 mb-20"></div>
      <div className="flex w-full justify-start gap-10 text-justify">
        <div className="w-1/2 h-full relative rounded-xl flex justify-start items-center">
          <Image
            src={nataliaBertran}
            alt="Natalia Bertran"
            width={600}
            height={600}
            className="rounded-xl object-cover"
            style={{ zIndex: -1 }}
          />
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <div className="text-6xl">QUIÉN SOY</div>
          <div className="flex flex-col text-gray-500 font-mono tracking-wider text-gray-500 mt-4">
            <div>
              Hola! Soy Natalia Bertran, psicóloga sanitaria y terapeuta
              corporal, especialista en trauma. Berlin Psicología és un espacio
              donde podrás explorar y sanar desde un enfoque que integra mente,
              cuerpo y emociones.
            </div>
            <div>
              <p className="italic pt-4 pb-4">
                &ldquo;El dolor no escuchado se queda en el cuerpo&ldquo;
              </p>
              Mi objetivo es ayudarte a darle voz a lo que sientes de manera
              respetuosa y sin prisa.
            </div>
          </div>
          <div className="text-4xl pt-4">Cómo trabajo</div>
          <div className="flex flex-col text-gray-500 font-mono tracking-wider text-gray-500 mt-4">
            <div>
              Cada proceso terapéutico es único, y lo importante es encontrar
              juntos lo que mejor funcione para ti. No importa cómo llegues,
              aquí respetamos tus tiempos y necesidades. Utilizo diferentes
              herramientas según lo que sea más adecuado para tu proceso:
            </div>
            <ol className="ml-4 list-disc list-inside pt-4">
              <li>
                <p className="font-bold inline">IFS</p>: (Sistema de Familia Interna), para comprender mejor las diferentes partes de ti y cómo se relacionan entre sí.
              </li>
              <li>
                <p className="font-bold inline">Tratamiento del Trauma</p>: para profundizar en las experiencias que puedan estar marcando tu vida de manera significativa.
              </li>
              <li>
                <p className="font-bold inline">Reprocesamiento de Trauma (Método Aleceia)</p>: que es muy útil para procesar experiencias traumáticas.
              </li>
              <li>
                <p className="font-bold inline">Trabajo corporal</p>: que ayuda a conectar lo que sientes físicamente con tus emociones y pensamientos.
              </li>
              <li>
                <p className="font-bold inline">Trabajo con Arte Terapia</p>: que nos permite explorar dinámicas emocionales y familiares desde una perspectiva artistica.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="w-full h-1px bg-gradient-to-r from-transparent via-black-300 to-transparent my-8 mt-20 mb-20"></div>
    </div>
  );
}
