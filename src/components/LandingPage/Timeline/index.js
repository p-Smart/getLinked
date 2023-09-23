import { Stack, Typography } from "@mui/material"
import timelines from "./timelines"
import TimelineCont from "./TimelineCont"
import {v4 as uuid} from 'uuid'
import { useBreakpoints } from "src/theme/mediaQuery"



const Timeline = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()


    return (
        <Stack
        sx={{
            p: md ? '30px 10px 60px 10px' : '50px 100px 100px 100px',
            gap: '50px'
        }}
        >
        <Stack
        sx={{
            gap: '20px',
            textAlign: 'center'
        }}
        >
            <Typography variant={sm ? "h6" : "h5"}>Timeline</Typography>
            <Typography>
            {`Here is the breakdown of the time we anticipate`}<br/>
            {`using for the upcoming event.`}
            </Typography>
        </Stack>

        <Stack sx={{gap: '15px', position: 'relative'}}>
        {
        timelines.map( ({title, content, date}, k) => (
            <TimelineCont
            key={uuid()}
            title={title}
            content={content}
            date={date}
            number={k+1}
            />
        ) )
        }


        <img 
        src="/assets/images/star (1).png"
        style={{
            position: 'absolute',
            bottom: sm ? '-50px' : 0,
            left: 0,
            transform: 'scale(.7)'
        }}
        />
        </Stack>
        </Stack>
    )
}

export default Timeline