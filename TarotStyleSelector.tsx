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
        setSelect(inputElement.value)
    };
    return (
        <div className='w-full flex-col'>

       
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
        <div className='mx-auto w-full flex justify-around'>

            {
                select === 'oneCard' &&
                <div className='w-40 h-72 border-2 '></div>
                
            }
            {
                select === 'threeCards' &&
                <>
                    <div className='w-40 h-72 border-2 '></div>
                    <div className='w-40 h-72 border-2 '></div>
                    <div className='w-40 h-72 border-2 '></div>
                </>
                
            }
     {
    select === 'smallCross' && (
        <div className='grid grid-cols-12'>
            <div className='grid grid-cols-3'>
                <div>X</div>
                <div className='w-40 h-72 border-2'></div>
                <div>O</div>
            </div>
            <div className='grid grid-cols-3'>
                <div className='w-40 h-72 border-2'></div>
                <div>X</div>
                <div className='w-40 h-72 border-2'></div>
            </div>
            <div className='grid grid-cols-3'>
                <div>O</div>
                <div className='w-40 h-72 border-2'></div>
                <div>X</div>
            </div>
            <div className='grid grid-cols-3'>
                <div className='w-40 h-72 border-2'></div>
                <div>O</div>
                <div className='w-40 h-72 border-2'></div>
            </div>
            <div className='grid grid-cols-3'>
                <div>X</div>
                <div className='w-40 h-72 border-2'></div>
                <div className='w-40 h-72 border-2'></div>
            </div>
            <div></div>
        </div>
    )
}


                
            </div>
        </div>
    );
};

export default TarotStyleSelector;
