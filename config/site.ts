import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POST_EXTENSIONS = [".md", ".markdown"] as const;

export function readPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), "content", "posts");
  const postPath = POST_EXTENSIONS.map((extension) => path.join(postsDirectory, `${slug}${extension}`)).find((candidate) =>
    fs.existsSync(candidate),
  );

  if (!postPath) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const raw = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(raw);

  return { meta: data, content };
}
