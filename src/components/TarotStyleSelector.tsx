import React, { useState } from "react";
// import dynamic from 'next/dynamic';

const TarotStyleSelector: React.FC = () => {
  // useClient();
  const [select, setSelect] = useState("oneCard");
  const handleChangeSelect: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    const inputElement = event.target as HTMLButtonElement;
    // setSelect(inputElement)
    console.log("123", inputElement);
  };
  return (
    <div>
      <button
        className="tarot-button"
        value="oneCard"
        onClick={handleChangeSelect}
      >
        One Card
      </button>
      {/* <TarotOneCard /> */}
      <button className="tarot-button" value="threeCards">
        Three Cards
      </button>
      <button className="tarot-button" value="smallCross">
        Small Cross
      </button>
    </div>
  );
};

export default TarotStyleSelector;
