import { getPost, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import JsonLd from '@/components/JsonLd';
import CTA from '@/components/CTA';
import Prose from '@/components/Prose';

export function generateStaticParams(){
  return getAllPosts().map((p)=>({ slug:p.slug }));
}

export default async function BlogPost({ params }:{ params: Promise<{ slug:string }> }){
  const { slug } = await params;
  const { content, meta } = getPost(slug);
  
  const breadcrumb = {
    '@context':'https://schema.org',
    '@type':'BreadcrumbList',
    'itemListElement':[
      {'@type':'ListItem','position':1,'name':'Home','item':'https://bdgwinngames.com'},
      {'@type':'ListItem','position':2,'name':'Blog','item':'https://bdgwinngames.com/blog'},
      {'@type':'ListItem','position':3,'name':String(meta.title || ''),'item':`https://bdgwinngames.com/blog/${slug}`}
    ]
  };
  
  const article = {
    '@context':'https://schema.org',
    '@type':'Article',
    headline:String(meta.title || ''),
    datePublished:String(meta.date || ''),
    author:{'@type':'Organization','name':'BDG Win Game'},
    image:'https://bdgwinngames.com/og-image.jpg',
    keywords:Array.isArray(meta.keywords) ? meta.keywords.join(', ') : ''
  };
  
  return (
    <Prose className="max-w-3xl py-10">
      <h1>{String(meta.title || '')}</h1>
      <p className="opacity-60 text-sm mb-8">
        Updated {new Date(String(meta.date || '')).toLocaleDateString()}
      </p>
      
      <MDXRemote source={content} />
      
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Try BDG Game?</h2>
        <CTA label="Start Playing BDG" />
      </div>
      
      <JsonLd json={breadcrumb} />
      <JsonLd json={article} />
    </Prose>
  );
}
