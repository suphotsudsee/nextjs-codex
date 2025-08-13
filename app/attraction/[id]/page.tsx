import type { Metadata } from "next";

interface Attraction {
  id: number;
  name: string;
  detail: string;
  coverimage: string;
  latitude: number;
  longitude: number;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const res = await fetch(`https://www.melivecode.com/api/attractions/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const attraction: Attraction = data.attraction;
  return {
    title: attraction.name,
  };
}

export default async function AttractionDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://www.melivecode.com/api/attractions/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const attraction: Attraction = data.attraction;

  return (
    <main className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto">
        <img
          src={attraction.coverimage}
          alt={attraction.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{attraction.name}</h1>
        <p className="mb-4">{attraction.detail}</p>
        <p className="text-sm text-gray-600">
          Latitude: {attraction.latitude}, Longitude: {attraction.longitude}
        </p>
      </div>
    </main>
  );
}
