export default function TempleCard({ temple }:{ temple: any }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group">
      <div className="relative">
      <img
        src={temple.image}
        alt={temple.name}
        className="w-full h-48 object-cover"
      />

      {/* Overlay */}
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
      <button className="bg-customBg text-accent text-bold cursor-pointer px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
        <a href={`/templeDetails/${temple.id}`}>
         Read More
        </a>
      </button>
    </div>
</div>

      <div className="p-4">
        <h2 className="text-xl font-semibold">{temple.name}</h2>
        <p className="text-gray-500 text-sm">{temple.state}</p>

        <div className="flex justify-between mt-3 text-sm text-gray-600">
          <span>🕉️ {temple.deity}</span>
          <span>⏰ {temple.timings}</span>
        </div>
      </div>
    </div>
  );
}