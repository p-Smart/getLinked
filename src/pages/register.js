import { Stack, Typography } from "@mui/material"
import RegisterForm from "src/components/RegisterPage/RegisterForm"
import Layout from "src/components/layouts/MainLayout"
import { useBreakpoints } from "src/theme/mediaQuery"



const RegisterPage = () => {


    const {xs, sm, md, lg, xl} = useBreakpoints()

    return (
        <Layout>
        <Stack
        direction={md ? 'column' : 'row'}
        sx={{
            p: lg ? '30px' : '50px 100px 50px 0',
            gap: lg ? '20px' : '50px',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}
        >
        {
        md &&
        <Typography
        variant="h6"
        sx={{
            color: 'primary.main',
            alignSelf: 'flex-start'
        }}
        >
        Register
        </Typography>
        }
        
        <img 
        src='/assets/images/3d-graphic-designer-showing-thumbs-up-png 1.png'
        style={{
            width: md ? 717/2.2 : lg ? 717/1.7 : 717/1.4,
            height: md ? 717/2.2 : lg ? 717/1.7 : 717/1.4
        }}
        />
        <RegisterForm />
        </Stack>
        </Layout>
    )
}

export default RegisterPage