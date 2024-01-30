import Rating from "@mui/material/Rating";

const Advise = ({ value, name, advise }) => {
  return (
    <article className="bg-[#FFFFFF] rounded-lg p-5 laptop:w-80 phone:w-72">
      <div className="flex flex-row gap-2 items-center mb-3">
        <h2 className="font-bold">{name}</h2>
        <Rating name="read-only" value={value} readOnly />
      </div>
      <p className="text-sm">{advise}</p>
    </article>
  );
};

export default Advise;
