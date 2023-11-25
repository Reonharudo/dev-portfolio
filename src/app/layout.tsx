import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./rootLayout.module.css";
import { FloatingLinkBar } from "@/components/FloatingLinkBar/FloatingLinkBar";
import { NavigationBar } from "@/components/ResponsiveNavigationBar/NavigationBar/NavigationBar";
import { useSSRTheme } from "@/components/hooks/useSSRTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Leonhard Muellauer - Portfolio",
    description: "About Leonhard Muellauer  - a Software Engineer in Vienna",
    applicationName: "Portfolio of Leonhard Muellauer",
    keywords: [
        "Leonhard",
        "Muellauer",
        "Software Developer",
        "Software Engineer",
        "Software",
        "Developer",
        "Portfolio",
        "Career",
        "Job",
        "Skilled",
    ],
    creator: "Leonhard Muellauer",
    publisher: "Leonhard Muellauer",

    openGraph: {
        title: "Leonhard Muellauer - Portfolio",
        description: "Learn more about Leonhard Muellauer",
        url: "https://www.leonhardmuellauer.dev",
        siteName: "Portfolio Leonhard Muellauer",
        images: [
            {
                url: "https://www.leonhardmuellauer.dev/_next/image?url=%2Fme.png&w=640&q=75",
                width: 400,
                height: 440,
            },
        ],
        locale: "en_US",
        type: "website",
    },
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
