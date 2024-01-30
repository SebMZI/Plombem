import Image from "next/image";
import logoImg from "../assets/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center py-4 px-5">
      <Link href={"/"}>
        <Image src={logoImg} alt="plombem logo" />
      </Link>
      <ul className="flex flex-row gap-10">
        <li>
          <Link href={"/"} className="hover:border-b-2 hover:border-ascent ">
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href={"/#nous-choisir"}
            className="hover:border-b-2 hover:border-ascent "
          >
            Nous Choisir
          </Link>
        </li>
        <li>
          <Link
            href={"/#services"}
            className="hover:border-b-2 hover:border-ascent "
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href={"/#contact"}
            className="hover:border-b-2 hover:border-ascent "
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
