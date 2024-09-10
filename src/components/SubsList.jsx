import React, { useState } from 'react';
import './SubsList.css';
import Subscription from './Subscription';

const SubsList = ({ subscriptions }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="subs-list">
            {subscriptions.map((sub, index) => (
                <div key={sub.id} onClick={() => handleToggle(index)}>
                    <Subscription
                        subscription={sub}
                        isActive={activeIndex === index}
                    />
                </div>
            ))}
        </div>
    );
};

export default SubsList;
