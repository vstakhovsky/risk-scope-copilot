type Citation = { source: string; snippet: string; confidence: number }
export default function Evidence({ citations = [{source:'Confluence: Plan', snippet:'Example snippet', confidence:0.78}] }: { citations?: Citation[] }){
  return (
    <details className="mt-2">
      <summary className="cursor-pointer text-sm text-purple-600 dark:text-purple-400">Evidence</summary>
      <ul className="text-sm mt-2 space-y-1">
        {citations.map((c,i)=> (
          <li key={i} className="p-2 rounded bg-purple-50 dark:bg-purple-900/20">
            <span className="font-medium">{c.source}</span> — “{c.snippet}”
            <span className="ml-2 text-xs opacity-70">confidence: {Math.round(c.confidence*100)}%</span>
          </li>
        ))}
      </ul>
    </details>
  )
}
