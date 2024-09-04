import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
      <div className="responsive-container">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Macamen Art
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/collection" className="text-gray-600 dark:text-gray-300 hover:text-primary transition duration-300">
              Collection
            </Link>
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary transition duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
