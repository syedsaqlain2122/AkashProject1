function Settings() {
  return (
    <div className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="text-sm font-semibold text-slate-900">Account Settings</div>
      <div className="mt-1 text-xs text-slate-500">Update your profile details and preferences.</div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold text-slate-600">FULL NAME</label>
          <input
            className="mt-1 h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2BFF]/25"
            defaultValue="Syed Saqlain"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">ROLE</label>
          <input
            className="mt-1 h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2BFF]/25"
            defaultValue="Admin"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-slate-600">EMAIL</label>
          <input
            className="mt-1 h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2BFF]/25"
            defaultValue="syed@email.com"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          Cancel
        </button>
        <button
          type="button"
          className="h-11 rounded-xl bg-[#1B2BFF] px-4 text-sm font-semibold text-white hover:bg-[#1624E0]"
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Settings