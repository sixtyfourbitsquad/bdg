export default function Prose({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {children}
    </div>
  );
}
