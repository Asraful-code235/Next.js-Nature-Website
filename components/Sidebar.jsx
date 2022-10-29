import React from 'react';
import Drawer from 'react-modern-drawer';
import { useStateContext } from '../ContextProvider';
import Link from 'next/link';

const Sidebar = () => {
  const { isOpened, toggleDrawer, setIsOpen } = useStateContext();
  const navlinks = ['home', 'about', 'work', 'team'];

  return (
    <Drawer
      open={isOpened}
      onClose={toggleDrawer}
      direction="left"
      className="bla bla bla grid items-center"
    >
      <ul className="list-none px-10 divide-y divide-green-300 last:text-green-400 ">
        {navlinks.map((nav, index) => (
          <li
            key={nav + index}
            className="my-4  rounded-md hover:bg-slate-200 p-2 transition-all "
          >
            <Link
              onClick={toggleDrawer}
              className="capitalize   text-gray-400 font-light hover:text-gray-800    "
              href={`#${nav}`}
            >
              {nav}
            </Link>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default Sidebar;
