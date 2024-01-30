"use client";
import Image from "next/image";
import logoImg from "../assets/logo.svg";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-primary transition ease transform duration-300 z-30 `;
  return (
    <header className="flex flex-row justify-between items-center py-4 px-5">
      <Link href={"/"}>
        <Image src={logoImg} alt="plombem logo" className="phone:w-3/4" />
      </Link>
      <nav className="flex flex-row items-center">
        <button
          className="flex flex-col h-12 w-12  justify-center items-center group laptop:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <div
            className={`${genericHamburgerLine} ${
              toggle
                ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100"
                : "opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              toggle ? "opacity-0" : "opacity-100 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              toggle
                ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                : "opacity-100"
            }`}
          />
        </button>
        <ul
          onClick={() => setToggle(!toggle)}
          className={`text-white laptop:relative laptop:w-auto laptop:h-auto laptop:flex-row gap-6 transition laptop:flex justify-center items-center ${
            toggle
              ? "phone:flex phone:fixed phone:inset-0 phone:flex-col phone:w-screen  phone:h-screen phone:bg-[#FFFFFF] phone:z-20   transition-all"
              : "phone:hidden"
          }`}
        >
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
      </nav>
    </header>
  );
};

export default Header;
