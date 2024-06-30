import { Stack } from "@mui/material";
import { ProfileCard } from "./profileCard";
import { Headers } from "./headers";

export const InstagramWrapper = () => {
    return (
        <Stack height="100%" gap={3}>
            <Headers />
        {[...Array(30).keys()].map(element => {
            return (
                <ProfileCard key={element} id={element} />
            )
        })}
        </Stack>
    )
}