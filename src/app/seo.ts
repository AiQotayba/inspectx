import { Metadata } from "next"


export default function SEO(metadata: any) {
    let { title, description, keywords, openGraph, twitter, robots, images = "/images/logo.png", url } = metadata
    return {
        title,
        description,
        keywords,
        openGraph: {
            images,

            type: 'website',
            siteName: 'Inspectex',
            locale: 'ar_SA',
            // url: data.openGraph.url,
            title,
            description,
        },
        twitter: {
            card: 'summary_large_image',
            site: '@inspectex',
            // handle: '@inspectex',
            creator: '@inspectex',
            title,
            description,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
            },
        }
    }
}