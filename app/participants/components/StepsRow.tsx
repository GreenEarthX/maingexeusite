type Step = {
  icon: string;
  alt: string;
  title: string;
  description: string;
  accentColor?: string;
};

type ArrowVariant = 'single' | 'double';

type StepsRowProps = {
  steps: Step[];
  arrowVariants?: ArrowVariant[];
};

const Arrow = ({ variant }: { variant: ArrowVariant }) => {
  if (variant === 'double') {
    return (
      <div className="hidden md:flex items-center justify-center text-gray-400 mx-4 pt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
          transform="matrix(-1,0,0,1,0,0)"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center justify-center text-gray-400 mx-4 pt-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

export default function StepsRow({ steps, arrowVariants }: StepsRowProps) {
  return (
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:pt-10 md:items-start md:justify-between">
      {steps.map((step, index) => {
        const variant = arrowVariants?.[index] ?? 'single';

        return (
          <div key={step.title} className="flex items-stretch">
            <div className="flex flex-col items-center group flex-1">
              <div className="flex flex-col items-center w-full space-y-4 transition-transform group-hover:-translate-y-6">
                <img src={step.icon} alt={step.alt} width={80} height={80} />
                <div
                  className="text-center w-7/12"
                  style={{ color: step.accentColor ?? '#17598d' }}
                >
                  {step.title}
                </div>
              </div>
              <div className="flex items-center justify-center text-center text-gray-700 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                {step.description}
              </div>
            </div>
            {index < steps.length - 1 ? <Arrow variant={variant} /> : null}
          </div>
        );
      })}
    </div>
  );
}
