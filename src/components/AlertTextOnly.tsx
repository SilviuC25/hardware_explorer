"use client";

export default function AlertTextOnly({ message }: { message: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-md mx-auto rounded-md border border-teal-600 bg-gray-800 p-4 shadow-xl">
        <p className="text-sm text-white">{message}</p>
      </div>
    </div>
  );
}
