import React from "react";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

type TarotCardProps = {
  id: number;
  name: string;
  image: StaticImageData;
  style: React.CSSProperties;
  //   key: number;
};

const TarotCards: React.FC<TarotCardProps> = ({ id, image, style }) => {
  const [idToShow, setIdToShow] = useState("");
  const handleClickCard = () => {
    console.log("點這張卡", id);
  };
  useEffect(() => {
    setIdToShow(String(id));
  }, [id]);

  return (
    <div className="tarot-card" style={style}>
      <Image
        // id={id}
        src={image}
        alt="tarot card"
        layout="responsive"
        objectFit="cover"
        className="tarot-card-img object-fill h-full top-20"
        onClick={handleClickCard}
      />
    </div>
  );
};

export default TarotCards;
