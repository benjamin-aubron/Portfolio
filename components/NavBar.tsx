"use client";
import { LuAlignJustify } from "react-icons/lu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useTranslations } from "next-intl";
import { useIsClient } from "@/lib/utils";

export default function NavBar() {
  const t = useTranslations("nav");
  const isClient = useIsClient();
  
  return (
    <div className="fixed z-20 left-1/2 transform -translate-x-1/2 max-w-screen-xl w-full flex items-center justify-between text-white bg-black/80 backdrop-blur border-b-[1px] border-[#1E2029] py-6 px-4">
      <a href="#home" className="flex text-4xl font-semibold">
        <span className="text-[#8F9094]">&#123; </span>
        <span className="hidden lg:flex">Benjamin</span>
        <span className="flex lg:hidden">B</span>
        <span className="text-[#8F9094]"> &#125;</span>
      </a>
      <div className="hidden md:flex items-center text-lg">
        <a
          href="#project"
          className="hover:bg-neutral-800 rounded-md py-2 px-4"
        >
          {t("project")}
        </a>
        <a href="#skills" className="hover:bg-neutral-800 rounded-md py-2 px-4">
          {t("skills")}
        </a>
        <a href="#stack" className="hover:bg-neutral-800 rounded-md py-2 px-4">
          {t("stack")}
        </a>
        <a
          href="#timeline"
          className="hover:bg-neutral-800 rounded-md py-2 px-4"
        >
          {t("timeline")}
        </a>
        <a href="#about" className="hover:bg-neutral-800 rounded-md py-2 px-4">
          {t("about")}
        </a>
        <LanguageSwitch />
      </div>
      <div className="flex md:hidden text-4xl">
        {!isClient ? (
          <button className="cursor-pointer">
            <LuAlignJustify />
          </button>
        ) : (
          <Sheet>
            <SheetTrigger className="cursor-pointer">
              <LuAlignJustify />
            </SheetTrigger>
            <SheetContent>
              <SheetTitle></SheetTitle>
              <div className="flex flex-col gap-1 justify-start text-xl text-neutral-200 pt-10">
                <SheetClose>
                  <a
                    href="#project"
                    className="block w-full h-full hover:bg-neutral-800 rounded-md py-2 px-4 text-left"
                  >
                    {t("project")}
                  </a>
                </SheetClose>
                <SheetClose>
                  <a
                    href="#skills"
                    className="block w-full h-full hover:bg-neutral-800 rounded-md py-2 px-4 text-left"
                  >
                    {t("skills")}
                  </a>
                </SheetClose>
                <SheetClose>
                  <a
                    href="#stack"
                    className="block w-full h-full hover:bg-neutral-800 rounded-md py-2 px-4 text-left"
                  >
                    {t("stack")}
                  </a>
                </SheetClose>
                <SheetClose>
                  <a
                    href="#timeline"
                    className="block w-full h-full hover:bg-neutral-800 rounded-md py-2 px-4 text-left"
                  >
                    {t("timeline")}
                  </a>
                </SheetClose>
                <SheetClose>
                  <a
                    href="#about"
                    className="block w-full h-full hover:bg-neutral-800 rounded-md py-2 px-4 text-left"
                  >
                    {t("about")}
                  </a>
                </SheetClose>
                <SheetFooter className="absolute bottom-6 right-6">
                  <LanguageSwitch />
                </SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </div>
  );
}
