import { Stack, Typography } from "@mui/material"
import { primary } from "src/theme/create-palette"
import Divider from "./Divider"


const IntroToGetLinked = () => {


    return (
        <>
        <Stack
        direction='row'
        sx={{
            p: '50px 100px 50px 100px',
            alignItems: 'center',
            gap: '100px',
            bgcolor: '#140D27'
        }}
        >
        <Stack
        sx={{
            position: 'relative',
        }}
        >
        <img 
        src="/assets/images/the big idea 1.png"
        style={{
            width: 1622/3.5,
            height: 1572/3.5
        }}
        />
        <Typography
        sx={{
            position: 'absolute',
            top: '50%',
            left: '41.2%',
            fontWeight: 600,
            fontSize: '1.25rem',
            textAlign: 'center'
        }}
        >
        <span>
        The Big
        </span>
        <span
        style={{display: 'block'}}
        >
        Idea!
        </span>
        </Typography>
        <img 
        src="/assets/images/sata gra.png"
        style={{
            position: 'absolute',
            top: '35%'
        }}
        />
        <img 
        src="/assets/images/arrow.png"
        style={{
            position: 'absolute',
            bottom: 0,
            right: '-50px'
        }}
        />
        </Stack>

        <Stack
        sx={{
            gap: '20px'
        }}
        >
        <Typography
        variant="h5"
        sx={{
            position: 'relative'
        }}
        >
        <span>Intoduction to  getlinked</span>
        <span
        style={{
            display: 'block',
            color: primary.main
        }}
        >
        tech Hackathon 1.0
        </span>

        <img 
        src="/assets/images/star pu.png"
        style={{
            position: 'absolute',
            top: '10%',
            right: 0
        }}
        />
        </Typography>

        <Typography>
        {`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}
        </Typography>
        </Stack>
        </Stack>

        <Divider />
        </>
    )
}

export default IntroToGetLinked