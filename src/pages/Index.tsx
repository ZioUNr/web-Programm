import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedSurveys from "@/components/home/FeaturedSurveys";
import StatsSection from "@/components/home/StatsSection";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Опросник — Создавайте и проходите опросы легко</title>
        <meta name="description" content="Простой и элегантный инструмент для создания опросов. Собирайте ответы, анализируйте результаты и принимайте решения на основе данных." />
      </Helmet>
      <HeroSection />
      <StatsSection />
      <FeaturedSurveys />
    </Layout>
  );
};

export default Index;
