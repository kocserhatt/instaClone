import { Stack } from "@mui/material";
import { ProfileCard } from "./profileCard";
import { Headers } from "./headers";
import { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../supabase/supabase.js";

export const InstagramWrapper = () => {
const [user, setUser] = useState([]);

useEffect(() => {
    getPost();
}, []);

    async function getPost() {
        const {data } = await supabase.from('user').select('*');
        setUser(data);
    }
    return (
        <Stack height={"100%"} gap={3} >
            <Headers />
            {user?.map(user => (
                 <ProfileCard key={user.id} id={user.id} post={user} />
            )    
            )}
        </Stack>
    )
}