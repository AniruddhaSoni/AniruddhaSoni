import Image from "next/image";
import Heading from "./global/Heading";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 flex w-10/12 m-auto items-center md:justify-between flex-col-reverse md:flex-row lg:min-h-screen"
    >
      <div className="md:w-1/2">
        <Heading heading="About" />
        <p className="text-lg md:text-xl lg:text-2xl mt-6">
          Hi, I am Anirudh Soni. I&apos;m a enthusiast developer from Rajasthan
          who focuses on user interfaces, including rich experiences, design
          systems, and command line tools. I like to create surprises and
          delights for others.
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
