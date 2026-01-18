'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'password123') {
      document.cookie = 'auth_token=true; path=/'; // কুকিতে সেভ করা
      router.push('/items');
    } else {
      alert('ভুল ইমেইল বা পাসওয়ার্ড!');
    }
  };

  return (
    <div className="flex justify-center mt-20 p-10">
      <form
        onSubmit={handleLogin}
        className="border p-10 flex flex-col gap-4 shadow-lg"
      >
        <h2 className="text-2xl font-bold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2"
          onChange={e => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-2">Login</button>
      </form>
    </div>
  );
}
