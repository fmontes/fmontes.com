import { StoryShell } from "./components/StoryShell";
import { Beliefs } from "./components/scenes/Beliefs";
import { Epilogue } from "./components/scenes/Epilogue";
import { Hero } from "./components/scenes/Hero";
import { Interstitial } from "./components/scenes/Interstitial";
import { Intro } from "./components/scenes/Intro";
import { Kicker } from "./components/scenes/Kicker";
import { Manifesto } from "./components/scenes/Manifesto";
import { Projects } from "./components/scenes/Projects";

export default function Home() {
  return (
    <main className="w-full text-ink">
      <StoryShell>
        <Hero />
        <Interstitial />
        <Intro />
        <Beliefs />
        <Projects />
        <Manifesto />
        <Kicker />
        <Epilogue />
      </StoryShell>
    </main>
  );
}
