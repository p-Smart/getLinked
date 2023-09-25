import { Box } from "@mui/material"
import {motion, useInView, useAnimation} from 'framer-motion'
import { useEffect, useRef } from "react"
import { primary } from "src/theme/create-palette"


const Reveal = ({children, width='fit-content', slide=true}) => {
    const ref = useRef(null)
    const isInView  = useInView(ref)
    const mainControls = useAnimation()
    const slideControls = useAnimation()


    useEffect( () => {
        if(isInView){
            mainControls.start('visible')
            slideControls.start('visible')
        }
        else{
            mainControls.start('hidden')
            slideControls.start('hidden')
        }
    }, [isInView] )

    return (
        <Box
        ref={ref}
        sx={{
            position: 'relative',
            width
        }}
        >
        <motion.div
        variants={{
            hidden: {opacity: 0, y: 75},
            visible: {opacity: 1, y: 0}
        }}
        initial='hidden'
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.25}}
        >
        {children}
        </motion.div>


        {
        slide &&
        <motion.div
        variants={{
            hidden: {left: 0},
            visible: {left: '100%'}
        }}
        initial='hidden'
        animate={slideControls}
        transition={{duration: 0.5, ease: 'easeIn'}}
        style={{
            position: 'absolute',
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: primary.mainGradient,
            zIndex: 20
        }}
        />
        }
        </Box>
    )
}

export default Reveal