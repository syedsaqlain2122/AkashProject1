import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RequireAuth from './auth/RequireAuth'
import AppShell from './layouts/AppShell'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Practitioners from './pages/Practitioners'
import Clients from './pages/Clients'
import Sessions from './pages/Sessions'
import Revenue from './pages/Revenue'
import Transactions from './pages/Transactions'
import Payouts from './pages/Payouts'
import Notifications from './pages/Notifications'
import Users from './pages/Users'
import Settings from './pages/Settings'
//ksahdkashld
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route element={<AppShell />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/practitioners" element={<Practitioners />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/payouts" element={<Payouts />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App