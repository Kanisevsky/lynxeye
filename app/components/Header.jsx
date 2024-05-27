import Image from 'next/image';
import React from 'react';
import { logo, navLinks } from '../constants';
import Link from 'next/link';

const Header = () => {
  return (
    <header className=" flex justify-between">
      <div className="flex-shrink-0">
        <Link href="/">
          <Image
            src={logo}
            alt="Lynxeye Logo"
            width={100}
            height={20}
            className="h-auto w-auto"
          />
        </Link>
      </div>

      <nav className="hidden lg:flex">
        <ul className="flex space-x-5">
          {navLinks.map((link) => (
            <li key={link}>
              <p className="text-xl cursor-pointer hover:text-slate-700">
                {link}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
