import { NextResponse } from 'next/server'
export async function POST(){
  return NextResponse.json({ ok:true, message:'Multi-agent analysis started (stub).', runId: Math.floor(Math.random()*1000) })
}
