const data = {
  risks: [
    { id: 'r1', title: 'Integration delays due to API rate limits', severity: 'Critical', description: 'Third-party API throttling may impact nightly syncs and release cadence.', evidence: [] },
    { id: 'r2', title: 'Legal constraints for EU data residency', severity: 'High', description: 'PII storage must remain in the EU; staging environment uses US buckets.', evidence: [] },
  ],
  scope: [
    { id: 'sA', option: 'Option A — MVP', rationale: 'Single team, manual evidence validation.' },
    { id: 'sB', option: 'Option B — Cross-team', rationale: 'Add Jira/GitHub syncing and diff view.' },
    { id: 'sC', option: 'Option C — Scale', rationale: 'Versioned artifacts, audit, and alerts.' },
  ],
  raci: {
    headers: ['Role','Risk','Scope','ADR','Diagrams'],
    rows: [
      ['TPM','A','R','C','C'],
      ['Tech Lead','R','C','A','A'],
      ['Legal','C','I','C','I'],
      ['Ops','R','C','I','C'],
    ]
  },
  adr: [
    { id: 'a1', title: 'Adopt Next.js App Router', summary: 'Converge on a single web stack for admin UI.' },
    { id: 'a2', title: 'Evidence model v1', summary: 'Citations + confidence + source type.' },
  ],
  kpis: [
    { label: 'Open critical risks', value: 3, note: '↓ 2 since last run' },
    { label: 'Scope A/B/C coverage', value: '3/3', note: 'complete' },
    { label: 'ADR decisions', value: 12, note: '2 pending reviews' },
  ],
  timeline: [
    { id: 't1', date: '2025-04-25', event: 'Alpha demo to stakeholders', impact: '+feedback' },
    { id: 't2', date: '2025-05-10', event: 'Security review', impact: 'risk matrix updated' },
  ],
}
export default data
