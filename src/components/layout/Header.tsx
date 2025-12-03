import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ClipboardList, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Главная" },
    { to: "/surveys", label: "Опросы" },
    { to: "/about", label: "О нас" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            <ClipboardList className="w-6 h-6 text-primary" />
            <span>Опросник</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm font-medium transition-colors relative py-2",
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Войти</span>
              </Button>
            </Link>
            <Link to="/auth?mode=register">
              <Button size="sm">Регистрация</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
