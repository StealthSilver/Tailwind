import { Container } from "@/app/components/Container";
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "./components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
      {/* left and right lines should be relative to the full screen, not container */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none"></div>

      <Container className={""}>
        <Navbar />
        <Hero />
      </Container>

      {/* horizontal line + banner */}
      <div className="relative w-full mt-12">
        {" "}
        {/* added mt-12 for spacing */}
        <div className="h-px w-full absolute inset-x-0 bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <Image
            src="/banner.webp"
            alt="banner"
            width={1000}
            height={1000}
            className="rounded-2xl w-full object-cover object-left-top"
          />
        </div>
      </div>
    </div>
  );
}
