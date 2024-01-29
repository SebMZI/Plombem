import Image from "next/image";
import logoImg from "../assets/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center py-4">
      <Image src={logoImg} alt="plombem logo" />
      <ul className="flex flex-row gap-10">
        <li>
          <Link href={"/"}>Accueil</Link>
        </li>
        <li>
          <Link href={"/#nous-choisir"}>Nous Choisir</Link>
        </li>
        <li>
          <Link href={"/#services"}>Services</Link>
        </li>
        <li>
          <Link href={"/#contact"}>Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
