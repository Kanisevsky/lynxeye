import Image from 'next/image';
import React from 'react';
import { logo } from '../constants';
const Header = () => {
  return (
    <header className="w-full">
      <div className="">
        <Image src={logo} alt="Lynxeye Logo" width={90} height={20} />
      </div>
      <p className="text-5xl">A trusted guide for your next step.</p>
    </header>
  );
};

export default Header;
