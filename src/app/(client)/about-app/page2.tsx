"use client"
import _init_Hero from "@/component/hero";
import FeatureData from "@/data/about-app.json"
import { createContext, useContext, useState } from "react";

type ThemeContextType = any | null

const AppContext = createContext<ThemeContextType>({});

export default function Feature() {
    let [data, setData] = useState(FeatureData)
    let [cover, setCover] = useState(data[0].image)
    let len = data.length
    return (
        <AppContext.Provider value={{ data, setData, setCover }} >
            <div className="tap:my-10 bg-white mx-4">
                <div className="  flex items-center  max-[1000px]:m-4   !m-0 flex-col max-w-[1000px] lap:max-w-[1360px]">
                    <div className="flex flex-col items-center m-auto tap:w-[90%] my-10 " >
                        <h2 className="w-full text-center lap:text-5xl tap:text-3xl text-xl font-bold text-safety-700 tap:mr-10 tap:mb-8 ">ميزات تطبيق إنسبكتكس </h2>
                        <p className="text-slate-700 tap:m-4 my-4 lap:text-2xl tap:text-base text-sm">تطبيق إانسبكتكس هو أحدث نموذج لخدمات فحص المباني، حيث يتم الفحص عن طريق مهندسين متخصصين في مجالاتهم. يعمل كل مهندس بإختصاصه لضمان تقديم خدمة ذات جودة عالية بإستخدام أفضل الأجهزة والتقنيات لضمان دقة الفحص وراحة عملائنا</p>
                    </div>
                    <div className="flex flex-col tap:flex-row justify-between items-center mb-6 lap:w-full ">
                        <div className="flex flex-col justify-center w-full lap:w-[450px] tap:w-[350px] lap:m-auto">
                            {data.slice(0, len / 2).map(one => <FeatureOne data={one} layout="start" key={one.id} />)}
                        </div>
                        {data.map(one => <img src={one.image} alt=" " key={one.id} className={` m-auto tap: h-[350px] ${!one.active && "hidden"} `} loading="lazy" />)}
                        {/* <img src={cover} alt="" className="  m-auto tap: h-[350px]  " loading="lazy" /> */}
                        <div className="flex flex-col justify-center w-full lap:w-[450px] tap:w-[350px] lap:m-auto">
                            {data.slice(len / 2, len).map(one => <FeatureOne data={one} layout="end" key={one.id} />)}
                        </div>
                    </div>
                    <div className="flex justify-start   test-2xl font-semibold text-safety-700 border border-safety-700 p-4 rounded-lg w-max mx-4   ">
                        التطبيق قيد الإنشاء و سيكون متاحا فور اطلاقه
                        {/* <Btn to="/#" title="حمل التطبيق الآن" className="text-white bg-safety-700 rounded-lg" /> */}
                    </div>
                </div>
            </div>
        </AppContext.Provider>
    )
}

type FeatureOneType = {
    id: number,
    title: string,
    active: boolean,
    image: string
}
function FeatureOne({ data: One, layout }: { data: FeatureOneType; layout: string }) {
    const { data, setData } = useContext(AppContext);
    let handle = () => {
        let all = data.map((a: any, i: any) => {
            return { ...a, active: false }
        })
        let filter = all.filter((a: any) => a.id === One.id)[0]
        filter.active = true
        all[One.id - 1] = filter
        setData(all)
    }
    return (
        <div className={` flex items-center lap:w-full bg-prussian-800 rounded-full cursor-pointer my-4 ${One.active ? "" : "opacity-60"} flex ${layout == "start" ? 'flex-row ' : "flex-row-reverse"} `} onClick={handle}>
            <div className=" border-4 border-[#0694a27a] rounded-full text-center text-xl ">
                <p className="bg-[#0694A2] p-2 rounded-full text-white w-[45px] top:w-[56px] h-[45px] top:h-[56px] z-20 ">{One.id}</p>
            </div>
            <p className={`text-white pr-6  w-full lap:text-lg tap:text-sm ${layout === "start" ? " " : " "} `}>{One.title}</p>
        </div>
    );
}
