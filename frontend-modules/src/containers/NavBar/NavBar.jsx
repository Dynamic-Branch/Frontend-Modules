import './NavBar.scss';
import { useState } from 'react';
import { NavBarItems } from '../../components/NavBarItems/NavBarItems';
import { House, Mail, MapPinCheckInside } from 'lucide-react';

export function NavBar() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const navBarItems = [
    {
      title: 'Home',
      icon: <House />,
    },
    {
      title: 'Programări',
      icon: <MapPinCheckInside />,
    },
    {
      title: 'Contact',
      icon: <Mail />,
    },
  ];

  function onMouseEnter() {
    setOpenSideBar(true);
  }

  function onMouseLeave() {
    setOpenSideBar(false);
  }
  return (
    <div
      className={openSideBar ? 'openSideBar' : 'collapsedSideBar'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {navBarItems.map((elem, index) => (
        <NavBarItems key={index} content={elem} isSideBarOpen={openSideBar} />
      ))}
    </div>
  );
}
