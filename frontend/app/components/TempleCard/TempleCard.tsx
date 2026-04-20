export default function TempleCard({ temple }:{ temple: any }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      <img
        src={temple.image}
        alt={temple.name}
        className="w-full h-48 object-cover"
      />

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