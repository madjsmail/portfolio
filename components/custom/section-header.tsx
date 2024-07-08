import ShimmerButton from "../magicui/shimmer-button";
import { Spotlight } from "../ui/Spotlight";
import { AnimatedGradientTextBadge } from "./animated-gradient";

type namePageProps = {
  className?: string;
  title: string;
  badge: string;
};

export default function SectionHeader({
  className,
  title,
  badge,
}: namePageProps) {
  return (
    <div className="w-full flex flex-col md:items-center md:justify-center relative overflow-hidden my-14">
      <AnimatedGradientTextBadge>
        {badge}
      </AnimatedGradientTextBadge>
      <h1 className="text-2xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
        {title}
      </h1>
    </div>
  );
}
