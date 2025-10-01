import Image from "next/image";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="flex h-screen justify-center bg-neutral-900">
      <Hero />
    </div>
  );
}
