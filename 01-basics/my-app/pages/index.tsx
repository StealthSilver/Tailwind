import { Container } from "@/components/container";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="layout">
      <Container>
        <Navbar></Navbar>
        <Hero></Hero>
      </Container>
    </div>
  );
}
