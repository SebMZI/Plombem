import React from "react";
import logoImg from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="phone:px-10  phone:flex-col phone:gap-1 py-[69px] bg-third px-[120px] flex flex-row items-center gap-7 font-medium">
      <Link href="/">
        <Image src={logoImg} alt="plombem logo" />
      </Link>
      <p>&copy; 2024 Plombem Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
