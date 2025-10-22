import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-purple-500 text-xl font-bold">
                C
              </div>
              <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm text-gray-400">{SITE_CONFIG.tagline}</p>
            <p className="mt-2 text-xs text-gray-500">
              Built by{" "}
              <a
                href={SITE_CONFIG.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:underline"
              >
                {SITE_CONFIG.company}
              </a>
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href={`${SITE_CONFIG.github}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400"
                >
                  Report an Issue
                </a>
              </li>
              <li>
                <a
                  href={`${SITE_CONFIG.github}/discussions`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400"
                >
                  Discussions
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href={`${SITE_CONFIG.github}/blob/main/LICENSE`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400"
                >
                  MIT License
                </a>
              </li>
              <li>
                <span className="text-gray-500">Open Source</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>
            © {currentYear} {SITE_CONFIG.company}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
