import { Stack } from "@mui/material"
import { Box } from "@mui/system"
import { Avatar } from "@mui/material"
import { LikeAndComments } from "./LikeAndComments"


export const ProfilCard = ({id}) => {
    return (
        <Stack>
            <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Stack flexDirection={"row"} gap={5} alignItems={"center"} >
                <Avatar alt="Remy Sharp" src="./src/assets/serhat.jpg" />
                <Box>koc.serhatt</Box>
                </Stack>
                <Box>...</Box>
                </Stack>
            <Stack height="300px" width="500px" margin={"auto"} >
            <img src={`https://picsum.photos/500/300?random=${id}`}/>
            </Stack>

            <LikeAndComments/>
        </Stack>
    )
    }