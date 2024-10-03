import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0">
            <nav className="flex justify-end text-white bg-gradient-to-b from-black/20 to-transparent p-8">
                <ul className="flex space-x-24"> 
                    <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
                    <li><Link href="/method" className="hover:text-gray-300 transition-colors">Método</Link></li>
                    <li><Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
}
