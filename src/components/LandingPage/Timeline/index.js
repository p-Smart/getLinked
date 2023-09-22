import { Stack, Typography } from "@mui/material"
import timelines from "./timelines"
import TimelineCont from "./TimelineCont"
import {v4 as uuid} from 'uuid'



const Timeline = () => {


    return (
        <Stack
        sx={{
            p: '50px 100px 100px 100px',
            gap: '50px'
        }}
        >
        <Stack
        sx={{
            gap: '20px',
            textAlign: 'center'
        }}
        >
            <Typography variant="h5">Timeline</Typography>
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
            bottom: 0,
            left: 0
        }}
        />
        </Stack>
        </Stack>
    )
}

export default Timeline