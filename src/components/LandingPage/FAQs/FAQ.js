import { Divider, Stack, Typography } from "@mui/material"
import Button from "src/components/Button"



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
        <Typography>
        {title}
        </Typography>

        <Typography sx={{color: 'primary.main'}}>{'+'}</Typography>
        </Stack>

        <Divider sx={{borderColor: 'primary.main', width: '100%'}} />
        </Button>
    )
}

export default FAQ