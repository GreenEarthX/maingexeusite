import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../components/CTASection';

export default function GeoMapPage() {
  return (
    <>
      {/* Tool Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-600 font-medium text-sm uppercase tracking-wider mb-4 block">Solution</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                GeoMap Tool
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Gain comprehensive geographic intelligence with location-based visualization and monitoring
                capabilities. The GeoMap Tool provides spatial context to your sustainability operations, enabling
                informed decision-making based on asset locations and regional factors.
              </p>
              <a
                href="https://geomap.greenearthx.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#00A63E] text-white text-base font-semibold rounded-full hover:bg-[#009032] transition-colors"
              >
                Launch GeoMap
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Map Screenshot */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-lg">
              <Image
                src="/screenshots/geomap_screenshot.png"
                alt="GeoMap Tool Interface"
                width={2100}
                height={900}
                className="w-full h-auto max-h-[520px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Database Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-medium text-sm uppercase tracking-wider mb-3 block">Database</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore GEX Ecosystem Database
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Projects included in the database, organized by category for fast discovery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <Image
                src="/screenshots/geomap/production-plant.png"
                alt="Production plants"
                width={1200}
                height={900}
                className="h-44 w-full object-cover"
              />
              <div className="bg-[#1D4ED8] py-4 text-center text-white font-semibold">
                Production Plants
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <Image
                src="/screenshots/geomap/storage-plant.png"
                alt="Storage plants"
                width={1200}
                height={900}
                className="h-44 w-full object-cover"
              />
              <div className="bg-[#0F766E] py-4 text-center text-white font-semibold">
                Storage Plants
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <Image
                src="/screenshots/geomap/ccus-plant.png"
                alt="CCUS plants"
                width={1200}
                height={900}
                className="h-44 w-full object-cover"
              />
              <div className="bg-[#16A34A] py-4 text-center text-white font-semibold">
                CCUS Plants
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <Image
                src="/screenshots/geomap/port-plant.png"
                alt="Ports"
                width={1200}
                height={900}
                className="h-44 w-full object-cover"
              />
              <div className="bg-[#F97316] py-4 text-center text-white font-semibold">
                Ports
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the GeoMap Provides Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What the GeoMap Provides
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Essential geographic capabilities for comprehensive asset visibility and monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Location-based Visualization */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Location-based Visualization</h3>
              <p className="text-gray-600 leading-relaxed">
                View all your assets and operations on an interactive map interface. Understand geographic
                distribution and regional clustering at a glance.
              </p>
            </div>

            {/* Monitoring & Filtering */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring & Filtering</h3>
              <p className="text-gray-600 leading-relaxed">
                Filter and monitor assets by various criteria including status, type, and certification level.
                Keep track of operational parameters across locations.
              </p>
            </div>

            {/* Asset Overview */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Asset Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                Get a comprehensive view of your asset portfolio. Access detailed information about each
                location with contextual data and status indicators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Geographic Context Matters Section */}
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
                The GeoMap Tool transforms scattered location data into actionable geographic intelligence,
                giving you visibility into how your assets relate to each other and their environments.
              </p>
            </div>

            {/* Visual element */}
            <div className="hidden lg:block">
              <div className="relative">
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
        </div>
      </section>

      {/* Relationship to Other Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Part of an Integrated Platform
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The GeoMap Tool works seamlessly with our Certification Tool & Plant Builder for comprehensive visibility.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Certification Tool */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Certification Tool</h3>
                <p className="text-gray-500 text-sm">Design & certify plants</p>
              </div>

              {/* Connection arrows */}
              <div className="hidden md:flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <svg className="w-8 h-8 text-gray-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* GeoMap Tool */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">GeoMap Tool</h3>
                <p className="text-gray-500 text-sm">Visualize & monitor locations</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-600 max-w-2xl mx-auto">
                Plants designed in the Certification Tool are automatically mapped in GeoMap, providing
                instant geographic context for your certified assets. Monitor certification status
                across regions and identify geographic patterns in your sustainability portfolio.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/solutions/certification-tool"
              className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors"
            >
              Learn about Certification Tool & Plant Builder
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Gain Geographic Visibility?"
        description="Connect with us to explore how the GeoMap Tool can enhance your sustainability monitoring."
        buttonText="Contact Us"
      />
    </>
  );
}
