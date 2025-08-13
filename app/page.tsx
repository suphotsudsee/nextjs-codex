import Link from "next/link";

interface Attraction {
  id: number;
  name: string;
  detail: string;
  coverimage: string;
  latitude: number;
  longitude: number;
}

export default async function Home() {
  const res = await fetch("https://www.melivecode.com/api/attractions", {
    cache: "no-store",
  });
  const attractions: Attraction[] = await res.json();

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Tourist Attractions</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {attractions.map((item) => (
          <Link
            key={item.id}
            href={`/attraction/${item.id}`}
            className="flex flex-col bg-white rounded-lg shadow p-4"
          >
            <img
              src={item.coverimage}
              alt={item.name}
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
            <p className="text-sm text-gray-600 flex-grow">{item.detail}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
