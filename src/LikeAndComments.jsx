import { useState } from 'react'
import {Box,  Stack } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCommentIcon from '@mui/icons-material/AddComment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export const LikeAndComments = () => {
    const [like, setLike] = useState(false)
    const [bookmark, setBookmark] = useState(false)

    const handleLike = () => {setLike(like ? false : true)}
    const handleBookmark = () => {setBookmark(bookmark ? false : true)}
    
    return (
        <Stack flexDirection={"row"} justifyContent={"space-between"} >
            <Box gap={2}>
                {like?<FavoriteIcon onClick={handleLike}/>:
                <FavoriteBorderIcon onClick={handleLike}/>  
                }
                <AddCommentIcon/>
            </Box>
                <Box >
                {bookmark?<BookmarkIcon onClick={handleBookmark}/> : 
                <BookmarkBorderIcon onClick={handleBookmark}/>}
                </Box>
            
        </Stack>
    )
}