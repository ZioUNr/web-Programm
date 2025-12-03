import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ArrowRight } from "lucide-react";

const surveys = [
  {
    id: 1,
    title: "Качество обслуживания",
    description: "Оцените качество нашего сервиса и помогите нам стать лучше",
    category: "Обратная связь",
    questionsCount: 10,
    respondentsCount: 234,
    estimatedTime: "5 мин",
  },
  {
    id: 2,
    title: "Предпочтения в работе",
    description: "Исследование о том, как вы предпочитаете работать: удалённо или в офисе",
    category: "Исследование",
    questionsCount: 15,
    respondentsCount: 567,
    estimatedTime: "7 мин",
  },
  {
    id: 3,
    title: "Технологические тренды 2024",
    description: "Какие технологии, по вашему мнению, будут определять будущее?",
    category: "Технологии",
    questionsCount: 12,
    respondentsCount: 891,
    estimatedTime: "6 мин",
  },
];

const FeaturedSurveys = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-up">
            Популярные опросы
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-up stagger-1">
            Пройдите один из наших опросов или создайте свой собственный
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {surveys.map((survey, index) => (
            <Card 
              key={survey.id} 
              className="group bg-gradient-card border-border/50 shadow-card hover-lift opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <Badge variant="secondary" className="w-fit mb-2">
                  {survey.category}
                </Badge>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {survey.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {survey.description}
                </p>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {survey.estimatedTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {survey.respondentsCount}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Link to={`/survey/${survey.id}`} className="w-full">
                  <Button variant="outline" className="w-full group/btn">
                    Пройти опрос
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 opacity-0 animate-fade-up stagger-5">
          <Link to="/surveys">
            <Button variant="ghost" size="lg" className="group">
              Смотреть все опросы
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSurveys;
