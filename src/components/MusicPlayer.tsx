import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Shuffle, Repeat, Music } from "lucide-react";
import { useState } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState([45]);
  const [volume, setVolume] = useState([80]);
  
  const currentTrack = {
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    mood: "Energetic",
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
  };

  const playlist = [
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", mood: "Energetic" },
    { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", mood: "Happy" },
    { title: "Good 4 U", artist: "Olivia Rodrigo", mood: "Energetic" },
    { title: "Levitating", artist: "Dua Lipa", mood: "Energetic" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Your Mood-Based Playlist</h2>
          <p className="text-xl text-muted-foreground">
            Currently playing music that matches your energetic mood
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Main Player Card */}
          <Card className="p-8 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-center space-x-6 mb-6">
              {/* Album Cover */}
              <div className="relative">
                <img 
                  src={currentTrack.coverUrl} 
                  alt={currentTrack.album}
                  className="w-24 h-24 rounded-lg shadow-lg"
                />
                <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-semibold bg-mood-energetic text-primary-foreground`}>
                  {currentTrack.mood}
                </div>
              </div>
              
              {/* Track Info */}
              <div className="flex-1 space-y-1">
                <h3 className="text-xl font-bold">{currentTrack.title}</h3>
                <p className="text-muted-foreground">{currentTrack.artist}</p>
                <p className="text-sm text-muted-foreground">{currentTrack.album}</p>
              </div>
              
              {/* Like Button */}
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2 mb-6">
              <Slider
                value={currentTime}
                onValueChange={setCurrentTime}
                max={200}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>0:{currentTime[0]}</span>
                <span>{currentTrack.duration}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Button variant="ghost" size="icon">
                <Shuffle className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <SkipBack className="w-6 h-6" />
              </Button>
              <Button 
                size="icon"
                variant="mood"
                className="w-14 h-14"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6 ml-1" />
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <SkipForward className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <Repeat className="w-5 h-5" />
              </Button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center space-x-3">
              <Volume2 className="w-5 h-5 text-muted-foreground" />
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="flex-1"
              />
            </div>
          </Card>

          {/* Playlist Queue */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Music className="w-5 h-5 text-mood-energetic" />
              Up Next - Energetic Mood
            </h4>
            <div className="space-y-3">
              {playlist.map((track, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium">{track.title}</p>
                    <p className="text-sm text-muted-foreground">{track.artist}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold bg-mood-${track.mood.toLowerCase()}/20 text-mood-${track.mood.toLowerCase()}`}>
                    {track.mood}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;