import './index.css'
import {Box,  Container } from '@mui/material'
import { InstagramWrapper } from './InstagramWrapper'

function App() {

  return (
    <>
      <Container maxWidth="lg" Width="100%" sx={{
         margitTop: "Irem",
        height: "100vh"
      }}>
        <Box sx={{flexGrow: 1}} height="100vh">
          <InstagramWrapper/>
        </Box>
      </Container>
    </>
  )
}

export default App
