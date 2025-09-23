import { Container } from "@/components/container";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="layout">
      <Container>
        <div className="left-line" />
        <div className="right-line" />
        <Navbar></Navbar>
        <Hero></Hero>
      </Container>
      <div className="hero-image-container">
        <div className="horizontal-line"></div>
        <img src="/hero-ui-v5.webp" alt="" className="hero-image" />
      </div>
    </div>
  );
}
