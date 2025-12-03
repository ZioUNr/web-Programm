import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 opacity-0 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            Создавайте и проходите опросы легко
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-up stagger-1">
            Узнайте мнение
            <span className="block text-primary">каждого</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto opacity-0 animate-fade-up stagger-2">
            Простой и элегантный инструмент для создания опросов. 
            Собирайте ответы, анализируйте результаты и принимайте решения на основе данных.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up stagger-3">
            <Link to="/surveys">
              <Button variant="hero" size="xl" className="group">
                Начать опрос
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="hero-outline" size="xl">
                Узнать больше
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
