import FormsCustomer from "@/component/froms/Customer/form";
import SizeBox from "@/component/size-box";

import { Metadata } from "next";
import SEO from "@/app/seo";

export const metadata: Metadata = SEO({
    title: 'Inspectex | الاستبيان',
    description: 'الاستبيان',
    keywords: 'InspectEx, الاستبيان, InspectEx, الاستبيان, InspectEx, الاستبيان, InspectEx, الاستبيان',
    openGraph: {
        url: 'https://inspectex.sa/surveies',
    },
})

export default function Jobs() {
    // let title = " املاء الاستطلاع واحصل على استشارة مجانية"
    return (
        <div className="flex flex-col">

            <div className="h-[100px] bg-slate-100" />
            <SizeBox className="   w-full flex flex-col my-10 bg-white">
                <div className="   items-center   max-w-[1360px]    w-full flex flex-col">
                    <div className="flex flex-col  m-auto w-[90%] my-8 " >
                        <p className=" text-start lap:text-4xl tap:text-3xl text-xl font-bold text-slate-900 p-2 mx-4 " >املأ الاستبيان الآن للحصول على   </p>
                        <h1 className=" text-start lap:text-5xl tap:text-3xl text-xl font-bold text-safety-700  mb-8  mx-4 " >  استشـــــارة مجانيــــــة !</h1>
                    </div>
                </div>
                <FormsCustomer />
            </SizeBox>
        </div>
    )
}
