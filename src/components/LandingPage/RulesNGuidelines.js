import { Box, Stack, Typography } from "@mui/material"
import { primary } from "src/theme/create-palette"
import Divider from "./Divider"
import { useBreakpoints } from "src/theme/mediaQuery"


const RulesNGuidelines = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()


    return (
        <Stack
        sx={{
            position: 'relative',
        }}
        >
        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            top: '-80%',
            right: sm ? '-10%' : '40%',
            mixBlendMode: 'hard-light',
            transform: 'rotate(150deg) scale(.9)',
            filter: 'blur(40px)',
            opacity: '0.8'
        }}
        />

        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            top: sm ? '-10%' : md ? '-20%' : 0,
            right: sm ? '-90%' : md ? '-50%' : '-28%',
            mixBlendMode: 'hard-light',
        }}
        />
        <Stack
        direction={md ? 'column-reverse' : 'row'}
        sx={{
            p: md ? '0 30px 30px 30px' : '0 100px',
            alignItems: 'center',
            gap: md ? '20px' : lg ? '50px' : '100px',
            ...md && {
                textAlign: 'center'
            }
        }}
        >
        <Stack
        sx={{
            gap: '20px',
            position: 'relative'
        }}
        >
        <img 
        src="/assets/images/star.png"
        style={{
            position: 'absolute',
            bottom: '-50px',
            right: '-50px',
            transform: 'scale(.7)'
        }}
        />
        <img 
        src="/assets/images/star (1).png"
        style={{
            position: 'absolute',
            top: '-50px',
            left: '40%',
            transform: 'scale(.7)'
        }}
        />

        <Typography
        variant={sm ? "h6" : "h5"}
        sx={{
            position: 'relative'
        }}
        >
        <span>Rules and</span>
        <span
        style={{
            display: 'block',
            color: primary.main
        }}
        >
        Guidelines
        </span>

        </Typography>

        <Typography>
        {`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}
        </Typography>
        </Stack>

        <Stack
        sx={{
            position: 'relative',
        }}
        >
        <img 
        src="/assets/images/7450159 1.png"
        style={{
            width: sm ? 2800/7 : lg ? 2800/6.5 : 2800/6,
            height: sm ? 2800/7 : lg ? 2800/6.5 : 2800/6,
            objectFit: 'cover',
            zIndex: 1
        }}
        />
        <Box 
        sx={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: primary.mainGradient,
            position: 'absolute',
            right: '87px',
            top: '65px'
        }}
        />
        </Stack>
        </Stack>

        <Divider />
        </Stack>
    )
}

export default RulesNGuidelines