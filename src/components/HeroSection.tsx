import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Vanta from 'vanta/dist/vanta.clouds.min';

export function HeroSection() {
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaRef.current) {
            vantaRef.current = Vanta({
                THREE: THREE,
                el: "#home",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                skyColor: 0x6dbbd9,
                cloudColor: 0xb3c7e6,
                cloudShadowColor: 0x1a3650,
                sunColor: 0xff9e26,
                sunGlareColor: 0xff6735,
                sunlightColor: 0xff9326,
            });
        }

        return () => {
            if (vantaRef.current) {
                vantaRef.current.destroy();
            }
        };
    }, []);

    return (
        <Box id="home" sx={{ minHeight: '70vh', }}>
            <Box className="header-content">
                <Box className="intro-text">
                    <Typography>Hi, I'm Sara</Typography>
                </Box>
            </Box>
        </Box>
    );
}
