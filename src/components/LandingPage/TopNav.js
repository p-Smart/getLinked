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


const TopNav = ({children}) => {

    const {sm, md} = useBreakpoints()
    const {openMediaMenu, setOpenMediaMenu, mediaMenuRef} = useStyleContext()


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
                    />
                ) )
                }
                </Stack>

                <Button
                title="Register"
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


        <Divider sx={{borderColor: 'rgba(255, 255, 255, 0.18)', width: '100%'}} />
        </Stack>
    )
}

export default TopNav