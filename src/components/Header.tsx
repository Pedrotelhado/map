import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { lang, setLang } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        
        {/* Logo (typographic) */}
        <div className="flex items-center">
          <span className="font-display text-xl md:text-2xl tracking-[0.04em] text-foreground">
            Monte do Lago
          </span>
        </div>

        {/* Language Switch */}
        <div className="flex items-center gap-1 rounded-full border border-border bg-white/40 backdrop-blur px-1 py-1">
          <button
            onClick={() => setLang("pt")}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
              lang === "pt"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            PT
          </button>

          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
              lang === "en"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            EN
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
