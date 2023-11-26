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
        "Learn more about Leonhard Muellauer - a skilled fullstack software engineer based in Vienna.",
    applicationName: "Portfolio of Leonhard Muellauer",
    keywords: [
        "Leonhard",
        "Muellauer",
        "Software Developer",
        "Software Engineer",
        "Software",
        "Backend Developer",
        "Frontend Developer",
        "Fullstack Developer",
        "Developer",
        "Portfolio",
        "Career",
        "Job",
        "Skilled",
        "Kenshi",
        "Profile of Leonhard Müllauer",
        "Leonhard Müllauer",
        "Leo Müllauer",
        "Leo Kenshi",
        "Programmer",
        "Müllauer",
        "Skilled Developer",
        "Programming",
        "Wien",
        "Vienna",
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
