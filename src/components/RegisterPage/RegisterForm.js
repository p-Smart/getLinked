import { Box, Stack, TextField, Typography } from "@mui/material"
import Button from "../Button"
import { useBreakpoints } from "src/theme/mediaQuery"
import Grid from "../CustomGrid"
import {v4 as uuid} from 'uuid'
import CheckBox from "../CheckBox"
import { useState } from "react"
import fetchData from "src/utils/fetchData"

const textFieldStyle = {
    minWidth: 'unset',
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
    '& fieldset': {
        borderColor: 'neutral.50'
    },
}


const RegisterForm = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const [agree, setAgree] = useState(false)
    const initialFormData = {
        "email":"",
        "phone_number":"",
        "team_name": "",
        "group_size": '',
        "project_topic":"",
        "category": '',
        "privacy_poclicy_accepted": ''
    }
    const [formData, setFormData] = useState(initialFormData)


    const handleRegister = async (e) => {
        e.preventDefault()

        return console.log(formData)
        try{
            await fetchData('/hackathon/registration', {
                "email":"sample@eexample.com",
                "phone_number":"0903322445533",
                "team_name": "Space Explore",
                "group_size": 10,
                "project_topic":"Web server propagation",
                "category": 1,
                "privacy_poclicy_accepted": true
            })
        }
        catch(err){

        }
        finally{

        }
    }





    const form = [
        {
            title: `Team's name`,
            placeholder: 'Enter the name of your group',
            action: (val) => setFormData( (prevVal) => ({...prevVal, team_name: val}) ),
            value: formData?.team_name
        },
        {
            title: 'Phone',
            placeholder: 'Enter your phone number',
            action: (val) => setFormData( (prevVal) => ({...prevVal, phone_number: val}) ),
            value: formData?.phone_number
        },
        {
            title: 'Email',
            placeholder: 'Enter your email address',
            action: (val) => setFormData( (prevVal) => ({...prevVal, email: val}) ),
            value: formData?.email
        },
        {
            title: 'Project Topic',
            placeholder: 'What is your group project topic',
            action: (val) => setFormData( (prevVal) => ({...prevVal, project_topic: val}) ),
            value: formData?.project_topic
        },
        {
            title: 'Category',
            placeholder: '',
            action: (val) => setFormData( (prevVal) => ({...prevVal, category: val}) ),
            value: formData?.category
        },
        {
            title: 'Group Size',
            placeholder: '',
            action: (val) => setFormData( (prevVal) => ({...prevVal, group_size: val}) ),
            value: formData?.group_size
        },
    ]

    return (
        <form
        noValidate
        onSubmit={handleRegister}
        >
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
        stackGrids="column"
        columns={md ? 1 : 2}
        gridWrapSx={{
            gap: '20px',
            width: '100%',
            flexDirection: 'column'
        }}
        sx={{
            gap: '20px',
            width: '100%'
        }}
        >
        {
        form.map( ({title, placeholder, action, value}) => (
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
            onChange={(e) => action(e.target.value)}
            value={value}
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
        type='submit'
        fullWidth
        sx={{
            alignSelf: 'center'
        }}
        />
        </Stack>
        </Stack>
        </form>
    )
}

export default RegisterForm