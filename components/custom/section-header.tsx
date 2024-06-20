import ShimmerButton from "../magicui/shimmer-button";
import { Spotlight } from "../ui/Spotlight";

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
    <div className="w-full flex flex-col md:items-center md:justify-center relative overflow-hidden">
      <ShimmerButton shimmerDuration="0" className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          {badge}
        </span>
      </ShimmerButton>
      <h1 className="text-2xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        {title}
      </h1>
    </div>
  );
}
