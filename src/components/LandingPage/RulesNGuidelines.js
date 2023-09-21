import { Box, Stack, Typography } from "@mui/material"
import { primary } from "src/theme/create-palette"
import Divider from "./Divider"


const RulesNGuidelines = () => {


    return (
        <Stack
        sx={{
            position: 'relative',
            overflow: 'hidden'
        }}
        >
        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            top: '-80%',            
            right: '40%',
            mixBlendMode: 'hard-light',
            transform: 'rotate(150deg)',
            filter: 'blur(20px)',
            opacity: '0.7'
        }}
        />

        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            top: 0,
            right: '-28%',
            mixBlendMode: 'hard-light',
        }}
        />
        <Stack
        direction='row'
        sx={{
            p: '50px 100px 50px 100px',
            alignItems: 'center',
            gap: '100px'
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
            right: '-50px'
        }}
        />
        <img 
        src="/assets/images/star (1).png"
        style={{
            position: 'absolute',
            top: '-50px',
            left: '40%'
        }}
        />

        <Typography
        variant="h5"
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
            width: 2800/6,
            height: 2800/6,
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