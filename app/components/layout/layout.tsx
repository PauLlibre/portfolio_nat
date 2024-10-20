import Header from "./header";
import "../../globals.css";
import localFont from "next/font/local";
import WhatsAppButton from "../sections/landingPage/whatsapp";
import Footer from "./footer";

// export const metadata = {
//   title: "Natalia Bertran - Portfolio",
//   description: "Portfolio de Natalia Bertran, psicologa",
// };

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#F8F7F1" }}
      >
        <Header />
        <main>{children}</main>
        <WhatsAppButton
          phoneNumber="34722402288"
          message="Hola, me gustaría solicitar más información."
        />
        <Footer />
      </body>
    </html>
  );
}
