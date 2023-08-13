import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {Sidebar,Videos} from './'
import { fetchFromAPI } from '../utils/fetchfromAPI'

const Feed = () => {

  const [selectedCategory,setSelectedCategory] = useState('New')
  const [videos,setVideos] = useState([])

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
      
    }, [selectedCategory]);


  return (
    <Stack sx={{flexDirection:{
      sx:'coloumn', md:'row'
    }}}>
      <Box sx={{height:{sx:'auto',md:'89vh'},borderRight:'1px solid #3d3d3d',
    px:{sx:0 , md:2}}}>

      <Sidebar 
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />

      <Typography className='copyright' variant='body2' sx={{color:'white'}}>
          copyright 2022 JSM Media
      </Typography>
      </Box>
      <Box p={2} sx={{height:'84vh',flex:2,overflowY:"auto"}}>
          <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}} >
            {selectedCategory  } <span style={{color:'red'}}>Videos</span>
          </Typography>

          <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed