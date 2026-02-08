import Link from 'next/link';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Powering Sustainable
                <span className="gradient-text block">Industrial Transformation</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Green Earth X provides intelligent tools for certification-ready plant design and geographic monitoring, enabling industries to align with evolving sustainability standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white text-base font-semibold rounded-full hover:bg-blue-600 transition-colors"
                >
                  Contact Us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/solutions/certification-tool"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-gray-700 text-base font-medium rounded-full hover:bg-gray-50 transition-colors"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              {/* Abstract sustainability visual placeholder */}
              <div className="relative">
                <div className="w-full aspect-square rounded-3xl gradient-bg border border-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-green-500/20 flex items-center justify-center">
                      <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">Sustainability Visualization</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-blue-500/10"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-green-500/10"></div>
              </div>
            </div>
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
              {/* Abstract diagram placeholder */}
              <div className="w-full max-w-md aspect-square rounded-3xl gradient-bg border border-gray-200 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-gray-200/50 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">From Complexity to Clarity</p>
                </div>
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
              Two complementary solutions designed to streamline your sustainability journey from design to monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Certification Tool Card */}
            <div className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Certification Tool & Plant Builder
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Design sustainable plant configurations and navigate certification workflows with structured, expert-validated methodologies.
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
            </div>

            {/* GeoMap Tool Card */}
            <div className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                GeoMap Tool
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Gain geographic intelligence with location-based visualization, monitoring, and asset overview capabilities.
              </p>
              <Link
                href="/solutions/geomap"
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
