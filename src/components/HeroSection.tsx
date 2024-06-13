import { Box } from '@mui/material';
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
                minHeight: 200.00,
                minWidth: 200.00,
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
        <Box id="home">
            <Box className="header-content">
                <Box className="intro-text">
                    <h1>Hi, I'm Sara</h1>
                    <h2>Junior Developer</h2>
                    <p>Designing the exceptional, at the crossroads of technology and creativity<br /> every pixel of my digital creations tells a story.<br /> Boxe into the universe of my portfolio and discover the symphony of my achievements.</p>
                </Box>
            </Box>
        </Box>
    );
}
