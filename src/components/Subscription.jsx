import React, { useState } from 'react';
import './Subscription.css';

const Subscription = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPriceVisible, setIsPriceVisible] = useState(false);
    const [isDefault, setIsDefault] = useState(true);

    const handleExpandToggle = () => {
        setIsExpanded(!isExpanded);
        setIsDefault(true)
        setIsPriceVisible(false); // При открытии/закрытии текста скрыть ценники
    };

    const handleShowPrices = () => {
        setIsPriceVisible(!isPriceVisible);
        setIsDefault(!isDefault)
        setIsExpanded(false); // При отображении цен скрыть текст
    };

    const background = isPriceVisible
        ? 'linear-gradient(135deg, #B62DAB50 0%, #B62DAB10 46%, #B62DAB50 86%)'
        : 'linear-gradient(135deg, #AEAEAE60 0%, #AEAEAE15 26%, #AEAEAE05 38%, #AEAEAE10 54%, #AEAEAE20 66%, #AEAEAE60 100%)';

    return (
        <div className={`subscription ${isExpanded ? 'expanded' : ''} ${isPriceVisible ? 'show-prices' : ''}`} style={{ background }} key={props.subscription.id}>
            {isDefault && (
                <div className='subContent'>
                    <img src={`${props.subscription.id}.png`} alt={props.subscription.title} />
                    <p>{props.subscription.title}</p>
                    <button onClick={handleShowPrices} className="show-prices-button"><img src="/wallet.png" alt="" />Оформить</button>
                </div>
            )}
            {isExpanded && (
                <div className="description">
                    <div
                        dangerouslySetInnerHTML={{ __html: props.subscription.description }}
                    />
                </div>
            )}
            {isPriceVisible && (
                <><p className='price-title'>Вы хотите оформить подписку {props.subscription.title} на:</p>
                    <div className="prices">
                        {/* Ценники */}

                        <div className='price'>
                            <p>1 месяц</p>
                            <a className="buy-btn"><img src="/wallet.png" alt="" />{props.subscription.price.m1}</a>
                        </div>

                        <div className='price'>
                            <p>3 месяца</p>
                            <a className="buy-btn"><img src="/wallet.png" alt="" />{props.subscription.price.m3}</a>
                        </div>

                        <div className='price'>
                            <p>6 месяцев</p>
                            <a className="buy-btn"><img src="/wallet.png" alt="" />{props.subscription.price.m6}</a>
                        </div>
                    </div>
                </>
            )}
            {!isPriceVisible && (
                <button onClick={handleExpandToggle} className={`toggle-button ${isExpanded ? 'flipped' : ''}`}>
                    {isExpanded
                        ? <svg width="56" height="12" viewBox="0 0 56 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.2841 0.561805C28.0784 0.326459 28.9131 0.779575 29.1484 1.57387C29.3837 2.36816 28.9306 3.20285 28.1363 3.4382L27.2841 0.561805ZM0.284073 8.5618L27.2841 0.561805L28.1363 3.4382L1.13634 11.4382L0.284073 8.5618Z" fill="white" />
                            <path d="M28.1363 0.5618C27.342 0.326453 26.5074 0.77957 26.272 1.57386C26.0367 2.36816 26.4898 3.20285 27.2841 3.43819L28.1363 0.5618ZM55.1363 8.5618L28.1363 0.5618L27.2841 3.43819L54.2841 11.4382L55.1363 8.5618Z" fill="white" />
                        </svg>

                        : <svg width="56" height="12" viewBox="0 0 56 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.1363 11.4382C27.342 11.6735 26.5074 11.2204 26.272 10.4261C26.0367 9.63184 26.4898 8.79715 27.2841 8.5618L28.1363 11.4382ZM55.1363 3.4382L28.1363 11.4382L27.2841 8.5618L54.2841 0.561803L55.1363 3.4382Z" fill="white" />
                            <path d="M27.2841 11.4382C28.0784 11.6735 28.9131 11.2204 29.1484 10.4261C29.3837 9.63184 28.9306 8.79715 28.1363 8.5618L27.2841 11.4382ZM0.284073 3.4382L27.2841 11.4382L28.1363 8.5618L1.13634 0.561803L0.284073 3.4382Z" fill="white" />
                        </svg>
                    }
                </button>
            )}

        </div>
    );
};

export default Subscription;
