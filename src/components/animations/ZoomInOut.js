import {motion, useInView, useAnimation} from 'framer-motion'
import { useEffect, useRef } from "react"


const ZoomInOut = ({children, times=3}) => {
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
        <motion.div
        ref={ref}
        style={{
            position: 'relative',
            width: 'fit-content',
            height: 'fit-content'
        }}
        variants={{
            hidden: {opacity: 0.2, scale: 1},
            visible: {opacity: 1, scale: 1.05}
        }}
        initial='hidden'
        animate={mainControls}
        transition={{duration: 1, repeat: times, ease: 'backInOut'}}
        >
        {children}
        </motion.div>
    )
}

export default ZoomInOut