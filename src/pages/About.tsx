import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Zap, Shield } from "lucide-react";
import { Helmet } from "react-helmet";

const values = [
  {
    icon: Target,
    title: "Точность",
    description: "Мы стремимся к максимальной точности в сборе и анализе данных",
  },
  {
    icon: Heart,
    title: "Простота",
    description: "Интуитивный интерфейс, который понятен каждому пользователю",
  },
  {
    icon: Zap,
    title: "Скорость",
    description: "Быстрое создание опросов и мгновенный анализ результатов",
  },
  {
    icon: Shield,
    title: "Безопасность",
    description: "Ваши данные надёжно защищены и хранятся в безопасности",
  },
];

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>О нас — Опросник</title>
        <meta name="description" content="Узнайте больше о нашей платформе для создания опросов и наших ценностях." />
      </Helmet>
      
      <section className="py-24 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 opacity-0 animate-fade-up">
              О нашей платформе
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-up stagger-1">
              Мы создали Опросник, чтобы помочь людям и компаниям лучше понимать
              друг друга. Наша миссия — сделать сбор обратной связи простым,
              быстрым и эффективным.
            </p>
          </div>

          {/* Values */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-2xl font-bold text-foreground text-center mb-10 opacity-0 animate-fade-up stagger-2">
              Наши ценности
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={value.title} 
                  className="bg-gradient-card border-border/50 shadow-card hover-lift text-center opacity-0 animate-fade-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Story */}
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-card border-border/50 shadow-card opacity-0 animate-fade-up stagger-5">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Наша история
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Опросник был создан в 2024 году командой энтузиастов, которые
                    верили, что сбор обратной связи может быть простым и приятным
                    процессом.
                  </p>
                  <p>
                    Мы начали с простой идеи: создать инструмент, который позволит
                    любому человеку создавать красивые и функциональные опросы за
                    считанные минуты, без необходимости обладать техническими
                    навыками.
                  </p>
                  <p>
                    Сегодня нашей платформой пользуются тысячи людей по всему миру —
                    от студентов, проводящих исследования, до крупных компаний,
                    изучающих удовлетворённость клиентов.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
