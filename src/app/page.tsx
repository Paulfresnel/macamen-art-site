import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout
      title="Beautiful Original Paintings"
      description="Discover unique and beautiful paintings by [Mom's Name]. Shop original artwork and prints."
    >
      <div className="responsive-container">
        <h1 className="text-center">Welcome to Macamen Art Gallery</h1>
        <div className="responsive-grid">
          {/* Replace with actual featured paintings */}
          {[1, 2, 3].map((i) => (
            <Link href={`/painting/${i}`} key={i} className="card group">
              <div className="relative aspect-w-4 aspect-h-3">
                <Image
                  src={`/placeholder-painting-${i}.jpg`}
                  alt={`Featured Painting ${i}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2>Painting Title {i}</h2>
                <p className="text-gray-600 dark:text-gray-300">A beautiful landscape painting...</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
