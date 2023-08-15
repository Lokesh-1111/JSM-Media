import { Stack, Box } from "@mui/material"
import { VideoCard} from './'

const videos = ({ videos,direction }) => {
    if(!videos?.length) return 'Loading...';

    return (
        <Stack flexDirection={direction||"row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
            {
                videos.map((item, idx) => (
                    <Box key={idx}>
                        {item.id.videoId && <VideoCard video={item} />}
                    </Box>
                ))
            }
        </Stack>
    )
}

export default videos