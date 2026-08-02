import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
// https://react-hot-toast.com/
// can change this position later
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import TranslateButton from "@/components/translate-btn";
import { LanguageProvider } from "@/context/language-context";
import ActionButton from "@/components/action-btn";
import { ActionProvider } from "@/context/action-context";

const SITE_URL = "https://victoria-duan.vercel.app";
const SITE_TITLE = "Jiaqi (Victoria) Duan | AI System Engineer";
// Absolute, not "/og-image.png": Next resolves relative metadata URLs against
// the dev origin, so a relative path silently ships localhost in some builds.
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const SITE_DESCRIPTION =
  "Personal portfolio of Jiaqi (Victoria) Duan — an AI System Engineer building coding agents, RAG pipelines, and multi-agent systems.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // The full name is in the title so searching it actually lands here.
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  // Without these, sharing the link anywhere renders a bare URL — no card, no
  // image — which is most of what a portfolio link is for.
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        {/*
          Runs before first paint, so a dark-mode visitor never sees the light
          background flash. Without it the server renders no `dark` class, the
          browser paints `bg-gray-50`, and the theme only switches once React
          has hydrated and ThemeContextProvider's effect fires.

          Must stay in sync with context/theme-context.tsx, and must stay inline
          and synchronous — an external or deferred script paints first.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}`,
          }}
        />
      </head>
      {/* Can change the color bg-gray-50 to something else */}
      {/* just refer to this link: https://tailwindcss.com/docs/customizing-colors */}
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <LanguageProvider>
            <ActionProvider>
              <ActiveSectionContextProvider>
                <Header />
                {children}
                <Footer />
                <Analytics />
                <SpeedInsights />
                <Toaster position="top-right" />
                <ThemeSwitch />
                <TranslateButton />
                <ActionButton />
              </ActiveSectionContextProvider>
            </ActionProvider>
          </LanguageProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
