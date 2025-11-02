export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} effiforge — All rights reserved.</p>
          <div className="text-white/60 text-sm flex items-center gap-3">
            <a href="#/services" className="hover:text-white">Services</a>
            <span>•</span>
            <a href="#/digital" className="hover:text-white">Digital Store</a>
            <span>•</span>
            <a href="#/physical" className="hover:text-white">Physical Store</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
