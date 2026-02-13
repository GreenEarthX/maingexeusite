import Link from 'next/link';

const highlights = [
  {
    icon: '/participants/consumer/discover.svg',
    alt: 'offtake',
    text: 'Smaller, standardized offtake agreements'
  },
  {
    icon: '/participants/goo.svg',
    alt: 'origin',
    text: 'Comprehensive Guarantees of Origin'
  },
  {
    icon: '/participants/dashboards.svg',
    alt: 'dashboards',
    text: 'Unified production and sales dashboards'
  }
];

const cards = [
  {
    title: 'Producers',
    description:
      'We can help maximize the feasibility, credibility, and value of production projects.',
    image: '/participants/producer.jpg',
    href: '/participants/producers'
  },
  {
    title: 'Consumers',
    description:
      'We can help find long-term commitments at optimal prices to secure supply.',
    image: '/participants/ship.jpg',
    href: '/participants/consumers'
  },
  {
    title: 'Traders & Market Makers',
    description:
      'We can enable hassle-free trading and provide insights in the spot and long term market.',
    image: '/participants/shanghai.jpg',
    href: '/participants/traders'
  },
  {
    title: 'Service Providers',
    description:
      'We can connect providers to transactions requiring specialized expertise.',
    image: '/participants/port.jpg',
    href: '/participants/partners'
  }
];

export default function ParticipantsOverview() {
  return (
    <section id="participants" className="pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="text-left pt-4 pb-8 text-lg font-bold">
          <span className="text-gray-700">
            Explore how GreenEarthX&apos;s platform will help your business in more detail:
          </span>
        </div>

        <div className="mt-4 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl shadow-md text-gray-600 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
            >
              <Link href={card.href} className="block">
                <div className="relative space-y-8 py-12 p-8">
                  <img src={card.image} alt={card.title} className="w-full h-auto" />

                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-gray-700 transition group-hover:text-[#28A040]">
                      {card.title}
                    </h5>
                    <p className="group-hover:text-[#28A040]">{card.description}</p>
                  </div>

                  <div className="flex items-center justify-between group-hover:text-[#28A040]">
                    <span className="text-sm">Learn more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
