const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] animate-pulse" />
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            🎮 Ultimate
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {" "}Gaming Mods
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Download the hottest mobile game mods for FREE! Unlock unlimited features, premium content, and enhanced gameplay for your favorite games.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="px-4 py-2 bg-card/20 rounded-full border border-primary/20 text-primary font-semibold">
              ✅ 100% Free
            </span>
            <span className="px-4 py-2 bg-card/20 rounded-full border border-secondary/20 text-secondary font-semibold">
              🔒 Safe & Secure
            </span>
            <span className="px-4 py-2 bg-card/20 rounded-full border border-accent/20 text-accent font-semibold">
              ⚡ Instant Download
            </span>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-bounce" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;