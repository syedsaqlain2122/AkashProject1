import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BadgeCheck, GraduationCap, CheckCircle2 } from 'lucide-react'

function pillClass(kind) {
  switch (kind) {
    case 'active':
      return 'bg-emerald-50 text-emerald-700'
    case 'pending':
      return 'bg-amber-50 text-amber-800'
    case 'cancelled':
      return 'bg-rose-50 text-rose-700'
    default:
      return 'bg-slate-100 text-slate-700'
  }
}

function AvatarCard({ name }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('')

  return (
    <div className="relative overflow-hidden rounded-[14px] bg-[rgba(27,20,100,0.10)]">
      <div className="aspect-[4/3] w-full">
        <div className="grid h-full w-full place-items-center bg-[rgba(27,20,100,0.12)]">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-white/70 text-lg font-semibold text-[var(--figma-text-strong)]">
            {initials || '—'}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/35 px-4 py-2 text-[11px] font-semibold tracking-[0.14em] text-white">
        Practitioner Profile
      </div>
    </div>
  )
}

function KeyPill({ children, tone }) {
  return (
    <span className={['inline-flex items-center rounded-[10px] px-2.5 py-1 text-[11px] font-semibold', pillClass(tone)].join(' ')}>
      {children}
    </span>
  )
}

export default function PractitionerDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const data = useMemo(() => {
    // In a real app, fetch by id. For now, use per-practitioner mock profiles.
    const PROFILES = {
      'elena-rodriguez': {
        name: 'Elena Rodriguez, PhD',
        idLabel: 'PRAC-99283-ER',
        joined: 'Oct 12, 2023',
        status: 'Active',
        bio:
          'Dr. Rodriguez is a clinical psychologist specializing in holistic wellness and somatic therapy. With over 15 years of experience, she integrates traditional psychotherapeutic techniques with mindfulness and body-centered approaches to help clients manage anxiety and professional burnout.',
        specialties: ['Somatic Therapy', 'CBT', 'Mindfulness'],
        price: 85,
        education: [
          { title: 'PhD in Clinical Psychology', meta: 'Stanford University • 2012' },
          { title: 'MS in Behavioral Science', meta: 'University of Pennsylvania • 2008' },
        ],
        certifications: ['Board Certified Clinical Psychologist', 'Holistic Wellness Practitioner (HWP)'],
        performance: { earnings: 42904.5, sessions: 512, rating: 4.9 },
        vault: [
          { name: 'Medical License.pdf', meta: 'Updated Oct 2023', status: 'Verified' },
          { name: 'Liability Insurance.pdf', meta: 'Exp: Jan 2025', status: 'Verified' },
        ],
        reviews: [
          { stars: 5, quote: 'Dr. Elena is incredibly perceptive and has helped me navigate high-stress periods…', meta: 'Client ID: 8219 • 2 days ago' },
          { stars: 5, quote: 'Grounded, compassionate, and practical. The sessions feel structured but warm.', meta: 'Client ID: 6401 • 2 weeks ago' },
        ],
        recentSessions: [
          { client: 'Marcus Aurelius', date: 'Mar 24, 2024', type: 'Virtual Therapy', fee: 85, status: 'Completed' },
          { client: 'Julia Domna', date: 'Mar 22, 2024', type: 'Introductory Call', fee: 45, status: 'Completed' },
          { client: 'Septimius Severus', date: 'Mar 21, 2024', type: 'Virtual Therapy', fee: 85, status: 'Cancelled' },
        ],
      },
      'james-sterling': {
        name: 'James T. Sterling, LCSW',
        idLabel: 'PRAC-41022-JS',
        joined: 'Feb 03, 2024',
        status: 'Pending',
        bio:
          'James is a licensed clinical social worker focused on evidence-based therapy for anxiety and relationship conflict. He is currently completing onboarding verification for the Akash network.',
        specialties: ['CBT', 'Attachment', 'Stress Management'],
        price: 150,
        education: [
          { title: 'MSW, Clinical Track', meta: 'Columbia University • 2017' },
          { title: 'BA in Psychology', meta: 'University of Michigan • 2014' },
        ],
        certifications: ['Licensed Clinical Social Worker (LCSW)', 'Gottman Method (Level 1)'],
        performance: { earnings: 0, sessions: 0, rating: 0 },
        vault: [
          { name: 'License Verification.pdf', meta: 'Submitted Feb 2024', status: 'Pending' },
          { name: 'Background Check.pdf', meta: 'Submitted Feb 2024', status: 'Pending' },
        ],
        reviews: [],
        recentSessions: [],
      },
      'sarah-alfayed': {
        name: 'Sarah Al-Fayed, CNC',
        idLabel: 'PRAC-77810-SA',
        joined: 'Jul 19, 2023',
        status: 'Active',
        bio:
          'Sarah is a certified nutrition coach specializing in metabolic health and sustainable habits. She blends pragmatic nutrition planning with behavioral coaching to support long-term change.',
        specialties: ['Holistic Nutrition', 'Metabolic Health', 'Habit Coaching'],
        price: 45,
        education: [
          { title: 'Certified Nutrition Coach (CNC)', meta: 'Precision Nutrition • 2021' },
          { title: 'BS in Public Health', meta: 'University of Washington • 2018' },
        ],
        certifications: ['Precision Nutrition Level 1', 'Health Coach Certification (NBHWC)'],
        performance: { earnings: 12640.0, sessions: 312, rating: 4.7 },
        vault: [
          { name: 'Certification.pdf', meta: 'Updated Aug 2023', status: 'Verified' },
        ],
        reviews: [
          { stars: 5, quote: 'Simple plans that actually fit my schedule. Great accountability.', meta: 'Client ID: 2894 • 6 days ago' },
        ],
        recentSessions: [
          { client: 'Aisha Khan', date: 'Mar 28, 2024', type: 'Nutrition Follow-up', fee: 45, status: 'Completed' },
          { client: 'Daniel Kim', date: 'Mar 25, 2024', type: 'Initial Intake', fee: 65, status: 'Completed' },
        ],
      },
      'mark-chen': {
        name: 'Mark Chen, RYT-500',
        idLabel: 'PRAC-55091-MC',
        joined: 'Nov 08, 2022',
        status: 'Suspended',
        bio:
          'Mark is a yoga and meditation instructor with a focus on recovery and resilience. This account is currently suspended pending compliance review.',
        specialties: ['Yoga Therapy', 'Meditation', 'Breathwork'],
        price: 80,
        education: [
          { title: 'Yoga Teacher Training (500hr)', meta: 'Kripalu Center • 2019' },
          { title: 'Mindfulness-Based Stress Reduction', meta: 'UMass Center for Mindfulness • 2020' },
        ],
        certifications: ['RYT-500', 'MBSR Teacher (Candidate)'],
        performance: { earnings: 3960.0, sessions: 72, rating: 3.2 },
        vault: [
          { name: 'Insurance.pdf', meta: 'Expired Jan 2025', status: 'Pending' },
        ],
        reviews: [
          { stars: 3, quote: 'Great sessions, but scheduling has been inconsistent lately.', meta: 'Client ID: 1042 • 1 month ago' },
        ],
        recentSessions: [
          { client: 'Priya Nair', date: 'Feb 15, 2024', type: 'Guided Meditation', fee: 30, status: 'Completed' },
          { client: 'Luis Gomez', date: 'Feb 09, 2024', type: 'Yoga (Virtual)', fee: 80, status: 'Cancelled' },
        ],
      },
      'emma-thompson': {
        name: 'Emma Thompson, LMT',
        idLabel: 'PRAC-66304-ET',
        joined: 'May 27, 2023',
        status: 'Active',
        bio:
          'Emma is a licensed massage therapist specializing in sports recovery and chronic tension. She uses a client-first approach and integrates mobility education into recovery plans.',
        specialties: ['Massage Therapy', 'Sports Recovery', 'Mobility'],
        price: 90,
        education: [
          { title: 'Diploma in Massage Therapy', meta: 'Cortiva Institute • 2016' },
        ],
        certifications: ['Licensed Massage Therapist (LMT)', 'CPR/AED'],
        performance: { earnings: 18900.0, sessions: 210, rating: 4.8 },
        vault: [
          { name: 'License.pdf', meta: 'Updated May 2023', status: 'Verified' },
          { name: 'Insurance.pdf', meta: 'Exp: Dec 2024', status: 'Verified' },
        ],
        reviews: [
          { stars: 5, quote: 'Best recovery work I’ve had—felt a difference after the first session.', meta: 'Client ID: 7710 • 4 days ago' },
          { stars: 5, quote: 'Professional, attentive, and very skilled.', meta: 'Client ID: 1148 • 3 weeks ago' },
        ],
        recentSessions: [
          { client: 'Noah Patel', date: 'Mar 30, 2024', type: 'Sports Massage', fee: 90, status: 'Completed' },
          { client: 'Sofia Rossi', date: 'Mar 27, 2024', type: 'Deep Tissue', fee: 100, status: 'Completed' },
          { client: 'Ethan Brooks', date: 'Mar 19, 2024', type: 'Recovery Session', fee: 90, status: 'Completed' },
        ],
      },
      'robert-hyland': {
        name: 'Robert Hyland',
        idLabel: 'PRAC-29017-RH',
        joined: 'Jan 14, 2022',
        status: 'Inactive',
        bio:
          'Robert is a breathwork facilitator emphasizing practical tools for emotional regulation. This profile is currently inactive.',
        specialties: ['Breathwork', 'Nervous System Regulation'],
        price: 50,
        education: [
          { title: 'Breathwork Facilitator Training', meta: 'Alchemy of Breath • 2020' },
        ],
        certifications: ['Breathwork Facilitator', 'Trauma-Informed Coaching'],
        performance: { earnings: 2100.0, sessions: 42, rating: 4.5 },
        vault: [
          { name: 'Certification.pdf', meta: 'Updated Jan 2022', status: 'Verified' },
        ],
        reviews: [
          { stars: 5, quote: 'The breathing techniques were immediately helpful for my anxiety.', meta: 'Client ID: 3009 • 2 months ago' },
        ],
        recentSessions: [
          { client: 'Mina Lee', date: 'Dec 12, 2023', type: 'Breathwork', fee: 50, status: 'Completed' },
        ],
      },
    }

    const fallbackName = id ? String(id).split('-').map((p) => p[0]?.toUpperCase() + p.slice(1)).join(' ') : 'Practitioner'
    return (
      PROFILES[id] ?? {
        name: fallbackName,
        idLabel: `PRAC-${String(id ?? 'UNKNOWN').toUpperCase()}`,
        joined: '—',
        status: 'Active',
        bio: 'This practitioner profile is ready to be connected to real data.',
        specialties: ['—'],
        price: 0,
        education: [],
        certifications: [],
        performance: { earnings: 0, sessions: 0, rating: 0 },
        vault: [],
        reviews: [],
        recentSessions: [],
      }
    )
  }, [id])

  return (
    <div className="space-y-4">
      {/* Breadcrumb + header */}
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-start">
        <div className="min-w-0">
          <div className="text-xs font-semibold text-[var(--figma-text-muted)]">
            <button
              type="button"
              onClick={() => navigate('/practitioners')}
              className="hover:text-[var(--figma-text)]"
            >
              Practitioners
            </button>{' '}
            <span className="text-[var(--figma-text-muted)]">›</span>{' '}
            <span className="text-[var(--figma-text-strong)]">{data.name}</span>
          </div>

          <div className="mt-2 truncate text-2xl font-semibold tracking-tight text-[var(--figma-text-strong)]">{data.name}</div>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[var(--figma-text-muted)]">
            <span>
              <span className="font-semibold text-[var(--figma-text-muted)]">ID:</span> {data.idLabel}
            </span>
            <span className="h-1 w-1 rounded-full bg-[var(--figma-stroke)]" />
            <span>
              <span className="font-semibold text-[var(--figma-text-muted)]">Joined:</span> {data.joined}
            </span>
            <KeyPill tone={data.status === 'Pending' ? 'pending' : data.status === 'Suspended' ? 'cancelled' : 'active'}>
              {data.status.toUpperCase()}
            </KeyPill>
          </div>
        </div>

        <div className="flex w-full items-center gap-2 sm:w-auto sm:justify-end">
          <button
            type="button"
            className="flex-1 sm:flex-none inline-flex h-10 items-center justify-center rounded-[10px] border border-[var(--figma-stroke)] bg-white px-4 text-[11px] font-semibold tracking-[0.14em] text-[var(--figma-text-strong)] hover:bg-[rgba(244,243,241,0.7)]"
          >
            EDIT PROFILE
          </button>
          <button
            type="button"
            className="flex-1 sm:flex-none inline-flex h-10 items-center justify-center rounded-[10px] bg-[var(--figma-brand)] px-4 text-[11px] font-semibold tracking-[0.14em] text-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:brightness-[0.98]"
          >
            APPROVE CHANGES
          </button>
        </div>
      </div>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Main card */}
        <div className="lg:col-span-8">
          <div className="figma-card p-5 sm:p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="md:col-span-5">
                <AvatarCard name={data.name} />
              </div>
              <div className="md:col-span-7">
                <div className="text-sm font-semibold text-[var(--figma-text-strong)]">Professional Biography</div>
                <div className="mt-2 text-sm leading-relaxed text-[var(--figma-text)]">{data.bio}</div>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.14em] text-[var(--figma-text-muted)]">SPECIALTIES</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {data.specialties.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center rounded-[10px] bg-[var(--figma-input-bg)] px-2.5 py-1 text-[11px] font-semibold text-[var(--figma-text)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.14em] text-[var(--figma-text-muted)]">PRICING</div>
                    <div className="mt-2 text-lg font-semibold text-[var(--figma-text-strong)]">
                      ${data.price.toFixed(2)} <span className="text-xs font-semibold text-[var(--figma-text-muted)]">/ session</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education + Certifications (aligned like screenshot) */}
            <div className="mt-8 border-t border-[var(--figma-stroke)] pt-6">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                <div>
                  <div className="flex items-center gap-2 text-base font-semibold text-[var(--figma-brand)]">
                    <GraduationCap className="h-5 w-5" />
                    <span>Education</span>
                  </div>
                  <div className="mt-4 space-y-4">
                    {data.education.length ? (
                      data.education.map((e) => (
                        <div key={e.title}>
                          <div className="text-sm font-semibold text-[var(--figma-text-strong)]">{e.title}</div>
                          <div className="mt-0.5 text-xs text-[var(--figma-text-muted)]">{e.meta}</div>
                        </div>
                      ))
                    ) : (
                      <div className="text-sm text-[var(--figma-text-muted)]">—</div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-base font-semibold text-[var(--figma-brand)]">
                    <BadgeCheck className="h-5 w-5" />
                    <span>Certifications</span>
                  </div>
                  <div className="mt-4 space-y-4">
                    {data.certifications.length ? (
                      data.certifications.map((c) => (
                        <div key={c} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                          <div className="text-sm text-[var(--figma-text-strong)]">{c}</div>
                        </div>
                      ))
                    ) : (
                      <div className="text-sm text-[var(--figma-text-muted)]">—</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent sessions */}
          <div className="mt-6 figma-card overflow-hidden">
            <div className="flex items-center justify-between gap-3 bg-white px-5 py-4 sm:px-6">
              <div className="text-sm font-semibold text-[var(--figma-text-strong)]">Recent Sessions</div>
              <button type="button" className="text-xs font-semibold text-[var(--figma-brand)] hover:brightness-95">
                View All
              </button>
            </div>
            <div className="overflow-x-auto bg-white">
              <table className="min-w-[720px] w-full border-collapse">
                <thead>
                  <tr className="border-y border-[var(--figma-stroke)]">
                    {['Client', 'Date', 'Type', 'Fee', 'Status'].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-3 text-left text-[11px] font-semibold tracking-[0.14em] text-[var(--figma-text-muted)] sm:px-6"
                      >
                        {h.toUpperCase()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.recentSessions.map((s) => (
                    <tr key={`${s.client}-${s.date}`} className="border-b border-[var(--figma-stroke)] last:border-b-0">
                      <td className="px-5 py-4 text-sm font-semibold text-[var(--figma-text-strong)] sm:px-6">{s.client}</td>
                      <td className="px-5 py-4 text-sm text-[var(--figma-text)] sm:px-6">{s.date}</td>
                      <td className="px-5 py-4 text-sm text-[var(--figma-text)] sm:px-6">{s.type}</td>
                      <td className="px-5 py-4 text-sm font-semibold text-[var(--figma-text-strong)] sm:px-6">${s.fee.toFixed(2)}</td>
                      <td className="px-5 py-4 sm:px-6">
                        <span
                          className={[
                            'inline-flex rounded-[10px] px-2.5 py-1 text-[11px] font-semibold',
                            pillClass(s.status.toLowerCase() === 'completed' ? 'active' : 'cancelled'),
                          ].join(' ')}
                        >
                          {s.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {data.recentSessions.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-5 py-8 text-sm text-[var(--figma-text-muted)] sm:px-6">
                        No recent sessions.
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right rail */}
        <div className="space-y-6 lg:col-span-4">
          {/* Performance ledger */}
          <div className="overflow-hidden rounded-[14px] bg-[var(--figma-brand)] p-6 text-white shadow-[0_12px_32px_rgba(27,20,100,0.18)]">
            <div className="text-[11px] font-semibold tracking-[0.16em] text-white/75">PERFORMANCE LEDGER</div>
            <div className="mt-5 rounded-[12px] bg-white/10 p-4">
              <div className="text-xs text-white/70">Total Lifetime Earnings</div>
              <div className="mt-1 flex items-center justify-between gap-3">
                <div className="text-2xl font-semibold tracking-tight">
                  ${data.performance.earnings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="grid h-9 w-9 place-items-center rounded-[10px] bg-white/15">💳</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-[12px] bg-white/10 p-4">
                <div className="text-xs text-white/70">Total Sessions</div>
                <div className="mt-1 text-lg font-semibold">{data.performance.sessions}</div>
              </div>
              <div className="rounded-[12px] bg-white/10 p-4">
                <div className="text-xs text-white/70">Avg Rating</div>
                <div className="mt-1 text-lg font-semibold">
                  {data.performance.rating.toFixed(1)} <span className="text-[#F3E7C4]">★</span>
                </div>
              </div>
            </div>
          </div>

          {/* Verification vault */}
          <div className="figma-card p-5 sm:p-6">
            <div className="text-[11px] font-semibold tracking-[0.16em] text-[var(--figma-text-muted)]">VERIFICATION VAULT</div>
            <div className="mt-4 space-y-3">
              {data.vault.map((v) => (
                <div key={v.name} className="flex items-center justify-between gap-3 rounded-[12px] border border-[var(--figma-stroke)] bg-white px-4 py-3">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-[var(--figma-text-strong)]">{v.name}</div>
                    <div className="truncate text-xs text-[var(--figma-text-muted)]">{v.meta}</div>
                  </div>
                  <span className="inline-flex shrink-0 items-center rounded-[10px] bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                    VERIFIED
                  </span>
                </div>
              ))}
              {data.vault.length === 0 ? <div className="text-sm text-[var(--figma-text-muted)]">No documents.</div> : null}
            </div>
          </div>

          {/* Recent reviews */}
          <div className="figma-card p-5 sm:p-6">
            <div className="text-[11px] font-semibold tracking-[0.16em] text-[var(--figma-text-muted)]">RECENT REVIEWS</div>
            <div className="mt-4 space-y-3">
              {data.reviews.map((rv, idx) => (
                <div key={idx} className="rounded-[12px] border border-[var(--figma-stroke)] bg-white px-4 py-3">
                  <div className="text-sm text-[#C79A2B]">{'★'.repeat(rv.stars)}</div>
                  <div className="mt-2 text-sm text-[var(--figma-text)]">“{rv.quote}”</div>
                  <div className="mt-2 text-xs font-semibold text-[var(--figma-text-muted)]">{rv.meta}</div>
                </div>
              ))}
              <button type="button" className="w-full rounded-[12px] bg-[var(--figma-input-bg)] px-4 py-3 text-sm font-semibold text-[var(--figma-text-strong)] hover:brightness-[0.98]">
                See All Reviews
              </button>
            </div>
          </div>

          {/* Administrative control */}
          <div className="figma-card p-5 sm:p-6">
            <div className="text-[11px] font-semibold tracking-[0.16em] text-[var(--figma-text-muted)]">ADMINISTRATIVE CONTROL</div>
            <div className="mt-4 space-y-3">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[12px] border border-[var(--figma-stroke)] bg-white px-4 py-3 text-sm font-semibold text-[var(--figma-text-strong)] hover:bg-[rgba(244,243,241,0.7)]"
              >
                Suspend Account
              </button>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[12px] border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700 hover:brightness-[0.98]"
              >
                Block Access
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

