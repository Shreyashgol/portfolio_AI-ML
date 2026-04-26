import { ArrowDown, ExternalLink } from "lucide-react";
import { profileLinks } from "@/data/resumeData";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Shreyash
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Golhani
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            AI developer focused on AI agents and LLMOps, building scalable,
            production-ready ML systems and agentic workflows with reliable,
            high-impact applications for real-world problems.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4 opacity-0 animate-fade-in-delay-4">
            {profileLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-105"
                title={`${link.label} Profile`}
              >
                <span className="text-sm font-medium">{link.label}</span>
                <ExternalLink className="h-4 w-4 text-primary" />
              </a>
            ))}
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
