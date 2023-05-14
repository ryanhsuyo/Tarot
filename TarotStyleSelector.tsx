import React, { useState } from 'react';
// import dynamic from 'next/dynamic';

const TarotStyleSelector: React.FC = () => {
    // useClient();
    const [select, setSelect] = useState('oneCard');
    const handleChangeSelect: React.MouseEventHandler<HTMLButtonElement> = (
        event,
    ) => {
        const inputElement = event.target as HTMLButtonElement;
        console.log('now style', inputElement.value);
    };
    return (
        <div>

       
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
            {
                select === 'oneCard' &&
                <div className='w-40 h-72 border-2 '></div>
                
            }
        </div>
    );
};

export default TarotStyleSelector;
