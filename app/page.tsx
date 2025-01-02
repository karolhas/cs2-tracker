import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center space-y-12">
      <HeroSection />
      <SearchBar />
      <Footer />
    </div>
  );
}
