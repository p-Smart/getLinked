import { Icon, Stack, Typography } from "@mui/material"
import Button from "src/components/Button"
import { primary } from "src/theme/create-palette"
import medalbadges from "./medalbadges"
import MedalBadge from "./MedalBadge"
import {v4 as uuid} from 'uuid'
import { useBreakpoints } from "src/theme/mediaQuery"
import ZoomInOut from "src/components/animations/ZoomInOut"




const PrizesNReward = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()


    return (
        <Stack
        sx={{
            p: md ? '30px 30px 50px 30px' : '50px 100px',
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
            left: lg ? '-35%' : '-13%',
            mixBlendMode: 'hard-light',
            filter: 'blur(20px)',
            opacity: '0.7'
        }}
        />
        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            bottom: '-70%',
            right: lg ? '32%' : '-25%',
            mixBlendMode: 'hard-light',
            filter: 'blur(10px)',
            opacity: '0.8'
        }}
        />
        <img 
        src="/assets/images/premium_photo-1664443577580-dd2674e9d359 1.png"
        style={{
            position: 'absolute',
            top: md ? '20%' : '-45%',
            left: md ? '80%' : '18.5%',
            mixBlendMode: 'hard-light',
            filter: 'blur(20px)',
            opacity: '0.5'
        }}
        />

        <Stack 
        sx={{
            gap:  '20px',
            alignSelf: md ? 'center' : 'flex-end',
            pr: md ? 'unset' : '10%',
            ...md && {
                textAlign: 'center'
            }
        }}>
        <Typography
        variant={sm ? "h6" : "h5"}
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
        direction={md ? 'column' : 'row'}
        sx={{
            alignItems: 'center',
            gap: md ? '30px' : '100px',
            position: 'relative',
            justifyContent: 'center'
        }}
        >
        <Stack
        sx={{
            position: 'relative',
        }}
        >
        <ZoomInOut>
        <img 
        src="/assets/images/9486889 1.png"
        style={{
            width: sm ? 548/2 : lg ? 548/1.4 : 548/1.2,
            height: sm ? 482/2 : lg ? 482/1.4 : 482/1.2,
            objectFit: 'cover'
        }}
        />
        </ZoomInOut>
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
            gap: xs ? '10px' : '20px',
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