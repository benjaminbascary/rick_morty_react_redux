import React, { FC } from 'react'
import {Box, Button, Image} from '@chakra-ui/react';
import '../styles/LogIn.css';

export const Login: FC = () => {
  return (
    <Box className='login-container'>
      <Box className='login-image-button-container'>
        <Image src='./assets/rickandmorty.png' alt='login-pic' />
        <Button className='login-button'>E N T E R</Button>
      </Box>
      
    </Box>
  )
}


export default Login;