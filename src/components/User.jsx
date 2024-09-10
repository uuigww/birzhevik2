import "./User.css";
import { Routes, Route, Link } from 'react-router-dom';

import BrzhCoin from "./BrzhCoin"

const User = () => {

    return (
        <div className="user">
            <img src={"/profile.png"} alt="" />
            <div>
                <h3>Леонид Агутин</h3>
                <BrzhCoin balance={2000}/>
            </div>
        </div>
    );
};

export default User;