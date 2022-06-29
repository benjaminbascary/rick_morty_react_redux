import { useEffect, useState } from 'react';
import { Character as CharacterProps } from '../types/apiResponses';
import { characterStatusHandler } from '../helpers/characterStatus';
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
  Button,
  Flex,
  Image
} from '@chakra-ui/react';

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

        <Modal size='2xl' isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom' scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='character-modal-header'>{character.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody className='character-modal-body'>
            <Image className='character-modal-image' src={character.image} />
            <Box className='character-modal-info-container'>
              <Text><strong>Origin: </strong>{character.origin.name}</Text>
            </Box>
          </ModalBody>
          <ModalFooter display='flex' alignItems='center' justifyContent='center'>
            <Button width='30vh' size='lg' colorScheme='green' mr={3} onClick={onClose} variant='outline'>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
