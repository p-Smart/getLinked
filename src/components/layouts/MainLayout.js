import { Stack, Typography } from "@mui/material"
import TopNav from "../LandingPage/TopNav"



const Layout = ({children}) => {


    return (
        <Stack
        sx={{
            width: '100%',
            overflow: 'hidden',
            minHeight: '100vh',
            bgcolor: 'background'
        }}
        >
            <TopNav />
            {children}
        </Stack>
    )
}

export default Layout