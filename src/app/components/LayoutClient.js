"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Nav_menu from "./Nav_Menu/nav_menu";

export default function LayoutClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Nav_menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
}