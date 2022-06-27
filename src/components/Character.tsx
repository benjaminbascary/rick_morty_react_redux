import { Avatar, Box, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Character as CharacterProps } from '../types/apiResponses';
import '../styles/Character.css';

export const Character = ( character : CharacterProps): JSX.Element => {

  const [aliveColor, setAliveColor] = useState<string>();
  useEffect(() => {
    if (character.status === 'Alive') {
      setAliveColor('green');
    } else if (character.status === 'Dead') {
      setAliveColor('red');
    } else {
      setAliveColor('grey')
    }
  }, [])

  return (
    <Box className='single-character-container'>
        <Box>
            <Avatar src={character.image} />
        </Box>
        <Box margin='1vh'>
            <Text fontWeight='bold' fontSize='2.2vh'>{character.name}</Text>
            <Box className='sub-info-character-container'>
              <Box borderRadius='50%' width='10px' height='10px' backgroundColor={aliveColor} margin='0vh 1vh 0vh 0vh'></Box>
              <Text>{character.status} - {character.species}</Text>
            </Box>
        </Box>
    </Box>
  )
}
