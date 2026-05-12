import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Trades } from "@/components/site/Trades";
import { WhyOnfire } from "@/components/site/WhyOnfire";
import { Process } from "@/components/site/Process";
import { Testimonial } from "@/components/site/Testimonial";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE =
  "Onfire Staffing & Trades — Pipe Welders, Fitters & Structural Tradesmen for Texas Industrial Projects";
const DESCRIPTION =
  "Onfire deploys vetted pipe welders, pipe fitters, and structural fitters to refineries, petrochem plants, and oilfield projects across the Gulf Coast.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-charcoal text-bone">
      <Header />
      <Hero />
      <Stats />
      <Trades />
      <WhyOnfire />
      <Process />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
