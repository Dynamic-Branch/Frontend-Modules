import './NavBar.scss';
import { useState } from 'react';
import { NavBarItems } from '../../components/NavBarItems/NavBarItems';

export function NavBar() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const navBarItems = [
    {
      title: 'Home',
      icon: 'd:WorkDynamic BranchFrontend-Modules\frontend-modulesassetsimageshome_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg',
    },
    {
      title: 'About',
      icon: 'A',
    },
    {
      title: 'Programări',
      icon: 'P',
    },
    {
      title: 'Contact',
      icon: 'C',
    },
  ];
  console.log(navBarItems);
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
        <NavBarItems key={index} content={elem.icon} />
      ))}
    </div>
  );
}
