import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Mic, Play, Pause, Loader } from "lucide-react";
import { useState } from "react";

const MoodDetection = () => {
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectedMood, setDetectedMood] = useState<string | null>(null);
  const [confidenceScore, setConfidenceScore] = useState<number>(0);

  const moods = [
    { name: "Happy", color: "mood-happy", confidence: 89 },
    { name: "Calm", color: "mood-calm", confidence: 76 },
    { name: "Energetic", color: "mood-energetic", confidence: 92 },
    { name: "Focused", color: "mood-focus", confidence: 68 },
    { name: "Romantic", color: "mood-romantic", confidence: 54 },
    { name: "Sad", color: "mood-sad", confidence: 23 }
  ];

  const handleStartDetection = () => {
    setIsDetecting(true);
    // Simulate detection process
    setTimeout(() => {
      setDetectedMood("Energetic");
      setConfidenceScore(92);
      setIsDetecting(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Emotion Detection</h2>
          <p className="text-xl text-muted-foreground">
            Let our AI analyze your emotions to find the perfect music for your mood
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Detection Interface */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Real-time Analysis</h3>
              
              {/* Mock Camera Feed */}
              <div className="aspect-video bg-muted rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center mb-6">
                {isDetecting ? (
                  <div className="text-center space-y-4">
                    <Loader className="w-12 h-12 text-primary animate-spin mx-auto" />
                    <p className="text-muted-foreground">Analyzing your emotions...</p>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <Camera className="w-16 h-16 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">Camera feed will appear here</p>
                  </div>
                )}
              </div>

              {/* Detection Controls */}
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={handleStartDetection}
                  disabled={isDetecting}
                  variant="mood"
                  size="lg"
                >
                  <Camera className="w-5 h-5" />
                  {isDetecting ? "Detecting..." : "Start Detection"}
                </Button>
                <Button variant="outline" size="lg">
                  <Mic className="w-5 h-5" />
                  Voice Analysis
                </Button>
              </div>

              {/* Privacy Note */}
              <p className="text-sm text-muted-foreground mt-6">
                🔒 All processing happens locally on your device. No data is stored or transmitted.
              </p>
            </div>
          </Card>

          {/* Results Panel */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-center">Detected Emotions</h3>
            
            {detectedMood ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${detectedMood.toLowerCase() === 'energetic' ? 'mood-energetic' : 'primary'}/20 text-${detectedMood.toLowerCase() === 'energetic' ? 'mood-energetic' : 'primary'} font-semibold text-lg`}>
                    Primary Mood: {detectedMood}
                  </div>
                  <p className="text-muted-foreground mt-2">Confidence: {confidenceScore}%</p>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                Start detection to see your emotional analysis
              </div>
            )}

            {/* Mood Distribution */}
            <div className="space-y-3 mt-8">
              <h4 className="font-semibold mb-4">Emotion Distribution</h4>
              {moods.map((mood) => (
                <div key={mood.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{mood.name}</span>
                    <span>{mood.confidence}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-${mood.color} transition-all duration-1000 ease-out`}
                      style={{ width: detectedMood ? `${mood.confidence}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {detectedMood && (
              <Button className="w-full mt-8" size="lg" variant="mood">
                <Play className="w-5 h-5" />
                Generate {detectedMood} Playlist
              </Button>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MoodDetection;