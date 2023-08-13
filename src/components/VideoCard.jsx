import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, Hidden } from '@mui/material'
import { checkCircle } from '@mui/icons-material'


import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants'
import videos from './videos'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  
  return (
    <Card sx={{ width: { md: '308px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }} >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ height: 180, width: 380 }} />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography color="white">
            {snippet?.title.slice(0.60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.ChannelId ? `/channel/${snippet?.ChannelId}` : demoChannelUrl}>
          <Typography color="gray">
            {snippet?.ChannelTitle || demoChannelTitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}
export default VideoCard