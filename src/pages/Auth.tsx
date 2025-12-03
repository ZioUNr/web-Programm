import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("login");
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "register") {
      setActiveTab("register");
    }
  }, [searchParams]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be connected to Supabase
    toast({
      title: "Для входа требуется база данных",
      description: "Подключите Lovable Cloud для активации авторизации.",
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be connected to Supabase
    toast({
      title: "Для регистрации требуется база данных",
      description: "Подключите Lovable Cloud для активации авторизации.",
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>{activeTab === "login" ? "Вход" : "Регистрация"} — Опросник</title>
        <meta name="description" content="Войдите в аккаунт или зарегистрируйтесь для создания опросов." />
      </Helmet>
      
      <section className="py-24 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8 opacity-0 animate-fade-up">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {activeTab === "login" ? "С возвращением!" : "Создайте аккаунт"}
              </h1>
              <p className="text-muted-foreground">
                {activeTab === "login" 
                  ? "Войдите, чтобы продолжить" 
                  : "Зарегистрируйтесь для создания опросов"}
              </p>
            </div>

            <Card className="bg-gradient-card border-border/50 shadow-card opacity-0 animate-fade-up stagger-1">
              <CardHeader className="pb-2">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Вход</TabsTrigger>
                    <TabsTrigger value="register">Регистрация</TabsTrigger>
                  </TabsList>

                  <CardContent className="pt-6">
                    <TabsContent value="login" className="mt-0">
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="login-email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="login-email"
                              type="email"
                              placeholder="example@mail.com"
                              value={loginEmail}
                              onChange={(e) => setLoginEmail(e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="login-password">Пароль</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="login-password"
                              type="password"
                              placeholder="••••••••"
                              value={loginPassword}
                              onChange={(e) => setLoginPassword(e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <Button type="submit" className="w-full">
                          Войти
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="register" className="mt-0">
                      <form onSubmit={handleRegister} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="register-name">Имя</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="register-name"
                              type="text"
                              placeholder="Иван Иванов"
                              value={registerName}
                              onChange={(e) => setRegisterName(e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="register-email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="register-email"
                              type="email"
                              placeholder="example@mail.com"
                              value={registerEmail}
                              onChange={(e) => setRegisterEmail(e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="register-password">Пароль</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="register-password"
                              type="password"
                              placeholder="Минимум 6 символов"
                              value={registerPassword}
                              onChange={(e) => setRegisterPassword(e.target.value)}
                              className="pl-10"
                              minLength={6}
                              required
                            />
                          </div>
                        </div>
                        <Button type="submit" className="w-full">
                          Создать аккаунт
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </form>
                    </TabsContent>
                  </CardContent>
                </Tabs>
              </CardHeader>
            </Card>

            <p className="text-center text-sm text-muted-foreground mt-6 opacity-0 animate-fade-up stagger-2">
              <Link to="/" className="text-primary hover:underline">
                Вернуться на главную
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Auth;
