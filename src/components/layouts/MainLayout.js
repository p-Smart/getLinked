import { Stack, Typography } from "@mui/material"
import TopNav from "../LandingPage/TopNav"
import { useRef, useState } from "react"
import StyleContext from "src/context/styleContext"
import MediaMenuBox from "../LandingPage/MediaMenuBox"
import { useRouter } from "next/router"
import RegistrationSuccess from "../RegisterPage/RegistrationSuccess"



const Layout = ({children}) => {
    const [openMediaMenu, setOpenMediaMenu] = useState(false)
    const [openRegSuccessModal, setOpenRegSuccessModal] = useState(false)
    const mediaMenuRef = useRef(null)
    const overviewRef = useRef(null)
    const timelineRef = useRef(null)
    const faqsRef = useRef(null)
    const router = useRouter()


    return (
        <StyleContext.Provider
        value={{
            openMediaMenu,
            setOpenMediaMenu,
            mediaMenuRef,
            overviewRef,
            timelineRef,
            faqsRef,
            openRegSuccessModal,
            setOpenRegSuccessModal
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
            <TopNav noDivider={router.pathname==='/contact' || router.pathname==='/register'} />
            {
            openMediaMenu &&
            <MediaMenuBox />
            }
            {children}


            {
            openRegSuccessModal &&
            <RegistrationSuccess />
            }
        </Stack>
        </StyleContext.Provider>
    )
}

export default Layout