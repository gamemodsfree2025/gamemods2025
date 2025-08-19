import { Card } from "@/components/ui/card";

const UserReviews = () => {
  const reviews = [
    {
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/50?img=12",
      review: "I completed the quick offer and boom – the game started downloading! Works perfectly on my Android."
    },
    {
      name: "Maria Lopez", 
      avatar: "https://i.pravatar.cc/50?img=25",
      review: "I was skeptical at first, but after doing the verification, I got the mod on my phone. Insane!"
    },
    {
      name: "James Carter",
      avatar: "https://i.pravatar.cc/50?img=32", 
      review: "Took me 2 minutes to complete the steps. Totally worth it for a free gaming experience."
    },
    {
      name: "Sophie Turner",
      avatar: "https://i.pravatar.cc/50?img=45",
      review: "Honestly, I didn't expect it to work, but it actually does. Just follow the steps!"
    },
    {
      name: "Daniel Kim",
      avatar: "https://i.pravatar.cc/50?img=18",
      review: "The games run smoothly on my device. Big thanks for making these available for mobile!"
    }
  ];

  return (
    <section className="mt-20 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          User Reviews
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-start gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                />
                <div className="flex-1">
                  <h5 className="font-semibold text-foreground mb-2">{review.name}</h5>
                  <p className="text-muted-foreground leading-relaxed">{review.review}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;