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

      {/* 3. Features (Cards) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-indigo-600 text-4xl font-extrabold text-center mb-16">
            Core Features
          </h2>
          <div className="text-black grid md:grid-cols-3 gap-8">
            {['Fast Performance', 'Secure Auth', 'Responsive UI'].map(title => (
              <div
                key={title}
                className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all group"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <div className="w-6 h-6 bg-indigo-600 group-hover:bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  Built with the best practices to ensure your application runs
                  smoothly on any device.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Us Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="bg-indigo-100 h-[400px] rounded-[40px] overflow-hidden">
          <img
            src="https://picsum.photos/800/600?tech"
            className="w-full h-full object-cover"
            alt="tech"
          />
        </div>
        <div>
          <h2 className="text-black text-4xl font-extrabold mb-6">
            Built for Developers, <br />
            By Developers
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            This project is a perfect starter for anyone looking to build a
            clean and scalable Next.js 15 application.
          </p>
          <ul className="space-y-4 font-medium text-slate-700">
            {[
              '✓ Clean Code Architecture',
              '✓ Optimized for Speed',
              '✓ Beautiful Tailwind UI',
            ].map(li => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12">
            Our Specialized Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Web Dev', 'App Design', 'Cloud Hosting', 'Consulting'].map(s => (
              <div
                key={s}
                className="p-8 border border-slate-700 rounded-3xl hover:bg-slate-800 transition-all cursor-default text-left"
              >
                <h4 className="text-xl font-bold mb-2">{s}</h4>
                <p className="text-slate-400 text-sm">
                  Professional solutions tailored to your specific business
                  needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonial */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-indigo-600 p-16 rounded-[50px] text-white shadow-2xl shadow-indigo-300">
          <p className="text-2xl font-medium italic mb-8">
            "This platform provides the cleanest UI I've ever used. The
            performance is top-notch!"
          </p>
          <h5 className="text-xl font-bold italic">Ibrahim, Lead Developer</h5>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 text-center px-6">
        <h2 className="text-indigo-600 text-5xl font-black mb-8">
          Ready to Start Building?
        </h2>
        <button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all">
          Join Our Community
        </button>
      </section>
    </main>
  );
}
