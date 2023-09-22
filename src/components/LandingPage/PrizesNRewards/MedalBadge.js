import { Stack, Typography } from "@mui/material"



const MedalBadge = ({Icon, title, prize}) => {
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
            p: !big ? '80px 20px 20px 20px' : '100px 20px 20px 20px',
            alignSelf: 'flex-start'
        }}
        >
        <img 
        src={Icon}
        style={{
            width: !big ? '110px' : '160px',
            height: !big ? '110px' : '160px',
            objectFit: 'cover',
            position: 'absolute',
            top: !big ? '-30%' : '-50%'
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