import './globals.css'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { LayoutDashboard, Upload, Boxes, ShieldAlert, Settings } from 'lucide-react'

export const metadata = {
  title: 'Risk & Scope Copilot',
  description: 'Multi-agent Risk, Scope, RACI & ADR analyzer.',
}

function Nav() {
  const items = [
    { href: '/', label: 'Overview', icon: LayoutDashboard },
    { href: '/upload', label: 'Upload & Intake', icon: Upload },
    { href: '/artifacts', label: 'Artifacts Hub', icon: Boxes },
    { href: '/status', label: 'Status Dashboard', icon: ShieldAlert },
    { href: '/admin', label: 'Admin', icon: Settings },
  ]
  return (
    <aside className="hidden md:flex md:flex-col gap-2 w-64 p-4 border-r border-gray-200 dark:border-gray-800">
      <Link href="/" className="flex items-center gap-2 mb-4">
        <img src="/logo.svg" alt="logo" className="h-8"/>
      </Link>
      {items.map(({href,label,icon:Icon}) => (
        <Link key={href} href={href} className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <Icon size={18}/><span>{label}</span>
        </Link>
      ))}
      <div className="mt-auto text-xs text-gray-400">v0.1 • Beta</div>
    </aside>
  )
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <div className="flex">
          <Nav />
          <main className="flex-1 p-6 max-w-6xl">{children}</main>
        </div>
      </body>
    </html>
  )
}
