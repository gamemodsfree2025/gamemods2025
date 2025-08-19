import HeroSection from "@/components/HeroSection";
import GameModCard from "@/components/GameModCard";
import UserReviews from "@/components/UserReviews";
import { useEffect } from "react";

// Import game mod images
import gtaModImage from "@/assets/gta-mobile-mod.jpg";
import freefireModImage from "@/assets/freefire-mod.jpg";
import robloxModImage from "@/assets/roblox-mod.jpg";
import minecraftModImage from "@/assets/minecraft-mod.jpg";

const Index = () => {
  useEffect(() => {
    // Update page metadata for SEO
    document.title = "Free Mobile Game Mods Download - GTA, Free Fire, Roblox & Minecraft";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download free mobile game mods for GTA Mobile, Free Fire, Roblox, and Minecraft Pocket Edition. Unlock premium features and enhanced gameplay instantly.');
    }
  }, []);

  const gameMods = [
    {
      title: "GTA Mobile MOD",
      description: "Experience the ultimate GTA Mobile with unlimited money, unlocked cars, weapons, and exclusive content. Transform your gameplay with this premium mod pack.",
      image: gtaModImage,
      downloadUrl: "https://verifyuser.org/cl/i/6n77dm",
      gameType: 'gta' as const,
      icon: "🚗",
      rating: "4.8",
      reviews: "120k Reviews",
      size: "1.2 GB", 
      downloads: "+1.2M"
    },
    {
      title: "Free Fire MOD",
      description: "Dominate the battlefield with unlimited diamonds, auto-aim, wallhack, and premium skins. Get the competitive edge in every match.",
      image: freefireModImage,
      downloadUrl: "https://verifyuser.org/cl/i/6n77dm", 
      gameType: 'freefire' as const,
      icon: "🔫",
      rating: "4.6",
      reviews: "89k Reviews", 
      size: "850 MB",
      downloads: "+950K"
    },
    {
      title: "Roblox MOD",
      description: "Unlock unlimited Robux, premium items, exclusive avatars, and VIP features. Access all premium content for free and customize your experience.",
      image: robloxModImage,
      downloadUrl: "https://verifyuser.org/cl/i/6n77dm",
      gameType: 'roblox' as const,
      icon: "🎯",
      rating: "4.7",
      reviews: "156k Reviews",
      size: "650 MB", 
      downloads: "+2.1M"
    },
    {
      title: "Minecraft PE MOD",
      description: "Discover unlimited resources, creative tools, exclusive texture packs, and modded gameplay features. Build without limits in your pocket.",
      image: minecraftModImage,
      downloadUrl: "https://verifyuser.org/cl/i/6n77dm",
      gameType: 'minecraft' as const,
      icon: "⛏️",
      rating: "4.9", 
      reviews: "203k Reviews",
      size: "1.1 GB",
      downloads: "+3.5M"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Game Mods
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your favorite game and download the latest mods with enhanced features, unlimited resources, and premium content - all completely free!
          </p>
        </div>
        
        {/* Game Mods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {gameMods.map((mod, index) => (
            <GameModCard
              key={index}
              title={mod.title}
              description={mod.description}
              image={mod.image}
              downloadUrl={mod.downloadUrl}
              gameType={mod.gameType}
              icon={mod.icon}
              rating={mod.rating}
              reviews={mod.reviews}
              size={mod.size}
              downloads={mod.downloads}
            />
          ))}
        </div>
        
        {/* Features Section */}
        <section className="mt-20 py-16 bg-card/20 rounded-3xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Choose Our Mods?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Safe & Secure</h4>
              <p className="text-muted-foreground">All mods are thoroughly tested and virus-free. Your device security is our priority.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Fast Download</h4>
              <p className="text-muted-foreground">High-speed servers ensure quick downloads. Get your mods installed in minutes.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Regular Updates</h4>
              <p className="text-muted-foreground">Stay current with the latest game versions. Our mods are updated frequently.</p>
            </div>
          </div>
        </section>
        
        {/* User Reviews Section */}
        <UserReviews />
      </main>
      
      {/* Footer */}
      <footer className="bg-card/50 py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Gaming Mods Hub. All rights reserved. Download responsibly and enjoy gaming!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
