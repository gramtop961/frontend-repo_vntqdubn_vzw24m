import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSpline from './components/HeroSpline.jsx';
import Sections from './components/Sections.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    const fromHash = (hash) => hash.replace('#/', '') || 'home';
    setView(fromHash(location.hash));
    const onHash = () => setView(fromHash(location.hash));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b10] text-white relative">
      <Navbar current={view} onNavigate={setView} />
      {view === 'home' && <HeroSpline />}
      <main>
        <Sections view={view} />
      </main>
      <Footer />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.12),transparent_45%)]" />
    </div>
  );
}

export default App;
