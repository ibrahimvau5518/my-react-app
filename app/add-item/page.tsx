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
      image: 'https://picsum.photos/200',
    };

    const res = await fetch('http://localhost:5000/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert('Product Added Successfully!'); // Toast Notification
      router.push('/items');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 border flex flex-col gap-4"
    >
      <input
        name="name"
        placeholder="Item Name"
        className="border p-2"
        required
      />
      <input name="price" placeholder="Price" className="border p-2" required />
      <textarea
        name="description"
        placeholder="Description"
        className="border p-2"
        required
      />
      <button className="bg-green-600 text-white p-2">Submit Product</button>
    </form>
  );
}
