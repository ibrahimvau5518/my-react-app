import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 flex gap-6 bg-black text-white">
          <Link href="/">Home</Link>
          <Link href="/items">Items/Lists</Link>
          <Link href="/login">Login</Link>
          <Link href="/add-item">Add Item</Link>
        </nav>
        {children}
        <footer className="p-10 bg-gray-100 text-center">
          © 2026 Next.js App
        </footer>
      </body>
    </html>
  );
}
