import { Avatar, Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Character as CharacterProps } from '../types/apiResponses';
import '../styles/Character.css';

export const Character = ( character : CharacterProps): JSX.Element => {
  return (
    <Box className='single-character-container'>
        <Box>
            <Avatar src={character.image} />
        </Box>
        <Box margin='1vh'>
            <Text fontWeight='bold'>{character.name}</Text>
        </Box>
    </Box>
  )
}
