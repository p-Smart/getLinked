import { Divider, Stack, Typography } from "@mui/material"
import Button from "src/components/Button"
import Reveal from "src/components/animations/Reveal"



const FAQ = ({title, response}) => {

    return (
        <Button
        variant="outlined"
        sx={{
            width: '100%',
            gap: '10px',
            p: 0,
            minWidth: 'unset',
            flexDirection: 'column',
            textAlign: 'unset',
            alignItems: 'unset'
        }}
        >
        <Stack 
        direction='row'
        sx={{gap: '10px', justifyContent: 'space-between'}}
        >
        <Reveal>
        <Typography>
        {title}
        </Typography>
        </Reveal>

        <Typography sx={{color: 'primary.main'}}>{'+'}</Typography>
        </Stack>

        <Divider sx={{borderColor: 'primary.main', width: '100%'}} />
        </Button>
    )
}

export default FAQ