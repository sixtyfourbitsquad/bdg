export default function Prose({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`prose prose-lg max-w-none leading-relaxed prose-headings:mt-8 prose-headings:mb-4 prose-headings:leading-tight prose-p:mb-6 prose-p:leading-relaxed prose-ul:mb-6 prose-ol:mb-6 prose-li:mb-2 prose-li:leading-relaxed prose-blockquote:my-8 prose-blockquote:pl-6 prose-blockquote:border-l-4 prose-blockquote:border-gold-500 prose-blockquote:bg-gold-50 prose-blockquote:rounded-r-lg prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-code:bg-gold-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:my-8 prose-pre:code:bg-transparent prose-pre:code:p-0 ${className}`}>
      {children}
    </div>
  );
}
