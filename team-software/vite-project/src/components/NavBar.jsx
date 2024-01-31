import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
  return (
    <div className='navigation'>
      <Link to='/'>Page principale</Link>
      <Link to='/about'>À propos</Link>
    </div>
  );
};

export default NavBar;
