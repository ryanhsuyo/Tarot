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
            name: 'The Fool',
            image: 'https://example.com/the-fool.jpg',
            keywords: 'Innocence, New beginnings',
            uprightMeaning: 'New opportunities and adventures',
            reversedMeaning: 'Carelessness and recklessness',
            number: '0',
            majorArcana: 'The Fool',
            element: 'Air',
            cost: 'None',
            description: 'Description of the Fool card',
            interpretation: 'Interpretation of the Fool card',
            zodiac: 'None',
            crystal: 'None',
            astrologicalSymbol: 'None',
        },
        // Add more tarot cards here
    ];

    return (
        <TableContainer className="w-10/12 mx-auto">
            <Table
                variant="striped"
                colorScheme="teal"
                className="w-10/12 mx-auto"
            >
                <TableCaption>Tarot Card Table</TableCaption>
                <Thead>
                    <Tr>
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
    );
};

export default TarotCardTable;
