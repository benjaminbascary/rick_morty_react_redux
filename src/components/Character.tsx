import React, { useEffect, useState } from 'react';
import { Character as CharacterProps } from '../types/apiResponses';
import '../styles/Character.css';
import { 
  Avatar,
  Box,
  Heading,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react';
import { characterStatusHandler } from '../helpers/characterStatus';
import aliveStatusType from '../types/aliveStatus';

export const Character = ( character : CharacterProps): JSX.Element => {

  const [aliveColor, setAliveColor] = useState<string>();
  const {isOpen, onOpen, onClose} = useDisclosure();

  useEffect(() => {
    setAliveColor(characterStatusHandler.getStatusColor(character.status));
  }, [character.status])

  return (
    <Box className='single-character-container'>
        <Box>
            <Avatar src={character.image} />
        </Box>
        <Box margin='1vh'>
            <Text onClick={onOpen} className='single-character-name' fontWeight='bold' fontSize='2.2vh'>{character.name}</Text>
            <Box className='sub-info-character-container'>
              <Box borderRadius='50%' width='10px' height='10px' backgroundColor={aliveColor} margin='0vh 1vh 0vh 0vh'></Box>
              <Text>{character.status} - {character.species}</Text>
            </Box>
            <Text fontSize='small' color='grey'>Last known location:</Text>
            <Text fontSize='small'>{character.location.name}</Text>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    
    </Box>
  )
}
