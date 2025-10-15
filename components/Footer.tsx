export default function Footer(){
  return (
    <footer className="border-t border-gold-100 mt-20">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8">
        <div><p className="font-semibold">BDG Win Game India</p>
          <p className="text-sm opacity-80 mt-2">Informational website. Not the official BDG operator. Contains affiliate links.</p></div>
        <div className="text-sm">
          <a className="link-gold" href="/privacy-policy">Privacy Policy</a><br/>
          <a className="link-gold" href="/faq">FAQ</a>
        </div>
        <div className="text-sm">
          <p>© {new Date().getFullYear()} BDG Win Game</p>
        </div>
      </div>
    </footer>
  );
}
