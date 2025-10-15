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
    <div className="max-w-4xl mx-auto py-12">
      {/* Article Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          {String(meta.title || '')}
        </h1>
        <div className="flex items-center justify-center gap-4 text-sm opacity-70">
          <span className="flex items-center gap-2">
            📅 <span>Updated {new Date(String(meta.date || '')).toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-2">
            ⏱️ <span>5 min read</span>
          </span>
        </div>
      </header>

      {/* Article Content */}
      <Prose className="prose-lg prose-gold max-w-none">
        <MDXRemote source={content} />
      </Prose>
      
      {/* Call to Action */}
      <div className="mt-16 text-center bg-gradient-to-r from-gold-50 to-gold-100 rounded-2xl p-8 border border-gold-200">
        <h2 className="text-2xl font-bold mb-4 text-gold-800">Ready to Try BDG Game?</h2>
        <p className="text-gold-700 mb-6 opacity-80">
          Start your gaming journey with our exclusive ₹500 bonus offer!
        </p>
        <CTA label="Register & Claim ₹500 Bonus" />
      </div>
      
      <JsonLd json={breadcrumb} />
      <JsonLd json={article} />
    </div>
  );
}
