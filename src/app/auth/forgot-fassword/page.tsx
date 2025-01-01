
import { Metadata } from "next";
import SEO from "@/app/seo";
import ForgotPassword from "./client";
export const metadata: Metadata = SEO({
    title: 'Inspectex | نسيت كلمة المرور',
    description: 'نسيت كلمة المرور',
    keywords: 'InspectEx, نسيت كلمة المرور, InspectEx, نسيت كلمة المرور, InspectEx, نسيت كلمة المرور, InspectEx, نسيت كلمة المرور',
    openGraph: {
        url: 'https://inspectex.sa/auth/forgot-fassword',
    },
})

export default function ForgotPasswordPage({ required }: any) {
    return <ForgotPassword required={required} />
}
