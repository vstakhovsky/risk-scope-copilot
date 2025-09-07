export default function Admin(){
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <section className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="font-semibold mb-2">Integrations</h3>
          <ul className="list-disc pl-6 text-sm">
            <li>GitHub (export artifacts)</li>
            <li>Jira (releases, issues)</li>
            <li>Confluence (context import)</li>
            <li>Slack (notifications)</li>
            <li>Claude MCP (tooling)</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">Agents</h3>
          <ul className="text-sm grid grid-cols-2 gap-x-4">
            <li>risk</li><li>scope</li><li>raci</li><li>adr</li><li>diagram</li><li>validator</li><li>exporter</li>
          </ul>
        </div>
      </section>
      <section className="card">
        <h3 className="font-semibold mb-2">Audit Log</h3>
        <ol className="list-decimal pl-6 text-sm">
          <li>Run #23 • 4 artifacts updated • 12 citations captured</li>
          <li>Run #22 • no changes</li>
        </ol>
      </section>
    </div>
  )
}
