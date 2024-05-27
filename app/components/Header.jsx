import Image from 'next/image';
import React from 'react';
import { logo, navLinks } from '../constants';

const Header = () => {
  return (
    <header className="w-full flex justify-between">
      <Image src={logo} alt="Lynxeye Logo" width={90} height={20} />
      <nav>
        <ul className="flex space-x-5">
          {navLinks.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
