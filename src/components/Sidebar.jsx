import { NavLink, useNavigate } from 'react-router-dom'
import {
  BarChart3,
  Bell,
  CalendarDays,
  CreditCard,
  HandCoins,
  LayoutGrid,
  LogOut,
  Settings,
  Stethoscope,
  UserRound,
  Users,
  X,
} from 'lucide-react'
import { setAuthed } from '../auth/auth'
import AppLogo from './AppLogo'

const nav = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutGrid },
  { to: '/practitioners', label: 'Practitioners', icon: Stethoscope },
  { to: '/clients', label: 'Clients', icon: Users },
  { to: '/sessions', label: 'Sessions', icon: CalendarDays },
  { to: '/revenue', label: 'Revenue', icon: BarChart3 },
  { to: '/transactions', label: 'Transactions', icon: CreditCard },
  { to: '/payouts', label: 'Payouts', icon: HandCoins },
  { to: '/notifications', label: 'Notifications', icon: Bell },
  { to: '/settings', label: 'Settings', icon: Settings },
]

function Item({ to, label, icon: Icon, disabled }) {
  if (disabled) {
    return (
      <div className="flex items-center gap-3 rounded-[10px] px-3 py-2 text-sm text-[var(--figma-text-muted)]">
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </div>
    )
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          'flex items-center gap-3 rounded-[10px] px-3 py-2 text-sm transition',
          isActive
            ? 'bg-[var(--figma-input-bg)] text-[var(--figma-text-strong)]'
            : 'text-[var(--figma-text)] hover:bg-[var(--figma-input-bg)]',
        ].join(' ')
      }
      end={to === '/dashboard'}
    >
      <Icon className="h-4 w-4 text-[var(--figma-brand)]" />
      <span>{label}</span>
    </NavLink>
  )
}

export default function Sidebar({ mobileOpen, onMobileClose }) {
  const navigate = useNavigate()

  function logout() {
    setAuthed(false)
    navigate('/login', { replace: true })
  }

  return (
    <>
      {/* Desktop */}
      <aside className="hidden w-[256px] shrink-0 border-r border-[var(--figma-stroke)] bg-white px-4 py-5 lg:flex lg:flex-col">
       
          <AppLogo className="h-[60px] w-[150px] object-cover object-left" />
       

        <div className="mt-7 space-y-1">
          {nav.map((i) => (
            <Item key={i.to} {...i} />
          ))}
        </div>

        <div className="mt-auto rounded-[12px] border border-[var(--figma-stroke)] bg-white p-3">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--figma-input-bg)]">
              <UserRound className="h-4 w-4 text-[var(--figma-text-muted)]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-[var(--figma-text-strong)]">Admin User</div>
              <div className="truncate text-xs text-[var(--figma-text-muted)]">admin@akash.com</div>
            </div>
          </div>
          <button
            type="button"
            onClick={logout}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[var(--figma-input-bg)] px-3 py-2 text-xs font-semibold text-[var(--figma-text)] hover:brightness-[0.98]"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile drawer */}
      <div className={mobileOpen ? 'lg:hidden' : 'hidden'}>
        <div className="fixed inset-0 z-40 bg-black/40" onClick={onMobileClose} />
        <aside className="fixed inset-y-0 left-0 z-50 w-[86%] max-w-[320px] bg-white px-4 py-5 text-[var(--figma-text)] shadow-2xl">
          <div className="flex min-w-0 items-center justify-between gap-2 px-2">
            <div className="min-w-0 flex-1">
              <AppLogo className="h-16 w-full object-contain object-left sm:h-[72px]" />
            </div>
            <button
              type="button"
              onClick={onMobileClose}
              className="grid h-9 w-9 place-items-center rounded-[10px] bg-[var(--figma-input-bg)] hover:brightness-[0.98]"
              aria-label="Close navigation"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-7 space-y-1" onClick={onMobileClose}>
            {nav.map((i) => (
              <Item key={i.to} {...i} />
            ))}
          </div>

          <div className="mt-auto rounded-[12px] border border-[var(--figma-stroke)] bg-white p-3">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--figma-input-bg)]">
                <UserRound className="h-4 w-4 text-[var(--figma-text-muted)]" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-[var(--figma-text-strong)]">Admin User</div>
                <div className="truncate text-xs text-[var(--figma-text-muted)]">admin@akash.com</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                onMobileClose()
                logout()
              }}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[var(--figma-input-bg)] px-3 py-2 text-xs font-semibold text-[var(--figma-text)] hover:brightness-[0.98]"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </aside>
      </div>
    </>
  )
}

