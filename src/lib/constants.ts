export type fadeType = "in" | "out";
export type pageType = "home" | "blog" | "blogPage";
export interface blogMetaData {
    id: string,
    title: string,
    author: string,
    date: string,
    description: string
    photo: string
    alt: string
    profilePic: string
    content: string
}