"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevents hydration issues

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src="/header-bg-color.png"
          alt=""
          width={1200}
          height={200}
          className="w-full"
        />
      </div>

      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-transparent"
      >
        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition">
          Swetha
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 dark:bg-gray-800">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/work">Work</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <Image
              src={theme === "light" ? "/moon_icon.png" : "/sun_icon.png"}
              alt="Theme Toggle"
              width={20}
              height={20}
            />
          </button>

          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-3 px-6 py-2.5 border border-gray-500 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact
            <Image src="/arrow-icon.png" alt="Arrow" width={12} height={12} />
          </Link>

          <button onClick={() => setIsMenuOpen(true)} className="block md:hidden ml-3">
            <Image src="/menu-black.png" alt="Menu" width={20} height={20} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex md:hidden flex-col gap-6 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-white dark:bg-gray-900 shadow-lg"
          >
            <div
              className="absolute right-6 top-6 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image src="/close-black.png" alt="Close" width={20} height={20} />
            </div>

            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link href="/work" onClick={() => setIsMenuOpen(false)}>Work</Link></li>
            <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
