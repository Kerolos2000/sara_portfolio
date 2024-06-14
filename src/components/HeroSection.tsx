import { useEffect, useRef } from 'react';
import Vanta from 'vanta/dist/vanta.birds.min';
import Typed from "typed.js";
import { Box, Typography, useTheme } from '@mui/material';

export interface HeroSectionProps { }

export const HeroSection: React.FC<HeroSectionProps> = () => {
    const typedRef = useRef(null);
    <Typography component='h4' variant='h4'></Typography>

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Data Analyst"],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaRef.current) {
            vantaRef.current = Vanta({
                el: "#HeroSection",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0x160625,
                color1: 0xf5f5f5,
                color2: 0xff000e,
                colorMode: "lerp",
                birdSize: 0.80,
                wingSpan: 25.00,
                speedLimit: 3.00,
                separation: 75.00,
                alignment: 50.00,
                cohesion: 5.00,
            });
        }

        return () => {
            if (vantaRef.current) {
                vantaRef.current.destroy();
            }
        };
    }, []);

    const theme = useTheme()
    return (
        <Box id="HeroSection" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: theme.spacing(2), maxWidth: '75%' }} gap={theme.spacing(1)}>
                <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: theme.spacing(4), color: theme.palette.primary.contrastText }}>Hello I'm</Typography>
                <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: theme.spacing(8), color: theme.palette.primary.main }}>Sara Ismail Ali</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: theme.spacing(3), alignItems: 'center', color: theme.palette.primary.contrastText }}>
                    <Typography sx={{ fontSize: theme.spacing(3) }} id="typed" ref={typedRef} />
                </Box>
            </Box>
        </Box>
    );
}
