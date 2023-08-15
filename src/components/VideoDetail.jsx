import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchfromAPI'

const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetails(data.items[0]));

    fetchFromAPI(`search?part=snippet&q=${id}`)
      .then((data) => setVideos(data.items))
    console.log(videos)
  }, [id]);

  return (
    <Box minHeight='95vh' flexDirection={"row"}>
      <Stack direction={{ xs: 'coloumn', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player" controls />
            <Typography color='white' p={2} variant='h5'>
              {videoDetails?.snippet?.title}
            </Typography>
            <Stack flexDirection={'row'}>
              <Typography variant={{ sm: 'subtitle', md: 'h6' }} color='#fff' px={2}>
                {videoDetails?.snippet?.channelTitle}
              </Typography>
              <Typography color='#fff' px={2}>
                {parseInt(videoDetails?.statistics?.viewCount).toLocaleString()} views
              </Typography>
              <Typography color='#fff' px={2}>
                {parseInt(videoDetails?.statistics?.likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={1} alignItems='center' justifyContent='center'>
          <Videos videos={videos} direction="coloumn" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail