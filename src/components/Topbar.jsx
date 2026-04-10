import { Bell, CircleHelp, Menu, Search } from 'lucide-react'

export default function Topbar({ title, subtitle, onOpenSidebar }) {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--figma-stroke)] bg-white/90 backdrop-blur">
      <div className="px-4 py-4 sm:px-6 lg:px-8">
        {/* Row 1: search + tabs + icons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-[10px] border border-[var(--figma-stroke)] bg-white text-[var(--figma-text)] lg:hidden"
            onClick={onOpenSidebar}
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="relative w-full flex-1 sm:max-w-[256px] sm:flex-none">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[var(--figma-text)]" />
            <input
              placeholder="SEARCH RECORDS..."
              className="h-[35px] w-full rounded border border-transparent bg-white pl-11 pr-4 text-[12px] font-medium tracking-wide text-[var(--figma-text)] placeholder:font-medium placeholder:tracking-wide placeholder:text-[rgba(71,69,81,0.5)] focus:outline-none focus:ring-2 focus:ring-[rgba(27,20,100,0.14)]"
            />
          </div>

          <div className="hidden flex-1 items-center lg:ml-4 lg:flex lg:justify-start">
            <span className="relative text-xs font-semibold tracking-wide text-[var(--figma-text-strong)]">
                 <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[var(--figma-brand)]" />
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-[10px] border border-[var(--figma-stroke)] bg-white text-[var(--figma-text)] hover:bg-[rgba(244,243,241,0.7)]"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-[10px] border border-[var(--figma-stroke)] bg-white text-[var(--figma-text)] hover:bg-[rgba(244,243,241,0.7)]"
              aria-label="Help"
            >
              <CircleHelp className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Row 2: title + actions */}
        <div className="mt-6 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="truncate text-lg font-semibold text-[var(--figma-text-strong)] sm:text-xl">{title}</div>
            {subtitle ? (
              <div className="mt-0.5 line-clamp-1 text-sm text-[var(--figma-text-muted)]">{subtitle}</div>
            ) : null}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center rounded-[8px] bg-[#E3E2E0] px-4 text-[11px] font-semibold tracking-[0.14em] text-[#1A1C1B] hover:brightness-[0.98]"
            >
              EXPORT REPORT
            </button>
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-[8px] bg-[var(--figma-brand)] px-4 text-[11px] font-semibold tracking-[0.14em] text-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:brightness-[0.98]"
            >
              <span aria-hidden className="relative -top-[0.5px] inline-block h-[10px] w-[10px]">
                <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-white" />
                <span className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 rounded-full bg-white" />
              </span>
              NEW ENTRY
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 sm:hidden">
          <button
            type="button"
            className="flex-1 rounded-[8px] bg-[#E3E2E0] px-4 py-2 text-[11px] font-semibold tracking-[0.14em] text-[#1A1C1B]"
          >
            EXPORT REPORT
          </button>
          <button
            type="button"
            className="flex-1 rounded-[8px] bg-[var(--figma-brand)] px-4 py-2 text-[11px] font-semibold tracking-[0.14em] text-white"
          >
            NEW ENTRY
          </button>
        </div>
      </div>
    </header>
  )
}

