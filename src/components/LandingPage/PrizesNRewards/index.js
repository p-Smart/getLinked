import { Icon, Stack, Typography } from "@mui/material"
import Button from "src/components/Button"
import { primary } from "src/theme/create-palette"
import medalbadges from "./medalbadges"
import MedalBadge from "./MedalBadge"
import {v4 as uuid} from 'uuid'




const PrizesNReward = () => {


    return (
        <>
        <Stack
        direction='row'
        sx={{
            p: '100px',
            alignItems: 'center',
            gap: '100px',
            position: 'relative',
            bgcolor: '#110b20'
        }}
        >
        {/* <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            top: '22%',
            left: '-30%',
            mixBlendMode: 'hard-light',
            filter: 'blur(20px)',
            opacity: '0.7'
        }}
        /> */}

        <Stack
        sx={{
            position: 'relative',
        }}
        >
        <img 
        src="/assets/images/9486889 1.png"
        style={{
            width: 3600/7.5,
            height: 2800/7.5,
            objectFit: 'cover'
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
        <Stack sx={{gap: '20px'}}>
        <Typography
        variant="h5"
        sx={{
            position: 'relative'
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
        {'Highlight of the prizes  or rewards  for winners and for participants'}
        </Typography>
        </Stack>

        <Stack
        direction='row'
        sx={{
            gap: '20px',
            mt: '100px'
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
        </Stack>

        </Stack>
        </Stack>

        </>
    )
}

export default PrizesNReward