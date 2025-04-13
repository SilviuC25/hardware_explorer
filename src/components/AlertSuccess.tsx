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
    <div
      role="alert"
      className="rounded-md border border-gray-300 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-800"
    >
      <div className="flex items-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-green-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <div className="flex-1">
          <strong className="font-medium text-gray-900 dark:text-white">{title}</strong>
          <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">{description}</p>

          <div className="mt-3">
            <button
              type="button"
              onClick={() => router.push(redirectPath)}
              className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
