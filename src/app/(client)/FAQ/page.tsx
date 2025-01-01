import { Metadata } from "next";
import SEO from "@/app/seo";
import QAclient from "./client"

export const metadata: Metadata = SEO({
    title: 'Inspectex | أسئلة شائعة',
    description: 'أسئلة شائعة',
    keywords: 'InspectEx, أسئلة شائعة, InspectEx, أسئلة شائعة, InspectEx, أسئلة شائعة, InspectEx, أسئلة شائعة',
    openGraph: {
        url: 'https://inspectex.sa/faq',
    },
})

export default function QA() {

    return (
        <div className="flex flex-col py-14  max-[697px]:p-4 tap:p-20 bg-[#F0F0F0]  select-none justify-center items-center  " id="faq">
            {/* add map */}
            <div className={`flex  items-center justify-center w-full flex-col h-max-xl:w-[1500px]  max-w-[1000px] lap:max-w-[1360px]`}>
                <b className="text-safety-700 mb-6 lap:text-6xl font-black  text-xl text-start w-full  tap:text-3xl  ">أسئلة شائعة</b>
                <p className="  lap:text-xl font-semibold text-slate-500  text-sm text-start  w-full   tap:text-lg">لقد أولينا المزيد من الاهتمام لتخصيص الإجابات أدناه، ولتسهيل الأمر عليك، قمنا بتصنيف الأسئلة لك</p>
                <QAclient />
            </div>
        </div >
    )
} 