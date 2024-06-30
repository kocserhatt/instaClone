import { Box, Container } from '@mui/material';
import { InstagramWrapper } from './components/instagramWrapper';
import {supabase} from './supabase/supabase.js';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared';
import useAuth from './store/authContext.js';

function App() {
  const {session} = useAuth();

    if (!session) {
      return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
    }
    else {
      return (
        <Container maxWidth="lg" width="100%" sx={{
          marginTop: "1rem",
          height:"100%"
          }}
        >
          <Box sx={{flexGrow: 1}} height="100%">
            <InstagramWrapper />
          </Box>
        </Container>
      )
    }
    }

 

export default App
