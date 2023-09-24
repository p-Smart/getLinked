import { Box, Stack, Typography } from "@mui/material"
import RegisterForm from "src/components/RegisterPage/RegisterForm"
import Layout from "src/components/layouts/MainLayout"
import { useBreakpoints } from "src/theme/mediaQuery"



const RegisterPage = () => {


    const {xs, sm, md, lg, xl} = useBreakpoints()

    return (
        <Layout>
        <Stack
        sx={{
            position: 'relative'
        }}
        >
        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            bottom: 0,
            left: '-40%',
            mixBlendMode: 'hard-light',
            filter: 'blur(20px)',
            opacity: '1'
        }}
        />

        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            mixBlendMode: 'hard-light',
            filter: 'blur(20px)',
            opacity: '1'
        }}
        />

        <Stack
        direction={md ? 'column' : 'row'}
        sx={{
            p: lg ? '30px' : '50px 100px 50px 0',
            gap: lg ? '20px' : '50px',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1
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
        
        <Box
        sx={{position: 'relative'}}
        >
        <img 
        src='/assets/images/3d-graphic-designer-showing-thumbs-up-png 1.png'
        style={{
            width: md ? 717/2.2 : lg ? 717/1.7 : 717/1.4,
            height: md ? 717/2.2 : lg ? 717/1.7 : 717/1.4
        }}
        />
        <img 
        src="/assets/images/sata gra.png"
        style={{
            position: 'absolute',
            top: 0,
            left: '20%',
            transform: 'scale(.8)'
        }}
        />
        <img 
        src="/assets/images/star (1).png"
        style={{
            position: 'absolute',
            bottom: 0,
            left: '24%',
            transform: 'scale(.8)'
        }}
        />
        <img 
        src="/assets/images/star pu.png"
        style={{
            position: 'absolute',
            bottom: '30%',
            right: 0,
            transform: 'scale(.6)'
        }}
        />
        </Box>
        <RegisterForm />
        </Stack>
        </Stack>
        </Layout>
    )
}

export default RegisterPage