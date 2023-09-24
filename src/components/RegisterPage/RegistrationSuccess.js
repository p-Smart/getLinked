import { Stack, Typography } from "@mui/material"
import Button from "../Button"
import { useBreakpoints } from "src/theme/mediaQuery"
import { useStyleContext } from "src/context/styleContext"



const RegistrationSuccess = () => {
    const {setOpenRegSuccessModal} = useStyleContext()
    const {sm} = useBreakpoints()


    return (
        <Stack
        sx={{
            position: 'fixed',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(21, 14, 40, 0.93)',
            width: '100%',
            height: '100%',
            zIndex: 10
        }}
        >
        <Stack
        sx={{
            border: '1px solid #D434FE',
            p: sm ? '15px' : '30px',
            textAlign: 'center',
            gap: '20px'
        }}
        >
        <Stack
        direction='row'
        >
            <img
            src="/assets/images/successfully-done-5108472-4288033 1.png"
            style={{
                marginTop: sm ? '0px' : '-10px',
                objectFit: 'cover',
                width: sm ? 288/1.4 : 288/1.1,
                height: sm ? 288/1.4 : 288/1.1
            }}
            />
            <img
            src="/assets/images/successful-man-3025713-2526911 1.png"
            style={{
                marginLeft: sm ? '-120px' : '-160px',
                objectFit: 'cover',
                width: sm ? 305/1.4 : 305/1.1,
                height: sm ? 305/1.4 : 305/1.1
            }}
            />
        </Stack>
        <Typography
        sx={{fontSize: sm ? '1.3rem' : '1.5rem', fontWeight: 600}}
        >
        Congratulations<br/>you have successfully Registered!
        </Typography>
        <Typography
        sx={{
            fontSize: '.8rem'
        }}
        >
        Yes, it was easy and you did it!<br/>check your mail box for next step&nbsp;
        <img
        src="/assets/images/1531010992wink-emoji-woman-png 1.png"
        />
        </Typography>

        <Button 
        title='Back'
        fullWidth
        onClick={() => setOpenRegSuccessModal(false)}
        />
        </Stack>
        </Stack>
    )
}

export default RegistrationSuccess