'use client';
import { CTA_URL } from './CTA';

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Golden shining effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-full animate-pulse opacity-75 blur-sm scale-110"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 rounded-full animate-ping opacity-50 scale-105"></div>
        
        {/* Main button */}
        <a
          href={CTA_URL}
          target="_blank"
          rel="nofollow noopener"
          className="floating-button relative bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold py-4 px-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center"
          style={{
            boxShadow: '0 8px 32px rgba(212, 175, 55, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            background: 'linear-gradient(135deg, #D4AF37 0%, #F59E0B 50%, #D4AF37 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 2s infinite'
          }}
        >
          <span className="text-lg">🎁</span>
          <span className="text-sm font-bold">Get ₹500 Signup Bonus!</span>
        </a>
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
