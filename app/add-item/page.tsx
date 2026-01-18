'use client';
import { useRouter } from 'next/navigation';

export default function AddItem() {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      image: `https://picsum.photos/seed/${Math.random()}/600/400`,
    };

    const res = await fetch('http://localhost:5000/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      // রিকোয়ারমেন্ট অনুযায়ী Toast/Alert
      alert('Success! Your new product is live. 🚀');
      router.push('/items');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header Part */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
            Create New Item
          </h1>
          <p className="text-slate-500 font-medium">
            Fill in the details below to add a new product to the list.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-8 md:p-12 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Item Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                Product Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="e.g. Premium Wireless Headphones"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all duration-200 bg-slate-50/50"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                Price (USD)
              </label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                  $
                </span>
                <input
                  name="price"
                  type="number"
                  placeholder="0.00"
                  className="w-full pl-10 pr-5 py-4 rounded-2xl border border-slate-200 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all duration-200 bg-slate-50/50"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                Description
              </label>
              <textarea
                name="description"
                rows={5}
                placeholder="Tell us more about the product features..."
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all duration-200 bg-slate-50/50 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-5 rounded-2xl shadow-lg shadow-indigo-200 transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98]"
            >
              Publish Item
            </button>
          </form>
        </div>

        {/* Note Area */}
        <p className="text-center mt-8 text-slate-400 text-sm italic">
          * This is a protected route. Only authorized users can add items.
        </p>
      </div>
    </div>
  );
}
