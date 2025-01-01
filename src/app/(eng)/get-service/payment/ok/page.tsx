"use client"
import GetFatch from "@/component/froms/service/sendpaymonet";
import JsCookis from 'js-cookie'
import { useEffect, useMemo, useState } from "react";


export default function GetService({ searchParams: { id } }: any) {
    const [loading, setLoading] = useState(true);
    const data = useMemo(() => {
        const cookieData = JsCookis.get("paymonetData");
        return cookieData ? JSON.parse(cookieData) : null;
    }, []);

    // استخدام useEffect لتغيير حالة التحميل بعد استرجاع البيانات
    useEffect(() => {
        if (data !== null) {
            setLoading(false);
        }
    }, [data]);

    // الآن يمكنك استخدام `loading` و `data` في مكونك

    if (loading) return (
        <div className="flex flex-col justify-center items-center min-h-[600px]">
            جاري تحميل الصفحة
        </div>
    )
    else return (
        <div className="flex flex-col justify-center items-center min-h-[600px]">
            <p className="font-medium text-green-500 text-xl">  تم تأكيد عملية الدفع بنجاح. سيقوم فريقنا بالتواصل معك قريبًا لضمان تنسيق كافة التفاصيل قبل موعد الفحص المحدد. </p>
        </div>
    )
}  