import fs from 'fs'; 
import path from 'path'; 
import matter from 'gray-matter';

export const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export function getAllPosts(){
  return fs.readdirSync(BLOG_DIR)
    .filter(f=>f.endsWith('.mdx'))
    .map(filename=>{
      const slug = filename.replace(/\.mdx$/,'');
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8');
      const { data } = matter(raw);
      return { slug, meta: data as Record<string, unknown> };
    })
    .sort((a,b)=>new Date(String(b.meta.date || '')).getTime() - new Date(String(a.meta.date || '')).getTime());
}

export function getPost(slug:string){
  const file = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`),'utf8');
  const { content, data } = matter(file);
  return { content, meta: data as Record<string, unknown> };
}
