import data from '@/app/lib/sample-data'

export default function Status() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Status Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {data.kpis.map(k => (
          <div key={k.label} className="card">
            <div className="text-sm text-gray-500">{k.label}</div>
            <div className="text-2xl font-semibold">{k.value}</div>
            <div className="text-sm text-gray-400">{k.note}</div>
          </div>
        ))}
      </div>
      <section className="card">
        <h2 className="font-semibold mb-2">Timeline</h2>
        <ul className="text-sm">
          {data.timeline.map(t => (
            <li key={t.id} className="flex items-center gap-2">
              <span className="w-28 text-xs px-2 py-1 rounded-xl bg-gray-100 dark:bg-gray-800">{t.date}</span>
              <span>{t.event}</span>
              <span className="text-gray-400">({t.impact})</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
