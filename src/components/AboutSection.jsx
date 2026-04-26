import { Briefcase, Code, User } from "lucide-react";
import { contactInfo } from "@/data/resumeData";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              AI Developer Building Real-World ML Systems
            </h3>

            <p className="text-muted-foreground">
              AI developer focused on AI agents and LLMOps, building scalable,
              production-ready ML systems and agentic workflows for practical,
              real-world applications.
            </p>

            <p className="text-muted-foreground">
              I am currently pursuing B.Tech in Computer Science and Data Science
              at Newton School of Technology, Rishihood University, with a strong
              foundation in problem solving, model development, and applied AI
              systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Email Me
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Agents & LLMOps</h4>
                  <p className="text-muted-foreground">
                    Designing reliable agentic workflows, RAG pipelines, and
                    production-oriented AI systems for real-world use cases.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">ML System Development</h4>
                  <p className="text-muted-foreground">
                    Building and deploying machine learning solutions with model
                    evaluation, inference workflows, and scalable APIs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Strong algorithmic foundation with 500+ LeetCode problems,
                    Codeforces Pupil rating, and active competitive programming
                    practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
