import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plombem - Votre Partenaire Plomberie de Confiance",
  description:
    "Découvrez les services professionnels de plomberie de Plombem. Experts en dépannage, réparation et installation de plomberie. Contactez-nous pour des solutions rapides et efficaces.",
  openGraph: {
    title: "Plombem - Votre Partenaire Plomberie de Confiance",
    description:
      "Découvrez les services professionnels de plomberie de Plombem. Experts en dépannage, réparation et installation de plomberie. Contactez-nous pour des solutions rapides et efficaces.",
    url: "https://www.sebastien-morazzani.com",
    siteName: "Plombem",
    images: [
      {
        url: "https://plombem.vercel.app/imgOG.jpg",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} max-w-[1280px]  m-auto w-full `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
