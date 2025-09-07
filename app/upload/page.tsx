'use client'
import { useState } from 'react'

const aromas = ['Enterprise Assessment','Security Review','MVP Readiness','Platform Integration']

export default function Upload(){
  const [aroma,setAroma] = useState(aromas[0])
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Upload & Intake</h1>
      <div className="card space-y-4">
        <div>
          <label className="font-medium">Upload documents</label>
          <input type="file" multiple className="block mt-2"/>
        </div>
        <div>
          <label className="font-medium">Select an aroma</label>
          <select className="mt-2 border rounded-xl px-3 py-2" value={aroma} onChange={e=>setAroma(e.target.value)}>
            {aromas.map(a=><option key={a}>{a}</option>)}
          </select>
        </div>
        <button className="px-4 py-2 rounded-xl bg-blue-600 text-white" onClick={async()=>{
          await fetch('/api/run',{ method:'POST' })
        }}>Run Analysis</button>
      </div>
    </div>
  )
}
