interface GameStatsProps {
  rating: string;
  reviews: string;
  size: string;
  downloads: string;
}

const GameStats = ({ rating, reviews, size, downloads }: GameStatsProps) => {
  return (
    <div className="flex justify-around my-6 py-4 bg-card/30 rounded-lg backdrop-blur-sm">
      <div className="text-center animate-fadeIn">
        <div className="flex items-center justify-center gap-1">
          <strong className="text-lg">{rating}</strong>
          <i className="bi bi-star-fill text-yellow-400"></i>
        </div>
        <small className="text-muted-foreground">{reviews}</small>
      </div>
      
      <div className="text-center animate-fadeIn">
        <div className="flex items-center justify-center">
          <i className="bi bi-download text-primary text-lg"></i>
        </div>
        <small className="text-muted-foreground">{size}</small>
      </div>
      
      <div className="text-center animate-fadeIn">
        <div>
          <strong className="text-lg">{downloads}</strong>
        </div>
        <small className="text-muted-foreground">Downloads</small>
      </div>
    </div>
  );
};

export default GameStats;