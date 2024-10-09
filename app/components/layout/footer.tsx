import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Natalia Bertran</h3>
            <p className="text-sm text-gray-600 pr-8">
              Hola, soy Natalia, una joven psicóloga apasionada por el bienestar
              emocional y el crecimiento personal. Mi objetivo es brindar un
              espacio seguro y acogedor donde puedas explorar tus pensamientos y
              sentimientos. A través de enfoques terapéuticos basados en
              evidencia, te acompañaré en el camino hacia una vida más plena y
              equilibrada.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/" className="text-blue-600 hover:text-blue-800">
                  Enfoque
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/projects"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Projects
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/blog"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  GitHub
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="mailto:your.email@example.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
