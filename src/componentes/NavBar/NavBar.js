import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/' className="navbar-title">
                <h1>Ecommerce de Leidys</h1>
            </Link>

            <div className='Categories'>

                <NavLink to={`/category/Celulares`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>

                <NavLink to={`/category/Notebook`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Notebook</NavLink>

                <NavLink to={`/category/Tablets`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
