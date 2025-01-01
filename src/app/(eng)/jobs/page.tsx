

import { Metadata } from "next";
import SEO from "@/app/seo";
import JobsClient from "./client";

export const metadata: Metadata = SEO({
    title: 'Inspectex | الوظائف المتوفرة',
    description: 'الوظائف المتوفرة',
    keywords: 'InspectEx, الوظائف المتوفرة, InspectEx, الوظائف المتوفرة, InspectEx, الوظائف المتوفرة, InspectEx, الوظائف المتوفرة',
    openGraph: {
        url: 'https://inspectex.sa/jobs',
    },
})

export default function Jobs() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="h-[100px] bg-slate-100" />
            <div className=" items-center max-w-[1000px] tap:w-full flex flex-col">
                <JobsClient />
            </div>
        </div>
    )
}
