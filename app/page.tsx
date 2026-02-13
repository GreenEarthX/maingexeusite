import Link from 'next/link';
import CTASection from './components/CTASection';
import ParticipantsOverview from './components/ParticipantsOverview';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80"
            alt="Lush green forest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] mb-6 drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
            Powering Sustainable
            <span className="gradient-text block">Industrial Transformation</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 mx-auto max-w-2xl leading-relaxed">
            Green Earth X provides intelligent tools for certification-ready plant design and geographic monitoring, enabling industries to align with evolving sustainability standards.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#00A63E] text-white text-base font-semibold rounded-full hover:bg-[#009032] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/50 text-white text-base font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem Space Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-500 font-medium text-sm uppercase tracking-wider mb-4 block">The Challenge</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Navigating the Complexity of Industrial Sustainability
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Industries today face increasing pressure to demonstrate sustainability compliance. Complex certification requirements, fragmented data sources, and evolving regulatory standards create significant barriers to transparent and credible sustainability reporting.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Fragmented certification workflows across multiple systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Limited visibility into asset locations and performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Evolving standards requiring continuous adaptation</span>
                </li>
              </ul>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full rounded-3xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                <img
                  src="/home/complexity-sustainability.png"
                  alt="Navigating the complexity of industrial sustainability"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-medium text-sm uppercase tracking-wider mb-4 block">Our Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrated Tools for Sustainable Operations
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A connected suite of solutions designed to move projects from structure to compliance, market readiness, and intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certification Tool Card */}
            <div className="card-hover group relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Certification Tool
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Assess eligibility, compliance readiness, and regulatory positioning with confidence.
              </p>
              <Link
                href="/solutions/certification-tool"
                className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0">
                <div className="absolute inset-0 bg-gradient-to-l from-white/0 via-white/60 to-white" />
                <img
                  src="/screenshots/certification_tool.png"
                  alt="Certification Tool preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Ecosystem Navigator Map Card */}
            <div className="card-hover group relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ecosystem Navigator Map
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Visualize sustainable fuel projects, assets, and infrastructure in real-world context.
              </p>
              <Link
                href="/solutions/ecosystem-navigator-map"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0">
                <div className="absolute inset-0 bg-gradient-to-l from-white/0 via-white/60 to-white" />
                <img
                  src="/screenshots/geomap_screenshot.png"
                  alt="Ecosystem Navigator Map preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Plant Builder Card */}
            <div className="card-hover group relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Plant Builder
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Structure plant configuration, processes, inputs, outputs, and boundaries in a standardized format.
              </p>
              <Link
                href="/solutions/plant-builder"
                className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0">
                <div className="absolute inset-0 bg-gradient-to-l from-white/0 via-white/60 to-white" />
                <img
                  src="/screenshots/plant_builder_screenshot.png"
                  alt="Plant Builder preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Plausibility Check Card */}
            <div className="card-hover group relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Plausibility Check
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Validate internal consistency across physical, commercial, and documentation layers.
              </p>
              <Link
                href="/solutions/plausibility-check"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0">
                <div className="absolute inset-0 bg-gradient-to-l from-white/0 via-white/60 to-white" />
                <img
                  src="/screenshots/plausibility-result.png"
                  alt="Plausibility Check preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Marketplace Card */}
            <div className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Marketplace
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A future trading layer that connects credible projects with verified offtakers and suppliers.
              </p>
              <Link
                href="/solutions/marketplace"
                className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Market Intelligence Card */}
            <div className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3v18m6-10v10m-12-7v7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                GEX Market Intelligence
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Turn ecosystem data into insights, trends, and strategic signals.
              </p>
              <Link
                href="/solutions/market-intelligence"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ParticipantsOverview />

      {/* Why Green Earth X Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-medium text-sm uppercase tracking-wider mb-4 block">Why Green Earth X</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Industrial Reality
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our platform is designed to integrate seamlessly with your existing workflows while providing the structure needed for credible sustainability reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Validation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Methodologies continuously refined and validated by domain experts to ensure alignment with evolving standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrated Approach</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seamlessly connects plant design, certification, and geographic monitoring in one unified platform.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Transparency</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complete traceability and visibility into your sustainability data and certification workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
