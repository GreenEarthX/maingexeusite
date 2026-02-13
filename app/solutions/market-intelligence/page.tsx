import CTASection from '../../components/CTASection';

export default function MarketIntelligencePage() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-600 font-medium text-sm uppercase tracking-wider mb-4 block">
                Solution
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                GEX Market Intelligence
              </h1>
              <p className="text-xl text-gray-700 font-semibold mb-3">
                Insight That Orchestrates the Ecosystem
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Transform project and market data into actionable ecosystem intelligence.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#00A63E] text-white text-base font-semibold rounded-full hover:bg-[#009032] transition-colors"
                >
                  Request a Demo
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-blue-50 p-8 shadow-lg">
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">Visual Section</p>
              <p className="text-gray-600">Analytics views, trends, ecosystem signals</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What It Is</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                GEX Market Intelligence aggregates insights across the GreenEarthX platform to identify patterns,
                trends, and opportunities within the sustainable fuel ecosystem.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why It Matters</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                As markets scale, insight becomes as critical as infrastructure. Market Intelligence supports
                strategic decisions, ecosystem optimization, and future orchestration by learning from aggregated,
                structured data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How It Fits into GreenEarthX</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Market Intelligence operates as a horizontal layer, informing decisions without gating access or
            asserting authority. It enables the long-term orchestration of the ecosystem.
          </p>
        </div>
      </section>

      <CTASection
        title="Unlock Ecosystem Intelligence"
        description="Turn structured data into insights that guide market strategy and collaboration."
        buttonText="Request a Demo"
      />
    </>
  );
}
