import { Alert, Box, Stack, TextField, Typography } from "@mui/material"
import Button from "../Button"
import { useBreakpoints } from "src/theme/mediaQuery"
import { useState } from "react"
import fetchData from "src/utils/fetchData"



const ContactForm = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const [loading, setLoading] = useState(false)
    const initialContactData = {
        "email":"",
        "phone_number":"",
        "first_name": "",
        "message": ""
    }
    const [contactData, setContactData] = useState(initialContactData)
    const initialErrors = {
        "email":"",
        "phone_number":"",
        "first_name": "",
        "message": ""
    }
    const [errors, setErrors] = useState(initialErrors)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const clearError = () => {
        setErrorMessage('')
        setErrors(initialErrors)
        setSuccessMessage('')
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        clearError()
        try{
            await fetchData('/hackathon/contact-form', contactData)
            setSuccessMessage('Message Sent successfully')
            clearError()
        }
        catch(err){
            console.log(err)
            setErrorMessage('An Error Occurred')
            setSuccessMessage('')
            setErrors(err?.response?.data)
        }
        finally{
            setLoading(false)

        }
    }


    const form = [
        {
            title: `First Name`,
            onChange: (e) => setContactData( (prevVal) => ({...prevVal, first_name: e.target.value}) ),
            value: contactData?.first_name,
            bkName: "first_name",
        },
        {
            title: 'Email',
            onChange: (e) => setContactData( (prevVal) => ({...prevVal, email: e.target.value}) ),
            value: contactData?.email,
            bkName: "email",
        },
        {
            title: 'Phone Number',
            onChange: (e) => setContactData( (prevVal) => ({...prevVal, phone_number: e.target.value}) ),
            value: contactData?.phone_number,
            bkName: "phone_number",
        },
        {
            title: 'Message',
            onChange: (e) => setContactData( (prevVal) => ({...prevVal, message: e.target.value}) ),
            value: contactData?.message,
            bkName: "message",
        }
    ]

    return (
        <form
        noValidate
        onSubmit={handleSubmit}
        >
        <Stack
        sx={{
            p: sm ? 0 : '50px',
            ...!sm && {
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: '12px',
            },
            gap: '20px',
            minWidth: '40%',
            position: 'relative'
        }}
        >
        <img 
        src="/assets/images/star (1).png"
        style={{
            position: 'absolute',
            top: '-10%',
            right: '7%',
            transform: 'scale(.8)'
        }}
        />
        <img 
        src="/assets/images/star pu.png"
        style={{
            position: 'absolute',
            bottom: '20%',
            left: '-5%',
            transform: 'scale(.7)'
        }}
        />
        <img 
        src="/assets/images/star.png"
        style={{
            position: 'absolute',
            bottom: 0,
            right: '-8%',
            transform: 'scale(.6)'
        }}
        />

        <Typography
        variant="h6"
        sx={{
            color: 'primary.main'
        }}
        >
        Questions or need assistance?<br/>Let us know  about it!
        </Typography>

        {
        sm &&
        <Typography>
        Email us below to any question related<br/>to our event
        </Typography>
        }

        {
        errorMessage &&
        <Alert
        severity="error"
        >
            <Typography>{errorMessage}</Typography>
        </Alert>
        }
        {
        successMessage &&
        <Alert
        severity="success"
        >
            <Typography>{successMessage}</Typography>
        </Alert>
        }

        {
        form.map( ({title, value, onChange, bkName}) => (
            <Box
            key={title}
            >
            <TextField
            label={title}
            onChange={onChange}
            multiline={title==='Message'}
            rows={title==='Message' && 5}
            onFocus={clearError}
            fullWidth
            sx={{
                '& .MuiInputBase-root': {
                    color: 'neutral.50'
                },
                '& input': {
                    p: '10px 15px',
                    color: 'neutral.50'
                },
                '& select option': {
                    color: 'neutral.50'
                },
                '& input::placeholder': {
                    color: 'rgba(255, 255, 255, 0.25)',
                    fontSize: '.8rem'
                },
                '& fieldset': {
                    borderColor: 'neutral.50'
                },
            }}
            />
            {
            errors[bkName] &&
            <Typography
            sx={{
                color: 'red',
                fontSize: '.8rem'
            }}
            >
            {errors[bkName]}
            </Typography>
            }
            </Box>
        ) )
        }

        <Button 
        title='Submit'
        loading={loading}
        type='submit'
        sx={{
            alignSelf: 'center'
        }}
        />
        </Stack>
        </form>
    )
}

export default ContactForm