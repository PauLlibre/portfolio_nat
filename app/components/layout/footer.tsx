import Link from "next/link";
import { Barlow } from 'next/font/google';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const barlow = Barlow({ subsets: ['latin'], weight: ['400', '700'] });

export default function Footer() {
  return (
    <footer className={`${barlow.className} py-8 bg-black text-white`}>
      <div className="container mx-auto px-4 sm:px-8 md:px-20 lg:px-40">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">BERLIN PSICOLOGIA</h3>
            <p className="text-sm font-mono tracking-wider pr-8">
              Un espacio seguro para explorar y sanar desde un enfoque que integra mente, cuerpo y emociones.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="text-sm font-mono tracking-wider">
              <li className="mb-2">
                <Link href="/method" className="hover:text-gray-300 transition-colors">
                  Enfoque
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/work" className="hover:text-gray-300 transition-colors">
                  Cómo trabajo
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="text-sm font-mono tracking-wider">
              <li className="mb-2 flex items-center">
                <FaWhatsapp className="mr-2" />
                <a href="https://wa.me/34722402288" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="mb-2 flex items-center">
                <FaInstagram className="mr-2" />
                <a href="https://www.instagram.com/berlinpsicologia" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a href="mailto:berlinacts@gmail.com" className="hover:text-gray-300 transition-colors">
                  berlinacts@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm font-mono tracking-wider">
          © {new Date().getFullYear()} Berlin Psicologia. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
