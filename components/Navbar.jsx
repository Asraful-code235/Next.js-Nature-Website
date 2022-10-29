import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import MobileNav from './MobileNav';
import Drawer from 'react-modern-drawer';

import { useStateContext } from '../ContextProvider';
import Sidebar from './Sidebar';

const Navbar = () => {
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0';
      } else {
        document.getElementById('navbar').style.top = '-300px';
        document.getElementById('navbar').style.transition = '0.3s ease-in-out';
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  const navlinks = ['home', 'about', 'work', 'team'];

  return (
    <div id="navbar" className="fixed right-0 left-0 top-0 bg-white z-50">
      <nav className="flex   justify-between items-center py-4 md:px-24 lg:px-24 px-6 border-collapse">
        <div className="flex items-center ">
          <Image src={'/logo.jpg'} alt="logo" width={35} height={35} />
          <Link href={'/'}>Nature</Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-4 items-center justify-center   ">
            {navlinks.map((nav, index) => (
              <li
                key={nav + index}
                className=" rounded-md hover:bg-slate-200 p-2 transition-all "
              >
                <Link
                  className="capitalize text-gray-400 font-light hover:text-gray-800    "
                  href={`#${nav}`}
                >
                  {nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center ">
          <button className="btn btn-success text-slate-100 hidden sm:block md:block lg:block">
            Donation
          </button>
          <MobileNav />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
