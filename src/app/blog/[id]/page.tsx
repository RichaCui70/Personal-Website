import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { getSortedPostsData, getPostData } from "@/lib/posts";
import { blogMetaData } from "@/lib/constants";

export function generateStaticParams(){
    const allPostsData = getSortedPostsData() as blogMetaData[];

    return allPostsData.map((post) => {return {id: post.id}})
}

const postsDirectory = path.join(process.cwd(), 'posts');

export default function Page({params}: {params: {id: string}}){

    const buffer = getPostData(params.id) as blogMetaData
    const {title, date, photo, alt, content} = buffer

    return (
        <div>
            {title}
            {date}
        </div>
    )
}