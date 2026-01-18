// frontend/app/layout.tsx
import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            SCIC Store
          </Link>
          <div className="space-x-6 font-medium text-gray-600">
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
            <Link href="/items" className="hover:text-indigo-600">
              Items/Lists
            </Link>
            <Link href="/add-item" className="hover:text-indigo-600">
              Add Item
            </Link>
            <Link
              href="/login"
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
            >
              Login
            </Link>
          </div>
        </nav>
        {children}
        <footer className="bg-slate-900 text-white py-12 mt-20 text-center">
          <p className="text-gray-400">
            © 2026 SCIS Project - Developed with Next.js 15
          </p>
        </footer>
      </body>
    </html>
  );
}
