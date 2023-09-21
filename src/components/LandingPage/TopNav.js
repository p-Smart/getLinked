import {Stack, Typography } from "@mui/material"
import { primary } from "src/theme/create-palette"
import Button from "../Button"
import Divider from "./Divider"


const TopNav = () => {


    return (
        <Stack>
        <Stack
        direction='row'
        sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            p: '50px 100px 20px 100px'
        }}
        >
            <Typography
            variant="h5"
            >
            <span>get</span>
            <span style={{color: primary.main}}>linked</span>
            </Typography>

            <Stack
            direction='row'
            sx={{
                gap: '70px'
            }}
            >
                <Stack
                direction='row'
                sx={{
                    gap: '30px'
                }}
                >
                <Button
                title="Timeline"
                variant="outlined"
                />
                <Button 
                title="Overview"
                variant="outlined"
                />
                <Button 
                title="FAQs"
                variant="outlined"
                />
                <Button 
                title="Contact"
                variant="outlined"
                />
                </Stack>

                <Button
                title="Register"
                />
            </Stack>
        </Stack>


        <Divider sx={{borderColor: 'rgba(255, 255, 255, 0.18)', width: '100%'}} />
        </Stack>
    )
}

export default TopNav