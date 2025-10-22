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
    <section className="bg-dark-base py-20 text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            See It in Action
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Real code, real integrations, real results. No mocks, no
            placeholders—just production-ready implementations.
          </p>
        </div>

        {/* Code Block */}
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-lg border border-dark-slate bg-dark-charcoal shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-dark-slate bg-dark-base px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-error"></div>
                  <div className="h-3 w-3 rounded-full bg-warning"></div>
                  <div className="h-3 w-3 rounded-full bg-success"></div>
                </div>
                <span className="font-mono text-sm font-medium text-gray-400">
                  payment_example.py
                </span>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 rounded-md bg-cyril-teal px-4 py-2 text-sm font-medium transition-all hover:bg-cyril-teal/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyril-teal"
                aria-label={copied ? "Copied to clipboard" : "Copy code"}
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

            {/* Code Content */}
            <div className="overflow-x-auto p-6">
              <pre className="font-mono text-sm leading-relaxed">
                <code>
                  <div className="space-y-1">
                    {CODE_EXAMPLE.split("\n").map((line, index) => (
                      <div key={index} className="flex">
                        <span className="mr-4 w-8 select-none text-right text-gray-600">
                          {index + 1}
                        </span>
                        <span
                          className={
                            line.includes("import") || line.includes("from")
                              ? "text-agent-documenter"
                              : line.includes("async") ||
                                line.includes("await") ||
                                line.includes("def")
                              ? "text-agent-implementer"
                              : line.includes("#")
                              ? "text-gray-500"
                              : line.includes('"') || line.includes("'")
                              ? "text-success"
                              : line.includes("print") || line.includes("f")
                              ? "text-agent-tester"
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

          {/* Code Features */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-dark-slate bg-dark-charcoal p-4 text-center">
              <div className="mb-2 text-2xl">✨</div>
              <div className="text-sm font-medium text-gray-300">
                Real Implementation
              </div>
              <div className="mt-1 text-xs text-gray-500">
                No mocks or placeholders
              </div>
            </div>
            <div className="rounded-lg border border-dark-slate bg-dark-charcoal p-4 text-center">
              <div className="mb-2 text-2xl">🔐</div>
              <div className="text-sm font-medium text-gray-300">
                Production Ready
              </div>
              <div className="mt-1 text-xs text-gray-500">
                Full error handling
              </div>
            </div>
            <div className="rounded-lg border border-dark-slate bg-dark-charcoal p-4 text-center">
              <div className="mb-2 text-2xl">⚡</div>
              <div className="text-sm font-medium text-gray-300">
                Type Safe
              </div>
              <div className="mt-1 text-xs text-gray-500">
                Async/await patterns
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
