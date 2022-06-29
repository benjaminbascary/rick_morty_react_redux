import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/LogIn.css';
import {
  Box, 
  Button, 
  Image,
  Spinner
} from '@chakra-ui/react';

export const Login: FC = () => {

  const [ disabled, setDisabled ] = useState<boolean>(false);
  const [ loading, setLoading ] = useState<boolean>(false);
  
  const navigate = useNavigate();
  const handleLogIn = (): void => {
    setLoading(true);
    setDisabled(true);
    setTimeout(() => setDisabled(false), 1300);
    setTimeout(() => setLoading(false), 1300);
    setTimeout(() => navigate('/home'), 1500);
  }

  return (
    <Box className='login-container'>
      <Box className='login-image-button-container'>
        <Image src='./assets/rickandmorty.png' alt='login-pic' />
        <Button
          disabled={disabled}
          onClick={handleLogIn}
          className='login-button'
        >
            E N T E R
        </Button>
        { 
          loading ? (
            <Spinner className='login-loading-spinner'/>
          ) : (
            null
          )
        }
      </Box>
    </Box>
  )
}


export default Login;