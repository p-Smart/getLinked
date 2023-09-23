import { Stack, Typography } from "@mui/material"
import TopNav from "../LandingPage/TopNav"
import { useRef, useState } from "react"
import StyleContext from "src/context/styleContext"
import MediaMenuBox from "../LandingPage/MediaMenuBox"



const Layout = ({children}) => {
    const [openMediaMenu, setOpenMediaMenu] = useState(false)
    const mediaMenuRef = useRef(null)


    return (
        <StyleContext.Provider
        value={{
            openMediaMenu,
            setOpenMediaMenu,
            mediaMenuRef
        }}
        >
        <Stack
        sx={{
            width: '100%',
            overflow: 'hidden',
            minHeight: '100vh',
            bgcolor: 'background'
        }}
        >
            <TopNav />
            {
            openMediaMenu &&
            <MediaMenuBox />
            }
            {children}
        </Stack>
        </StyleContext.Provider>
    )
}

export default Layout