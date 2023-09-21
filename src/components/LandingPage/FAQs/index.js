import { Stack, Typography } from "@mui/material"
import { primary } from "src/theme/create-palette"
import Divider from "../Divider"
import questions from "./questions"
import FAQ from "./FAQ"
import {v4 as uuid} from 'uuid'


const FAQs = () => {

    return (
        <Stack
        sx={{
            position: 'relative',
            overflow: 'hidden'
        }}
        >
        <Stack
        direction='row'
        sx={{
            p: '100px',
            alignItems: 'center',
            gap: '100px'
        }}
        >
        <Stack
        sx={{
            gap: '50px',
            position: 'relative'
        }}
        >
        <Stack sx={{gap: '20px'}}>

        <Typography
        variant="h5"
        sx={{
            position: 'relative'
        }}
        >
        <img 
        src="/assets/images/star pu.png"
        style={{
            position: 'absolute',
            top: '-40px',
            left: '-40px'
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
        <img 
        src="/assets/images/cwok_casual_21 1.png"
        style={{
            width: 2000/3.5,
            height: 2000/3.5,
            objectFit: 'cover',
            zIndex: 1
        }}
        />

        <img 
        src="/assets/images/star (1).png"
        style={{
            position: 'absolute',
            bottom: '45%',
            left: 0
        }}
        />
        <img 
        src="/assets/images/star.png"
        style={{
            position: 'absolute',
            bottom: '-20px',
            right: '17.5%'
        }}
        />

        <QuestionMark 
        sx={{top: '-5%', left: '15%', fontSize: '4rem', color: '#A866FD'}}
        />
        <QuestionMark 
        sx={{top: '-15%', left: '35%', fontSize: '6rem'}}
        />
        <QuestionMark 
        sx={{top: '-5%', left: '55%', fontSize: '4rem', color: '#A866FD'}}
        />
        <img 
        src="/assets/images/sata gra.png"
        style={{
            position: 'absolute',
            top: '-5%',
            left: '47%'
        }}
        />
        <img 
        src="/assets/images/sata gra.png"
        style={{
            position: 'absolute',
            top: '20%',
            left: '20%'
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