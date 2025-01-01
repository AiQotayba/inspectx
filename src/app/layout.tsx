// "use client"
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/component/theme/nav"
import localFont from 'next/font/local'
import Footer from "@/component/theme/footer";
import FAQ from "@/component/theme/FAQ";
import Landing from "@/component/loading";
import { ApolloWrapper } from "./ApolloWrapper";
import "@/component/styles/style.css";
import Script from "next/script"; 

const inter =
    localFont({
        src: [
            { path: './fonts/ArbFONTS-LamaSans-Black.ttf', weight: '900', style: 'normal', },
            { path: './fonts/ArbFONTS-LamaSans-Bold.ttf', weight: '700', style: 'normal', },
            { path: './fonts/ArbFONTS-LamaSans-ExtraBold.ttf', weight: '800', style: 'normal', },
            { path: './fonts/ArbFONTS-LamaSans-ExtraLight.ttf', weight: '200', style: 'normal', },
            { path: './fonts/ArbFONTS-LamaSans-Light.ttf', weight: '300', style: 'normal', },
            { path: './fonts/ArbFONTS-LamaSans-Medium.ttf', weight: '500', style: 'normal', },
            { path: './fonts/ArbFONTS-LamaSans-Regular.ttf', weight: '400', style: 'normal', },
            { path: './fonts/ArbFONTS-LamaSans-SemiBold.ttf', weight: '600', style: 'normal', },
            { path: './fonts/ArbFONTS-LamaSans-Thin.ttf', weight: '100', style: 'normal', },
        ],
    })

type Children = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: Children) {

    return (
        <html lang="ar">

            <head>
                {/* Google Tag Manager */}
                <Script
                    id="google-tag-manager"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TV3DMFJZ');`,
                    }}
                />
            </head>
            <body className={inter.className} >
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-TV3DMFJZ"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                <Landing />
                <Nav />
                <main className={"max-[697px]:mt-[128px] mt-[78px]  *:text-slate-900 "} >
                    <ApolloWrapper>{children}</ApolloWrapper>
                </main>
                <FAQ />
                <Footer />
            </body>
        </html>
    );
}
