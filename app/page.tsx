import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-orange-600">
        Welcome to Our Ordering App
      </h1>
      <p className="text-orange-700">
        Discover local restaurants and order your favorite meals!
      </p>
      <a
        href="/restaurants"
        className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
      >
        Browse Restaurants
      </a>
    </main>
  );
}
