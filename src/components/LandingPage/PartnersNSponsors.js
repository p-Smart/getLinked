import { Box, Stack, Typography } from "@mui/material"
import { neutral } from "src/theme/create-palette"
import {v4 as uuid} from 'uuid'
import Divider from "./Divider"

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


    return (
        <>
        
        <Stack
        sx={{
            p: '50px',
            alignItems: 'center',
            gap: '50px',
            position: 'relative'
        }}
        >
        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            top: '-25%',
            left: '-50%',
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
            right: '-20%',
            mixBlendMode: 'hard-light',
            filter: 'blur(20px)',
            opacity: '0.7'
        }}
        />
        <Stack
        sx={{
            gap: '20px',
            textAlign: 'center'
        }}>
        <Typography
        variant="h5"
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
            py: '80px'
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
            top: '15%',
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
            sx={{fontSize: '1.7rem', textAlign: 'center', fontFamily: 'TypoHoop-Regular'}}
            >
            <span>Pay</span>
            <span style={{color: '#00A3FF'}}>box</span>
            </Typography>
            }
            {
            k===2 &&
            <Typography
            sx={{fontSize: '1.5rem', textAlign: 'center'}}
            >
            <span>Vuzual&nbsp;</span>
            <span style={{color: '#F00', position: 'relative'}}>
            Plus
            <span
            style={{
                position: 'absolute',
                bottom: '-20%',
                left: 0,
                fontSize: '.5rem',
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


    return (
        <Stack
        direction='row'
        sx={{
            width: '180px',
            height: '100px',
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