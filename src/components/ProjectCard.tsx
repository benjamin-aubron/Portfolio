import { IoGlobeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard() {
  return (
    <div className="bg-neutral-800 text-neutral-200 p-4 rounded-xl">
      <div className="pb-2">
        <img src={null} alt="" className="w-full h-40" />
      </div>
      <h3 className="text-xl font-semibold text-neutral-100">Project name</h3>
      <div className="text-neutral-300">Date</div>
      <div className="pb-1 text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quisquam dolorum laboriosam animi ab nulla!</div>
      <hr className="border-neutral-500" />
      <div className="flex flex-wrap gap-2 py-2">
        <div className="py-1 px-3 bg-neutral-700 rounded">Tech card</div>
        <div className="py-1 px-3 bg-neutral-700 rounded">Tech card</div>
        <div className="py-1 px-3 bg-neutral-700 rounded">Tech card</div>
        <div className="py-1 px-3 bg-neutral-700 rounded">Tech card</div>
        <div className="py-1 px-3 bg-neutral-700 rounded">Tech card</div>
      </div>
      <div className="flex gap-2">
        <a href="" className="flex items-center gap-1 bg-neutral-950 hover:bg-neutral-900 py-1 px-3 rounded">
          <IoGlobeOutline className="text-base" />
          Website</a>
        <a href="" className="flex items-center gap-1 bg-neutral-950 hover:bg-neutral-900 py-1 px-3 rounded">
          <FaGithub className="text-base" />
          Github</a>
      </div>

    </div>
  )
}
