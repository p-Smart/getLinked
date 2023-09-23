import {Fade, Popper, Stack, Typography } from "@mui/material"
import { primary } from "src/theme/create-palette"
import Button from "../Button"
import Divider from "./Divider"
import { useBreakpoints } from "src/theme/mediaQuery"
import Menu from "../icons/Menu"
import {v4 as uuid} from 'uuid'
import { useEffect, useRef, useState } from "react"
import { nav } from "./navigation"
import { useStyleContext } from "src/context/styleContext"
import { useRouter } from "next/router"


const TopNav = ({noDivider}) => {

    const {sm, md} = useBreakpoints()
    const {openMediaMenu, 
        setOpenMediaMenu, 
        mediaMenuRef, 
        overviewRef,
        timelineRef,
        faqsRef} = useStyleContext()
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

    return (
        <Stack>
        <Stack
        direction='row'
        sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            p: md ? '30px' : '50px 100px 20px 100px',
            position: 'relative',
            zIndex: 1
        }}
        >
            <Typography
            variant={sm ? "h6": "h5"}
            >
            <span>get</span>
            <span style={{color: primary.main}}>linked</span>
            </Typography>

            { !md ?
            <Stack
            direction='row'
            sx={{
                gap: '70px',
            }}
            >
                <Stack
                direction='row'
                sx={{
                    gap: '30px'
                }}
                >
                {
                nav.map( ({title, route}) =>(
                    <Button
                    key={uuid()}
                    title={title}
                    variant="outlined"
                    onClick={() => handleButtonClick(route)}
                    sx={{
                        ...route===router.pathname &&
                        {
                        '& p': {
                            backgroundImage: primary.mainGradient,
                            backgroundClip: 'text',
                            color: 'transparent'
                        }
                        }
                    }}
                    />
                ) )
                }
                </Stack>

                <Button
                variant={router.pathname==='/register' ?'outlined' : 'contained'}
                title="Register"
                onClick={() => router.push('/register')}
                sx={{
                    ...router.pathname==='/register' && {
                        border: '2px solid',
                        borderImage: primary.mainGradient,
                        borderImageSlice: 1,
                        borderImageWidth: '1.5px',
                        p: '10px 40px',
                        borderRadius: '5px',
                    }
                }}
                />
            </Stack> :

            <Button
            ref={mediaMenuRef}
            variant="outlined"
            sx={{
                minWidth: 'unset',
                position: 'relative',
                zIndex: 9
            }}
            onClick={() => setOpenMediaMenu(true)}
            >
            <Menu />
            </Button>
            }
        </Stack>


        {
        !noDivider &&
        <Divider sx={{borderColor: 'rgba(255, 255, 255, 0.18)', width: '100%'}} />
        }
        </Stack>
    )
}

export default TopNav