import PropTypes from 'prop-types';
import './NavBarItems.scss';

NavBarItems.propTypes = {
  index: PropTypes.number,
  content: PropTypes.string,
};

export function NavBarItems({ content }) {
  return (
    <button className='navBarItem'>
      <img src={content} />
    </button>
  );
}
