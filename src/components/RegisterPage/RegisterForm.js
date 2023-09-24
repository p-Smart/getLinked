import { Box, Stack, TextField, Typography } from "@mui/material"
import Button from "../Button"
import { useBreakpoints } from "src/theme/mediaQuery"
import Grid from "../CustomGrid"
import {v4 as uuid} from 'uuid'
import CheckBox from "../CheckBox"
import { useState } from "react"
import fetchData from "src/utils/fetchData"
import { useStyleContext } from "src/context/styleContext"

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
    const {setOpenRegSuccessModal} = useStyleContext()
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const initialRegData = {
        "email":"",
        "phone_number":"",
        "team_name": "",
        "group_size": '',
        "project_topic":"",
        "category": '',
        "privacy_poclicy_accepted": false
    }
    const [regData, setRegData] = useState(initialRegData)
    
    const [data, setData] = useState('')


    const handleRegister = async (e) => {
        e.preventDefault()
        setOpenRegSuccessModal(true)

        return console.log(regData)
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
            onChange: (e) => setRegData( (prevVal) => ({...prevVal, team_name: e.target.value}) ),
            value: regData?.team_name
        },
        {
            title: 'Phone',
            placeholder: 'Enter your phone number',
            onChange: (e) => setRegData( (prevVal) => ({...prevVal, phone_number: e.target.value}) ),
            value: regData?.phone_number
        },
        {
            title: 'Email',
            placeholder: 'Enter your email address',
            onChange: (e) => setRegData( (prevVal) => ({...prevVal, email: e.target.value}) ),
            value: regData?.email
        },
        {
            title: 'Project Topic',
            placeholder: 'What is your group project topic',
            onChange: (e) => setRegData( (prevVal) => ({...prevVal, project_topic: e.target.value}) ),
            value: regData?.project_topic
        },
        {
            title: 'Category',
            placeholder: '',
            onChange: (e) => setRegData( (prevVal) => ({...prevVal, category: e.target.value}) ),
            value: regData?.category
        },
        {
            title: 'Group Size',
            placeholder: '',
            onChange: (e) => setRegData( (prevVal) => ({...prevVal, group_size: e.target.value}) ),
            value: regData?.group_size
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
            position: 'relative'
        }}
        >
        <img 
        src="/assets/images/star (1).png"
        style={{
            position: 'absolute',
            top: '3%',
            right: '25%',
            transform: 'scale(.8)'
        }}
        />
        <img 
        src="/assets/images/star.png"
        style={{
            position: 'absolute',
            bottom: '-5%',
            right: '10%',
            transform: 'scale(.5)'
        }}
        />
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
            flexDirection: md ? 'column' : 'row'
        }}
        sx={{
            gap: '20px',
            width: '100%'
        }}
        >
        {
        form.map( ({title, value, placeholder, onChange}, k) => (
            <Stack
            key={k}
            sx={{gap: '10px'}}
            >
            <Typography sx={{fontWeight: 600, fontSize: '.875rem'}}>
            {title}
            </Typography>
            <TextField
            placeholder={placeholder}
            sx={textFieldStyle}
            onChange={onChange}
            value={value}
            type="text"
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
        check={regData?.privacy_poclicy_accepted}
        onChange={(val) => setRegData( (prevVal) => ({...prevVal, privacy_poclicy_accepted: val}) )}
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