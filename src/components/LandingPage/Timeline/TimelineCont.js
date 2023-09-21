import { Stack, Typography } from "@mui/material"
import { useRef } from "react"
import { primary } from "src/theme/create-palette"



const TimelineCont = ({number, title, content, date}) => {
    const oddLine = (number % 2)


    const Details = () => (
        <Stack
        sx={{
            gap: '15px',
            width: '400px',
            position: 'absolute',
            bottom: oddLine ? 0 : '-50px',
            ...oddLine ? {
                left: 'calc(-100% + -400px)',
            } : {
                right: 'calc(-100% + -400px)'
            }
        }}
        >
        <Typography 
        sx={{
            color: 'primary.main',
            fontWeight: 1000,
            fontSize: '1.125rem'
        }}
        >
        {title}
        </Typography>
        <Typography sx={{fontSize: '.8rem'}}>
        {content}
        </Typography>
        </Stack>
    )

    const TimelineDate = () => {

        return(
            <Typography
            sx={{
                color: 'primary.main',
                fontWeight: 1000,
                fontSize: '1.125rem',
                position: 'absolute',
                whiteSpace: 'nowrap',
                bottom: 0,
                ...oddLine ? {
                    right: 'calc(-100% + -200px)',
            } : {
                left: 'calc(-100% + -200px)',
            }
            }}
            >
            {date}
            </Typography>
        )
    }

    return (
        <Stack
        direction='row'
        sx={{
            gap: '50px',
            alignSelf: 'center',
            position: 'relative'
        }}
        >
        <Details />

        <Line
        number={number}
        />

        <TimelineDate />
        </Stack>
    )
}

export default TimelineCont














const Line = ({number}) => {

    return (
        <Stack
        sx={{
            alignItems: 'center',
            position: 'relative',
            gap: '7px'
        }}
        >
        <Stack
        sx={{
            height: '100px',
            borderLeft: '3px solid',
            borderColor: 'primary.main'
        }}
        />
        <Circle
        number={number}
        />
        </Stack>
    )
}


const Circle = ({number}) => {

    return (
        <Stack 
        sx={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: primary.mainGradient,
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >
        <Typography
        sx={{
            fontWeight: 700
        }}
        >
            {number}
        </Typography>
        </Stack>
    )
}