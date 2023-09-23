import { Box, Stack, Typography } from "@mui/material"
import Button from "src/components/Button"
import Facebook from "src/components/icons/Facebook"
import IG from "src/components/icons/IG"
import LinkedIn from "src/components/icons/LinkedIn"
import Twitter from "src/components/icons/Twitter"
import { primary } from "src/theme/create-palette"
import {v4 as uuid} from 'uuid'
import contacts from "./contacts"
import { links, socials } from "./links"
import React from "react"
import { useBreakpoints } from "src/theme/mediaQuery"

const formatText = (text) => text.split('\n').map((line, index) => index === 0 ? line : <React.Fragment key={index}><br/>{line}</React.Fragment>)

const Footer = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()


    return (
        <Stack
        component='footer'
        sx={{
            p: md ? '30px' : '50px 100px 30px 100px',
            bgcolor: '#100B20',
        }}
        >
        <Stack
        sx={{
            gap: '40px',
            position: 'relative',
            zIndex: 1
        }}
        >
        <Stack
        direction={md ? 'column' : 'row'}
        sx={{
            gap: '20px',
            justifyContent: 'space-between',
        }}
        >
        <Stack
        sx={{
            maxWidth: sm ? 'unset' : md ? '65%' : '33.33%',
            position: 'relative',
            gap: '10px'
        }}
        >
        <img 
        src='/assets/images/star.png'
        style={{
            position: 'absolute',
            top: '20%',
            left: md ? '-6.5%' : '-15%',
            transform: 'scale(.6)',
        }}
        />
        <Stack sx={{gap: '5px'}}>
        <Typography
        variant={sm ? "h6" : "h5"}
        >
        <span>get</span>
        <span style={{color: primary.main}}>linked</span>
        </Typography>
        <Typography
        sx={{
            fontSize: '0.875rem',
            fontWeight: 600,
        }}
        >
        Getlinked Tech Hackathon is a technology innovation program 
established by a group of organizations with the aim of showcasing 
young and talented individuals in the field of technology
        </Typography>
        </Stack>

        <Button 
        variant="outlined"
        sx={{
            mt: 'auto',
            alignSelf: 'flex-start',
            p: 0,
            minWidth: 'unset'
        }}>
            <span>Terms of use&nbsp;</span>
            <span style={{color: primary.main, fontWeight: 600}}>|</span>
            <span>&nbsp;Privacy Policy</span>
        </Button>
        </Stack>

        <Stack sx={{gap: '10px'}}>
        <Typography
        sx={{color: 'primary.main', fontWeight: 600}}
        >
        Useful Links
        </Typography>
        {
        links.map( ({title, route}) => (
            <Button
            key={uuid()}
            variant="outlined"
            title={title}
            sx={{
                alignSelf: 'flex-start',
                p: 0,
                minWidth: 'unset'
            }}
            />
        ) )
        }

        <Stack 
        direction='row'
        sx={{
            gap: '10px',
            alignItems: 'center'
        }}
        >
            <Typography>
            Follow us
            </Typography>
            {
            socials.map( ({Icon, route}) => (
                <Button 
                key={uuid()}
                variant="outlined"
                sx={{
                    p: 0,
                    minWidth: 'unset',
                    ...!md && {m: 'auto'},
                    ...md && {my: 'auto'}
                }}
                >
                <Icon />
                </Button>
            ) )
            }
        </Stack>
        </Stack>

        <Stack 
        sx={{
            gap: '15px',
            position: 'relative'
        }}
        >
        <img 
        src='/assets/images/star (1).png'
        style={{
            position: 'absolute',
            top: md ? '-90%' : '10%',
            left: md ? '25%' : '-60%',
            transform: 'scale(.6)'
        }}
        />
        <img 
        src='/assets/images/star.png'
        style={{
            position: 'absolute',
            bottom: md ? '45%' : 0,
            right: md ? '20%' : '-30%',
            transform: 'scale(.6)'
        }}
        />
        <Typography
        sx={{color: 'primary.main', fontWeight: 600}}
        >
        Contact Us
        </Typography>
        {
        contacts.map( ({contact, Icon}) => (
            <Stack
            key={uuid()}
            direction='row'
            sx={{gap: '10px', alignItems: 'center'}}
            >
            <Icon />
            <Button
            key={uuid()}
            variant="outlined"
            title={formatText(contact)}
            sx={{
                alignSelf: 'flex-start',
                p: 0,
                minWidth: 'unset',
                textAlign: 'left'
            }}
            />
            </Stack>
        ) )
        }

        </Stack>
        </Stack>

        <Typography
        sx={{
            fontSize: '0.875rem',
            fontWeight: 600,
            position: 'relative',
            width: 'fit-content',
            alignSelf: 'center'
        }}
        >
        <img 
        src='/assets/images/sata gra.png'
        style={{
            position: 'absolute',
            top: '-30px',
            left: '45%',
            transform: 'scale(.6)'
        }}
        />
        All rights reserved. © getlinked Ltd.
        </Typography>
        </Stack>
        </Stack>
    )
}

export default Footer