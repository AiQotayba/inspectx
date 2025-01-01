
import { Metadata } from "next";
import SEO from "@/app/seo";
import JobsApplyPageClient from "./client"

export const metadata: Metadata = SEO({
    title: 'Inspectex | تقديم الطلب',
    description: 'تقديم الطلب',
    keywords: 'InspectEx, تقديم الطلب, InspectEx, تقديم الطلب, InspectEx, تقديم الطلب, InspectEx, تقديم الطلب',
    openGraph: {
        url: 'https://inspectex.sa/jobs/apply',
    },
})

export default function JobsApplyPages({ searchParams: { id } }: any) {
    return <JobsApplyPageClient id={id} />

} 