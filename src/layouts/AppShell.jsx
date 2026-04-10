import { useMemo, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

const PAGE_META = [
  { path: '/dashboard', title: 'Executive Ledger', subtitle: 'Track key performance metrics and practitioner earnings.' },
  { path: '/practitioners', title: 'Practitioners', subtitle: 'Manage practitioner profiles and onboarding.' },
  { path: '/clients', title: 'Clients', subtitle: 'View client accounts and activity.' },
  { path: '/sessions', title: 'Sessions', subtitle: 'Monitor sessions and scheduling.' },
  { path: '/revenue', title: 'Revenue', subtitle: 'Review revenue performance and trends.' },
  { path: '/transactions', title: 'Transactions', subtitle: 'Track payments and transaction history.' },
  { path: '/payouts', title: 'Payouts', subtitle: 'Manage payouts and settlement status.' },
  { path: '/notifications', title: 'Notifications', subtitle: 'System and user notifications.' },
  { path: '/users', title: 'Users', subtitle: 'Manage users and roles.' },
  { path: '/settings', title: 'Settings', subtitle: 'Update your account preferences.' },
]

export default function AppShell() {
  const location = useLocation()
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const meta = useMemo(() => {
    const hit = PAGE_META.find((m) => m.path === location.pathname)
    return hit ?? { title: 'My Portal', subtitle: '' }
  }, [location.pathname])

  return (
    <div className="min-h-dvh bg-[var(--figma-app-bg)] text-[var(--figma-text)]">
      <div className="mx-auto min-h-dvh w-full max-w-[1280px] p-4 sm:p-6">
        <div className="app-canvas flex min-h-[calc(100dvh-32px)] overflow-hidden sm:min-h-[calc(100dvh-48px)]">
          <Sidebar mobileOpen={mobileSidebarOpen} onMobileClose={() => setMobileSidebarOpen(false)} />

          <div className="flex min-w-0 flex-1 flex-col bg-white">
            <Topbar
              title={meta.title}
              subtitle={meta.subtitle}
              onOpenSidebar={() => setMobileSidebarOpen(true)}
            />

            <main className="min-w-0 flex-1 bg-[var(--figma-app-bg)] px-4 pb-8 pt-6 sm:px-6 lg:px-8">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

