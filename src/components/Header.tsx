import { useState } from 'react'
import '../styles/Header.css';
import { 
    Box, 
    Button, 
    Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Img,
    Text,
} from '@chakra-ui/react'
import { 
    ChevronDownIcon,
} from '@chakra-ui/icons';

type Disabled = {
    disabled: boolean
}

const Header = () => {
    
    return (
        
    <Box className='header-container'>
        <Heading className='header-heading' style={{margin: '0.5vh 0vh 0vh 0.5vh'}}>Rick & Morty App</Heading>
        <Img className='header-image' src='./assets/logo.ico' alt='logo'/>
        <Menu>
            <MenuButton style={{margin: '1vh 0vh 0vh 0vh'}} as={Button} rightIcon={<ChevronDownIcon />}>
                <Text>MENU</Text>
            </MenuButton>
            <MenuList style={{border: '1px solid grey'}}>
                <MenuItem>About</MenuItem>
                <MenuItem>
                   <a href="https://rickandmortyapi.com/" target='_blank'>Visit the API site!</a> 
                </MenuItem>
            </MenuList>
        </Menu>
    
    </Box>
  )
}

export default Header;