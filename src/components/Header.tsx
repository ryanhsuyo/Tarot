import React from "react";
import Link from "next/link";
const fortuneTellingPage: React.FC = () => {
  return (
    <>
      <div className="mx-auto bg-blue-800 w-full h-12 fixed flex justify-between top-0 z-50">
        <div className="flex">
          <div className="flex ml-12 items-center ">
            <Link href="/">Logo</Link>
          </div>
          <div className="flex ml-12 items-center ">
            <Link href="/TarotCardsIntro">1</Link>
          </div>
          <div className="flex ml-12 items-center ">2</div>
          <div className="flex ml-12 items-center ">3</div>
        </div>
        <div className="flex mr-12 items-center ">4</div>
      </div>
    </>
  );
};

export default fortuneTellingPage;
