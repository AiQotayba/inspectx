'use client'

import Btn from "@/component/btns";
import { IconArrow } from "@/component/icons";
import { useState } from "react";
export default function Hero() {

    let [btnHover, SetBtnHover] = useState(false)
    let enter = () => SetBtnHover(true)
    let leave = () => SetBtnHover(false)
    return (
        <div className={`bg-blue-900 flex flex-col h-[514px] justify-center bg-center bg-[url(/images/Apply-For-a-Job.jpg)]`}>
            <div className="bg-blue-900 flex flex-col bg-opacity-90 h-full justify-center text-center text-white ">
                <h1 className="text-white lap:text-5xl tap:text-3xl text-xl font-extrabold mt-[100px]">تقديم لفرصة عمل</h1>
                <div>
                    <p className="flex items-center  tap:max-w-[1360px]   m-auto   lap:text-2xl tap:text-lg text-sm font-normal my-0 p-4 min-h-[176px] w-[90%] lap:w-full"> قامت إنسبكتكس بتنفيذ نموذج تشغيلي فريد من نوعه يُمكنها من تلبية احتياجات العملاء بطريقة فعّالة و مرنة مع الحفاظ على تقديم اعلى معايير الجودة. أحد أهم مزايا شركة ` انسبكتكس` هي توفير المهندسين المؤهلين والمحترفين والذين يتمتعون بأوقات متاحة حيث يقوم النظام باختيار المهندس الأنسب وفقًا لاختصاصاتهم, أوقاتهم المتاحة و مواقعهم الجغرافية. بعد إنهاء عملية الفحص, يحصل كل مهندس عمل على المشروع على النسبة المادية المتفق عليها</p>
                </div>
                <div onMouseEnter={enter} onMouseLeave={leave}>
                    <Btn title={"تقدم بطلب الإنضمام لإنسبكتكس"} to="/join-eng/apply" className="bg-white lap:text-xl tap:text-lg text-sm font-bold px-6 m-auto !justify-between max-w-[640px] tap:pr-6 tap:w-full  text-prussian-800 rounded-full hover:bg-safety-700 hover:text-white *:hover:fill-white w-[80%]" childSort="end" >
                        <IconArrow className={'fill-prussian-800 '} color={btnHover ? "#fff" : "#032DA6"} />
                    </Btn>
                </div>
            </div>
        </div>
    )
} 