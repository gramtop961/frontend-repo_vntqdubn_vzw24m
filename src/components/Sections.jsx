import { Sparkles, Package, Cpu, Wrench, Code, ExternalLink } from 'lucide-react';

function Section({ title, description, children }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
            <span className="h-9 w-9 grid place-items-center rounded-lg bg-white/10"><Sparkles size={18} className="text-white"/></span>
            {title}
          </h2>
          {description && <p className="mt-3 text-white/80">{description}</p>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, desc, badge }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition p-6">
      <div className="flex items-start justify-between">
        <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
          <Icon size={18} />
        </div>
        {badge && <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">{badge}</span>}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Sections({ view }) {
  if (view === 'physical') return <PhysicalStore/>;
  if (view === 'digital') return <DigitalStore/>;
  if (view === 'services') return <Services/>;
  if (view === 'webapps') return <Webapps/>;
  return <HomeShowcase/>;
}

function HomeShowcase() {
  return (
    <Section
      title="What we do"
      description="From tangible goods to cloud-native software, we bring ideas to life with craftsmanship and speed."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card icon={Package} title="Physical Goods" desc="Limited-run accessories, tools, and creative hardware designed with love." />
        <Card icon={Cpu} title="Digital Products" desc="Apps, templates, and kits to supercharge your workflow and creativity." />
        <Card icon={Wrench} title="Services" desc="Branding, UX/UI, and full-stack development for startups and creators." />
      </div>
    </Section>
  );
}

function PhysicalStore() {
  const items = [
    { title: 'EffiDeck Notebook', desc: 'A dot-grid notebook optimized for product teams.', badge: 'In Stock' },
    { title: 'Forge Keycap Set', desc: 'PBT keycaps with a modern, utilitarian palette.', badge: 'Preorder' },
    { title: 'Cable Organizer', desc: 'Magnetic silicone system to tame your desk.', badge: 'New' },
  ];
  return (
    <Section title="Physical Store" description="Thoughtful objects built to last and spark joy.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Card key={p.title} icon={Package} title={p.title} desc={p.desc} badge={p.badge} />
        ))}
      </div>
    </Section>
  );
}

function DigitalStore() {
  const items = [
    { title: 'Landing Page Kit', desc: 'Reusable sections and components for fast launches.', badge: 'Best Seller' },
    { title: 'Automation Scripts', desc: 'Node and Python scripts that save hours every week.', badge: 'Bundle' },
    { title: 'Icon Pack', desc: 'Minimal iconography crafted for dashboards.', badge: 'New' },
  ];
  return (
    <Section title="Digital Store" description="Downloadable products for builders and operators.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Card key={p.title} icon={Cpu} title={p.title} desc={p.desc} badge={p.badge} />
        ))}
      </div>
    </Section>
  );
}

function Services() {
  const items = [
    { title: 'Brand & Visual Identity', desc: 'Positioning, logos, and systems that scale.' },
    { title: 'UX/UI Design', desc: 'From wireframes to high-fidelity interfaces.' },
    { title: 'Full‑stack Web Apps', desc: 'React frontends, FastAPI backends, and cloud infra.' },
  ];
  return (
    <Section title="Services" description="A flexible partner for strategy, design, and development.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Card key={p.title} icon={Wrench} title={p.title} desc={p.desc} />
        ))}
      </div>
    </Section>
  );
}

function Webapps() {
  const apps = [
    { name: 'Pulseboard', desc: 'Realtime dashboard for startup metrics.', url: '#', tag: 'Analytics' },
    { name: 'TaskFlow', desc: 'Opinionated task manager for product teams.', url: '#', tag: 'Productivity' },
    { name: 'LaunchKit', desc: 'Prelaunch microsites that actually convert.', url: '#', tag: 'Marketing' },
  ];
  return (
    <Section title="Webapps" description="A selection of apps we’ve crafted and shipped.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <a
            key={app.name}
            href={app.url}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition p-6 block"
          >
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
                <Code size={18} />
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">{app.tag}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white flex items-center gap-2">
              {app.name}
              <ExternalLink size={16} className="opacity-60 group-hover:opacity-100 transition" />
            </h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">{app.desc}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
