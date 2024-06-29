import { Stack } from "@mui/material"
import { Box } from "@mui/system"
import { Avatar } from "@mui/material"
import { ProfilCard } from "./profilCard"


export const InstagramWrapper = () => {
  return (
    <Stack height="100%">
      {[...Array(20).keys()].map(element =>{
        return(
          <ProfilCard keys={element} id={element}/>
        )
      })}
    </Stack>
  )
}