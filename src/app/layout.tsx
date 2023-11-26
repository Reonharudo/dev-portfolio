import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./rootLayout.module.css";
import { FloatingLinkBar } from "@/components/FloatingLinkBar/FloatingLinkBar";
import { NavigationBar } from "@/components/ResponsiveNavigationBar/NavigationBar/NavigationBar";
import { useSSRTheme } from "@/components/hooks/useSSRTheme";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: "Leonhard Muellauer - Software Engineer Portfolio",
    description:
        "Explore the professional journey and expertise of Leonhard Muellauer, a skilled Software Engineer based in Vienna. View his projects, skills, and achievements.",
    applicationName: "Portfolio of Leonhard Muellauer",
    keywords: [
        "Leonhard Muellauer",
        "Leo Kenshi",
        "Software Engineer",
        "Programming",
        "Web Development",
        "Java",
        "JavaScript",
        "React",
        "Node.js",
        "Portfolio",
        "Career",
        "Skilled Developer",
    ],
    creator: "Leonhard Muellauer",
    publisher: "Leonhard Muellauer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const theme = useSSRTheme();

    return (
        <html lang="en">
            <body data-theme={theme} className={inter.className}>
                <div className={styles.app}>
                    <div className={styles.navigation_container}>
                        <NavigationBar />
                    </div>

                    <div className={styles.main_content}>{children}</div>

                    <div className={styles.footer}>
                        <FloatingLinkBar />
                    </div>
                </div>
            </body>
        </html>
    );
}
