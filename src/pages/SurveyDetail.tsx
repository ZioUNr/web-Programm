import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Check, MessageSquare, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

const surveyData = {
  id: 1,
  title: "Качество обслуживания",
  description: "Оцените качество нашего сервиса и помогите нам стать лучше",
  questions: [
    {
      id: 1,
      text: "Как вы оцениваете общее качество нашего сервиса?",
      type: "single",
      options: ["Отлично", "Хорошо", "Удовлетворительно", "Плохо"],
    },
    {
      id: 2,
      text: "Насколько быстро вы получили ответ на ваш запрос?",
      type: "single",
      options: ["Очень быстро", "Достаточно быстро", "Долго", "Очень долго"],
    },
    {
      id: 3,
      text: "Порекомендовали бы вы наш сервис друзьям?",
      type: "single",
      options: ["Определённо да", "Скорее да", "Скорее нет", "Определённо нет"],
    },
    {
      id: 4,
      text: "Что бы вы хотели улучшить в нашем сервисе?",
      type: "text",
    },
  ],
  comments: [
    { id: 1, author: "Анна М.", text: "Отличный опрос! Вопросы по делу.", date: "2024-01-15" },
    { id: 2, author: "Иван К.", text: "Быстро прошёл, всё понятно.", date: "2024-01-14" },
  ],
};

const SurveyDetail = () => {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [newComment, setNewComment] = useState("");

  const progress = ((currentQuestion + 1) / surveyData.questions.length) * 100;
  const question = surveyData.questions[currentQuestion];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [question.id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < surveyData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
      toast({
        title: "Опрос завершён!",
        description: "Спасибо за ваши ответы.",
      });
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      toast({
        title: "Комментарий отправлен",
        description: "Ваш комментарий появится после модерации.",
      });
      setNewComment("");
    }
  };

  if (isCompleted) {
    return (
      <Layout>
        <Helmet>
          <title>Опрос завершён — Опросник</title>
        </Helmet>
        <section className="py-24 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <Card className="max-w-lg mx-auto text-center bg-gradient-card border-border/50 shadow-card">
              <CardContent className="pt-12 pb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Спасибо за участие!
                </h2>
                <p className="text-muted-foreground mb-8">
                  Ваши ответы помогут нам стать лучше
                </p>
                <Link to="/surveys">
                  <Button>Вернуться к опросам</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{surveyData.title} — Опросник</title>
        <meta name="description" content={surveyData.description} />
      </Helmet>
      
      <section className="py-24 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="mb-8 opacity-0 animate-fade-up">
              <Link to="/surveys" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" />
                Назад к опросам
              </Link>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {surveyData.title}
              </h1>
              <p className="text-muted-foreground">
                {surveyData.description}
              </p>
            </div>

            {/* Progress */}
            <div className="mb-8 opacity-0 animate-fade-up stagger-1">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Вопрос {currentQuestion + 1} из {surveyData.questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question card */}
            <Card className="bg-gradient-card border-border/50 shadow-card mb-8 opacity-0 animate-fade-up stagger-2">
              <CardHeader>
                <h2 className="text-xl font-semibold text-foreground">
                  {question.text}
                </h2>
              </CardHeader>
              <CardContent>
                {question.type === "single" && question.options && (
                  <RadioGroup
                    value={answers[question.id] || ""}
                    onValueChange={handleAnswer}
                    className="space-y-3"
                  >
                    {question.options.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer"
                      >
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="cursor-pointer flex-1">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
                {question.type === "text" && (
                  <Textarea
                    value={answers[question.id] || ""}
                    onChange={(e) => handleAnswer(e.target.value)}
                    placeholder="Введите ваш ответ..."
                    className="min-h-[120px] resize-none"
                  />
                )}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between opacity-0 animate-fade-up stagger-3">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Назад
              </Button>
              <Button
                onClick={handleNext}
                disabled={!answers[question.id]}
              >
                {currentQuestion === surveyData.questions.length - 1 ? "Завершить" : "Далее"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Comments section */}
            <div className="mt-16 pt-8 border-t border-border/50 opacity-0 animate-fade-up stagger-4">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Комментарии
              </h3>
              
              <div className="space-y-4 mb-6">
                {surveyData.comments.map((comment) => (
                  <div key={comment.id} className="p-4 rounded-lg bg-secondary/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-foreground">{comment.author}</span>
                      <Badge variant="secondary" className="text-xs">{comment.date}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{comment.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Оставьте комментарий..."
                  className="min-h-[80px] resize-none"
                />
                <Button onClick={handleCommentSubmit} size="icon" className="h-auto">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SurveyDetail;
