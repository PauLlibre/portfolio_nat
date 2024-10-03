import { Inter } from "next/font/google";
import Header from "./header";
import "../../globals.css";
import Footer from "./footer";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Natalia Bertran - Portfolio",
//   description: "Portfolio de Natalia Bertran, psicologa",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
