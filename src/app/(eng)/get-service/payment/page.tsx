"use client"
import GetFatch from "@/component/froms/service/sendpaymonet";
import JsCookis from 'js-cookie'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GetService({ searchParams: { id } }: any) {
    let [loading, setLoading] = useState(true)
    let [data, setData] = useState(true)
    useEffect(() => {
        console.log("load app");
        
        async function api() {
            let userToken: any = JsCookis.get("userToken")
            if (userToken) {
                let tran_ref: any = JsCookis.get("tran_ref")
                let url = `/payment/query?id=${id}&userToken=${userToken}&tran_ref=${tran_ref}`
                let data = await GetFatch(url)
                console.log(data);
                JsCookis.set("paymonetData", JSON.stringify(data))

                setData(data)
                setLoading(false)
            }
        }
        api()
    }, [])
    if (loading) return (
        <div className="flex flex-col justify-center items-center min-h-[600px]">
            جاري تحميل الصفحة
        </div>
    )
    else return (
        <div className="flex flex-col justify-center items-center min-h-[600px]">
            <View data={data} />
        </div>
    )
}

function View({ data }: any) {
    let route = useRouter()
    if (data?.code == 400) return <p className="font-medium text-red-600 text-xl">يؤسفنا إبلاغك بأن عملية الدفع لم تكن ناجحة.</p>
    if (data?.code == 200) {
        if (data?.data.payment_result.response_message == 'Cancelled') {
            return <p className="font-medium text-red-600 text-xl"> عملية الدفع تم الغائها.</p>
        } if (data?.data.payment_result.response_message == "Invalid card number") {
            return <p className="font-medium text-red-600 text-xl"> رقم البطاقة غير صالحة</p>
        } else {
            route.push("/get-service/payment/ok")
            return <p className="font-medium text-green-500 text-xl"> تم اتمام عملية الدفع بنجاح </p>
        }
    } else return <p className="font-medium text-red-600 text-xl"> انتهت صلاحية هذه الصفحة. </p>

}