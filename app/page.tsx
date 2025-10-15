import CTA, { CTA_URL } from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import Image from 'next/image';

export default function Page(){

  const jsonld = {
    '@context':'https://schema.org',
    '@type':'WebSite',
    name:'BDG Win Game',
    url:'https://bdgwinngames.com',
    potentialAction:{ '@type':'SearchAction', target:'https://bdgwinngames.com/search?q={query}', 'query-input':'required name=query' }
  };

  return (
    <>
      <section className="pt-8 pb-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Top Action Buttons */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            {/* Login Button */}
            <a
              href={CTA_URL}
              target="_blank"
              rel="nofollow noopener"
              className="shine-button relative group px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #D4AF37 50%, #F59E0B 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s infinite, pulse-glow 2s ease-in-out infinite',
                boxShadow: '0 6px 20px rgba(212, 175, 55, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              <span className="relative z-10 text-white font-bold flex items-center gap-2">
                <span>🔑</span>
                <span>Login</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>

            {/* Register Button */}
            <a
              href={CTA_URL}
              target="_blank"
              rel="nofollow noopener"
              className="shine-button relative group px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 overflow-hidden transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #F59E0B 25%, #D4AF37 50%, #F59E0B 75%, #D4AF37 100%)',
                backgroundSize: '300% 100%',
                animation: 'shimmer 2s infinite, pulse-glow 1.5s ease-in-out infinite',
                boxShadow: '0 8px 25px rgba(212, 175, 55, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              <span className="relative z-10 text-white font-bold flex items-center gap-2">
                <span>🎁</span>
                <span>Register</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            BDG Game Download App | ₹500 Bonus | Official Login
          </h1>
          <p className="mt-5 text-lg opacity-80">
            Download BDG Win Game in India. Fast login, signup bonus, colour prediction results, and secure withdrawals.
          </p>
        </div>
        <link rel="preload" as="image" href="/bdg-girl.png" />
        <Image 
          src="/bdg-girl.png" 
          alt="BDG Win Game - Beautiful girl showcasing the gaming platform with golden theme and bonus offers" 
          className="mx-auto mt-10 rounded-2xl border border-gold-100 shadow-lg" 
          priority 
          width="1200" 
          height="630"
        />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CTA label="Play Now & Claim ₹500 Bonus" />
          <a className="btn-gold" href={CTA_URL} target="_blank" rel="nofollow noopener">Login</a>
          <a className="btn-gold" href={CTA_URL} target="_blank" rel="nofollow noopener">Download</a>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="card">
          <h2 className="text-2xl font-bold">How to Register</h2>
          <ol className="list-decimal pl-5 mt-3 space-y-2">
            <li>Click <a className="link-gold" href={CTA_URL} target="_blank" rel="nofollow noopener">Register Now</a>.</li>
            <li>Fill mobile OTP and set password.</li>
            <li>Claim signup bonus and start.</li>
          </ol>
        </div>
        <div className="card">
          <h2 className="text-2xl font-bold">How to Login</h2>
          <p className="mt-2">Use your mobile number and password on the official BDG portal.</p>
        </div>
        <div className="card">
          <h2 className="text-2xl font-bold">Why Choose BDG Game India</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Fast app download and updates</li><li>Referral and deposit bonuses</li><li>UPI/Paytm withdrawals</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-2xl font-bold">Bonus & Referral Rewards</h2>
          <p className="mt-2">New user bonus, referral bonus, periodic cashbacks. Terms vary.</p>
        </div>
      </section>

      <section className="card mt-8">
        <h2 className="text-2xl font-bold">Is BDG Game Safe?</h2>
        <p className="mt-2">This site is informational and independent. Play responsibly. Verify app policies before deposits.</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Latest from Blog</h2>
        <ul className="mt-4 list-disc pl-5">
          <li><Link className="link-gold" href="/blog/how-to-login-bdg">How to Login to BDG Game</Link></li>
          <li><Link className="link-gold" href="/blog/bdg-withdrawal-guide">BDG Withdrawal Guide</Link></li>
          <li><Link className="link-gold" href="/blog/bdg-colour-prediction-tips">BDG Colour Prediction Tips</Link></li>
        </ul>
      </section>

      <JsonLd json={jsonld} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
          `
        }}
      />
    </>
  );
}
