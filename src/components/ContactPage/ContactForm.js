import { Stack, TextField, Typography } from "@mui/material"
import Button from "../Button"
import { useBreakpoints } from "src/theme/mediaQuery"

const textFieldStyle = {
    '& .MuiInputBase-root': {

    },
    '& input': {
        p: '10px 15px',
        color: 'neutral.50'
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


const ContactForm = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()

    return (
        <Stack
        sx={{
            p: sm ? 0 : '50px',
            ...!sm && {
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: '12px',
            },
            gap: '20px',
            minWidth: '40%'
        }}
        >
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

        <TextField 
        label='First Name'
        sx={textFieldStyle}
        />
        <TextField 
        label="Mail Name"
        sx={textFieldStyle}
        />
        <TextField 
        label="Message"
        multiline
        rows={5}
        sx={textFieldStyle}
        />

        <Button 
        title='Submit'
        sx={{
            alignSelf: 'center'
        }}
        />
        </Stack>
    )
}

export default ContactForm