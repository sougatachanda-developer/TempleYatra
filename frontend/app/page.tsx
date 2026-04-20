import Image from "next/image";
import Navbar from "./components/Navbar/page";
import HeroSection from "./components/HeroSection/page";
import Section from "./components/Section";
import TempleCard from "./components/TempleCard/TempleCard";
import SearchBar from "./components/SearchBar";

const temples = [
  {
    name: "Kedarnath Temple",
    state: "Uttarakhand",
    deity: "Shiva",
    timings: "4 AM - 9 PM",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
  },
  {
    name: "Badrinath Temple",
    state: "Uttarakhand",
    deity: "Vishnu",
    timings: "4:30 AM - 9 PM",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09b",
  },
];
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchBar />
      <Section title="🔥 Popular Temples" bg="bg-orange-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {temples.map((temple, index) => (
            <TempleCard key={index} temple={temple} />
          ))}
        </div>
      </Section>

      <Section title="🛕 Spiritual Routes">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Char Dham Yatra</h3>
            <p className="text-gray-600 mt-2">
              Sacred Himalayan pilgrimage route
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">12 Jyotirlingas</h3>
            <p className="text-gray-600 mt-2">
              Important Shiva temples across India
            </p>
          </div>
        </div>
      </Section>

      <Section title="🎉 Explore by Festival" bg="bg-orange-50">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Diwali</h3>
            <p className="text-gray-600 text-sm">
              Best temples to visit during Diwali
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Navratri</h3>
            <p className="text-gray-600 text-sm">
              Shakti temples & celebrations
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Mahashivratri</h3>
            <p className="text-gray-600 text-sm">
              Major Shiva festival
            </p>
          </div>
        </div>
      </Section>
    </>
);
}
