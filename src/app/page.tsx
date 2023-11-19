import { AboutSection } from "@/components/AboutSection/AboutSection";
import { ProjectSection } from "@/components/ProjectSection/ProjectSection";
import { StartSection } from "@/components/StartSection/StartSection";
import { TechStackSection } from "@/components/TechStackSection/TechStackSection";

export default function Home() {
    return (
        <div>
            <StartSection />
            <AboutSection />
            <TechStackSection />
            <ProjectSection />
        </div>
    );
}
