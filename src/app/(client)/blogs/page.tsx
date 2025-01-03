import Hero from "@/component/hero"
import { getAllPosts } from "./query"
import Link from "next/link"
import { Content, SearchBlog } from "@/component/blog/cards"

import { Metadata } from "next";
import SEO from "@/app/seo";

export const metadata: Metadata = SEO({
    title: 'Inspectex | المدونة',
    description: 'المدونة',
    keywords: 'InspectEx, المدونة, InspectEx, المدونة, InspectEx, المدونة, InspectEx, المدونة',
    images: 'https://inspectex.sa/images/logo.png',
    openGraph: {
        url: 'https://inspectex.sa/blogs',
    },
})

export default async function BlogAll({ searchParams: { cat, q } }: any) {

    const { data }: any = await getAllPosts({ cat, q })
    let categories = data.categories?.nodes
    let posts: any //= !cat ? data.posts.nodes : 
    if (q) posts = data.posts.nodes
    else if (cat) posts = data.category?.posts?.nodes
    else posts = data.posts.nodes

    return (
        <div className="bg-white">
            <Hero className={" bg-[url(/images/pinsel.webp)] min-h-[400px]"} >
                <>
                    <h1 className="text-white lap:text-6xl  text-4xl  font-semibold">المدونة</h1>
                    <p className="w-full m-auto lap:text-2xl  text-base font-semibold my-0 p-4 max-w-[1000px]">هذا هو مركز الأخبار الخاص بنا، حيث نشارك خبرتنا ونصائحنا ومقالاتنا حول كل ما يتعلق بالعقارات، وكيفية البدء بالفحص، وكيفية تقييم ما إذا كنت بحاجة إلى واحدة أم لا.</p>
                    <p className="rounded-tl-[32px] lap:text-2xl  text-base font-bold  rounded-br-3xl my-0 px-16 m-auto bg-white p-4 text-safety-700 w-max"> لكن أولاً، فنجان قهوة.</p>
                </>
            </Hero>
            <div className="flex  flex-col  items-center text-sm justify-between   max-w-[1360px] m-auto my-8 w-[90%] tap:w-[80%]">
                <SearchBlog />
                <div className="flex flex-row items-center overflow-x-scroll tap:overflow-hidden w-full my-8 select-none">
                    <Link href={`/blogs`} className={`py-2 bg-slate-100 tap:text-sm text-sx  border-2 border-slate-100 cursor-pointer ${!cat ? "!text-white !bg-safety-700" : "hover:text-safety-700  hover:border-safety-700 "} font-medium rounded-md px-4 mx-2 text-nowrap`}> الكل</Link>
                    {categories
                        ?.map((a: any) => <Link
                            href={`/blogs?cat=${a.slug}`}
                            key={a}
                            className={`py-2 bg-slate-100 tap:text-sm text-sx  border-2 border-slate-100 cursor-pointer  font-medium rounded-md px-4 mx-2 text-nowrap ${cat == a.slug ? "text-white !bg-safety-700" : "hover:text-safety-700  hover:border-safety-700 "}`}
                        > {a.name}</Link>
                        )}
                </div>
            </div>
            <Content data={posts} />
        </div>
    )
}

