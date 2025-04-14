"use client";

import { useState } from "react";

export default function AlertPassword({
  onSubmit,
  onCancel,
}: {
  onSubmit: (password: string) => void;
  onCancel: () => void;
}) {
  const [inputPassword, setInputPassword] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-md mx-auto rounded-md border border-teal-600 bg-gray-800 p-4 shadow-xl">
        <h2 className="text-lg font-semibold text-white mb-2">Enter password</h2>
        <p className="text-sm text-gray-300 mb-4">You need a password to publish a blog.</p>
        <input
          type="password"
          className="w-full p-2 rounded bg-gray-900 text-white border border-transparent focus:border-teal-600 focus:outline-none transition mb-4"
          placeholder="Enter password..."
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-500"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-3 py-1 bg-teal-600 text-white rounded hover:bg-teal-500"
            onClick={() => onSubmit(inputPassword)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
