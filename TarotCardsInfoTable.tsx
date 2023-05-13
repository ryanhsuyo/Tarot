import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';

const TarotCardTable = () => {
    const tarotCards = [
        {
        name: '愚者',
        image: 'https://example.com/the-fool.jpg',
        keywords: '純真、新的開始',
        uprightMeaning: '新的機會和冒險',
        reversedMeaning: '粗心和魯莽',
        number: '0',
        majorArcana: '愚者牌',
        element: '空氣',
        cost: '無',
        description: '愚者牌的描述',
        interpretation: '愚者牌的解釋',
        zodiac: '無',
        crystal: '無',
        astrologicalSymbol: '無',
        },
        {
        name: '戀人',
        image: 'https://example.com/the-lovers.jpg',
        keywords: '愛情、合一',
        uprightMeaning: '愛情和關係的綜合',
        reversedMeaning: '分裂和選擇的困難',
        number: '6',
        majorArcana: '戀人牌',
        element: '空氣',
        cost: '無',
        description: '戀人牌的描述',
        interpretation: '戀人牌的解釋',
        zodiac: '雙子座',
        crystal: '玫瑰石',
        astrologicalSymbol: '金星',
        },
        {
        name: '力量',
        image: 'https://example.com/strength.jpg',
        keywords: '勇氣、自信',
        uprightMeaning: '內在力量和控制',
        reversedMeaning: '無力和失控',
        number: '8',
        majorArcana: '力量牌',
        element: '火',
        cost: '無',
        description: '力量牌的描述',
        interpretation: '力量牌的解釋',
        zodiac: '獅子座',
        crystal: '黃水晶',
        astrologicalSymbol: '太陽',
        },
        ];

    return (
        <>
  <div className="mx-auto bg-violet-950 w-full tarot-spread p-20">
        <div className=" text-2xl mx-auto w-10/12 mt-12 text-white">塔羅牌簡介</div>
        
        <TableContainer className="w-10/12 mx-auto text-white my-12">
            <Table
                variant="striped"
                colorScheme="teal"
                className="w-10/12 mx-auto"
            >
                {/* <TableCaption>Tarot Card Table</TableCaption> */}
                <Thead>
                    <Tr className="text-white bg-black">
                        <Th>Name</Th>
                        <Th>Image</Th>
                        <Th>Keywords</Th>
                        <Th>Upright Meaning</Th>
                        <Th>Reversed Meaning</Th>
                        <Th>Number</Th>
                        <Th>Major Arcana</Th>
                        <Th>Element</Th>
                        <Th>Cost</Th>
                        <Th>Description</Th>
                        <Th>Interpretation</Th>
                        <Th>Zodiac</Th>
                        <Th>Crystal</Th>
                        <Th>Astrological Symbol</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tarotCards.map((card, index) => (
                        <Tr key={index}>
                            <Td>{card.name}</Td>
                            <Td>
                                {/* <img src={card.image} alt={card.name} width="100" height="150" /> */}
                            </Td>
                            <Td>{card.keywords}</Td>
                            <Td>{card.uprightMeaning}</Td>
                            <Td>{card.reversedMeaning}</Td>
                            <Td>{card.number}</Td>
                            <Td>{card.majorArcana}</Td>
                            <Td>{card.element}</Td>
                            <Td>{card.cost}</Td>
                            <Td>{card.description}</Td>
                            <Td>{card.interpretation}</Td>
                            <Td>{card.zodiac}</Td>
                            <Td>{card.crystal}</Td>
                            <Td>{card.astrologicalSymbol}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
        </div>
        </>
    );
};

export default TarotCardTable;
