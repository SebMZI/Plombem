import React from "react";
import Image from "next/image";

const Services = ({ image, name, desc }) => {
  return (
    <article className="uppercase flex flex-col justify-center items-center">
      <Image src={image} alt={desc} height={285} className="mb-5" />
      <h2 className="text-center text-secondary font-semibold text-lg">
        {name}
      </h2>
      <p className="text-third w-4/6 text-center">{desc}</p>
    </article>
  );
};

export default Services;
