import { useLanguage } from "@/contexts/LanguageContext";
import owLogo from "@/assets/ow-logo.svg";

const Header = () => {
  const { lang, setLang } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-3">
          <img src={owLogo} alt="OLISIPO WAY" className="h-8 md:h-10 w-auto" />
          <span className="text-sm md:text-base font-semibold tracking-[0.25em] text-foreground">
            OLISIPO WAY
          </span>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
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
