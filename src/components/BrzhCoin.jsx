import { Routes, Route, Link } from 'react-router-dom';
import "./BrzhCoin.css"

const BrzhCoin = (props) => {

    return (
        <div className="brzhBalance">
            <span>$BRZH</span><p>{props.balance}</p>
        </div>
    );
};

export default BrzhCoin;