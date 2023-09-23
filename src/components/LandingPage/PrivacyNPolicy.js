import { Box, Stack, Typography } from "@mui/material"
import ListCheck from "../ListCheck"
import { primary } from "src/theme/create-palette"
import {v4 as uuid} from 'uuid'
import Button from "../Button"
import { useBreakpoints } from "src/theme/mediaQuery"

const rules = ['The Standard License grants you a non-exclusive right to navigate and register for our event', 'You are licensed to use the item available at any free source sites, for your project developement']


const PrivacyNPolicy = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()


    return (
        <Stack
        direction={md ? 'column' : 'row'}
        sx={{
            p: md ? '30px' : '100px',
            gap: lg ? '0px' : '50px',
            position: 'relative'
        }}
        >
        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            top: '35%',
            left: '-30%',
            mixBlendMode: 'hard-light',
            filter: 'blur(20px)',
            opacity: '1'
        }}
        />

        <Stack 
        sx={{
            gap: '30px',
            position: 'relative',
            zIndex: 1
        }}>
        <Stack
        sx={{
            ...md && {
                textAlign: 'center'
            }
        }}
        >
        <Typography
        variant={sm ? "h6" : "h5"}
        sx={{
            position: 'relative',
            width: md ? 'unset' : 'fit-content'
        }}
        >
        <img
        src="/assets/images/star (1).png"
        style={{
            position: 'absolute',
            top: '-20px',
            right: '-50px',
            transform: 'scale(.6)'
        }}
        />
        <span>Privacy Policy and</span>
        <span
        style={{
            display: 'block',
            color: primary.main
        }}
        >
        Terms
        </span>
        </Typography>
        <Typography
        sx={{}}
        >
        Last updated on September 12, 2023
        </Typography>
        </Stack>

        <Typography sx={{textAlign: md ? 'center' : 'unset'}}>
        {`Below are our privacy & policy, which outline a lot of goodies.`}<br />{`it’s our aim to always take of our participant`}
        </Typography>

        <Stack
        sx={{
            border: '1px solid',
            borderColor: 'primary.main',
            p: xs ? '15px' : sm ? '30px' : '50px',
            maxWidth: md ? 'unset' : '60%',
            gap: '25px',
            position: 'relative'
        }}
        >
        <img
        src="/assets/images/star pu.png"
        style={{
            position: 'absolute',
            bottom: '28%',
            left: '-10%',
            transform: 'scale(.6)'
        }}
        />
        <img
        src="/assets/images/star pu.png"
        style={{
            position: 'absolute',
            top: '-20%',
            right: 0,
            transform: 'scale(.6)'
        }}
        />
        <Typography sx={{textAlign: md ? 'center' : 'unset'}}>
        At getlinked tech Hackathon 1.0, we value your privacy
and are committed to protecting your personal information.
This Privacy Policy outlines how we collect, use, disclose, 
and safeguard your data when you participate in our tech 
hackathon event. By participating in our event, you consent 
to the practices described in this policy.
        </Typography>
        <Typography
        sx={{
            position: 'relative',
            fontWeight: 600,
            fontSize: '1.1rem'
        }}
        >
        <span
        style={{
            display: 'block',
            color: primary.main
        }}
        >
        Licensing Policy
        </span>
        <span>Here are terms of our Standard License:</span>
        </Typography>

        <Stack sx={{gap: '15px'}}>
        {
        rules.map( (rule) => (
            <Stack
            key={uuid()}
            direction='row'
            sx={{gap: '10px'}}
            >
            <ListCheck />
            <Typography>{rule}</Typography>
            </Stack>
        ) )
        }
        <Button 
        title='Read More'
        sx={{alignSelf: 'center'}}
        />
        </Stack>
        </Stack>
        </Stack>

        <Stack
        sx={{
            position: 'relative',
            alignSelf: 'center',
            mt: md ? '140px' : sm ? '100px' : 'unset'
        }}
        >
        <img 
        src='/assets/images/08 1.png'
        style={{
            width: sm ? 559/2.2 : lg ? 559/1.8 : 559/1.4,
            height: sm ? 749/2.2 : lg ? 749/1.8 : 749/1.4
        }}
        />
        <Box
        sx={{
            position: 'absolute',
            top: '-27%',
            right: '-5%'
        }}
        >
        <img 
        src='/assets/images/Vector.png'
        style={{
            width: sm ? 530/2.2 : lg ? 530/1.8 : 530/1.4,
            height: sm ? 648/2.2 : lg ? 648/1.8 : 648/1.4
        }}
        />
        </Box>

        <img 
        src='/assets/images/star.png'
        style={{
            position: 'absolute',
            top: '-7%',
            right: '12%',
            transform: 'scale(.6)'
        }}
        />
        <img 
        src='/assets/images/sata gra.png'
        style={{
            position: 'absolute',
            bottom: '42%',
            left: '30%',
            transform: 'scale(.6)'
        }}
        />
        <img 
        src='/assets/images/star.png'
        style={{
            position: 'absolute',
            bottom: '27%',
            left: '15%',
            transform: 'scale(.6)'
        }}
        />
        <img 
        src='/assets/images/star (1).png'
        style={{
            position: 'absolute',
            bottom: '20%',
            right: '-10%',
            transform: 'scale(.6)'
        }}
        />
        </Stack>
        </Stack>
    )
}

export default PrivacyNPolicy