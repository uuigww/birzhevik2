import { Routes, Route, Link } from 'react-router-dom';
import "./Header.css"

const Header = (props) => {

    return (
        <div className="header">
            <Link className='headerLinks' to="/">
                <img src="/profileG.png" alt="" />
            </Link>
            <p>{props.title}</p>
            <Link className='headerLinks' to="/">
                <img src="/supportG.png" alt="" />
            </Link>
        </div>
    );
};

export default Header;