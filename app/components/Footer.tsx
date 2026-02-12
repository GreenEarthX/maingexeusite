import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/gex-logo.png"
                alt="Green Earth X"
                width={140}
                height={35}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Empowering sustainable industrial transformation through structured project data, compliance readiness, and ecosystem intelligence.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4 text-sm">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/ecosystem-navigator-map" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                  Ecosystem Navigator Map
                </Link>
              </li>
              <li>
                <Link href="/solutions/plant-builder" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                  Plant Builder
                </Link>
              </li>
              <li>
                <Link href="/solutions/plausibility-check" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                  Plausibility Check
                </Link>
              </li>
              <li>
                <Link href="/solutions/certification-tool" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                  Certification Tool
                </Link>
              </li>
              <li>
                <Link href="/solutions/marketplace" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/solutions/market-intelligence" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                  Market Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col gap-4 items-center md:flex-row md:justify-between">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Green Earth X. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-400">Follow</span>
            <a
              href="https://x.com/GreenEarthXInc"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Green Earth X on X"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/company/greenearthx/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Green Earth X on LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
