import PropTypes from 'prop-types';
import './NavBarItems.scss';

NavBarItems.propTypes = {
  isSideBarOpen: PropTypes.boolean,
  content: PropTypes.string,
};

export function NavBarItems({ content, isSideBarOpen }) {
  return (
    <button className='navBarItem'>
      <p className='sideBarIcon1'>{content.icon}</p>
      {isSideBarOpen ? <p className='sideBarIcon2'>{content.title}</p> : null}
    </button>
  );
}
