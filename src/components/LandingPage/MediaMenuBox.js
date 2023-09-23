import { Stack } from "@mui/material"
import Button from "../Button"
import CancelButton from "../CancelButton"
import { nav } from "./navigation"
import {v4 as uuid} from 'uuid'
import { useStyleContext } from "src/context/styleContext"
import { useEffect, useRef } from "react"
import { useBreakpoints } from "src/theme/mediaQuery"




const MediaMenuBox = () => {
    const {openMediaMenu, setOpenMediaMenu, mediaMenuRef} = useStyleContext()
    const popperRef = useRef()
    const {md} = useBreakpoints()

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
            border: '0.5px solid rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(30px)',
            gap: '30px',
            position: 'absolute',
            zIndex: 5,
            right: 0,
            top: 94
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
                    sx={{minWidth: 0, p: 0, alignSelf: 'flex-start'}}
                    />
                ) )
            }
            </Stack>

            <Button
            title='Register'
            sx={{alignSelf: 'flex-start'}}
            />
            </Stack>
    )
}

export default MediaMenuBox