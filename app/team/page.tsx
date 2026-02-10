import path from "path";
import { promises as fs } from "fs";

import TeamMemberCard from "./TeamMemberCard";
import type { TeamMember } from "./types";

const DATA_PATH = path.join(process.cwd(), "app", "team", "team.json");

const getTeamMembers = async (): Promise<TeamMember[]> => {
  try {
    const file = await fs.readFile(DATA_PATH, "utf8");
    const data = JSON.parse(file);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();
  const team = teamMembers.filter(
    (member) => member.field_category === "Team"
  );
  const advisors = teamMembers.filter(
    (member) => member.field_category === "Advisors"
  );

  return (
    <div id="team" className="pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="text-center p-20">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Our Team
          </h2>
          <h3 className="pt-5 text-base text-gray-600 md:text-lg">
            GreenEarthX was founded by seasoned entrepreneurs with extensive
            experience in energy grids, telecom networks, cognitive artificial
            intelligence, and trading and exchange platforms. <br />
            <br /> We are passionate about the world we inhabit and leave behind.
          </h3>
        </div>

        <div className="py-5 grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {team.length > 0 ? (
            team.map((member, index) => (
              <TeamMemberCard
                key={`${member.title ?? "member"}-${index}`}
                member={member}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              Team profiles are being updated.
            </div>
          )}
        </div>

        <div className="text-center p-20">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Our Advisors
          </h2>
          <h3 className="pt-5 text-base text-gray-600 md:text-lg">
            We are fortunate to have industry veterans with deep expertise
            guiding us on how to make the greatest impact.
          </h3>
        </div>

        <div className="py-5 grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {advisors.length > 0 ? (
            advisors.map((member, index) => (
              <TeamMemberCard
                key={`${member.title ?? "advisor"}-${index}`}
                member={member}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              Advisor profiles are being updated.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
