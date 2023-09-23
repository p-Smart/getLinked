import { Stack } from "@mui/material"
import Button from "../Button"
import CancelButton from "../CancelButton"
import { nav } from "./navigation"
import {v4 as uuid} from 'uuid'
import { useStyleContext } from "src/context/styleContext"
import { useEffect, useRef } from "react"
import { useBreakpoints } from "src/theme/mediaQuery"
import { useRouter } from "next/router"
import { primary } from "src/theme/create-palette"




const MediaMenuBox = () => {
    const {openMediaMenu, 
        setOpenMediaMenu, 
        mediaMenuRef, 
        overviewRef,
        timelineRef,
        faqsRef} = useStyleContext()
    const popperRef = useRef()
    const {sm, md} = useBreakpoints()
    const router = useRouter()

    const handleButtonClick = (route) => {
        route==='#overview' && overviewRef.current?.scrollIntoView({behaviour: 'smooth'})
        route==='#timeline' && timelineRef.current?.scrollIntoView({behaviour: 'smooth'})
        route==='#faqs' && faqsRef.current?.scrollIntoView({behaviour: 'smooth'})
        
        if(!(router.pathname.includes('#')) &&(router.pathname!=='/') && route.includes('#')){
            router.push(`/${route}`)
        }
        if(route.includes('/')){
            return router.push(route)
        }
    }

    useEffect( () => {
        if(!md){
            setOpenMediaMenu(false)
        }
    }, [md] )

    const bodyHidePopup = (e) => {
        if (
            !mediaMenuRef.current ||
            !popperRef.current ||
            (!mediaMenuRef.current.contains(e.target) &&
            !popperRef.current.contains(e.target))
          ) {
            setOpenMediaMenu(false)
          }
    }
    useEffect( () => {
        document.body.addEventListener('click', bodyHidePopup)
        return ( () => {
            document.body.removeEventListener('click', bodyHidePopup)
        } )
    }, [] )

    return (
        <Stack
        ref={popperRef}
        sx={{
            width: 348/1.6,
            height: 492/1.6,
            p: '30px',
            bgcolor: '#150E28',
            borderRadius: '8px',
            border: '0.5px solid rgba(255, 255, 255, .08)',
            backdropFilter: 'blur(30px)',
            gap: '30px',
            position: 'fixed',
            zIndex: 5,
            right: 0,
            top: sm ? 86 : 94
        }}
        >
            <CancelButton
            onClick={() => setOpenMediaMenu(false)}
            />

            <Stack sx={{gap: '20px'}}>
            {
                nav.map( ({title, route}) =>(
                    <Button
                    key={uuid()}
                    title={title}
                    variant="outlined"
                    sx={{
                        minWidth: 0, 
                        p: 0, 
                        alignSelf: 'flex-start',
                        ...route===router.pathname &&
                        {
                        '& p': {
                            backgroundImage: primary.mainGradient,
                            backgroundClip: 'text',
                            color: 'transparent'
                        }
                        }
                    }}
                    onClick={() => handleButtonClick(route)}
                    />
                ) )
            }
            </Stack>

            <Button
            title='Register'
            variant={router.pathname==='/register' ?'outlined' : 'contained'}
            sx={{
                alignSelf: 'flex-start',
                ...router.pathname==='/register' && {
                        border: '2px solid',
                        borderImage: primary.mainGradient,
                        borderImageSlice: 1,
                        borderImageWidth: '1.5px',
                        p: '10px 40px',
                        borderRadius: '5px',
                    }
            }}
            onClick={() => router.push('/register')}
            />
            </Stack>
    )
}

export default MediaMenuBox