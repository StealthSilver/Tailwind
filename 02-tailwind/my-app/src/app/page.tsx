import { Container } from "@/app/components/Container";
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
      <div className="max-w-7xl mx-auto absolute inset-0 h-full w-full">
        {/* left and right lines */}
        <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none"></div>
      </div>
      <Container className="">
        <Navbar></Navbar>
        <Hero></Hero>
      </Container>

      {/* horizontail line */}

      <div className="relativ w-full">
        <div className="h-px w-full absolute inset-x-0 bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
