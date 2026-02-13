import Link from 'next/link';
import CTASection from '../../components/CTASection';

export default function PlantBuilderPage() {
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
                Plant Builder
              </h1>
              <p className="text-xl text-gray-700 font-semibold mb-3">
                Structure Your Project Before the Market Does
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Translate early-stage sustainable fuel concepts into a structured, machine-readable project
                representation.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#00A63E] text-white text-base font-semibold rounded-full hover:bg-[#009032] transition-colors"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-lg">
              <img
                src="/screenshots/plant_builder_screenshot.png"
                alt="Plant Builder interface"
                className="w-full h-auto max-h-[520px] object-cover"
              />
              <div className="px-6 py-4 border-t border-gray-200 bg-white">
                <p className="text-sm text-gray-600">
                  Plant diagram, process flow, configuration panels
                </p>
              </div>
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
                The Plant Builder is a project structuring tool that allows sustainable fuel developers to define
                how a plant is configured at a given point in time. It captures physical configuration, process
                flows, inputs, outputs, and operational boundaries in a standardized digital format.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why It Matters</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Most early-stage projects fail not because they are bad ideas, but because they are poorly
                structured. Unstructured project definitions block downstream evaluation, regulatory assessment,
                and comparability. The Plant Builder creates a clear, shared representation that downstream tools
                can rely on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What It Enables</h2>
          <ul className="space-y-3 text-gray-600 text-lg">
            <li>Structured definition of plant configuration and processes</li>
            <li>Clear representation of inputs, outputs, and system boundaries</li>
            <li>Generation of project snapshots for feasibility and compliance workflows</li>
            <li>A consistent foundation for plausibility and certification analysis</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How It Fits into GreenEarthX</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The Plant Builder is the structural root of the GreenEarthX platform. All downstream evaluations depend
            on understanding how the plant is defined. It feeds both the{' '}
            <Link href="/solutions/plausibility-check" className="text-blue-600 hover:text-blue-700 font-medium">
              Plausibility Check
            </Link>
            {' '}and the{' '}
            <Link href="/solutions/certification-tool" className="text-blue-600 hover:text-blue-700 font-medium">
              Certification Tool
            </Link>
            .
          </p>
        </div>
      </section>

      <CTASection
        title="Structure Your Project With Confidence"
        description="Define your plant clearly before engaging external reviewers or market participants."
        buttonText="Request a Demo"
      />
    </>
  );
}
