import { Icon, Stack, Typography } from "@mui/material"
import Button from "src/components/Button"
import { primary } from "src/theme/create-palette"
import medalbadges from "./medalbadges"
import MedalBadge from "./MedalBadge"
import {v4 as uuid} from 'uuid'




const PrizesNReward = () => {


    return (
        <Stack
        sx={{
            p: '50px 100px',
            alignItems: 'center',
            gap: '30px',
            position: 'relative',
            bgcolor: '#110b20',
            justifyContent: 'center',
            overflow: 'hidden'
        }}
        >

        <img 
        src="/assets/images/sata gra.png"
        style={{
            position: 'absolute',
            top: '7%',
            left: '20%',
            transform: 'scale(.7)'
        }}
        />
        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            top: '-15%',
            left: '-13%',
            mixBlendMode: 'hard-light',
            filter: 'blur(20px)',
            opacity: '0.7'
        }}
        />
        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            bottom: '-60%',
            right: '-5%',
            mixBlendMode: 'hard-light',
            filter: 'blur(10px)',
            opacity: '0.8'
        }}
        />
        <img 
        src="/assets/images/premium_photo-1664443577580-dd2674e9d359 1.png"
        style={{
            position: 'absolute',
            top: '-45%',
            left: '18.5%',
            mixBlendMode: 'hard-light',
            filter: 'blur(20px)',
            opacity: '0.5'
        }}
        />

        <Stack 
        sx={{
            gap: '20px',
            alignSelf: 'flex-end',
            pr: '10%'
        }}>
        <Typography
        variant="h5"
        sx={{
            position: 'relative',
        }}
        >
        <span>Prizes and</span>
        <span
        style={{
            display: 'block',
            color: primary.main
        }}
        >
        Rewards
        </span>
        </Typography>
        <Typography>
        Highlight of the prizes  or rewards  for winners and<br/> for participants
        </Typography>
        </Stack>

        <Stack
        direction='row'
        sx={{
            gap: '30px',
            alignItems: 'center',
            gap: '100px',
            position: 'relative',
            justifyContent: 'center'
        }}
        >
        <Stack
        sx={{
            position: 'relative',
        }}
        >
        <img 
        src="/assets/images/9486889 1.png"
        style={{
            width: 548/1.2,
            height: 482/1.2,
            objectFit: 'cover'
        }}
        />
        <img 
        src="/assets/images/star.png"
        style={{
            position: 'absolute',
            bottom: '-35px',
            left: '39%',
            transform: 'scale(.6)'
        }}
        />
        </Stack>

        <Stack
        direction='row'
        sx={{
            gap: '20px',
            mt: '100px',
            position: 'relative'
        }}
        >
        {
        medalbadges.map( ({title, prize, Icon}) => (
            <MedalBadge 
            key={uuid()}
            title={title}
            prize={prize}
            Icon={Icon}
            />
        ) )
        }

        <img 
        src="/assets/images/star.png"
        style={{
            position: 'absolute',
            top: '-60%',
            left: '7%',
            transform: 'scale(.75)'
        }}
        />
        <img 
        src="/assets/images/star.png"
        style={{
            position: 'absolute',
            top: '-30%',
            right: '-3%',
            transform: 'scale(.75)'
        }}
        />
        <img 
        src="/assets/images/star (1).png"
        style={{
            position: 'absolute',
            bottom: '-15%',
            right: '30%',
            transform: 'scale(.6)'
        }}
        />
        </Stack>
        </Stack>

        </Stack>
    )
}

export default PrizesNReward