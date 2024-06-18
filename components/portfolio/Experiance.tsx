import { experiences } from "@/data";

import { TracingBeam } from "../ui/tracing-beam";
import { ExperienceCard } from "../custom/experience-card";



export default function Experiences() {
    return (
        <section id="experiences" className="flex flex-col items-start justify-start gap-4 sm:py-32 sm:mx-24 md:mx-32 lg:mx-64 xl:mx-96 py-16">
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center w-full">
                Where I&apos;ve Worked
            </h2>
            <div className="flex flex-col gap-4 md:hidden">
                {experiences.map((experience) => (
                    <ExperienceCard
                        key={experience.title}
                        title={experience.title}
                        company={experience.company}
                        date={experience.date}
                        description={experience.description.join(' ')}
                        skills={experience.skills}
                    />
                ))}
            </div>
            <TracingBeam className="px-6 hidden md:flex md:flex-col">
                <div className="flex flex-col gap-4">
                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.title}
                            title={experience.title}
                            company={experience.company}
                            date={experience.date}
                            description={experience.description.map((skill) => skill).toString()}
                            skills={experience.skills}
                        />
                    ))}
                </div>
            </TracingBeam>
        </section>
    );
}