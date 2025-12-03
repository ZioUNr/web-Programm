import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Clock, Users, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const allSurveys = [
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
  {
    id: 4,
    title: "Здоровый образ жизни",
    description: "Расскажите о своих привычках в питании и физической активности",
    category: "Здоровье",
    questionsCount: 8,
    respondentsCount: 423,
    estimatedTime: "4 мин",
  },
  {
    id: 5,
    title: "Экологическое сознание",
    description: "Как вы заботитесь об окружающей среде в повседневной жизни?",
    category: "Экология",
    questionsCount: 11,
    respondentsCount: 312,
    estimatedTime: "5 мин",
  },
  {
    id: 6,
    title: "Онлайн-образование",
    description: "Ваш опыт обучения онлайн: плюсы, минусы и предпочтения",
    category: "Образование",
    questionsCount: 14,
    respondentsCount: 678,
    estimatedTime: "7 мин",
  },
];

const categories = ["Все", "Обратная связь", "Исследование", "Технологии", "Здоровье", "Экология", "Образование"];

const Surveys = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredSurveys = allSurveys.filter((survey) => {
    const matchesSearch = survey.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      survey.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Все" || survey.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <Helmet>
        <title>Опросы — Все доступные опросы</title>
        <meta name="description" content="Просмотрите и пройдите доступные опросы на различные темы." />
      </Helmet>
      
      <section className="py-24 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-up">
              Все опросы
            </h1>
            <p className="text-muted-foreground opacity-0 animate-fade-up stagger-1">
              Выберите интересующий вас опрос и поделитесь своим мнением
            </p>
          </div>

          {/* Search and filters */}
          <div className="max-w-4xl mx-auto mb-10 space-y-4 opacity-0 animate-fade-up stagger-2">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Поиск опросов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card border-border/50"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Survey grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredSurveys.map((survey, index) => (
              <Card 
                key={survey.id} 
                className="group bg-gradient-card border-border/50 shadow-card hover-lift opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
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

          {filteredSurveys.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p>Опросы не найдены. Попробуйте изменить параметры поиска.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Surveys;
