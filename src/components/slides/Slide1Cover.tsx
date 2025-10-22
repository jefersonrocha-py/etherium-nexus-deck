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
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
