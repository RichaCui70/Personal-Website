import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { pfpMap } from "@/lib/profilePicDefinitions";
// import { unified } from "unified";
// import rehypeParse from 'rehype-parse'
// import rehypeStringify from 'rehype-stringify'
// import * as prod from 'react/jsx-runtime'
// import rehypeReact from "rehype-react";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostData(id) {
  // const production = {Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs}
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  // const nut = unified();
  // nut.Parser = rehypeParse
  // nut.Compiler = rehypeReact
  // nut.
  // nut.use(rehypeParse, {fragment: true}).use(rehypeReact, production).use(rehypeStringify).process(matterResult.content)

  // console.log(nut.parse())
  // console.log("om here")

  return {
    ...matterResult.data,
    profilePic: pfpMap[matterResult.data['author']],
    content: matterResult.content
  };
}
