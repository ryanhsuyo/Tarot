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
        <div className='mx-auto w-full flex justify-around h-full'>

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
        <div className='flex-col w-full bg-indigo-950'>
            <div className='flex justify-between'>
            <div className='w-40 h-72 mx-2'></div>
            <div className='w-40 h-72 border-2 mx-2'></div>
            <div className='w-40 h-72 mx-2'></div>
            </div>
            <div className='flex justify-between'>
            <div className='w-40 h-72 border-2 mx-2'></div>
            <div className='w-40 h-72 border-2 mx-2'></div>
            <div className='w-40 h-72 border-2 mx-2'></div>
            </div>
            <div className='flex justify-between'>
            <div className='w-40 h-72 mx-2'></div>
            <div className='w-40 h-72 border-2 mx-2'></div>
            <div className='w-40 h-72 mx-2'></div>
            </div>
      </div>
    )
}


                
            </div>
        </div>
    );
};

export default TarotStyleSelector;
