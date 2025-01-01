import Forms from "@/component/froms/eng/form";

import { Metadata } from "next";
import SEO from "@/app/seo";

export const metadata: Metadata = SEO({
    title: 'Inspectex | انضم إلى فريقنا كمهندس',
    description: 'انضم إلى فريقنا كمهندس',
    keywords: 'InspectEx, انضم إلى فريقنا كمهندس, InspectEx, انضم إلى فريقنا كمهندس, InspectEx, انضم إلى فريقنا كمهندس, InspectEx, انضم إلى فريقنا كمهندس',
    openGraph: {
        url: 'https://inspectex.sa/join-eng/apply',
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
export default async function Jobs() {

    return (
        <div className="flex flex-col test-101">
            <div className="h-[100px] bg-slate-100" />
            <div className="flex items-center w-full max-w-[1360px] flex-col p-4 m-auto">
                <div className="tap:my-10 my-0 bg-white">
                    <div className="   items-center   max-w-[1360px]    w-full flex flex-col">
                        <div className="flex flex-col  m-auto w-[90%] my-20 " >
                            <h2 className="  text-start lap:text-5xl tap:text-3xl text-xl font-bold text-safety-700  mb-8 ">إنضم إلى فريقنا كمهندس </h2>
                            {/* <p className="text-slate-700 m-4   lap:text-xl tap:text-base text-sm">اكتشف فرص العمل المثيرة في Inspectex، حيث نقدر الموهبة والابتكار والشغف بخدمة العملاء. انضم إلى فريقنا وكن جزءًا من تشكيل مستقبل أكثر إشراقًا في المجال العماري و الهندسي</p> */}
                        </div>
                    </div>

                    <Forms />
                </div>
            </div>
        </div>
    )
}
