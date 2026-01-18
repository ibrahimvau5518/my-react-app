export default async function ItemsPage() {
  const res = await fetch('http://localhost:5000/api/items', {
    cache: 'no-store',
  });
  const items = await res.json();

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item: any) => (
        <div key={item.id} className="border p-4 rounded shadow">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover"
          />
          <h3 className="font-bold text-xl mt-2">{item.name}</h3>
          <p className="text-green-600">${item.price}</p>
          <Link
            href={`/items/${item.id}`}
            className="text-blue-500 underline mt-2 block"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
import Link from 'next/link';
