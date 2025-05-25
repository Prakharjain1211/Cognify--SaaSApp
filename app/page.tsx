import { Button } from "@/components/ui/button";
import React from "react";
import CompanionCard from "@/components/CompanionCard";
import Cta from "@/components/CTA";
import CompanionsList from "@/components/CompanionsList";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Exporer"
          topic="Neutral Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Neura the Brainy Exporer"
          topic="Neutral Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="789"
          name="Neura the Brainy Exporer"
          topic="Neutral Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
