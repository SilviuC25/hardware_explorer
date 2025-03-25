type QuestionItemProps = {
  question: string;
  answer: string;
};

export default function QuestionItem({ question, answer }: QuestionItemProps) {
  // Împărțim răspunsul în linii separate și le transformăm într-o listă
  const answerList = answer.split('\n');

  return (
    <div className="space-y-4">
      <details className="group border-s-4 border-teal-600 bg-gray-800 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-300 dark:text-white">{question}</h2>

          <span className="shrink-0 rounded-full bg-gray-900 sm:p-3 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 shadow-sm transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
								d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
								clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <ul className="mt-4 leading-relaxed text-gray-300 dark:text-gray-200">
          {answerList.map((item, index) => (
            <li key={index} className="ml-4 list-disc">
              {item}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
