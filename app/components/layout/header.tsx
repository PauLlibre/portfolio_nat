import Link from "next/link";
import { Barlow } from 'next/font/google';

const barlow = Barlow({ subsets: ['latin'], weight: ['400', '700'] });

export default function Header() {
    return (
        <header className={`fixed top-0 left-0 right-0 ${barlow.className}`}>
            <nav className="flex justify-between items-center text-black p-8 pr-40 pl-40 z-50"
                style={{ backgroundColor: "#F8F7F1" }}
            >
                <div>
                    <Link href="/" className="hover:text-gray-300 transition-colors relative group">
                        BERLIN PSICOLOGIA
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>
                <ul className="flex space-x-24 justify-center flex-grow text-gray-400"> 
                    <li>
                        <Link href="/" className="relative group hover:text-black transition-colors font-mono tracking-wider text-gray-500">
                            Enfoque
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/method" className="relative group hover:text-black transition-colors font-mono tracking-wider text-gray-500">
                            Cómo trabajo
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="relative group hover:text-black transition-colors font-mono tracking-wider text-gray-500">
                            Blog
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>
                <div>
                    <button className="border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition-colors relative group">
                        Pide Cita
                    </button>
                </div>
            </nav>
        </header>
    );
}
