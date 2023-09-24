import { Alert, Box, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import Button from "../Button"
import { useBreakpoints } from "src/theme/mediaQuery"
import Grid from "../CustomGrid"
import {v4 as uuid} from 'uuid'
import CheckBox from "../CheckBox"
import { useEffect, useState } from "react"
import fetchData from "src/utils/fetchData"
import { useStyleContext } from "src/context/styleContext"



const RegisterForm = () => {
    const {setOpenRegSuccessModal} = useStyleContext()
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const initialRegData = {
        "email":"",
        "phone_number":"",
        "team_name": "",
        "group_size": "default",
        "project_topic":"",
        "category": "default",
        "privacy_poclicy_accepted": false
    }
    const initialErrors = {
        "email":"",
        "phone_number":"",
        "team_name": "",
        "group_size": "",
        "project_topic":"",
        "category": "",
        "privacy_poclicy_accepted": ""
    }
    const [errors, setErrors] = useState(initialErrors)
    const [regData, setRegData] = useState(initialRegData)
    
    const [categoryList, setCategoryList] = useState([])

    const clearError = () => {
        setErrorMessage('')
        setErrors(initialErrors)
    }


    const handleRegister = async (e) => {
        e.preventDefault()
        setLoading(true)
        clearError()
        try{
            await fetchData('/hackathon/registration', regData)
            setOpenRegSuccessModal(true)
        }
        catch(err){
            console.log(err)
            setErrorMessage('An Error Occurred')
            setErrors(err?.response?.data)
        }
        finally{
            setLoading(false)

        }
    }


    const fetchCategories = async () => {
        try{
            const data = await fetchData('/hackathon/categories-list', {}, 'GET')
            setCategoryList(data)
        }
        catch(err){
            console.log(err.message)
        }
        finally{

        }
    }


        useEffect( () => {
            fetchCategories()
        }, [] )




    const form = [
        {
            title: `Team's name`,
            placeholder: 'Enter the name of your group',
            onChange: (e) => setRegData( (prevVal) => ({...prevVal, team_name: e.target.value}) ),
            value: regData?.team_name,
            bkName: "team_name",
        },
        {
            title: 'Phone',
            placeholder: 'Enter your phone number',
            onChange: (e) => setRegData( (prevVal) => ({...prevVal, phone_number: e.target.value}) ),
            value: regData?.phone_number,
            bkName: "phone_number",
        },
        {
            title: 'Email',
            placeholder: 'Enter your email address',
            onChange: (e) => setRegData( (prevVal) => ({...prevVal, email: e.target.value}) ),
            value: regData?.email,
            bkName: "email",
        },
        {
            title: 'Project Topic',
            placeholder: 'What is your group project topic',
            onChange: (e) => setRegData( (prevVal) => ({...prevVal, project_topic: e.target.value}) ),
            value: regData?.project_topic,
            bkName: "project_topic",
        },
        {
            title: 'Category',
            placeholder: 'Select your category',
            onChange: (_, e) => setRegData( (prevVal) => ({...prevVal, category: e.props.value}) ),
            value: regData?.category,
            bkName: "category",
            select: true,
            list: [{name: 'MOBILE', id: 1}, {name: 'WEB', id: 2}, {name: 'BACKEND', id: 3}],
        },
        {
            title: 'Group Size',
            placeholder: 'Select',
            onChange: (_, e) => setRegData( (prevVal) => ({...prevVal, group_size: e.props.value}) ),
            value: regData?.group_size,
            bkName: "group_size",
            select: true,
            list: [{name: '2', id: 2}, {name: '3', id: 3}, {name: '4', id: 4}, {name: '5', id: 5}],
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

        {
        errorMessage &&
        <Alert
        severity="error"
        >
            <Typography>{errorMessage}</Typography>
        </Alert>
        }

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
        form.map( ({title, value, placeholder, onChange, select, list, bkName}, k) => (
            <Stack
            key={k}
            sx={{gap: '10px'}}
            >
            <Typography sx={{fontWeight: 600, fontSize: '.875rem'}}>
            {title}
            </Typography>
            <Box>
            {
            !select ?
            <TextField
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            onFocus={clearError}
            sx={{
                minWidth: '200px',
                '& .MuiInputBase-root': {

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
            /> :
            <Select
            variant="standard"
            value={value}
            label={placeholder}
            onFocus={clearError}
            sx={{
                '& input::placeholder': {
                    color: '#fff'
                },
                color: 'neutral.50',
                minWidth: '220px',
                '& svg': {
                    fill: '#fff'
                },
                '& fieldset': {
                    borderColor: 'neutral.50'
                }
            }}
            onChange={ onChange }
            >
            <MenuItem value={'default'}>{placeholder}</MenuItem>
            {
            list.map( ({name, id}) => (
                <MenuItem 
                value={id}
                key={id}
                >
                {name}
                </MenuItem>
            ) )
            }
            </Select>
            }

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
        loading={loading}
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