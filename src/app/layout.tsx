import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./rootLayout.module.css";
import { FloatingLinkBar } from "@/components/FloatingLinkBar/FloatingLinkBar";
import { NavigationBar } from "@/components/ResponsiveNavigationBar/NavigationBar/NavigationBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Leonhard Muellauer - Portfolio",
    description: "About Leonhard Muellauer Software Engineer in Vienna",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
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
