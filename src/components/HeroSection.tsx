import { useEffect, useRef } from 'react';
import Vanta from 'vanta/dist/vanta.birds.min';
import Typed from "typed.js";
import { Box, Typography, useTheme } from '@mui/material';

export function HeroSection() {
    const typedRef = useRef(null);
    <Typography component='h4' variant='h4'></Typography>

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Hello I'm Sara Ismail", "Hello I'm Data Analyst"],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            cursorChar: '',
            smartBackspace: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaRef.current) {
            vantaRef.current = Vanta({
                el: "#home",
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
        <Box id="home" sx={{ minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: theme.spacing(2), maxWidth: '75%' }} gap={theme.spacing(1)}>
                <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: theme.spacing(4), color: theme.palette.primary.contrastText }} id="typed" ref={typedRef}></Typography>
                <Typography sx={{ textAlign: 'center', color: theme.palette.grey[400], fontSize: theme.spacing(2) }}>
                    Junior data analyst with a proven track record of
                    leveraging data to address business challenges. Proficient in utilizing tools such as Power BI,
                    Excel, MySQL, Python, and R to efficiently gather, clean, analyze, and visualize data. Demonstrated ability to translate complex datasets into
                    actionable insights, contributing to informed decision-making. Keen attention to detail, strong analytical skills, and a commitment to delivering
                    high-quality results. Seeking opportunities to apply my expertise in data analysis to drive strategic business outcomes.</Typography>
            </Box>
        </Box>
    );
}
