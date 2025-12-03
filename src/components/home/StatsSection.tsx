import { FileQuestion, Users, MessageSquare, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: FileQuestion,
    value: "1,000+",
    label: "Опросов создано",
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Участников",
  },
  {
    icon: MessageSquare,
    value: "250,000+",
    label: "Ответов собрано",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Удовлетворённость",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
