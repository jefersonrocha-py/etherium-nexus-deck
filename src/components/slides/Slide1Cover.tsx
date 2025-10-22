import datacenterBg from "@/assets/datacenter-bg.png";

interface SlideProps {
  direction: "next" | "prev";
}

export default function Slide1Cover({ direction }: SlideProps) {
  return (
    <div className="relative w-full h-full bg-[hsl(var(--background))] overflow-hidden">
      <img 
        src={datacenterBg}
        alt="Etheriumtech"
        className="absolute inset-0 w-full h-full object-cover object-[75%_center] sm:object-center md:object-center"
      />
      {/* Overlay sutil para melhorar legibilidade em mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/30 via-transparent to-[hsl(var(--background))]/40 sm:from-[hsl(var(--background))]/10 sm:to-[hsl(var(--background))]/20" />
    </div>
  );
}
