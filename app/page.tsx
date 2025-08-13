import Image from "next/image";

interface Attraction {
  id: number;
  name: string;
  detail: string;
  coverimage: string;
}

async function getAttractions(): Promise<Attraction[]> {
  const res = await fetch("https://www.melivecode.com/api/attractions", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch attractions");
  }
  return res.json();
}

export default async function Home() {
  const attractions = await getAttractions();

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Attractions</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {attractions.map((attraction) => (
          <div
            key={attraction.id}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <Image
              src={attraction.coverimage}
              alt={attraction.name}
              width={500}
              height={300}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {attraction.name}
              </h2>
              <p className="text-gray-700 text-sm">{attraction.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

