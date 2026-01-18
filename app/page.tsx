export default function LandingPage() {
  return (
    <main className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white px-6">
        <div className="text-center max-w-4xl">
          <span className="bg-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-6 inline-block">
            Next.js 15 Project
          </span>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
            Everything you need for{' '}
            <span className="text-indigo-600">Modern Dev.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            A high-performance application built with the latest technologies to
            help you manage your tasks with ease and style.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all">
              Explore Items
            </button>
            <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            ['99%', 'Uptime'],
            ['24/7', 'Support'],
            ['150+', 'Components'],
            ['5k+', 'Users'],
          ].map(([val, label]) => (
            <div key={label} className="text-center">
              <h3 className="text-5xl font-black text-slate-900 mb-2">{val}</h3>
              <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
