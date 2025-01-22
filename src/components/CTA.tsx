import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";


export default function CTA() {
  return (
    <div className='relative max-w-screen-xl mx-auto px-4'>
      <div>
        <div className='text-[--primaryColorDark] text-lg md:text-4xl font-semibold mt-20'>Hey there 👋 ! I'm</div>
        <h1 className='dark:text-neutral-100 font-extrabold text-5xl md:text-7xl py-4 lg:py-10'>Benjamin AUBRON</h1>
        <h2 className='dark:text-neutral-500 text-base md:text-4xl font-semibold max-w-screen-md py-4 lg:py-6'><span className='dark:text-neutral-100'>Next.js Front-end Engineer.</span> Huge interest in building things. I'm looking for new challenges.</h2>
        <div className='dark:text-neutral-400 text-xs md:text-2xl font-medium py-4'>👩🏻‍💻 Currently learning Nuxt.js</div>
        <div className="flex flex-wrap items-center justify-start gap-3 md:gap-6 dark:text-neutral-100 pt-4">
          <a href="" className='flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg py-2 px-2.5 md:px-4 text-xs md:text-base font-semibold'>
            <FaGithub className="text-base md:text-lg text-[--primaryColorDark] "/>
            GitHub</a>
          <a href="" className='flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg py-2 px-2.5 md:px-4 text-xs md:text-base font-semibold'>
            <PiReadCvLogoFill className="text-base md:text-xl text-[--primaryColorDark] "/>
            Resume</a>
          <a href="" className='flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg py-2 px-2.5 md:px-4 text-xs md:text-base font-semibold'>
            <MdEmail className="text-base md:text-xl text-[--primaryColorDark] "/>
             Email</a>
        </div>
      </div>
      <div className='absolute hidden lg:flex bg-neutral-800 w-28 md:w-52 h-28 md:h-52 right-4 xl:right-0 -top-10 xl:top-0'>
        <img src="null" alt="my face" />
      </div>
    </div>
  )
}
