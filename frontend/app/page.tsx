import Navbar from "./components/Navbar/page";
import HeroSection from "./components/HeroSection/page";
import Footer from "./components/Footer";
import HomePage from "./components/Home/page";

const temples = [
  {
    id: 1,
    name: "Kedarnath Temple",
    state: "Uttarakhand",
    deity: "Shiva",
    timings: "4 AM - 9 PM",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
  },
  {
    id: 2,
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
      <HomePage temples={temples}/>
      <Footer />
    </>
);
}
