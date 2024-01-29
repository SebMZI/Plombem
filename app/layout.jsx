import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plombem - Votre Partenaire Plomberie de Confiance",
  description:
    "Découvrez les services professionnels de plomberie de Plombem. Experts en dépannage, réparation et installation de plomberie. Contactez-nous pour des solutions rapides et efficaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} max-w-screen-lg m-auto `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
