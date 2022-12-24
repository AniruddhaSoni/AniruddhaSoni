import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex w-10/12 m-auto items-center md:justify-between flex-col-reverse md:flex-row"
    >
      <div className="md:w-1/2">
        <h1 className="text-4xl lg:text-8xl font-extrabold text-accent">
          About
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-6">
          Aniruddh Soni is my name. I&apos;m a talented developer from Rajasthan
          who focuses on user interfaces, including rich experiences, design
          systems, and command line tools. I like to create surprises and
          delights for others. The internet as a medium for artistic expression
          piques my attention. Numerous possibilities are made possible by
          improvements in hardware and local web technologies as well as by the
          internet&apos;s shared-by-default structure. There is still plenty to
          learn about this area, which I have thoroughly loved visiting thus
          far.
        </p>

        <p className="text-lg md:text-xl lg:text-2xl mt-6">
          The internet as a medium for artistic expression piques my attention.
          Numerous possibilities are made possible by improvements in hardware
          and local web technologies as well as by the internet&apos;s
          shared-by-default structure. There is still plenty to learn about this
          area, which I have thoroughly loved visiting thus far.
        </p>
      </div>
      <div className="w-[60vw] md:w-1/2 flex justify-center py-10 md:py-0">
        <Image
          src={"/images/computer.svg"}
          alt=""
          height={364.09}
          width={624}
        />
      </div>
    </section>
  );
}
