import { useEffect, useState } from 'react';
import { Rocket, ShoppingBag, Package, Cpu, Code } from 'lucide-react';

const links = [
  { key: 'home', label: 'Home', icon: Rocket },
  { key: 'physical', label: 'Physical Store', icon: Package },
  { key: 'digital', label: 'Digital Store', icon: Cpu },
  { key: 'services', label: 'Services', icon: ShoppingBag },
  { key: 'webapps', label: 'Webapps', icon: Code },
];

export default function Navbar({ current, onNavigate }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHash = () => onNavigate?.(location.hash.replace('#/', '') || 'home');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [onNavigate]);

  const NavLink = ({ item }) => {
    const Icon = item.icon;
    const active = current === item.key;
    return (
      <button
        onClick={() => {
          setOpen(false);
          const next = item.key;
          if (next === 'home') {
            history.replaceState(null, '', '#/');
          } else {
            location.hash = `#/${next}`;
          }
          onNavigate?.(next);
        }}
        className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          active ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
      >
        <Icon size={16} /> {item.label}
      </button>
    );
  };

  return (
    <header className="fixed top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500">
                <Rocket className="text-white" size={18} />
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">effiforge</span>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              {links.map((item) => (
                <NavLink key={item.key} item={item} />
              ))}
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-white/90 hover:text-white hover:bg-white/10"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Toggle menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-3 py-3">
              <div className="grid gap-2">
                {links.map((item) => (
                  <NavLink key={item.key} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
