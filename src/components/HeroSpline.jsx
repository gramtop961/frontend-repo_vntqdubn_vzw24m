import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative pt-28">
      <div className="relative h-[600px] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-md">
              Build boldly with effiforge
            </h1>
            <p className="mt-4 text-lg text-white/80">
              A playful, modern studio crafting physical goods, digital products, and bespoke web apps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#/services" className="inline-flex items-center justify-center rounded-lg bg-white/90 hover:bg-white text-black px-4 py-2 font-medium transition">
                Explore services
              </a>
              <a href="#/webapps" className="inline-flex items-center justify-center rounded-lg bg-indigo-500/90 hover:bg-indigo-500 text-white px-4 py-2 font-medium transition">
                See webapps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
