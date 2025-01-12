import type { MetadataRoute } from 'next';
import { getClient } from '@/graphql/Apollo-client'
import gql from 'graphql-tag'

export const getAllPosts = async () => {
    try {
        const allPosts = gql`
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
        `;
        return await getClient().query({ query: allPosts, fetchPolicy: 'no-cache' });
    } catch (error) {
        console.error('خطأ أثناء جلب المقالات أو الصفحات:', error);
        return { data: { posts: { nodes: [] }, pages: { nodes: [] } } };
    }
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const content = await getAllPosts();
    const posts = content?.data?.posts?.nodes || [];
    const pages = content?.data?.pages?.nodes || [];

    const url = process.env.NEXT_PUBLIC_apis?.replace('/api', '') || 'https://inspectex.sa';
    const staticRoutes = [
        { url: '/' },
        { url: '/about-app' },
        { url: '/about-us' },
        { url: '/FAQ' },
        { url: '/services' },
        { url: '/get-service' },
        { url: '/surveys' },
        { url: '/privacy-policies' },
        { url: '/policies-and-provisions' },
        { url: '/jobs' },
        { url: '/join-eng' },
        { url: '/blogs' },
    ];

    const dynamicRoutes = [
        ...posts.map((post: any) => ({
            url: `/blogs/${encodeURI(post.slug)}`,
            lastModified: post.modified
                ? new Date(post.modified).toISOString()
                : new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 0.5,
        })),
        ...pages.map((page: any) => ({
            url: `/${encodeURI(page.slug)}`,
            lastModified: page.modified
                ? new Date(page.modified).toISOString()
                : new Date().toISOString(),
            // changeFrequency: 'weekly',
            // priority: 0.5,
        })),
    ];

    return [
        ...staticRoutes,
        ...dynamicRoutes,
    ].map((route: any) => ({
        url: `${url}${route.url}`,
        lastModified: route?.lastModified || new Date().toISOString(),
        changeFrequency: 'weekly',
        // priority: 0.5,
    }));
}


// import type { MetadataRoute } from 'next'

// export default function sitemap(): MetadataRoute.Sitemap {
//     const url = process.env.NEXT_PUBLIC_apis?.replace('/api', '')// || 'https://inspectex.sa';

//     return [
//         {
//             url: url + '/',
//             lastModified: new Date(),
//             // changeFrequency: 'monthly',
//         },
//         {
//             url: url + '/about-app',
//             lastModified: new Date(),
//             // changeFrequency: 'monthly',
//         },
//     ]
// }