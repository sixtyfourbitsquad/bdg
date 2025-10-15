import { getAllPosts } from '@/lib/mdx';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'BDG Blog — Guides, Login, Withdrawal, Colour Tips',
  description: 'Complete BDG Game blog with guides for login, withdrawal, colour prediction tips, and bonus strategies in India.'
};

export default function BlogIndex(){
  const posts = getAllPosts();
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold mb-8">BDG Blog — Complete Game Guides</h1>
      
      <p className="text-lg opacity-80 mb-8">
        Expert guides and tips for BDG Win Game including login, withdrawal, colour prediction, 
        and bonus strategies for Indian players.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(p=>(
          <article key={p.slug} className="card hover:shadow-lg transition-shadow duration-300">
            <div className="space-y-4">
              <a className="link-gold text-xl font-semibold block leading-relaxed" href={`/blog/${p.slug}`}>
                {String(p.meta.title || '')}
              </a>
              <p className="opacity-80 leading-relaxed text-base">
                {String(p.meta.excerpt || '')}
              </p>
              <div className="pt-4 border-t border-gold-100">
                <p className="text-sm opacity-60 font-medium">
                  📅 Updated {new Date(String(p.meta.date || '')).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Playing BDG?</h2>
        <CTA label="Register & Get ₹500 Bonus" />
      </div>
    </section>
  );
}
