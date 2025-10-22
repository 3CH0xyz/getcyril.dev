"use client";

import { CODE_EXAMPLE } from "@/lib/constants";
import { useState } from "react";

export default function CodeExample() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CODE_EXAMPLE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            See It in <span className="text-primary-500">Action</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Real code, real integrations, real results. No mocks, no
            placeholders—just production-ready implementations.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm font-medium text-gray-400">
                  payment_example.py
                </span>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium transition-all hover:bg-primary-600"
              >
                {copied ? (
                  <>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Code */}
            <div className="overflow-x-auto p-6">
              <pre className="text-sm leading-relaxed">
                <code className="language-python">
                  <div className="space-y-1">
                    {CODE_EXAMPLE.split("\n").map((line, index) => (
                      <div key={index} className="flex">
                        <span className="mr-4 w-8 select-none text-right text-gray-600">
                          {index + 1}
                        </span>
                        <span
                          className={
                            line.includes("import")
                              ? "text-purple-400"
                              : line.includes("async def") ||
                                line.includes("await")
                              ? "text-pink-400"
                              : line.includes("#")
                              ? "text-gray-500"
                              : line.includes('"') || line.includes("'")
                              ? "text-green-400"
                              : "text-gray-300"
                          }
                        >
                          {line || " "}
                        </span>
                      </div>
                    ))}
                  </div>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
