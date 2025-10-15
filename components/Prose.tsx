export default function Prose({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`prose prose-lg max-w-none leading-relaxed ${className}`}>
      <style jsx>{`
        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }
        .prose ul, .prose ol {
          margin-bottom: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        .prose blockquote {
          margin: 2rem 0;
          padding: 1rem 1.5rem;
          border-left: 4px solid #D4AF37;
          background: #FFFBEB;
          border-radius: 0 8px 8px 0;
        }
        .prose img {
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          margin: 2rem 0;
        }
        .prose code {
          background: #FEF3C7;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-size: 0.9em;
        }
        .prose pre {
          background: #1a1a1a;
          color: #fff;
          padding: 1.5rem;
          border-radius: 12px;
          overflow-x: auto;
          margin: 2rem 0;
        }
        .prose pre code {
          background: transparent;
          padding: 0;
        }
      `}</style>
      {children}
    </div>
  );
}
