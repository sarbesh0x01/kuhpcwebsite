'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-border bg-background/70">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Kathmandu University Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl gradient-text">HPC Kathmandu University</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-foreground hover:text-primary font-medium transition duration-300">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary font-medium transition duration-300">
              About
            </Link>
            <Link href="/achievements" className="text-foreground hover:text-primary font-medium transition duration-300">
              Achievements
            </Link>
            <Link href="/team" className="text-foreground hover:text-primary font-medium transition duration-300">
              Our Team
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground rounded-full p-2 hover:bg-muted transition-colors" onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden flex flex-col space-y-4 pb-4 border-t border-border pt-4">
            <Link
              href="/"
              className="text-foreground hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/achievements"
              className="text-foreground hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </Link>
            <Link
              href="/team"
              className="text-foreground hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
