import _init_Hero from "@/component/hero";
import ListClients from "@/data/ListClients.json"
import { ChairmanSpeech, Clients, Expertise, Hero } from "@/component/about-us";
import { How } from "@/app/(client)/about-us/client";

import { Metadata } from "next";
import SEO from "@/app/seo";

export const metadata: Metadata = SEO({
    title: 'Inspectex | حول أنسبكتكس',
    description: 'حول أنسبكتكس',
    keywords: 'InspectEx, حول أنسبكتكس, InspectEx, حول أنسبكتكس, InspectEx, حول أنسبكتكس, InspectEx, حول أنسبكتكس',
    images: 'https://inspectex.sa/images/logo.png',
    openGraph: {
        url: 'https://inspectex.sa/about-us',
    },
})

export default function Aobut_us() {
    return (
        <div className="flex flex-col">
            <Hero />
            <ChairmanSpeech />
            <How />
            <Clients list={ListClients} />
            <Expertise />
        </div>
    )
}
