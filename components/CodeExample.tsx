"use client";

import { CODE_EXAMPLE } from "@/lib/constants";
import { useState } from "react";
import { Sparkles, Shield, Zap } from "lucide-react";

export default function CodeExample() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CODE_EXAMPLE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-dark-surface py-24 text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-dark-text font-semibold">
            See It in Action
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-dark-text-secondary">
            Real code, real integrations, real results. No mocks, no
            placeholders—just production-ready implementations.
          </p>
        </div>

        {/* Code Block - Glassmorphism */}
        <div className="mx-auto max-w-4xl">
          <div
            className="overflow-hidden rounded-xl border border-white/10 bg-white/10 shadow-2xl shadow-black/50"
            style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
          >
            {/* Terminal Header - Glass effect */}
            <div
              className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4"
              style={{ backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
            >
              <div className="flex items-center gap-3">
                {/* macOS traffic light dots */}
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-terminal-red"></div>
                  <div className="h-3 w-3 rounded-full bg-terminal-yellow"></div>
                  <div className="h-3 w-3 rounded-full bg-terminal-green"></div>
                </div>
                <span className="font-mono text-sm font-medium text-dark-text-secondary">
                  payment_example.py
                </span>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 rounded-md bg-cyril-orange px-4 py-2 text-sm font-medium text-white transition-all hover:bg-cyril-orange-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyril-orange"
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

            {/* Code Content - Fira Code font with syntax highlighting */}
            <div className="overflow-x-auto p-6">
              <pre className="font-mono text-sm leading-relaxed">
                <code>
                  <div className="space-y-1">
                    {CODE_EXAMPLE.split("\n").map((line, index) => (
                      <div key={index} className="flex">
                        <span className="mr-4 w-8 select-none text-right text-syntax-comment">
                          {index + 1}
                        </span>
                        <span
                          className={
                            line.includes("import") || line.includes("from")
                              ? "text-syntax-keyword"
                              : line.includes("async") ||
                                line.includes("await") ||
                                line.includes("def")
                              ? "text-syntax-keyword"
                              : line.includes("#")
                              ? "text-syntax-comment"
                              : line.includes('"') || line.includes("'")
                              ? "text-syntax-string"
                              : line.includes("print")
                              ? "text-syntax-function"
                              : "text-dark-text-secondary"
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

          {/* Code Features - Glassmorphism */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div
              className="rounded-xl border border-white/10 bg-white/10 p-4 text-center shadow-xl shadow-black/30 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
              style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
            >
              <div className="mb-2 flex justify-center">
                <Sparkles className="h-8 w-8 text-cyril-orange" />
              </div>
              <div className="text-sm font-medium text-dark-text">
                Real Implementation
              </div>
              <div className="mt-1 text-xs text-dark-text-secondary">
                No mocks or placeholders
              </div>
            </div>
            <div
              className="rounded-xl border border-white/10 bg-white/10 p-4 text-center shadow-xl shadow-black/30 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
              style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
            >
              <div className="mb-2 flex justify-center">
                <Shield className="h-8 w-8 text-success" />
              </div>
              <div className="text-sm font-medium text-dark-text">
                Production Ready
              </div>
              <div className="mt-1 text-xs text-dark-text-secondary">
                Full error handling
              </div>
            </div>
            <div
              className="rounded-xl border border-white/10 bg-white/10 p-4 text-center shadow-xl shadow-black/30 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
              style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
            >
              <div className="mb-2 flex justify-center">
                <Zap className="h-8 w-8 text-warning" />
              </div>
              <div className="text-sm font-medium text-dark-text">
                Type Safe
              </div>
              <div className="mt-1 text-xs text-dark-text-secondary">
                Async/await patterns
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
