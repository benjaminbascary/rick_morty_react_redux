import { Box, Grid, Text } from '@chakra-ui/react';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import { Character } from './Character';
import { useApiData } from '../hooks/useApiData';
import '../styles/Home.css';

const Home = (): JSX.Element => {

  const [data, loading, server] = useApiData();

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
      {
        data &&
         <Box className='data-info-container'>
          <Text fontWeight='bold' color="white">Count: {data.info.count}</Text>
         </Box>
      }
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
    </Box>
  )
}

export default Home;