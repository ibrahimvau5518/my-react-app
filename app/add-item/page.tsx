// frontend/app/page.tsx
export default function LandingPage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="bg-indigo-600 text-white h-[80vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4">
          Quality Products for You
        </h1>
        <p className="text-xl opacity-90 mb-8">
          Discover our collection of premium items built with excellence.
        </p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold">
          Get Started
        </button>
      </section>

      {/* 2. Stats Section */}
      <section className="py-20 grid grid-cols-2 md:grid-cols-4 gap-8 px-10 text-center bg-white">
        <div>
          <h3 className="text-4xl font-bold">10k+</h3>
          <p>Customers</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">500+</h3>
          <p>Products</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">24/7</h3>
          <p>Support</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">99%</h3>
          <p>Reliability</p>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="py-20 bg-gray-50 px-10 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Fast Delivery', 'Secure Payment', 'Top Quality'].map(f => (
            <div
              key={f}
              className="p-8 bg-white rounded-xl shadow-sm border italic"
            >
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* 4. About Section */}
      <section className="py-20 px-10 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 bg-gray-300 h-64 w-full rounded-2xl"></div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            We aim to provide the best services for our clients worldwide with
            modern technology.
          </p>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="py-20 bg-indigo-50 px-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <p>From UI/UX design to full-stack development, we cover it all.</p>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-20 px-10 text-center">
        <h2 className="text-3xl font-bold mb-10">What Clients Say</h2>
        <div className="max-w-2xl mx-auto border p-8 rounded-lg shadow-lg bg-white">
          "This platform changed the way I manage my products. Fast and
          reliable!"
        </div>
      </section>

      {/* 7. Final Call to Action Section */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to join?</h2>
        <button className="bg-indigo-600 px-10 py-4 rounded-lg font-bold">
          Join Now
        </button>
      </section>
    </main>
  );
}
