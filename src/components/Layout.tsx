import { AboutMeSection } from "./AboutMeSection";
import { AppBar } from "./AppBar";
import { HeroSection } from "./HeroSection";
export interface LayoutProps { }

export const Layout: React.FC<LayoutProps> = () => {
    return (
        <>
            <AppBar />
            <HeroSection />
            <AboutMeSection />
        </>
    );
}
