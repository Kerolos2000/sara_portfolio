import { useLocation } from "react-router-dom";
import { AboutMeSection } from "./AboutMeSection";
import { AppBar } from "./AppBar";
import { HeroSection } from "./HeroSection";
import { useEffect } from "react";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";
export interface LayoutProps { }

export const Layout: React.FC<LayoutProps> = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <>
            <AppBar />
            <HeroSection />
            <AboutMeSection />
            <EducationSection />
            <ExperienceSection />
        </>
    );
}
