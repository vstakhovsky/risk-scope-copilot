import data from '@/app/lib/sample-data'
import Evidence from '@/app/ui/evidence'

export default function Artifacts(){
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Artifacts Hub</h1>
      <section className="card">
        <h2 className="font-semibold mb-2">Risks &amp; Constraints</h2>
        <div className="space-y-3">
          {data.risks.map(r => (
            <div key={r.id} className="border rounded-xl p-3 dark:border-gray-800">
              <div className="flex justify-between">
                <div className="font-medium">{r.title}</div>
                <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">{r.severity}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{r.description}</p>
              <Evidence />
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="font-semibold mb-2">Scope Options (A/B/C)</h2>
        <div className="grid md:grid-cols-3 gap-3">
          {data.scope.map(s => (
            <div key={s.id} className="border rounded-xl p-3 dark:border-gray-800">
              <div className="font-medium">{s.option}</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{s.rationale}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="font-semibold mb-2">RACI Matrix</h2>
        <div className="overflow-auto">
          <table className="text-sm w-full border-collapse">
            <thead>
              <tr>
                {data.raci.headers.map(h => <th key={h} className="text-left p-2 border-b dark:border-gray-800">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.raci.rows.map((row, i) => (
                <tr key={i} className="odd:bg-gray-50 dark:odd:bg-gray-900/50">
                  {row.map((cell, j) => <td key={i+'-'+j} className="p-2">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card">
        <h2 className="font-semibold mb-2">ADR Records</h2>
        <ul className="list-disc pl-6 text-sm">
          {data.adr.map(a => <li key={a.id}><span className="font-medium">{a.title}</span> — {a.summary}</li>)}
        </ul>
      </section>
    </div>
  )
}
