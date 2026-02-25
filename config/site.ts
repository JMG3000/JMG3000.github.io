import fs from "fs";
import matter from "gray-matter";

export function readPost(slug: string) {
  const raw = fs.readFileSync(`content/posts/${slug}.md`, "utf8");
  const { data, content } = matter(raw);


  return { meta: data, content };
}
// ...use meta.title etc. in pages instead of Jekyll site._config...