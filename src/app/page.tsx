// "use client" 
import BlogAll from "@/component/blog/home";
import InspectionRequest from "@/component/landing/InspectionRequest";
import OurClientsTestimonials from "@/component/landing/OurClientsTestimonials";
import RequestMechanism from "@/component/landing/RequestMechanism";
import AllCounters from "@/component/landing/AllCounters";
import Consultation from "@/component/landing/consultation";
import JobsPart from "@/component/landing/jobs";
import Services from "@/component/landing/services";
import Sliders from "@/component/landing/slider";
import { Metadata } from "next";
import SEO from "./seo";

export const metadata: Metadata = SEO({
    title: 'Inspectex',
    description: 'The ultimate platform for inspection services.',
    keywords: 'InspectEx, inspection, inspection services, inspection service, inspection services, inspection inspection, inspection inspection services, inspection inspection service, inspection inspection services',
    viewport: 'width=device-width, initial-scale=1.0',
    openGraph: {
        url: 'https://inspectex.sa',
        images: [
            {
                url: 'https://inspectex.sa/images/logo.png',
                width: 1200,
                height: 630,
                alt: 'InspectEx',
            },
        ],
    },
})

export default function Home() {

    return (
        <div className="flex  flex-col items-center justify-between">
            <Sliders />
            <AllCounters />
            <Services />
            <RequestMechanism />
            <InspectionRequest />
            <JobsPart />
            <BlogAll />
            <OurClientsTestimonials />
            <Consultation />
        </div>
    );
}
