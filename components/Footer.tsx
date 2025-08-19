import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <section className="bg-black max-w-screen-lg mx-auto px-4 pt-20 pb-80 text-neutral-100">
      <h2 className="text-neutral-100 text-5xl text-center font-bold pb-4">
        Me contacter.
      </h2>
      <div className="text-center text-xl pt-8">
        Développeur Front-end avec{" "}
        <span className="text-[--primaryColor] ">Next.js</span>
      </div>
      <div className="text-center text-xl pb-8">
        N&apos;hésitez pas à me contacter pour discuter de votre projet ou de vos
        besoins.
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-neutral-100 text-lg md:text-xl pt-4">
        <a
          href="https://github.com/benjamin-aubron"
          target="_blank"
          className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg py-2 px-2.5 md:px-4 font-semibold"
        >
          <FaGithub className="text-base md:text-lg text-[--primaryColorDark] " />
          GitHub
        </a>
        <a
          href="resume.pdf"
          target="_blank"
          className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg py-2 px-2.5 md:px-4 font-semibold"
        >
          <PiReadCvLogoFill className="text-base md:text-xl text-[--primaryColorDark] " />
          Mon CV
        </a>
        <a
          href="mailto:benjamin.aubron@outlook.com"
          className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg py-2 px-2.5 md:px-4 font-semibold"
        >
          <MdEmail className="text-base md:text-xl text-[--primaryColorDark] " />
          Email
        </a>
      </div>
    </section>
  );
}
