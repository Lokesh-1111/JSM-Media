import { Stack, Box } from "@mui/material"
import {VideoCard , ChannelCard} from './'

const videos = ({ videos }) => {
    console.log(videos.slice(0,1))
      return (
        <Stack flexDirection="row" flexWrap="wrap" justifyContent="start" gap={2}>
            {
                videos.map((item,idx)=>(
                    // console.log(item)
                    <Box key={idx}>
                        {item.id.videoId && <VideoCard video={item}/>}
                        {/* {item.id.channelId && <ChannelCard channelDetails={item} />} */}
                    </Box>
                ))
            }
        </Stack>
      )
}

export default videos