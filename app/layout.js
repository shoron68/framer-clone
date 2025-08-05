
import "./globals.css";
import Nav from "./components/Nav";
import { Archivo, Inter } from "next/font/google";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300' ,'400', '500', '600','700','800','900'],
  variable: '--font-inter',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['100', '200', '300' ,'400', '500', '600','700','800','900'],
  variable: '--font-archivo',
});



export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body  >
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
