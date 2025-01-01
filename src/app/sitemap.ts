import type { MetadataRoute } from 'next'
import { getClient } from '@/graphql/Apollo-client'
import gql from "graphql-tag";

export const getAllPosts = async () => {
    try {
        let allposts = gql`
            query Posts { 
                posts(first: 1000) {
                    nodes {
                        slug
                        modified
                    }
                }
                pages(first: 1000) {
                    nodes {
                        slug
                        modified
                    }
                }
            }
        `
        return await getClient().query({ query: allposts, fetchPolicy: "no-cache" })
    } catch (error) {
        return { data: { posts: [] } }
    }
}


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let content: any = await getAllPosts()
    let posts = content.data.posts.nodes
    let pages = content.data.pages.nodes

    // - / 👍
    // - /about-app 👍
    // - /about-us 👍
    // - /FAQ 👍
    // - /services 👍
    // - /get-service 👍
    // - /surveies 👍

    // - /privacy-policys 👍
    // - /policies-and-provisionss 👍
    // - /jobs 👍
    // - /join-eng 👍
    // - /blogs 👍
    // - /blogs/... 👍

    let url = process.env.NEXT_PUBLIC_apis || "https://inspectex.sa"
    let data = [
        { url: "/" },
        { url: `/about-app` },
        { url: `/about-us` },
        { url: `/FAQ` },
        { url: `/services` },
        { url: `/get-service` },
        { url: `/surveies` },
        { url: `/privacy-policys` },
        { url: `/policies-and-provisionss` },
        { url: `/jobs` },
        { url: `/join-eng` },
        { url: `/blogs` },
        ...posts.map((a: any) => {
            return {
                url: `/blogs/${a.slug}`,
                lastModified: a?.modified ? a.modified.split("T")[0] : '2024-07-01',
                changeFrequency: 'weekly',
                priority: 0.5
            }
        }),
        ...pages.map((a: any) => {
            return {
                url: `/${a.slug}`,
                lastModified: a?.modified ? a.modified.split("T")[0] : '2024-07-01',
                changeFrequency: 'weekly',
                priority: 0.5
            }
        })
    ] 
    

    let fullPages: any = data.map((a: any) => {
        return {
            url: `${url}${a.url}`,
            lastModified: a?.lastModified ? a.lastModified.split("T")[0] : '2024-07-01',
            changeFrequency: 'weekly',
            priority: 0.5
        }
    }) 

    return fullPages
}
