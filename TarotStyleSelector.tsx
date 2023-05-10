import React, { useState } from 'react';
// import dynamic from 'next/dynamic';

const TarotStyleSelector: React.FC = () => {
    // useClient();
    const [select, setSelect] = useState('oneCard');
    const handleChangeSelect: React.MouseEventHandler<HTMLButtonElement> = (
        event,
    ) => {
        const inputElement = event.target as HTMLButtonElement;
        console.log('123', inputElement.value);
    };
    return (
        <div className="flex w-full justify-around my-12 text-white font-semibold">
            <button
                className={`tarot-button hover:text-teal-300 shadow ${
                    select === 'oneCard' && 'active:shadow-md'
                }`}
                value="oneCard"
                onClick={handleChangeSelect}
            >
                One Card
            </button>
            {/* <TarotOneCard /> */}
            <button
                className="tarot-button hover:text-teal-300"
                value="threeCards"
                onClick={handleChangeSelect}
            >
                Three Cards
            </button>
            <button
                className="tarot-button hover:text-teal-300"
                value="smallCross"
                onClick={handleChangeSelect}
            >
                Small Cross
            </button>
        </div>
    );
};

export default TarotStyleSelector;
