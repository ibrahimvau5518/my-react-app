// frontend/app/items/page.tsx
import Link from 'next/link';

export default async function ItemsPage() {
  const res = await fetch('https://my-next-server-five.vercel.app/api/items', {
    cache: 'no-store',
  });
  const items = await res.json();

  return (
    <div className="bg-gray-50 p-10 max-w-7xl mx-auto">
      <h1 className="text-black text-3xl font-bold mb-10 text-center">
        Our Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item: any) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="relative h-64">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-500 mt-2 line-clamp-2">
                {item.description}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-indigo-600">
                  ${item.price}
                </span>
                <Link
                  href={`/items/${item.id}`}
                  className="text-sm font-semibold text-indigo-500 hover:text-indigo-700"
                >
                  Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
