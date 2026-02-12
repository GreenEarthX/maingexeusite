import Link from 'next/link';
import CTASection from '../../components/CTASection';

export default function EcosystemNavigatorMapPage() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-600 font-medium text-sm uppercase tracking-wider mb-4 block">
                Solution
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ecosystem Navigator Map
              </h1>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">What It Is</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Ecosystem Navigator Map is a geospatial platform that visualizes sustainable fuel projects,
                assets, and infrastructure in their real-world context. It brings together location, technology
                type, declared capacity, project status, and ownership context into a single, navigable ecosystem
                view.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#00A63E] text-white text-base font-semibold rounded-full hover:bg-[#009032] transition-colors"
                >
                  Request a Demo
                </Link>
                <a
                  href="https://geomap.greenearthx.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 border border-gray-200 text-gray-700 text-base font-semibold rounded-full hover:bg-gray-50 transition-colors"
                >
                  Launch Ecosystem Navigator
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-lg">
              <img
                src="/screenshots/geomap_screenshot.png"
                alt="Ecosystem Navigator Map view"
                className="w-full h-auto max-h-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-medium text-sm uppercase tracking-wider mb-3 block">
              Database
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore GEX Ecosystem Database
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Projects included in the database, organized by category for fast discovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <img
                src="/screenshots/geomap/production-plant.png"
                alt="Production plants"
                className="h-44 w-full object-cover"
              />
              <div className="bg-[#1D4ED8] py-4 text-center text-white font-semibold">
                Production Plants
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <img
                src="/screenshots/geomap/storage-plant.png"
                alt="Storage plants"
                className="h-44 w-full object-cover"
              />
              <div className="bg-[#0F766E] py-4 text-center text-white font-semibold">
                Storage Plants
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <img
                src="/screenshots/geomap/ccus-plant.png"
                alt="CCUS plants"
                className="h-44 w-full object-cover"
              />
              <div className="bg-[#16A34A] py-4 text-center text-white font-semibold">
                CCUS Plants
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <img
                src="/screenshots/geomap/port-plant.png"
                alt="Ports"
                className="h-44 w-full object-cover"
              />
              <div className="bg-[#F97316] py-4 text-center text-white font-semibold">
                Ports
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why It Matters</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sustainable fuel markets are fragmented, opaque, and geographically constrained. Without a shared
                spatial reference, projects remain difficult to compare, verify, and contextualize. The Ecosystem
                Navigator Map transforms scattered data into a structured, discoverable ecosystem layer that
                supports transparency and informed decision-making.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What It Enables</h2>
              <ul className="space-y-3 text-gray-600 text-lg">
                <li>Geographic discovery of sustainable fuel projects and assets</li>
                <li>Structured visibility into project status, technology, and capacity</li>
                <li>Early ecosystem orientation for developers, partners, and stakeholders</li>
                <li>A shared spatial reference layer for onboarding and verification workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-medium text-sm uppercase tracking-wider mb-3 block">
              Ecosystem Layers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Filters, Detail, Verification
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover projects by sector, geography, end use, and status, then drill into verified details.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-lg">
              <img
                src="/screenshots/geomap/ecosystem-filter.png"
                alt="Ecosystem filters by sector, country, end use, and status"
                className="w-full h-64 object-cover"
              />
              <div className="px-6 py-4 border-t border-gray-200 bg-white">
                <p className="text-sm font-semibold text-gray-900">Filters</p>
                <p className="text-sm text-gray-600">
                  Sector, country, end use, and project status.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-lg">
              <img
                src="/screenshots/geomap/ecosystem-pin.png"
                alt="Project pin details"
                className="w-full h-64 object-cover"
              />
              <div className="px-6 py-4 border-t border-gray-200 bg-white">
                <p className="text-sm font-semibold text-gray-900">Project Details</p>
                <p className="text-sm text-gray-600">
                  Each pin opens structured project context.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-lg">
              <img
                src="/screenshots/geomap/ecosystem-project-verify.png"
                alt="Project verification view"
                className="w-full h-64 object-cover"
              />
              <div className="px-6 py-4 border-t border-gray-200 bg-white">
                <p className="text-sm font-semibold text-gray-900">Verification</p>
                <p className="text-sm text-gray-600">
                  Clear signals for verified project states.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-500 font-medium text-sm uppercase tracking-wider mb-4 block">The Value</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Geographic Context Matters
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Understanding the spatial dimension of your operations is essential for effective sustainability
                management. Geographic context enables better planning, regional compliance alignment, and
                informed strategic decisions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Ecosystem Navigator Map transforms scattered location data into actionable geographic intelligence,
                giving you visibility into how your assets relate to each other and their environments.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative w-full aspect-[16/9] rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-sm">
                <img
                  src="/svgs/world-map.svg"
                  alt="World map"
                  className="absolute inset-0 h-full w-full object-contain opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-emerald-50/40 to-emerald-100/40" />
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(6,95,70,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,95,70,0.2)_1px,transparent_1px)] [background-size:64px_64px]" />
                <div className="absolute left-[20%] top-[32%] flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#00A63E] ring-4 ring-[#00A63E]/25" />
                  <span className="text-xs font-semibold text-gray-700 bg-white/85 px-2 py-1 rounded-full border border-white/70">
                    Production
                  </span>
                </div>
                <div className="absolute left-[49%] top-[27%] flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-emerald-200" />
                  <span className="text-xs font-semibold text-gray-700 bg-white/85 px-2 py-1 rounded-full border border-white/70">
                    CCUS
                  </span>
                </div>
                <div className="absolute left-[60%] top-[48%] flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500 ring-4 ring-blue-200" />
                  <span className="text-xs font-semibold text-gray-700 bg-white/85 px-2 py-1 rounded-full border border-white/70">
                    Ports
                  </span>
                </div>
                <div className="absolute left-[71%] top-[32%] flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-600 ring-4 ring-emerald-200" />
                  <span className="text-xs font-semibold text-gray-700 bg-white/85 px-2 py-1 rounded-full border border-white/70">
                    Storage
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How It Fits into GreenEarthX</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The Ecosystem Navigator Map acts as the entry and context layer of the GreenEarthX platform. It
            supports downstream tools by providing geographic and ecosystem context to the{' '}
            <Link href="/solutions/plant-builder" className="text-blue-600 hover:text-blue-700 font-medium">
              Plant Builder
            </Link>
            , supporting verification and onboarding workflows, and laying the foundation for future market
            intelligence and orchestration.
          </p>
        </div>
      </section>

      <CTASection
        title="Explore the Ecosystem"
        description="See how the Ecosystem Navigator Map brings transparency and structure to sustainable fuel markets."
        buttonText="Request a Demo"
      />
    </>
  );
}
