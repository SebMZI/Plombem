import React from "react";
import logoImg from "../assets/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-[69px] bg-third px-[120px] flex flex-row items-center gap-7 font-medium">
      <Image src={logoImg} alt="plombem logo" />
      <p>&copy; 2024 Plombem Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
