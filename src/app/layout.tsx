import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "styles/style.scss";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
    title: "My website portfolio",
    description: "My portfolio",
    viewport: {
        width: "device-width",
        initialScale: 1
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={lato.className}>{children}</body>
        </html>
    );
}
