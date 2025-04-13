"use client";

import { useRouter } from "next/navigation";

export default function AlertSuccess({
  title,
  description,
  buttonText,
  redirectPath,
}: {
  title: string;
  description: string;
  buttonText: string;
  redirectPath: string;
}) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-md mx-auto rounded-lg border border-teal-600 bg-gray-800 p-6 shadow-2xl">
        <div className="flex items-start gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-teal-400 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div className="flex-1">
            <strong className="text-white text-lg">{title}</strong>
            <p className="mt-1 text-sm text-gray-300">{description}</p>

            <div className="mt-4">
              <button
                type="button"
                onClick={() => router.push(redirectPath)}
                className="rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-500 transition hover:cursor-pointer"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
