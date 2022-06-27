import { Avatar, Badge, Box, Container, Grid, Heading, ListIcon, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import { rickAndMortyAPIcaller } from '../services/apiCaller';
import { APIInterface } from '../types/apiResponses';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import { Character } from './Character';
import '../styles/Home.css';

const Home = (): JSX.Element => {

  const [data, setData] = useState<APIInterface>();
  const [loading, setLoading] = useState<boolean>(true);
  const [server, setServer] = useState(false);

  const loadData = async () => {
    const result = rickAndMortyAPIcaller.getCharacters()
    setData(await result);
  }

  useEffect(() => {
    loadData();
    if(!data) {
      setLoading(false);
      setServer(true);
    }
  }, [])

  return (
    <Box className='home-container'>
      <Box className='server-status-container'>
        Server status: 
        {
          server ? (
            <CheckCircleIcon marginLeft='1vh' />
          ) : (
            <WarningIcon marginLeft='1vh' />
          )
        }
      </Box>
      <Grid className='characters-container' gap={6}>
        {
          data ? (
            data.results.map(eachCharacter => {
              return (
                <Character key={eachCharacter.id} {...eachCharacter} />
              )
            })
            
          ) : (
          <div>askkads</div>
          )
        }  
      </Grid>
      
      {
        data &&
         <Box className='data-info-container'>
          <Text fontWeight='bold' color="white">Count: {data.info.count}</Text>
         </Box>
      }
    </Box>
  )
}

export default Home;