import React, { useState } from 'react';
import TarotCards from '../components/TarotCards';
import tarotback from '../../public/images/IMG.jpeg';
import TarotStyleSelector from './TarotStyleSelector';
import Link from 'next/link';

interface TarotCardProps {
    id: number;
    key: number;
    style: React.CSSProperties;
}

const TarotTableDesk: React.FC = () => {
    const [selectedCard, setSelectedCard] = useState();
    function shuffleArray(array: number[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const numCards = 22;
    const width = 100;
    const height = 380;
    const spreadWidth = 2200; //all w
    const spreadHeight = 750; // all h
    const centerX = spreadWidth / 4; //center circle x
    const centerY = spreadHeight / 2; //center circle y
    const spreadAngle = 120; // degrees
    const spreadRadius = 180; //radius

    const tarotCards = Array(numCards).fill({ image: tarotback });
    const shuffledIdArray = shuffleArray(
        Array.from(Array(numCards), (_, i) => i + 1),
    );

    const cards = shuffledIdArray.map((id, index) => {
        const angle = (index * spreadAngle) / (numCards - 1) - spreadAngle / 2; // rotation angle
        const x = centerX + spreadRadius * Math.cos((angle * Math.PI) / 180);
        const y = centerY + spreadRadius * Math.sin((angle * Math.PI) / 180);
        const zIndex = numCards - index;
        const style = {
            left: `${x - width / 2}px`,
            top: `${y - height / 3}px`,
            zIndex: zIndex,
            transformOrigin: 'right bottom',
            transform: `rotate(${angle}deg) translateY(${
                (index / (numCards - 1)) * -360
            }px)`,
        };
        return (
            <TarotCards
                name="a"
                key={id}
                style={style}
                image={tarotback}
                id={id}
            />
        );
    });

    return (
        <>
            <div className="mx-auto bg-violet-950 w-full tarot-spread p-20">
                <div className="h-96">{cards}</div>
                <div>
                    <TarotStyleSelector />
                </div>
            </div>
        </>
    );
};

export default TarotTableDesk;
