import { Stack, Box } from "@mui/material"
import { VideoCard, ChannelCard } from './'
import {useNavigate} from 'react-router-dom'

const videos = ({ videos }) => {

    return (
        <Stack flexDirection="row" flexWrap="wrap" gap={2}>
            {
                videos.map((item, idx) => (
                    <Box key={idx}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {/* {item.id.channelId && <ChannelCard channelDetails={item} />} */}
                    </Box>
                ))
            }
        </Stack>
    )
}

export default videos