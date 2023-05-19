import React from 'react';
import Link from 'next/link';
const fortuneTellingPage: React.FC = () => {
    return (
        <>
            <div className="mx-auto bg-gray-900 w-full h-20 fixed flex justify-between top-0 z-50">
                <div className="flex w-10/12 text-white mx-auto">
                    <div className="flex  items-center px-10">
                        <Link href="/">Logo</Link>
                    </div>
                    <div className="w-8/12 flex">
                        <div className="flex items-center px-10">
                            <Link
                                className=" hover:text-teal-400"
                                href="/TarotCardsIntroPage"
                            >
                                塔羅牌介紹
                            </Link>
                        </div>
                        <div className="flex items-center px-10">
                            <Link
                                className=" hover:text-teal-400"
                                href="/FortuneTellingPage"
                            >
                                塔羅牌算命
                            </Link>
                        </div>
                        <div className="flex items-center px-10">
                            <Link
                                className=" hover:text-teal-400"
                                href="/StorePage"
                            >
                                商店
                            </Link>
                        </div>
                        <div className="flex  items-center px-10">3</div>
                    </div>
                </div>
                <div className="flex items-center ">4</div>
            </div>
        </>
    );
};

export default fortuneTellingPage;
