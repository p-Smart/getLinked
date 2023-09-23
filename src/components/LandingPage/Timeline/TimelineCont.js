import { Stack, Typography } from "@mui/material"
import { forwardRef, useRef } from "react"
import { primary } from "src/theme/create-palette"
import { useBreakpoints } from "src/theme/mediaQuery"



const TimelineCont = ({number, title, content, date}) => {
    const oddLine = (number % 2)
    const {xs, sm, md, lg, xl} = useBreakpoints()


    const Details = () => {
        return (
            <Stack
            sx={{
                gap: '15px',
                width: !sm ? '400px' : 'unset',
                position: !md ? 'absolute' : 'relative',
                ...!md && {
                        bottom: oddLine ? 0 : '-50px',
                    ...oddLine ? {
                        left: 'calc(-100% + -400px)',
                    } : {
                        right: 'calc(-100% + -400px)'
                    }
                }
            }}
            >
            {
            number===1 &&
            <img 
            src="/assets/images/star pu.png"
            style={{
                position: !md ? 'relative' : 'absolute',
                width: '25px',
                height: '30px',
                top: sm ? '-40px' : '-50px',
                left: sm ? '30px' : '50px',
                transform: 'scale(.7)'
            }}
            />
            }
            <Typography 
            sx={{
                color: 'primary.main',
                fontWeight: sm ? 700 : 1000,
                fontSize: sm ? '1rem' : '1.125rem'
            }}
            >
            {title}
            </Typography>
            <Typography sx={{fontSize: '.8rem'}}>
            {content}
            </Typography>
            </Stack>
        )
    }

    const TimelineDate = forwardRef((_, ref) => {
        
        return(
            <Typography
            ref={ref}
            sx={{
                color: 'primary.main',
                fontWeight: sm ? 700 : 1000,
                fontSize: sm ? '1rem' : '1.125rem',
                position: !md ? 'absolute' : 'relative',
                whiteSpace: !md ? 'nowrap' : 'unset',
                ...!md && {
                        bottom: 0,
                    ...oddLine ? {
                        right: 'calc(-100% + -200px)',
                } : {
                    left: 'calc(-100% + -200px)',
                },
                },
                ...md && {
                    mt: 'auto'
                }
            }}
            >
            {date}

            {
            number===3 &&
            <img 
            src="/assets/images/star.png"
            style={{
                position: !md ? 'relative' : 'absolute',
                width: '25px',
                height: '30px',
                top: '-30px',
                right: sm ? 0 : '-50px',
                transform: 'scale(.7)'
            }}
            />
            }
            </Typography>
        )
    })

    return (
        <Stack
        direction='row'
        sx={{
            gap: '10px',
            alignSelf: sm ? 'flex-start' : 'center',
            position: 'relative'
        }}
        >
        {!md && <Details />}
        {!md && <TimelineDate />}
        <Line
        number={number}
        />
        {
        md &&
        <Stack>
            <Details />
            <TimelineDate />
        </Stack>
        }
        </Stack>
    )
}

export default TimelineCont














const Line = ({number}) => {
    const {xs, sm, md, lg, xl} = useBreakpoints()

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