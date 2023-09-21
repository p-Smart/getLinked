import { Stack, Typography } from "@mui/material"
import { primary } from "src/theme/create-palette"
import criterias from "./criterias"
import { v4 as uuid } from 'uuid'
import Button from "src/components/Button"
import Divider from "../Divider"


const JudgingCriteria = () => {


    return (
        <>
        <Stack
        direction='row'
        sx={{
            p: '100px',
            alignItems: 'center',
            gap: '100px',
            position: 'relative'
        }}
        >
        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            top: '22%',
            left: '-30%',
            mixBlendMode: 'hard-light',
            filter: 'blur(20px)',
            opacity: '0.7'
        }}
        />

        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            top: '40%',
            right: '-8%',
            mixBlendMode: 'hard-light',
            opacity: '0.7'
        }}
        />
        <Stack
        sx={{
            position: 'relative',
        }}
        >
        <img 
        src="/assets/images/8046554 1.png"
        style={{
            width: 2800/5,
            height: 2306/5
        }}
        />
        <img 
        src="/assets/images/sata gra.png"
        style={{
            position: 'absolute',
            objectFit: 'cover',
            top: '-20%',
            left: '25%'
        }}
        />
        <img 
        src="/assets/images/star (1).png"
        style={{
            position: 'absolute',
            objectFit: 'cover',
            bottom: '40%',
            right: '40%'
        }}
        />
        <img 
        src="/assets/images/star.png"
        style={{
            position: 'absolute',
            objectFit: 'cover',
            bottom: 0,
            right: 0
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
        variant="h5"
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
            <Typography            
            key={uuid()}
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
        ) )
        }
        </Stack>
        
        <Button 
        title='Read More'
        sx={{alignSelf: 'flex-start'}}
        />
        </Stack>
        </Stack>

        <Divider />
        </>
    )
}

export default JudgingCriteria