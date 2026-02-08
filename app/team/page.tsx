import CTASection from '../components/CTASection';

// Team member data - can be updated with real team members
const teamMembers = [
  {
    name: "Team Member",
    role: "Chief Executive Officer",
    description: "Leading company vision and strategic direction.",
    initials: "TM"
  },
  {
    name: "Team Member",
    role: "Chief Technology Officer",
    description: "Driving technical innovation and platform architecture.",
    initials: "TM"
  },
  {
    name: "Team Member",
    role: "Head of Sustainability",
    description: "Ensuring alignment with industry standards and best practices.",
    initials: "TM"
  },
  {
    name: "Team Member",
    role: "Lead Product Designer",
    description: "Crafting intuitive user experiences for complex workflows.",
    initials: "TM"
  },
  {
    name: "Team Member",
    role: "Senior Engineer",
    description: "Building robust and scalable platform infrastructure.",
    initials: "TM"
  },
  {
    name: "Team Member",
    role: "Sustainability Analyst",
    description: "Validating methodologies and certification workflows.",
    initials: "TM"
  }
];

export default function TeamPage() {
  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-blue-500 font-medium text-sm uppercase tracking-wider mb-4 block">Our Team</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The People Behind Green Earth X
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              A diverse team of experts in sustainability, technology, and design working together
              to make industrial sustainability accessible and credible.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-12 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center mb-5">
                  <span className="text-2xl font-semibold text-gray-400">{member.initials}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-500 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work With Us?"
        description="Connect with our team to explore partnership and collaboration opportunities."
      />
    </>
  );
}
