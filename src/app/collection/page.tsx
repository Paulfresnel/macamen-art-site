import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Collection() {
  return (
    <Layout
      title="Art Collection"
      description="Browse our collection of original paintings and prints."
    >
      <div className="responsive-container">
        <h1>Our Collection</h1>
        <div className="responsive-grid">
          {/* Replace with actual paintings from your database */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Link href={`/painting/${i}`} key={i} className="card group">
              <div className="relative aspect-w-4 aspect-h-3">
                <Image
                  src={`/placeholder-painting-${i}.jpg`}
                  alt={`Painting ${i}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2>Painting Title {i}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">$XXX.XX</p>
                <button className="btn-primary">View Details</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
