import { Stack, Typography } from "@mui/material"
import { primary } from "src/theme/create-palette"
import Divider from "../Divider"
import questions from "./questions"
import FAQ from "./FAQ"
import {v4 as uuid} from 'uuid'
import { useBreakpoints } from "src/theme/mediaQuery"
import { useStyleContext } from "src/context/styleContext"
import ZoomInOut from "src/components/animations/ZoomInOut"


const FAQs = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const {faqsRef} = useStyleContext()

    return (
        <Stack
        ref={faqsRef}
        id='faqs'
        sx={{
            position: 'relative',
            overflow: 'hidden'
        }}
        >
        <Stack
        direction={md ? 'column' : 'row'}
        sx={{
            p: md ? '50px 30px 30px 30px' : '100px',
            alignItems: 'center',
            gap: md ? '100px' : lg ? '50px' : '100px'
        }}
        >
        <Stack
        sx={{
            gap: '50px',
            position: 'relative'
        }}
        >
        <Stack sx={{gap: '20px', ...md && {textAlign: 'center'}}}>

        <Typography
        variant={sm ? "h6" : "h5"}
        sx={{
            position: 'relative'
        }}
        >
        <img 
        src="/assets/images/star pu.png"
        style={{
            position: 'absolute',
            top: '-40px',
            left: '-40px',
            transform: 'scale(.7)'
        }}
        />
        <span>Frequently Ask</span>
        <span
        style={{
            display: 'block',
            color: primary.main
        }}
        >
        Question
        </span>

        </Typography>

        <Typography>
        <span>We got answers to the questions that you might want to ask about&nbsp;</span>
        <span style={{fontWeight: 600}}>
        getlinked Hackathon 1.0
        </span>
        </Typography>
        </Stack>

        <Stack sx={{gap: '25px'}}>
        {
        questions.map( ({title, response}) => (
            <FAQ 
            key={uuid()}
            title={title}
            response={response}
            />
        ) )
        }
        </Stack>
        </Stack>

        <Stack
        sx={{
            position: 'relative',
        }}
        >
        <ZoomInOut times={2}>
        <img 
        src="/assets/images/cwok_casual_21 1.png"
        style={{
            width: sm ? 2000/5 : md ? 2000/4.8 : lg ? 2000/4.4 : xl ? 2000/3.7 : 2000/3.5,
            height: sm ? 2000/5 : md ? 2000/4.8 : lg ? 2000/4.4 : xl ? 2000/3.7 : 2000/3.5,
            objectFit: 'cover',
            zIndex: 1
        }}
        />
        </ZoomInOut>

        <img 
        src="/assets/images/star (1).png"
        style={{
            position: 'absolute',
            bottom: '45%',
            left: 0,
            transform: 'scale(.6)'
        }}
        />
        <img 
        src="/assets/images/star.png"
        style={{
            position: 'absolute',
            bottom: '-20px',
            right: '17.5%',
            transform: 'scale(.6)'
        }}
        />

        <QuestionMark 
        sx={{top: sm ? '-12%' : md ? '-10%' : '-5%', left: '15%', fontSize: '4rem', color: '#A866FD'}}
        />
        <QuestionMark 
        sx={{top: sm ? '-23%' : md ? '-20%' : '-15%', left: '35%', fontSize: '6rem'}}
        />
        <QuestionMark 
        sx={{top: sm ? '-12%' : md ? '-10%' : '-5%', left: '55%', fontSize: '4rem', color: '#A866FD'}}
        />
        <img 
        src="/assets/images/sata gra.png"
        style={{
            position: 'absolute',
            top: '-5%',
            left: '47%',
            transform: 'scale(.6)'
        }}
        />
        <img 
        src="/assets/images/sata gra.png"
        style={{
            position: 'absolute',
            top: '20%',
            left: '20%',
            transform: 'scale(.6)'
        }}
        />
        </Stack>
        </Stack>

        <Divider />
        </Stack>
    )
}

export default FAQs



const QuestionMark = ({sx}) => {

    return (
        <Typography 
        sx={{
            fontFamily: 'MadeTommy-Regular',
            fontSize: '4rem',
            color: 'primary.main',
            position: 'absolute',
            ...sx
        }}>
            ?
        </Typography>
    )
}