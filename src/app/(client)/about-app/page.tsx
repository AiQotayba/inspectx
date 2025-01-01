import _init_Hero from "@/component/hero"; 

import { Metadata } from "next";
import SEO from "@/app/seo";
import Feature from "./page2";

export const metadata: Metadata = SEO({
    title: 'Inspectex | حول التطبيق',
    description: 'حول التطبيق',
    keywords: 'InspectEx, حول التطبيق, InspectEx, حول التطبيق, InspectEx, حول التطبيق, InspectEx, حول التطبيق',
    images: "https://inspectex.sa/images/logo.png",
    openGraph: {
        url: 'https://inspectex.sa/about-app',
    },
})
/**
 * مثال عن videoId
 * https://youtu.be/2yuIByK7BSw
 * videoId = 2yuIByK7BSw
 */
// (1) تغيير الرابط 
// let videoId = "2yuIByK7BSw"
// let link = `https://www.youtube-nocookie.com/embed/${videoId}?si=YmTGkrS1nwy-hg6v&amp;controls=0`
let link = "https://drive.google.com/file/d/1YT411oe-7TOAG-TZfdkCchI3EWQa5wYm/preview"
// (2) uncomment line 17    <Hero /> 
export default function Aobut_us() {
    return (
        <div className="flex flex-col select-none">
            <Hero />
            <div className="  flex items-center   max-w-[1360px]  max-w-[1000px]:m-4 m-auto tap:w-full   flex-col">
                <Feature />
                <SaveAndGet />
            </div>
        </div>
    )
}

function Hero() {
    return (
        <_init_Hero className=" text-start !h-max " >
            <div className="m-auto my-10 *:rounded-3xl w-full flex justify-center">
                <iframe className="tap:w-full h-[168px] max-w-[560px]  min-[700px]:h-72" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>            </div>
        </_init_Hero>
    )
}


function SaveAndGet() {
    return (
        <div className="bg-[url(/images/about-app-2.webp)] bg-center bg-no-repeat flex flex-row my-32 w-full h-[550px] justify-between m-4">
            <div className="flex flex-col justify-center p-8">
                <p className="w-full text-start lap:text-5xl tap:text-3xl text-2xl font-bold text-prussian-800 tap:mb-8 mb-4"> إحفظ حقك و أطلب فحصك,</p>
                <p className="w-full text-start lap:text-5xl tap:text-3xl text-2xl font-bold text-safety-700 tap:mb-8 mb-4">مع تطبيق إنسبكتكس </p>
                <p className="w-full text-start font-bold mb-8 tap:w-[500px] mt-14 text-slate-800">تجنب العديد من المشاكل التي تؤدي إلى زيادة مصاريف الصيانة, إرتفاع مستوى الخطر و غيرها من المخالفات عبر خدمة الكشف على العقار و احصل على تقرير مفصل لمساعدتك بإتخاذ قرار واضح و موثوق به. </p>

                <div className="flex justify-start   test-2xl font-semibold text-safety-700 border border-safety-700 p-4 rounded-lg w-max mx-4   ">
                    التطبيق قيد الإنشاء و سيكون متاحا فور اطلاقه
                    {/* <Btn to="/#" title="حمل التطبيق  " className="text-white bg-prussian-800 rounded-lg w-[175px]   " /> */}
                </div>
            </div>
            <img src="/images/about-app-3.webp" alt="" className="hidden lg:flex ml-20 w-[350px] !h-max" loading="lazy" />
        </div>
    )
}
