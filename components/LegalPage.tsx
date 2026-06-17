import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

type LegalKey = "privacy" | "terms" | "community-guidelines";

const NAV: { href: string; key: LegalKey; label: string }[] = [
  { href: "/privacy", key: "privacy", label: "Privacy Policy" },
  { href: "/terms", key: "terms", label: "Terms of Service" },
  {
    href: "/community-guidelines",
    key: "community-guidelines",
    label: "Community Guidelines",
  },
];

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold text-gray-900 mb-6">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-semibold text-gray-900 mt-6 mb-2">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="my-3 leading-relaxed text-gray-700">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-3 list-disc pl-6 space-y-1 text-gray-700">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-3 list-decimal pl-6 space-y-1 text-gray-700">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  a: ({ href, children }) => (
    <a href={href} className="text-[#3a7d44] hover:underline">
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  em: ({ children }) => <em className="text-gray-500">{children}</em>,
  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-4 border-[#e8f5ea] pl-4 italic text-gray-600">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-gray-100" />,
  table: ({ children }) => (
    <div className="my-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-gray-200 bg-gray-50 px-3 py-2 text-left font-semibold text-gray-900">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-gray-200 px-3 py-2 align-top text-gray-700">
      {children}
    </td>
  ),
};

export function LegalPage({
  markdown,
  current,
}: {
  markdown: string;
  current: LegalKey;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-gray-900 hover:text-[#3a7d44] transition-colors"
          >
            Nuzzle
          </Link>
        </div>
      </header>

      <main className="flex-1 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {markdown}
          </ReactMarkdown>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-sm">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>&copy; 2026 Little Wonder LLC. All rights reserved.</span>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {NAV.filter((item) => item.key !== current).map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
