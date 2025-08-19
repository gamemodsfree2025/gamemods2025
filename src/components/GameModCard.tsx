import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GameStats from "./GameStats";

interface GameModCardProps {
  title: string;
  description: string;
  image: string;
  downloadUrl: string;
  gameType: 'gta' | 'freefire' | 'roblox' | 'minecraft';
  icon: string;
  rating: string;
  reviews: string;
  size: string;
  downloads: string;
}

const GameModCard = ({ title, description, image, downloadUrl, gameType, icon, rating, reviews, size, downloads }: GameModCardProps) => {
  const getGradientClass = () => {
    switch (gameType) {
      case 'gta': return 'bg-gradient-gta';
      case 'freefire': return 'bg-gradient-freefire';
      case 'roblox': return 'bg-gradient-roblox';
      case 'minecraft': return 'bg-gradient-minecraft';
      default: return 'bg-gradient-to-r from-primary to-secondary';
    }
  };

  const getButtonColor = () => {
    switch (gameType) {
      case 'gta': return 'gta';
      case 'freefire': return 'freefire';
      case 'roblox': return 'roblox';
      case 'minecraft': return 'minecraft';
      default: return 'primary';
    }
  };

  return (
    <Card className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 animate-slide-up">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={`${title} mod`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className={`absolute inset-0 ${getGradientClass()} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <GameStats 
          rating={rating}
          reviews={reviews} 
          size={size}
          downloads={downloads}
        />
        
        <Button 
          asChild
          size="lg"
          className="w-full bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] border-0 hover:shadow-xl hover:scale-105 transition-all duration-300 text-white font-bold text-lg py-6 shadow-lg"
          style={{
            backgroundSize: '400% 400%',
            animation: 'gradientMove 6s ease infinite, pulse 2s infinite'
          }}
        >
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
            🎮 Download Now - FREE!
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default GameModCard;