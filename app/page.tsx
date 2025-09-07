import Link from 'next/link'
export default function Page(){
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Risk &amp; Scope Copilot</h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
        Turn messy project inputs into review-ready <strong>Risks</strong>, <strong>Scope Scenarios</strong>,
        <strong> RACI</strong>, <strong>ADRs</strong>, and basic <strong>C4 diagrams</strong> — with evidence links.
      </p>
      <div className="mt-4 flex gap-2">
        <Link href="/upload" className="px-4 py-2 rounded-xl bg-blue-600 text-white">Start Analysis</Link>
        <Link href="/artifacts" className="px-4 py-2 rounded-xl border">Try with Sample Project</Link>
      </div>
    </div>
  )
}
