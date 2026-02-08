import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function CTASection({
  title = "Ready to Transform Your Sustainability Journey?",
  description = "Connect with our team to discover how Green Earth X can support your certification and monitoring needs.",
  buttonText = "Contact Us"
}: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 to-green-600">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-white text-blue-600 text-base font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-lg"
        >
          {buttonText}
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
