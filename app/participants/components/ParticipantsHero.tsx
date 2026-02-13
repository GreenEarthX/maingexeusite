import Link from 'next/link';

type ParticipantsHeroProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  ctaTextColor: string;
  backgroundColor: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ParticipantsHero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  ctaTextColor,
  backgroundColor,
  imageSrc,
  imageAlt
}: ParticipantsHeroProps) {
  return (
    <div className="pt-24">
      <div className="relative" style={{ backgroundColor }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between space-x-0 md:space-x-3 lg:space-x-8">
            <div className="flex-1 text-center lg:text-left mt-6 md:mt-0 space-y-6 py-6">
              <h1 className="text-white font-bold text-xl md:text-2xl xl:text-3xl">
                {title}
              </h1>
              <p className="mt-3 text-white">{subtitle}</p>
              <Link
                href={ctaHref}
                className="relative flex h-12 w-max m-auto lg:m-0 items-center justify-between px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span
                  className="relative text-base font-semibold text-center"
                  style={{ color: ctaTextColor }}
                >
                  {ctaText}
                </span>
              </Link>
            </div>

            <div className="flex">
              <img
                src={imageSrc}
                alt={imageAlt}
                width={350}
                className="block w-full mx-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
