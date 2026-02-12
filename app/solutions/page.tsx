import Link from 'next/link';

const solutions = [
  {
    title: 'Ecosystem Navigator Map',
    description:
      'A geospatial platform that visualizes sustainable fuel projects, assets, and infrastructure in their real-world context.',
    href: '/solutions/ecosystem-navigator-map'
  },
  {
    title: 'Plant Builder',
    description:
      'Structure project configuration, process flows, inputs, outputs, and operational boundaries in a standardized format.',
    href: '/solutions/plant-builder'
  },
  {
    title: 'Plausibility Check',
    description:
      'Validate internal consistency across energy, commercial, and documentation layers before external review.',
    href: '/solutions/plausibility-check'
  },
  {
    title: 'Certification Tool',
    description:
      'Assess eligibility, compliance readiness, and regulatory positioning with structured insight.',
    href: '/solutions/certification-tool'
  },
  {
    title: 'Marketplace',
    description:
      'A future trading layer that connects credible projects with verified offtakers and suppliers.',
    href: '/solutions/marketplace'
  },
  {
    title: 'GEX Market Intelligence',
    description:
      'Aggregate signals across the ecosystem to surface trends, patterns, and strategic opportunities.',
    href: '/solutions/market-intelligence'
  }
];

export default function SolutionsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-4 block">
            Solutions
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The GreenEarthX Platform
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A structured pathway from ecosystem visibility to compliance, market readiness, and intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div key={solution.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
              <Link
                href={solution.href}
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
