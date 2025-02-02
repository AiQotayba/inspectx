"use client"
import { useEffect, useState } from "react"
import Btn from "@/component/btns"
import { Ask, GetFAQ } from "@/component/theme/FAQ"
import "@/component/styles/style.css"

type LayoutType = {
    children: JSX.Element
    slug: string
}

type FQA = {
    title: string
    value: string
    FAQType: number
    IsFooter: Boolean
}

export default function QAclient() {
    let [part, setPart] = useState('client')
    const Layout = ({ children, slug }: LayoutType) => part === slug ? <>{children}</> : <></>

    let [list, setList] = useState<FQA[]>([])
    useEffect(() => {
        GetFAQ().then(res => setList(res))
    }, [])
    let slug: any = {
        strategy: 1,
        client: 2,
        eng: 3
    }
    function ColData({ Slug }: { Slug: any }) {
        return (
            <Layout slug={Slug}>
                <>
                    {list?.filter((a: any) => a.faqType == slug[Slug]).map(task => <Ask title={task.title} value={task.value} key={task.title} />)}
                </>
            </Layout>
        )
    }


    return (<div className=" w-full max-[697px]:p-1 justify-center">
        <Header setPart={setPart} part={part} />
        {list.length == 0 && <div className="loader m-auto my-8  border-[6px] border-safety-700 "></div>}
        <ColData Slug="eng" />
        <ColData Slug="client" />
        <ColData Slug="strategy" />
    </div>
    )
}
function Header({ setPart, part }: any) {
    return (
        <div className="flex flex-row bg-white max-w-[1000px] lap:max-w-[1360px] justify-between rounded-md p-1 my-4 text-center ">
            {dataBtns.map(btn => <Btn
                key={btn.slug}
                title={btn.title}
                onClick={() => setPart(btn.slug)}
                style={{
                    display: 'ruby-text'
                }}
                className={`rounded-md shadow-none cursor-pointer   hover:bg-safety-700 hover:text-white w-[100px]   !p-2 !m-1 text-sm max-[697px]:w-full tap:w-full ${part === btn.slug ? "border-2 border-safety-700 text-safety-700 " : " text-slate-900 "}   `}
            />)}
        </div>
    )
}
let dataBtns = [
    { title: "أسئلة العملاء", slug: "client" },
    { title: "استراتيجيات الفحص", slug: "strategy" },
    { title: "أسئلة الفاحصين", slug: "eng" },
]



