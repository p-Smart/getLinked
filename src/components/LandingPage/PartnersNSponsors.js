import { Box, Stack, Typography } from "@mui/material"
import { neutral } from "src/theme/create-palette"
import {v4 as uuid} from 'uuid'
import Divider from "./Divider"
import { useBreakpoints } from "src/theme/mediaQuery"

const partners = [
    {
        icon: '/assets/images/Liberty company logo white colour.png',
    },
    {
        icon: '/assets/images/Liberty company logo white.png',
    },
    {
        icon: '/assets/images/Winwise logo White colour 1.png',
    },
    {
        icon: '/assets/images/wisper logo white.png',
    },
    {
        icon: '',
    },
    {
        icon: '',
    },
]




const PartnersNSponsors = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()


    return (
        <>
        
        <Stack
        sx={{
            p: sm ? '30px' : '50px',
            alignItems: 'center',
            gap: '50px',
            position: 'relative'
        }}
        >
        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            top: sm ? '-60%' : md ? '-50%' : '-25%',
            left: sm ? '-90%' : '-50%',
            mixBlendMode: 'hard-light',
            filter: 'blur(20px)',
            opacity: '0.7'
        }}
        />
        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            bottom: sm ? '-100%' : md ? '-90%' : '-70%',
            right: sm ? '-50%' : '-20%',
            mixBlendMode: 'hard-light',
            filter: 'blur(20px)',
            opacity: '0.7'
        }}
        />
        <Stack
        sx={{
            gap: '20px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
        }}>
        <Typography
        variant={sm ? "h6" : "h5"}
        sx={{
            position: 'relative'
        }}
        >
        Partners and Sponsors
        </Typography>
        <Typography>
        Getlinked Hackathon 1.0 is honored to have the following major<br/>companies as its partners and sponsors
        </Typography>
        </Stack>

        <Stack
        sx={{
            border: '1px solid',
            borderColor: 'primary.main',
            width: '100%',
            // height: '400px',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            position: 'relative',
            py: md ? '40px' : '80px'
        }}
        >
        <img
        src="/assets/images/star pu.png"
        style={{
            position: 'absolute',
            top: '-50px',
            left: '5%',
            transform: 'scale(.6)'
        }}
        />
        <img
        src="/assets/images/star pu.png"
        style={{
            position: 'absolute',
            top: md ? '10%' : '15%',
            right: '45%',
            transform: 'scale(.6)'
        }}
        />
        <img
        src="/assets/images/star.png"
        style={{
            position: 'absolute',
            bottom: '15%',
            right: '45%',
            transform: 'scale(.6)'
        }}
        />
        <Stack
        direction='row'
        >
        {
        partners.slice(0, 3).map( ({icon}, k) => (
            <PartnerBox
            key={uuid()}
            bottomBorder 
            rightBorder={k!==2}
            >
            <Box sx={{width: '75%', height: '75%'}}>
            <img 
            src={icon}
            style={{
                objectFit: 'contain',
                width: '100%',
                height: '100%'
            }}
            />
            </Box>
            </PartnerBox>
        ) )
        }
        </Stack>
        
        <Stack
        direction='row'
        >
        {
        partners.slice(3).map( ({icon}, k) => (
            <PartnerBox
            key={uuid()} 
            rightBorder={k!==2}
            >
            <Box sx={{width: '75%', height: '75%'}}>
            {
            k===0 &&
            <img 
            src={icon}
            style={{
                objectFit: 'contain',
                width: '100%',
                height: '100%'
            }}
            />
            }
            {
            k===1 &&
            <Typography
            sx={{fontSize: sm ? '1.3rem' : '1.7rem', textAlign: 'center', fontFamily: 'TypoHoop-Regular'}}
            >
            <span>Pay</span>
            <span style={{color: '#00A3FF'}}>box</span>
            </Typography>
            }
            {
            k===2 &&
            <Typography
            sx={{fontSize: sm ? '1rem' : '1.5rem', textAlign: 'center'}}
            >
            <span>Vuzual&nbsp;</span>
            <span style={{color: '#F00', position: 'relative'}}>
            Plus
            <span
            style={{
                position: 'absolute',
                bottom: sm ? '-35%' : '-20%',
                left: 0,
                fontSize: sm ? '.3rem' : '.5rem',
                whiteSpace: 'nowrap',
                color: neutral[50]
            }}
            >
            Design Studios
            </span>
            </span>
            </Typography>
            }
            </Box>
            </PartnerBox>
        ) )
        }
        </Stack>
        </Stack>
        </Stack>
    
        <Divider />
        </>
    )
}


export default PartnersNSponsors



const PartnerBox = ({ rightBorder, bottomBorder, children}) => {
    const {xs, sm, md, lg, xl} = useBreakpoints()


    return (
        <Stack
        direction='row'
        sx={{
            width: sm ? '108px' : '180px',
            height: sm ? '60px' : '100px',
        }}
        >
            <Stack
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
            }}
            >
            {children}

            {
            bottomBorder &&
            <Box
            sx={{width: '80%', height: '2px', bgcolor: 'primary.main', mt: 'auto'}}
            />
            }
            </Stack>

            {
            rightBorder &&
            <Box
            sx={{height: '80%', width: '2px', bgcolor: 'primary.main'}}
            />
            }
        </Stack>
    )
}