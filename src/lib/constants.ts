export type fadeType = "in" | "out";
export type pageType = "home" | "blog" | "blogPage";
export interface blogMetaData {
    title: string,
    author: string,
    date: string,
    description: string
    thumbnail: string
    banner: string
    alt: string
    content: string[]
}