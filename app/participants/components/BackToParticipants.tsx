import Link from 'next/link';

export default function BackToParticipants({ className }: { className?: string }) {
  return (
    <div className={className ?? 'mt-16 w-1/6'}>
      <Link href="/#participants" className="flex items-center hover:text-[#28A040] space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-2xl"
          transform="scale(-1,1)"
        >
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm">Back to all participants</span>
      </Link>
    </div>
  );
}
