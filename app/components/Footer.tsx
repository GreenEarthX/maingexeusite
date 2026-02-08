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
              Empowering sustainable industrial transformation through intelligent certification and geographic insights.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4 text-sm">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/certification-tool" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                  Certification Tool
                </Link>
              </li>
              <li>
                <Link href="/solutions/certification-tool" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                  Plant Builder
                </Link>
              </li>
              <li>
                <Link href="/solutions/geomap" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                  GeoMap Tool
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

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Green Earth X. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
