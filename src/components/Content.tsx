import Form from "./Form";

interface ContentProps {
  className?: string;
}

function Content({ className }: ContentProps) {
  return (
    <div
      className={`ps-[10%] w-[90%] md:w-[60%] lg:w-[50%] flex flex-col justify-center ${className}`}
    >
      <div className="mb-[20%] md:mb-0 text-center md:text-start">
        <h1 className="text-5xl font-bold">
          Beautiful <br /> places to explore
        </h1>
        <p className="text-xs my-4">
          Ensuring that the Worl Heritage sites sustain their outstanding
          universal value is an increasingly channgenging mission.
        </p>
        <Form />
      </div>
    </div>
  );
}

export default Content;
