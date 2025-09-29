import { Container } from "@/app/components/Container";
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "./components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
      {/* FULL SCREEN VERTICAL LINES */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute left-0 inset-y-0 w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent z-10"></div>
        <div className="absolute right-0 inset-y-0 w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent z-10"></div>
      </div>

      <Container className={""}>
        <Navbar />
        <Hero />
      </Container>

      {/* horizontal line + banner */}
      <div className="relative w-full mt-12">
        <div className="h-px w-full absolute inset-x-0 bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto p-4 relative z-0">
          <Image
            src="/banner.webp"
            alt="banner"
            width={1000}
            height={1000}
            className="rounded-xl w-full object-cover object-left-top border-neutral-200 shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
