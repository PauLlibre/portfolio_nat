import RootLayout from "../components/layout/layout";
import { Barlow } from "next/font/google";
const barlow = Barlow({ subsets: ["latin"], weight: ["400", "700"] });
import Image from "next/image";
import circulos from "../public/images/3circulos_transparent.png";

export default function Method() {
  return (
    <RootLayout>
      <div className={`${barlow.className} flex flex-col items-center mt-8 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20`}>
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-2 sm:mb-3 md:mb-4">MI ENFOQUE TERAPÉUTICO:</h1>
          <div className="font-mono uppercase tracking-wider text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Una <strong>sanación multidimensional</strong>
          </div>
        </div>

        <div className="w-full max-w-3xl mb-8 sm:mb-12">
          <Image src={circulos} alt="circulos" layout="responsive" width={300} height={200} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          <div className="flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl mb-4 text-center"><strong>MENTE</strong></h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-500 font-mono tracking-wider text-xs sm:text-sm">
              <li>
                <strong>Reconociendo Tu Historia</strong>: Exploramos tu pasado para comprender
                cómo las experiencias tempranas te influencian hoy.
              </li>
              <li>
                <strong>Espacio Seguro</strong>: Te brindo un espacio de <strong>confianza</strong> y <strong>aceptación
                incondicional</strong> para expresar tus emociones, sentimientos y
                pensamientos.
              </li>
              <li>
                <strong>Autoconocimiento y Bienestar</strong>: Te guío para que te conozcas
                mejor, comprendas tus emociones y cómo impactan en tu vida,
                fomentando la <strong>autoaceptación</strong> y la <strong>responsabilidad</strong>.
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl mb-4 text-center"><strong>CUERPO</strong></h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-500 font-mono tracking-wider text-xs sm:text-sm">
              <li>
                <strong>Integración Físico-Emocional</strong>: Utilizo técnicas corporales como
                <strong>masajes egipcio-esencios</strong>, <strong>respiración</strong> y <strong>movimiento consciente</strong>
                para liberar bloqueos físicos y emocionales.
              </li>
              <li>
                <strong>Enfoque Biopsicosocial</strong>: Considero las causas multidimensionales
                de los problemas, incluyendo tu <strong>genética</strong>, <strong>emociones</strong>, <strong>entorno</strong> y
                <strong>relaciones</strong>.
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl mb-4 text-center"><strong>ALMA</strong></h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-500 font-mono tracking-wider text-xs sm:text-sm">
              <li>
                <strong>Expresión Creativa</strong>: Utilizo el <strong>arte</strong>, la <strong>escritura</strong>, la <strong>música</strong> y
                la <strong>danza</strong> para expresar emociones y conectar con tu ser profundo.
              </li>
              <li>
                <strong>Conexión con tu Cuerpo</strong>: Utilizo técnicas corporales como el
                <strong>teatro terapéutico</strong> y el <strong>movimiento</strong> para conectar con tu energía
                vital y liberar tensiones.
              </li>
              <li>
                <strong>Sanando a Través de la Escritura</strong>: Te ayudo a procesar tus
                emociones y reflexionar sobre tu historia a través de la
                <strong>escritura terapéutica</strong>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
