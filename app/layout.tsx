import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CursorTracker from "@/components/site/CursorTracker";
import MobileCTABar from "@/components/site/MobileCTABar";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const DESC = "Robionix engineers the systems that see, measure, and run modern factories: MagicQC AI garment measurement, manufacturing ERP, robotics and embedded systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://robionix.com"),
  title: {
    default: "Robionix Technologies — Vision-driven automation for the factory floor",
    template: "%s",
  },
  description: DESC,
  openGraph: {
    title: "Robionix Technologies — Vision-driven automation for the factory floor",
    description: DESC,
    url: "/",
    siteName: "Robionix Technologies",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Robionix Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robionix Technologies — Vision-driven automation for the factory floor",
    description: DESC,
    images: ["/og.png"],
  },
  icons: { icon: "/assets/brand/logo-mark.png" },
};

// Runs before paint: applies the saved theme so the loader opens in the right palette.
const themeScript = `(function(){try{var t=localStorage.getItem('robionix-theme');if(t!=='light'&&t!=='dark')t='dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
        <MobileCTABar />
        <CursorTracker />
      </body>
    </html>
  );
}
