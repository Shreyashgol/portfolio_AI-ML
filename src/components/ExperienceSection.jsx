import { Briefcase, CalendarDays } from "lucide-react";
import { experience } from "@/data/resumeData";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional experience and hands-on work aligned with my AI and ML
          journey.
        </p>

        <div className="space-y-8">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.title}`}
              className="bg-card border border-border rounded-2xl p-8 text-left shadow-xs card-hover"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.company} | {item.type}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-sm text-primary bg-primary/10 px-4 py-2 rounded-full">
                  <CalendarDays className="h-4 w-4" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-muted-foreground">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
