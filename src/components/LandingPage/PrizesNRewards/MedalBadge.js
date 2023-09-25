import { Stack, Typography } from "@mui/material"
import { useBreakpoints } from "src/theme/mediaQuery"



const MedalBadge = ({Icon, title, prize}) => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const big = title==='1st' ? true : false

    return (
        <Stack
        sx={{
            position: 'relative',
            bgcolor: big ? 'rgba(144, 58, 255, 0.12)' : 'rgba(212, 52, 254, 0.12)',
            border: '1px solid',
            borderRadius: '8px',
            borderColor: big ? '#903AFF' : '#D434FE',
            alignItems: 'center',
            textAlign: 'center',
            gap: '10px',
            p: !big ? (sm ? '70px 5px 5px 5px' : '80px 20px 20px 20px') : (sm ? '80px 5px 5px 5px' : '100px 20px 20px 20px'),
            alignSelf: 'flex-start'
        }}
        >
        <img 
        src={Icon}
        style={{
            width: !big ? (sm ? '80px' : '110px') : (sm ? '116.36px' : '160px'),
            height: !big ? (sm ? '80px' : '110px') : (sm ? '116.36px' : '160px'),
            objectFit: 'cover',
            position: 'absolute',
            top: !big ? (sm ? '-20%' : '-30%') : (sm ? '-35%' : '-50%'),
            '& :hover': {
                display: 'none'
            }
        }}
        />

        <Stack>
        <Typography sx={{fontSize: '1.3rem', fontWeight: 600}}>
            {title}
        </Typography>
        <Typography>Runner</Typography>
        </Stack>

        <Typography sx={{fontSize: '1.3rem', fontWeight: 600, color: 'primary.main'}}>{prize}</Typography>
        </Stack>
    )
}

export default MedalBadge