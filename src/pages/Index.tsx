import HeroSection from "@/components/HeroSection";
import MoodDetection from "@/components/MoodDetection";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MoodDetection />
      <MusicPlayer />
    </div>
  );
};

export default Index;
