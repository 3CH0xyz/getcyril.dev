import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Column */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyril-teal text-xl font-bold text-white">
                C
              </div>
              <span className="text-xl font-bold text-gray-900">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Built with care by{" "}
              <a
                href={SITE_CONFIG.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyril-teal hover:underline"
              >
                {SITE_CONFIG.company}
              </a>
            </p>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-cyril-teal"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-cyril-teal"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href={`${SITE_CONFIG.github}/blob/main/CYRIL_DESIGN_BIBLE.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-cyril-teal"
                >
                  Design Bible
                </a>
              </li>
              <li>
                <a
                  href={`${SITE_CONFIG.github}/blob/main/CYRIL_LOOKBOOK.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-cyril-teal"
                >
                  Visual Lookbook
                </a>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`${SITE_CONFIG.github}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-cyril-teal"
                >
                  Report an Issue
                </a>
              </li>
              <li>
                <a
                  href={`${SITE_CONFIG.github}/discussions`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-cyril-teal"
                >
                  Discussions
                </a>
              </li>
              <li>
                <a
                  href={`${SITE_CONFIG.github}/blob/main/LICENSE`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-cyril-teal"
                >
                  MIT License
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-cyril-teal"
                >
                  3CH0 Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              © {currentYear} {SITE_CONFIG.company}. All rights reserved.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-cyril-teal/10 px-3 py-1.5 text-xs font-semibold text-cyril-teal">
              <span>🤖</span>
              <span>Built with Cyril</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
