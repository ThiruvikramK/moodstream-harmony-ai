import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, Camera, Music, Brain, Heart } from "lucide-react";
import heroImage from "@/assets/hero-music.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Music className="w-8 h-8 text-mood-happy opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="w-6 h-6 text-mood-romantic opacity-40" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Brain className="w-10 h-10 text-mood-focus opacity-50" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-mood-energetic bg-clip-text text-transparent mb-6">
            Moodplay
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Your Personal AI Music Assistant
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Experience music that understands your emotions. Using advanced AI emotion detection 
            through facial recognition and voice analysis, Moodplay curates the perfect soundtrack for your mood.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="xl" variant="mood" className="font-semibold">
              <Camera className="w-5 h-5" />
              Start Emotion Detection
            </Button>
            <Button size="xl" variant="outline" className="font-semibold">
              <Music className="w-5 h-5" />
              Explore Playlists
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-mood-happy/20">
                  <Camera className="w-8 h-8 text-mood-happy" />
                </div>
                <h3 className="text-xl font-semibold">Facial Emotion Detection</h3>
                <p className="text-muted-foreground">
                  Advanced CNN models analyze your facial expressions to understand your current emotional state
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-mood-calm/20">
                  <Mic className="w-8 h-8 text-mood-calm" />
                </div>
                <h3 className="text-xl font-semibold">Voice Emotion Analysis</h3>
                <p className="text-muted-foreground">
                  OpenAI Whisper analyzes your speech patterns to detect emotional nuances in your voice
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-mood-energetic/20">
                  <Music className="w-8 h-8 text-mood-energetic" />
                </div>
                <h3 className="text-xl font-semibold">Smart Music Matching</h3>
                <p className="text-muted-foreground">
                  ML algorithms cluster Spotify tracks by mood using audio features like valence and energy
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;