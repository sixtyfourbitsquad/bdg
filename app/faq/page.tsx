import JsonLd from '@/components/JsonLd';
import CTA from '@/components/CTA';
import Prose from '@/components/Prose';

export const metadata = { 
  title: 'BDG Game FAQ — Login, Download, Withdrawal',
  description: 'Complete BDG Game FAQ covering login issues, app download, withdrawal methods, bonus claims, and safety concerns in India.'
};

export default function FAQ(){
  const faqs = [
    { q:'What is BDG Game?', a:'BDG Win Game (Big Daddy Game) is a colour prediction app. This site provides official links and guides for India.' },
    { q:'How to login to BDG?', a:'Use the Login button which redirects to the official portal.' },
    { q:'How to withdraw from BDG?', a:'Open Wallet → Withdraw, select UPI/Paytm if available, follow limits.' },
    { q:'How to get referral bonus?', a:'Find Invite Friends in the app and share your link.' },
    { q:'Is BDG legal in India?', a:'Check local laws. We do not operate BDG; this is an informational site.' },
    { q:'How to download BDG app?', a:'Click the Download button to get the latest APK or visit official app stores.' },
    { q:'What is BDG colour prediction?', a:'A game where you predict the next colour (Red/Green/Blue) to win rewards.' },
    { q:'How to claim BDG bonus?', a:'Register with our link to get signup bonus, then check your wallet.' },
    { q:'BDG withdrawal not working?', a:'Check minimum limits, verify UPI details, or contact BDG support.' },
    { q:'Is BDG safe to play?', a:'This is an informational site. Play responsibly and verify app policies.' }
  ];
  
  const json = { 
    '@context':'https://schema.org',
    '@type':'FAQPage',
    'mainEntity': faqs.map(f=>({ 
      '@type':'Question',
      name:f.q,
      acceptedAnswer:{
        '@type':'Answer',
        text:f.a
      } 
    })) 
  };
  
  return (
    <Prose className="max-w-3xl py-10">
      <h1>BDG Game FAQ — Complete Guide for India</h1>
      
      <p className="text-lg opacity-80 mb-8">
        Find answers to common questions about BDG Win Game login, download, withdrawal, and bonus claims in India.
      </p>

      <div className="space-y-6">
        {faqs.map(f=>(
          <details key={f.q} className="card">
            <summary className="font-semibold text-lg cursor-pointer">{f.q}</summary>
            <p className="mt-3 opacity-80">{f.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Playing?</h2>
        <CTA label="Register & Claim ₹500 Bonus" />
      </div>

      <JsonLd json={json} />
    </Prose>
  );
}
