import React from "react";
import Image from "next/image";

const Services = ({ image, name, desc }) => {
  return (
    <article className="uppercase flex flex-col justify-center items-center">
      <Image src={image} alt={desc} height={285} className="mb-5" />
      <h2 className="text-center text-secondary font-semibold text-lg phone:text-base">
        {name}
      </h2>
      <p className="text-third w-5/6 text-center phone:text-sm">{desc}</p>
    </article>
  );
};

export default Services;
