import { Stack } from "@mui/material"
import Contact from "src/components/ContactPage"
import ContactForm from "src/components/ContactPage/ContactForm"
import Layout from "src/components/layouts/MainLayout"
import { useBreakpoints } from "src/theme/mediaQuery"



const ContactPage = () => {
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
        direction={sm ? 'column-reverse' : 'row'}
        sx={{
            p: md ? '30px' : '70px 150px',
            gap: '50px',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 1
        }}
        >
        <Contact />
        <ContactForm />
        </Stack>
        </Stack>
        </Layout>
    )
}

export default ContactPage