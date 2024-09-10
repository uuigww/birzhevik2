import { Routes, Route, Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = (props) => {

    return (
        <div className="navbar">
            <Link className='navbarLinks' to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="49" viewBox="0 0 52 49" fill="none">
                    <path d="M26 0L51.6785 18.6565L41.8702 48.8435H10.1298L0.321474 18.6565L26 0Z" fill="#555658" />
                </svg>
            </Link>

            <Link className='navbarLinks' to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="49" viewBox="0 0 52 49" fill="none">
                    <path d="M26 0L51.6785 18.6565L41.8702 48.8435H10.1298L0.321474 18.6565L26 0Z" fill="#555658" />
                </svg>
            </Link>

            <Link className='navbarLinks' to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="49" viewBox="0 0 52 49" fill="none">
                    <path d="M26 0L51.6785 18.6565L41.8702 48.8435H10.1298L0.321474 18.6565L26 0Z" fill="#555658" />
                </svg>
            </Link>

            <Link className='navbarLinks' to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="49" viewBox="0 0 52 49" fill="none">
                    <path d="M26 0L51.6785 18.6565L41.8702 48.8435H10.1298L0.321474 18.6565L26 0Z" fill="#555658" />
                </svg>
            </Link>

        </div>
    );
};

export default Navbar;