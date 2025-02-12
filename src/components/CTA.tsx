import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";


export default function CTA() {
  return (
    <div id="home" className='relative max-w-screen-xl mx-auto pt-20 px-6 h-screen'>
      <div>
        <div className='text-[--primaryColorDark] text-2xl md:text-4xl font-semibold pt-20'>Hey there 👋 ! I'm</div>
        <h1 className='text-neutral-100 font-extrabold text-6xl md:text-8xl pt-0 py-4 lg:py-10'>Benjamin AUBRON</h1>
        <h2 className='text-neutral-500 text-2xl md:text-5xl font-semibold max-w-screen-lg py-4 lg:py-6'><span className='text-neutral-100'>Next.js Front-end Engineer.</span> Huge interest in building things. I'm looking for new challenges.</h2>
        <div className='text-neutral-400 text-lg md:text-3xl font-medium py-12'>👩🏻‍💻 Currently specializing in Frontend (React / Next)</div>
        <div className="flex flex-wrap items-center justify-start gap-3 md:gap-6 text-neutral-100 text-lg md:text-xl pt-4">
          <a href="" className='flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg py-2 px-2.5 md:px-4 font-semibold'>
            <FaGithub className="text-base md:text-lg text-[--primaryColorDark] "/>
            GitHub</a>
          <a href="" className='flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg py-2 px-2.5 md:px-4 font-semibold'>
            <PiReadCvLogoFill className="text-base md:text-xl text-[--primaryColorDark] "/>
            Resume</a>
          <a href="" className='flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg py-2 px-2.5 md:px-4 font-semibold'>
            <MdEmail className="text-base md:text-xl text-[--primaryColorDark] "/>
             Email</a>
        </div>
      </div>
      <div className='absolute hidden xl:flex bg-neutral-800 w-28 md:w-52 h-28 md:h-52 right-4 xl:right-0 top-48'>
        <img src="null" alt="my face" />
      </div>
    </div>
  )
}
