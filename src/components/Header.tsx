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
import { useNavigate } from 'react-router-dom';


const Header = () => {
    
    const navigate = useNavigate();

    const handleLogOut = (route: string) => {
        console.log(navigate);
        navigate(route);
    }

    return (
    <Box className='header-container'>
        <Heading 
            className='header-heading' 
            style={{margin: '0.5vh 0vh 0vh 0.5vh'}}
        >Rick & Morty App
        </Heading>
        <Img className='header-image' src='./assets/logo.ico' alt='logo'/>
        <Menu>
            <MenuButton 
                style={{margin: '1vh 0vh 0vh 0vh', width: '20vh', height: '6vh', color: 'black'}} 
                as={Button} 
                rightIcon={<ChevronDownIcon />}
            >
            <Text>MENU</Text>
            </MenuButton>
            <MenuList style={{border: '1px solid grey', color: 'black'}}>
                <MenuItem>
                    <Button 
                        variant='ghost'
                        onClick={() => handleLogOut('/about')}
                    >About
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button variant='ghost'>
                        <a href="https://rickandmortyapi.com/" target='_blank'>API</a>
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button 
                        variant='ghost' 
                        onClick={() => handleLogOut('/')}
                    >EXIT
                    </Button>
                </MenuItem>
            </MenuList>
        </Menu>
    
    </Box>
  )
}

export default Header;