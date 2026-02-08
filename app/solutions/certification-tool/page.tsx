import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../components/CTASection';

export default function CertificationToolPage() {
  return (
    <>
      {/* Solution Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-500 font-medium text-sm uppercase tracking-wider mb-4 block">Solution</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Certification Tool & Plant Builder
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                A unified solution to design, structure, and certify sustainable industrial plants with full
                transparency and traceability. Streamline your path to compliance with structured, expert-validated
                methodologies aligned to evolving industry standards.
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

            {/* Hero Screenshot - Certification Tool */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-lg">
              <Image
                src="/screenshots/certification_tool.png"
                alt="Certification Tool Interface"
                width={1920}
                height={1080}
                className="w-full h-auto max-h-[520px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What This Solution Enables Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What This Solution Enables
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive capabilities to support your sustainability certification journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Structured Plant Design */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Structured Plant Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Design and configure sustainable plant architectures with guided, structured workflows.
              </p>
            </div>

            {/* Certification-Ready Workflows */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certification-Ready Workflows</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Navigate complex certification requirements with pre-built, validated workflow templates.
              </p>
            </div>

            {/* Sustainability Alignment */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainability Alignment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ensure your designs align with current sustainability standards and best practices.
              </p>
            </div>

            {/* Transparency & Traceability */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparency & Traceability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Full audit trails and documentation for complete traceability of your certification journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Level Workflow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A streamlined workflow from initial design to certification readiness.
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-green-300"></div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4 relative z-10 border-4 border-white shadow-sm">
                  <span className="text-2xl font-bold text-blue-500">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Define Requirements</h3>
                <p className="text-gray-500 text-sm">Specify your plant configuration and certification goals</p>
              </div>

              {/* Step 2 */}
              <div className="text-center relative">
                <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4 relative z-10 border-4 border-white shadow-sm">
                  <span className="text-2xl font-bold text-blue-500">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Design Plant</h3>
                <p className="text-gray-500 text-sm">Build your plant architecture using structured templates</p>
              </div>

              {/* Step 3 */}
              <div className="text-center relative">
                <div className="w-24 h-24 mx-auto rounded-full bg-blue-200 flex items-center justify-center mb-4 relative z-10 border-4 border-white shadow-sm">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Validate Configuration</h3>
                <p className="text-gray-500 text-sm">Automated checks against certification criteria</p>
              </div>

              {/* Step 4 */}
              <div className="text-center relative">
                <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4 relative z-10 border-4 border-white shadow-sm">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Generate Documentation</h3>
                <p className="text-gray-500 text-sm">Create certification-ready reports and evidence</p>
              </div>

              {/* Step 5 */}
              <div className="text-center relative">
                <div className="w-24 h-24 mx-auto rounded-full bg-green-200 flex items-center justify-center mb-4 relative z-10 border-4 border-white shadow-sm">
                  <span className="text-2xl font-bold text-green-700">5</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Submit & Track</h3>
                <p className="text-gray-500 text-sm">Monitor certification progress and approvals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Refinement Note */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Continuously Refined by Experts</h3>
              <p className="text-gray-600 leading-relaxed">
                The structure and workflows are continuously refined and validated by our domain experts
                to align with evolving standards and industry needs. This ensures your certification
                approach remains current and credible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Screenshot Section - Plant Builder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-600 font-medium text-sm uppercase tracking-wider mb-4 block">Plant Builder</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Design with Confidence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The Plant Builder provides an intuitive interface for configuring sustainable plant architectures.
                Every component is mapped to certification requirements, ensuring your designs are aligned from the start.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Component-based plant configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Real-time validation against standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Exportable documentation for audits</span>
                </li>
              </ul>
            </div>

            {/* Plant Builder Screenshot */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-lg">
              <Image
                src="/screenshots/plant_builder_screenshot.png"
                alt="Plant Builder Interface"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plausibility Check Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-lg">
              <Image
                src="/screenshots/plausibility_screenshot.png"
                alt="Plausibility Check Interface"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-green-600 font-medium text-sm uppercase tracking-wider mb-4 block">Plausibility Check</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Validate Documents with Confidence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A fast Python microservice that validates document consistency across PoS, PPA,
                Term Sheet, and Invoice documents. It delivers compliance scores, verification
                seals, and detailed pass/fail reports before NFT minting.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Validates data consistency across multiple documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Checks date ranges, party names, and quantities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Generates compliance scores and verification seals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Returns detailed pass/fail reports in under 500ms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Streamline Your Certification Process?"
        description="Get in touch to learn how the Certification Tool & Plant Builder can accelerate your sustainability journey."
        buttonText="Request a Demo"
      />
    </>
  );
}
