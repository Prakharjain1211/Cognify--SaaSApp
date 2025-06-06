import CompanionCard from "@/components/CompanionCard";
import Cta from "@/components/CTA";
import CompanionsList from "@/components/CompanionsList";
import { getSubjectColor } from "@/lib/utils";
import { getRecentSessions } from "@/lib/actions/companion.actions";
import { getAllCompanions } from "@/lib/actions/companion.actions";


const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  console.log("companions:", companions);
  const recentSessionsCompanions = await getRecentSessions(10);

return (
  <main>
    <h1>Popular Companions</h1>

      <section className="home-section">
          {companions.map((companion) => (
              <CompanionCard
                  key={companion.id}
                  {...companion}
                  color={getSubjectColor(companion.subject)}
              />
          ))}

      </section>

      <section className="home-section">
          <CompanionsList
              title="Recently completed sessions"
              companions={recentSessionsCompanions}
              classNames="w-2/3 max-lg:w-full"
          />
          <Cta />
      </section>
  </main>
)
}


export default Page;
