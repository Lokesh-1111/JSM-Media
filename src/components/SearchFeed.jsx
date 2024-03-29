import {useState, useEffect} from 'react'
import {Box, Typography} from '@mui/material'
import {Videos} from './'
import { fetchFromAPI } from '../utils/fetchfromAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {

  const [videos,setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      
    }, [searchTerm]);


  return (
    <Box p={2} sx={{height:'84vh',flex:2,overflowY:"auto"}}>
          <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}} >
            Search Results <span style={{color:'red'}}>{searchTerm}</span> Videos
          </Typography>

          <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed