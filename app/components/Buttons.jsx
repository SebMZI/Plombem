import Link from "next/link";

const Buttons = ({ linkTo, name }) => {
  return (
    <Link
      href={linkTo}
      className="bg-ascent text-[#FFFFFF] px-4 py-3.5 rounded-lg"
    >
      {name}
    </Link>
  );
};

export default Buttons;
