import { Stack, Typography } from "@mui/material"
import Button from "../Button"
import {v4 as uuid} from 'uuid'
import { socials } from "src/components/LandingPage/Footer/links"
import { useBreakpoints } from "src/theme/mediaQuery"



const Contact = () => {
const {xs, sm, md, lg, xl} = useBreakpoints()

    return (
        <Stack
        sx={{
            gap: '20px',
            '& p': {
                fontSize: '.875rem',
                fontWeight: 600
            },
            position: 'relative'
        }}
        >
        <img 
        src="/assets/images/sata gra.png"
        style={{
            position: 'absolute',
            top: '-10%',
            left: '20%',
            transform: 'scale(.8)'
        }}
        />
        {
        !sm &&
        <>
        <Typography
        variant={sm ? "h6" :"h5"}
        sx={{
            color: 'primary.main'
        }}
        >
        Get in Touch
        </Typography>

        <Stack
        sx={{
            gap: '10px'
        }}
        >
        <Typography>
            Contact<br/>
            Information
        </Typography>
        <Typography>
        27,Alara Street<br/>Yaba 100012<br/>Lagos State
        </Typography>
        <Typography>
        Call Us : 07067981819
        </Typography>
        <Typography>
        we are open from Monday-Friday<br />08:00am - 05:00pm
        </Typography>
        </Stack>
        </>
        }

        <Stack
        sx={{
            gap: '10px',
            ...sm && {
                alignSelf: 'center',
                alignItems: 'center'
            }
        }}
        >
            <Typography sx={{color: 'primary.main', fontSize: '1rem !important'}}>
                Share on
            </Typography>
            <Stack 
            direction='row'
            sx={{
                gap: '10px',
                alignItems: 'center'
            }}
            >
            {
            socials.map( ({Icon, route}) => (
                <Button
                key={uuid()}
                variant="outlined"
                sx={{
                    p: 0,
                    minWidth: 'unset',
                }}
                >
                <Icon />
                </Button>
            ) )
            }
            </Stack>
        </Stack>

        </Stack>
    )
}

export default Contact