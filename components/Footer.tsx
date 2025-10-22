import { SITE_CONFIG } from "@/lib/constants";
import { Bot } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-border bg-dark-bg py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Column */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyril-orange text-xl font-bold text-white">
                C
              </div>
              <span className="text-xl font-semibold text-dark-text">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm font-medium text-dark-text-secondary">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-2 text-xs text-dark-text-secondary">
              Built with care by{" "}
              <a
                href={SITE_CONFIG.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyril-orange hover:text-cyril-orange-light hover:underline"
              >
                {SITE_CONFIG.company}
              </a>
            </p>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="mb-4 font-semibold text-dark-text">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text-secondary transition-colors hover:text-cyril-orange"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text-secondary transition-colors hover:text-cyril-orange"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href={`${SITE_CONFIG.github}/blob/main/CYRIL_DESIGN_BIBLE.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text-secondary transition-colors hover:text-cyril-orange"
                >
                  Design Bible
                </a>
              </li>
              <li>
                <a
                  href={`${SITE_CONFIG.github}/blob/main/CYRIL_LOOKBOOK.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text-secondary transition-colors hover:text-cyril-orange"
                >
                  Visual Lookbook
                </a>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="mb-4 font-semibold text-dark-text">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`${SITE_CONFIG.github}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text-secondary transition-colors hover:text-cyril-orange"
                >
                  Report an Issue
                </a>
              </li>
              <li>
                <a
                  href={`${SITE_CONFIG.github}/discussions`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text-secondary transition-colors hover:text-cyril-orange"
                >
                  Discussions
                </a>
              </li>
              <li>
                <a
                  href={`${SITE_CONFIG.github}/blob/main/LICENSE`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text-secondary transition-colors hover:text-cyril-orange"
                >
                  MIT License
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text-secondary transition-colors hover:text-cyril-orange"
                >
                  3CH0 Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-dark-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-dark-text-secondary">
              © {currentYear} {SITE_CONFIG.company}. All rights reserved.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-cyril-orange/10 border border-cyril-orange/20 px-3 py-1.5 text-xs font-semibold text-cyril-orange">
              <Bot className="h-4 w-4" />
              <span>Built with Cyril</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
