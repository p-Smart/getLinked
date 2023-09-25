import { Stack, Typography } from "@mui/material"
import { primary } from "src/theme/create-palette"
import criterias from "./criterias"
import { v4 as uuid } from 'uuid'
import Button from "src/components/Button"
import Divider from "../Divider"
import { useBreakpoints } from "src/theme/mediaQuery"
import Reveal from "src/components/animations/Reveal"
import ZoomInOut from "src/components/animations/ZoomInOut"


const JudgingCriteria = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()


    return (
        <>
        <Stack
        direction={md ? 'column' : 'row'}
        sx={{
            p: md ? '100px 30px 30px 30px' : '100px',
            alignItems: 'center',
            gap: md ? '20px' : '100px',
            position: 'relative',
            ...md && {
                textAlign: 'center'
            }
        }}
        >
        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            top: sm ? '-10%' : md ? '-15%' : '22%',
            left: sm ? '-130%' : md ? '-40%' : '-30%',
            mixBlendMode: 'hard-light',
            filter: 'blur(20px)',
            opacity: '0.7'
        }}
        />

        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            top: sm ? '55%' : '40%',
            right: sm ? '-80%' : md ? '-20%' : '-8%',
            mixBlendMode: 'hard-light',
            opacity: '0.7'
        }}
        />
        <Stack
        sx={{
            position: 'relative',
        }}
        >
        <ZoomInOut times={1}>
        <img 
        src="/assets/images/8046554 1.png"
        style={{
            width: lg ? 2800/7 : xl ? 2800/5.5 : 2800/5,
            height: lg ? 2306/7 : xl ? 2306/5.5 : 2306/5
        }}
        />
        </ZoomInOut>
        <img 
        src="/assets/images/sata gra.png"
        style={{
            position: 'absolute',
            objectFit: 'cover',
            top: '-20%',
            left: '25%',
            transform: 'scale(.8)'
        }}
        />
        <img 
        src="/assets/images/star (1).png"
        style={{
            position: 'absolute',
            objectFit: 'cover',
            bottom: '40%',
            right: '40%',
            transform: 'scale(.6)'
        }}
        />
        <img 
        src="/assets/images/star.png"
        style={{
            position: 'absolute',
            objectFit: 'cover',
            bottom: 0,
            right: 0,
            transform: 'scale(.7)'
        }}
        />
        </Stack>

        <Stack
        sx={{
            gap: '30px',
            position: 'relative',
            zIndex: 1
        }}
        >
        <Typography
        variant={sm ? "h6" : "h5"}
        sx={{
            position: 'relative'
        }}
        >
        <span>Judging Criteria</span>
        <span
        style={{
            display: 'block',
            color: primary.main
        }}
        >
        Key attributes
        </span>
        </Typography>

        <Stack
        sx={{
            gap: '10px'
        }}
        >
        {
        criterias.map( ({title, content}) => (
            <Reveal key={uuid()}>
            <Typography
            >
                <span
                style={{
                    color: primary.light,
                    fontWeight: 600
                }}
                >
                {`${title}: `}
                </span>
                <span>
                {content}
                </span>
            </Typography>
            </Reveal>
        ) )
        }
        </Stack>
        
        <Button 
        title='Read More'
        sx={{alignSelf: md ? 'center' : 'flex-start'}}
        />
        </Stack>
        </Stack>

        <Divider />
        </>
    )
}

export default JudgingCriteria