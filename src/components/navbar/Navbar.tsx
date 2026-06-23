"use client";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenuButton from "../buttons/MobileMenuButton";
import MobileMenu from "./MobileMenu";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
        
          <div className="flex-shrink-0 flex">
            <div className="text-[#efffff]">.</div>
   
          </div>
          <DesktopMenu />
          <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;
