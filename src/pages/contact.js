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
        direction={sm ? 'column-reverse' : 'row'}
        sx={{
            p: md ? '30px' : '70px 150px',
            gap: '50px',
            justifyContent: 'space-between'
        }}
        >
        <Contact />
        <ContactForm />
        </Stack>
        </Layout>
    )
}

export default ContactPage