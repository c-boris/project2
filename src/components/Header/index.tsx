"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuData from "./menuData";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed z-50 w-full border-b border-body-color/[.15] bg-white/80 backdrop-blur-sm dark:border-white/[.15] dark:bg-gray-dark/80`}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="w-60 max-w-full">
            <Link
              href="/"
              className="group flex items-center text-2xl font-bold text-black transition-colors duration-200 hover:text-primary dark:text-white dark:hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Studio 126
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
            <div className="flex items-center space-x-8">
              {menuData.map((menuItem) => (
                <Link
                  key={menuItem.id}
                  href={menuItem.path || "/"}
                  className={`group relative text-xl transition-colors duration-200 ${
                    pathname === menuItem.path
                      ? "text-primary dark:text-white"
                      : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {menuItem.title}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-primary transition-transform duration-200 group-hover:scale-x-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors duration-200 hover:text-primary dark:text-white dark:hover:text-gray-400"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            <button
              onClick={toggleMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors duration-200 hover:text-primary dark:text-white dark:hover:text-gray-400 md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {menuData.map((menuItem) => (
              <Link
                key={menuItem.id}
                href={menuItem.path || "/"}
                className={`block w-full rounded-md px-3 py-2 text-left transition-all duration-200 ${
                  pathname === menuItem.path
                    ? "text-primary dark:text-white"
                    : "text-dark hover:bg-gray-100 hover:text-primary dark:text-white/70 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {menuItem.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
