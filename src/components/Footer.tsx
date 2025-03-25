export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 h-16 flex items-center">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 w-full flex justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Hardware Explorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
