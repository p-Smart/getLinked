import { Box, Stack, TextField, Typography } from "@mui/material"
import Button from "../Button"
import { useBreakpoints } from "src/theme/mediaQuery"
import Grid from "../CustomGrid"
import {v4 as uuid} from 'uuid'
import CheckBox from "../CheckBox"
import { useState } from "react"

const textFieldStyle = {
    '& .MuiInputBase-root': {

    },
    '& input': {
        p: '10px 15px',
        color: 'neutral.50'
    },
    '& input::placeholder': {
        color: 'rgba(255, 255, 255, 0.25)',
        fontSize: '.8rem'
    },
    '& .MuiFormLabel-root': {
        top: '-5px',
    },
    '& fieldset': {
        borderColor: 'neutral.50'
    },
    '& fieldset:hover': {
        borderColor: 'neutral.50'
    },
    '& .Mui-focused fieldset': {
        borderColor: 'neutral.50'
    },
}


const RegisterForm = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const [agree, setAgree] = useState(false)





    const form = [
        {
            title: `Team's name`,
            placeholder: 'Enter the name of your group'
        },
        {
            title: 'Phone',
            placeholder: 'Enter your phone number'
        },
        {
            title: 'Email',
            placeholder: 'Enter your email address'
        },
        {
            title: 'Project Topic',
            placeholder: 'What is your group project topic'
        },
        {
            title: 'Category',
            placeholder: ''
        },
        {
            title: 'Group Size',
            placeholder: ''
        },
    ]

    return (
        <Stack
        sx={{
            p: md ? 0 : '50px',
            ...!md && {
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: '12px',
            },
            gap: '20px',
        }}
        >
        {
        !md &&
        <Typography
        variant="h6"
        sx={{
            color: 'primary.main'
        }}
        >
        Register
        </Typography>
        }

        <Stack
        sx={{
            gap: '15px'
        }}
        >
        <Stack 
        sx={{
            
        }} 
        direction='row'>
        <Typography>Be part of this movement!</Typography>
        <Stack
        direction='row'
        sx={{
            width: '80px',
            height: '1px',
            borderBottom: '1px dashed',
            borderColor: 'primary.main',
            alignSelf: 'center',
            ml: '5px',
            alignItems: 'center',
            justifyContent: 'center',
            pb: '17px'
        }}>
        <img 
        src="/assets/images/1f6b6-2640.png"
        />
        <img 
        src="/assets/images/image_processing20200511-10310-13mnlsx.png"
        />
        </Stack>
        </Stack>

        <Typography sx={{fontWeight: 600, fontSize: '1.2rem'}}>CREATE YOUR ACCOUNT</Typography>
        </Stack>

        <Stack
        sx={{
            gap: '20px',
            width: '100%'
        }}
        >
        <Grid
        columns={md ? 1 : 2}
        gridWrapSx={{
            gap: '20px'
        }}
        sx={{
            gap: '20px',
            width: '100%'
        }}
        >
        {
        form.map( ({title, placeholder}) => (
            <Stack
            key={uuid()}
            sx={{gap: '10px'}}
            >
            <Typography sx={{fontWeight: 600, fontSize: '.875rem'}}>
            {title}
            </Typography>
            <TextField
            placeholder={placeholder}
            sx={textFieldStyle}
            fullWidth
            />
            </Stack>
        ) )
        }
        </Grid>

        <Stack sx={{gap: '10px'}}>
        <Typography sx={{color: '#FF26B9', fontSize: '.7rem', fontStyle: 'italic'}}>
        Please review your registration details before submitting
        </Typography>
        <Stack 
        direction='row'
        sx={{gap: '5px'}}>
        <CheckBox 
        check={agree}
        setCheck={setAgree}
        onChange={() => console.log(agree)}
        />
        <Typography sx={{fontSize: '.8rem'}}>
        I agreed with the event terms and conditions  and privacy policy
        </Typography>
        </Stack>
        </Stack>

        <Button 
        title='Register'
        fullWidth
        sx={{
            alignSelf: 'center'
        }}
        />
        </Stack>
        </Stack>
    )
}

export default RegisterForm