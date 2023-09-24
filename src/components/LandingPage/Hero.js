import { Stack, Typography } from "@mui/material"
import Button from "../Button"
import Divider from "./Divider"
import { primary } from "src/theme/create-palette"
import { useBreakpoints } from "src/theme/mediaQuery"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"



const Hero = () => {
    const {xs, sm, md, lg, xl} = useBreakpoints()
    const router = useRouter()

    const initialTimeRemaining = {
        hours: 0,
        minutes: 0,
        seconds: 0
    }
    const [timeRemaining, setTimeRemaining] = useState(initialTimeRemaining)
    const targetTime = new Date(2023, 10, 1, 0 , 0 ,0)

    const handleTimeChange = () => {
        setInterval( () => {
            const currentTime = new Date()
            const timeDiff = targetTime > currentTime ? targetTime - currentTime : 0
            const hours = Math.floor(timeDiff / (1000 * 60 * 60))
            let afterhours = timeDiff % (1000 * 60 * 60)

            const minutes = Math.floor(afterhours / 60000)
            let afterminutes = afterhours % 60000
            const seconds = Math.floor(afterminutes/1000)

            setTimeRemaining( (prevVal) => ({
                ...prevVal,
                hours,
                minutes,
                seconds
            }) )
        }, 1000 )
    }
    useEffect( () => {
        handleTimeChange()
    }, [] )


    return (
        <Stack
        sx={{
            position: 'relative',
            // height: '550px',
        }}
        >
        <img 
        src="/assets/images/Purple-Lens-Flare-PNG.png"
        style={{
            position: 'absolute',
            left: '-250px',
            top: '-400px',
            mixBlendMode: 'hard-light',
            transform: 'scale(0.6)',
            filter: 'blur(20px)'
        }}
        />
        <Stack
        sx={{
            p: md ? '30px' : '30px 50px 0 100px',
            overflow: 'hidden',
            gap: md ? '50px' : '20px',
            zIndex: 1,
            position: 'relative',
        }}
        >
        <img 
        src="/assets/images/star.png"
        style={{
            position: 'absolute',
            top: '7%',
            left: '10%',
            transform: 'scale(.7)'
        }}
        />
        <img 
        src="/assets/images/star (1).png"
        style={{
            position: 'absolute',
            bottom: '23.5%',
            left: '30%',
            transform: 'scale(.6)'
        }}
        />
            <Typography
            variant={sm ? "h6-2" : "h5-2"}
            sx={{
                alignSelf: md ? 'center' : 'flex-end',
                fontStyle: 'italic',
                wordSpacing: '5px',
                whiteSpace: 'nowrap',
                ...xs && {
                    fontSize: '.8rem'
                }
            }}
            >
                <span>
                Igniting a revolution in&nbsp;
                </span>
                <span
                style={{
                    position: 'relative',
                    width: 'fit-content'
                }}
                >
                    <span>HR Innovation</span>
                    <img
                    src="/assets/images/Vector 4.svg"
                    style={{
                        position: 'absolute', 
                        left: 0, 
                        bottom: '-10px',
                        width: '100%'
                    }}
                    />
                </span>
            </Typography>
            <Stack
            direction={md ? 'column' : 'row'}
            sx={{
                ...md && {
                    alignItems: 'center',
                    gap: '50px'
                }
            }}
            >
            <Stack
            sx={{
                alignSelf: 'center',
                gap: '50px',
                position: 'relative',
                zIndex: 2,
                ...md && {
                    textAlign: 'center',
                    alignItems: 'center'
                }
            }}
            >
                <Stack
                sx={{
                    gap: '20px'
                }}
                >
                <Typography
                variant={xs ? "h4" : lg ? "h3" : "h2"}
                >
                <span>getlinked Te</span>
                <span
                style={{position: 'relative', width: 'fit-content'}}
                >
                <span>c</span>
                <img 
                src="/assets/images/Creative 1.png"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        left: '50%',
                        top: '-30px'
                    }}
                />
                </span>
                <span>h</span>
                <span
                style={{
                    display: 'block',
                    whiteSpace: 'nowrap'
                }}
                >
                <span>
                Hackathon&nbsp;
                </span>
                <span
                style={{
                    color: primary.main
                }}
                >
                1.0
                </span>
                <span
                style={{
                    display: 'inline-flex',
                    gap: '5px',
                    marginLeft: '5px'
                }}
                >
                <img
                src="/assets/images/chain-9365116-7621444.png"
                style={{
                    width: lg ? '30px' : '50px',
                    height:  lg ? '30px' : '50px'
                }}
                />
                <img 
                src="/assets/images/1f4a5.png"
                style={{
                    width: lg ? '25px' : '40px',
                    height: lg ? '25px' : '40px',
                }}
                />
                </span>
                </span>
                </Typography>
                <Typography>
                Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
                </Typography>

                <Button 
                title='Register'
                sx={{
                    alignSelf: md ? 'center' : 'flex-start'
                }}
                onClick={ () => router.push('/register') }
                />
                </Stack>

                <Stack
                direction='row'
                sx={{
                    gap: '15px',
                    fontSize: '2.5rem',
                    '& sub': {
                        fontSize: '1rem'
                    }
                }}
                >
                <Typography variant="time">
                    {(timeRemaining?.hours).toString().padStart(2, '0')}<sub>H</sub>
                </Typography>
                <Typography variant="time">
                    {(timeRemaining?.minutes).toString().padStart(2, '0')}<sub>M</sub>
                </Typography>
                <Typography variant="time">
                    {(timeRemaining?.seconds).toString().padStart(2, '0')}<sub>S</sub>
                </Typography>
                </Stack>
            </Stack>

            <Stack
            sx={{
                width: 'fit-content',
                height: md ? '350px' : lg ? '400px' : '500px',
                transform: md ? 'translateX(10px)' : lg ? 'translateX(10px)' : xl ? 'translateX(60px)' : 'translateX(190px)',
                position: 'relative'
            }}
            >
                <img
                src="/assets/images/man-wearing-smart-glasses-touching-virtual-screen 1.png"
                style={{
                    height: '110%',
                    objectFit: 'cover',
                    zIndex: 1
                }}
                />
                <img 
                src="/assets/images/Image 1.png"
                style={{
                    position: 'absolute',
                    transform: 'scale(.75)',
                    left: '-100px',
                    top: '-70px',
                    zIndex: 2
                }}
                />
                <img 
                src="/assets/images/Purple-Lens-Flare-PNG.png"
                style={{
                    position: 'absolute',
                    left: '-250px',
                    top: '-200px',
                    opacity: '0.75',
                    mixBlendMode: 'hard-light',
                    zIndex: 1
                }}
                />
                <img 
                src="/assets/images/metrix 1.png"
                style={{
                    position: 'absolute',
                    left: '-350px',
                    bottom: 0
                }}
                />
            </Stack>
            </Stack>
        </Stack>
    

        <Divider />
        </Stack>
    )
}

export default Hero