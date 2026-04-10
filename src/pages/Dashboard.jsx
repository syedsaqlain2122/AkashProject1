const stats = [
  { label: 'Total revenue', value: '$12,482', delta: '+12.4%', deltaTone: 'pos' },
  { label: 'Total transactions', value: '6,241', delta: '+4.8%', deltaTone: 'pos' },
  { label: 'Active users', value: '842', delta: '+1.2%', deltaTone: 'pos' },
  { label: 'Refund requests', value: '28', delta: '-0.9%', deltaTone: 'neg' },
]

const approvals = [
  { name: 'Dr. Emma Reed', role: 'Pending approval', time: '2h ago' },
  { name: 'Marcus Sterling', role: 'Pending approval', time: '5h ago' },
  { name: 'Sarah Chen', role: 'Pending approval', time: '1d ago' },
]

const transactions = [
  { name: 'James Dunn', type: 'Therapy intake', amount: '$120.00', status: 'Completed' },
  { name: 'Maya R. Patel', type: 'Nutrition consult', amount: '$85.00', status: 'Completed' },
  { name: 'Alicia Lee', type: 'Meditation session', amount: '$45.00', status: 'Completed' },
  { name: 'Tom Harris', type: 'Performance coaching', amount: '$200.00', status: 'Pending' },
]

function KpiCardSvg() {
  return (
    <svg
      viewBox="0 0 282 211"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="KPI card"
      preserveAspectRatio="xMidYMid meet"
    >
      <g filter="url(#filter0_d_0_858)">
        <rect x="32" y="20" width="218" height="147" rx="12" fill="white" />
        <g transform="translate(56 44)">
          <path
            d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V3H2V14H19V16H2ZM6 12C5.45 12 4.97917 11.8042 4.5875 11.4125C4.19583 11.0208 4 10.55 4 10V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H20C20.55 0 21.0208 0.195833 21.4125 0.5875C21.8042 0.979167 22 1.45 22 2V10C22 10.55 21.8042 11.0208 21.4125 11.4125C21.0208 11.8042 20.55 12 20 12H6ZM8 10C8 9.45 7.80417 8.97917 7.4125 8.5875C7.02083 8.19583 6.55 8 6 8V10H8ZM18 10H20V8C19.45 8 18.9792 8.19583 18.5875 8.5875C18.1958 8.97917 18 9.45 18 10ZM13 9C13.8333 9 14.5417 8.70833 15.125 8.125C15.7083 7.54167 16 6.83333 16 6C16 5.16667 15.7083 4.45833 15.125 3.875C14.5417 3.29167 13.8333 3 13 3C12.1667 3 11.4583 3.29167 10.875 3.875C10.2917 4.45833 10 5.16667 10 6C10 6.83333 10.2917 7.54167 10.875 8.125C11.4583 8.70833 12.1667 9 13 9ZM6 4C6.55 4 7.02083 3.80417 7.4125 3.4125C7.80417 3.02083 8 2.55 8 2H6V4ZM20 4V2H18C18 2.55 18.1958 3.02083 18.5875 3.4125C18.9792 3.80417 19.45 4 20 4Z"
            fill="#1B1464"
          />
          <path
            d="M34.6574 11.5V4.22461H37.4957C38.0481 4.22461 38.5179 4.32972 38.9052 4.53994C39.2925 4.75016 39.588 5.03998 39.7918 5.40938C39.9956 5.77878 40.0975 6.20281 40.0975 6.68146C40.0975 7.16186 39.9943 7.58532 39.7879 7.95182C39.5814 8.31833 39.2819 8.60531 38.8892 8.81276C38.4965 9.02022 38.0204 9.12394 37.461 9.12394H35.6377V7.92089H37.2246C37.5279 7.92089 37.7782 7.86816 37.9757 7.76269C38.1731 7.65722 38.3199 7.51128 38.416 7.32485C38.5122 7.13843 38.5602 6.92397 38.5602 6.68146C38.5602 6.43543 38.5122 6.22039 38.416 6.03635C38.3199 5.8523 38.1727 5.70924 37.9745 5.60716C37.7763 5.50507 37.5249 5.45403 37.2201 5.45403H36.1494V11.5H34.6574Z"
            fill="#474551"
          />
          <path
            d="M42.1369 11.5V4.22461H43.6289V10.2631H46.766V11.5H42.1369Z"
            fill="#474551"
          />
          <path
            d="M48.3719 11.5L50.8605 4.22461H52.8102L55.3621 11.5H53.7052L52.5393 7.99049C52.3974 7.53722 52.2546 7.04089 52.1108 6.50149C51.967 5.96209 51.8153 5.37436 51.6556 4.73829H51.979C51.8243 5.37735 51.6796 5.96808 51.5449 6.51047C51.4102 7.05286 51.2759 7.5462 51.142 7.99049L50.0174 11.5H48.3719Z"
            fill="#474551"
          />
          <path d="M49.9268 9.81155V8.64238H53.8072V9.81155H49.9268Z" fill="#474551" />
        </g>
        <path
          d="M154 20H250V116V116C196.9807 116 154 73.0193 154 20V20Z"
          fill="#1B1464"
          fillOpacity="0.05"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_0_858"
          x="0"
          y="0"
          width="282"
          height="211"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="16" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.0784314 0 0 0 0 0.392157 0 0 0 0.04 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_858" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_858" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

function KpiCard2Svg() {
  return (
    <svg
      viewBox="0 0 282 217"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="KPI card"
      preserveAspectRatio="xMidYMid meet"
    >
      <g filter="url(#filter_kpi2)">
        <rect x="32" y="20" width="218" height="153" rx="12" fill="white" shapeRendering="crispEdges" />
        <path
          d="M58 64C57.45 64 56.9792 63.8042 56.5875 63.4125C56.1958 63.0208 56 62.55 56 62V48C56 47.45 56.1958 46.9792 56.5875 46.5875C56.9792 46.1958 57.45 46 58 46H59V44H61V46H69V44H71V46H72C72.55 46 73.0208 46.1958 73.4125 46.5875C73.8042 46.9792 74 47.45 74 48V54H72V52H58V62H65V64H58ZM72 66C70.7833 66 69.7208 65.6208 68.8125 64.8625C67.9042 64.1042 67.3333 63.15 67.1 62H68.65C68.8667 62.7333 69.2792 63.3333 69.8875 63.8C70.4958 64.2667 71.2 64.5 72 64.5C72.9667 64.5 73.7917 64.1583 74.475 63.475C75.1583 62.7917 75.5 61.9667 75.5 61C75.5 60.0333 75.1583 59.2083 74.475 58.525C73.7917 57.8417 72.9667 57.5 72 57.5C71.5167 57.5 71.0667 57.5875 70.65 57.7625C70.2333 57.9375 69.8667 58.1833 69.55 58.5H71V60H67V56H68.5V57.425C68.95 56.9917 69.475 56.6458 70.075 56.3875C70.675 56.1292 71.3167 56 72 56C73.3833 56 74.5625 56.4875 75.5375 57.4625C76.5125 58.4375 77 59.6167 77 61C77 62.3833 76.5125 63.5625 75.5375 64.5375C74.5625 65.5125 73.3833 66 72 66Z"
          fill="#1B1464"
        />
        <path
          d="M89.368 52.4616V51.2246H95.309V52.4616H93.087V58.5H91.595V52.4616H89.368ZM100.212 58.5977C99.569 58.5977 98.991 58.4511 98.478 58.1579C97.965 57.8647 97.56 57.4398 97.262 56.8833C96.965 56.3268 96.816 55.6548 96.816 54.8672C96.816 54.0746 96.965 53.3996 97.262 52.8422C97.56 52.2848 97.965 51.8596 98.478 51.5666C98.991 51.2735 99.569 51.127 100.212 51.127C100.855 51.127 101.432 51.2735 101.943 51.5666C102.455 51.8596 102.859 52.2848 103.157 52.8422C103.455 53.3996 103.603 54.0746 103.603 54.8672C103.603 55.6565 103.455 56.3294 103.157 56.8859C102.859 57.4424 102.455 57.8669 101.943 58.1592C101.432 58.4515 100.855 58.5977 100.212 58.5977ZM100.212 57.2742C100.589 57.2742 100.918 57.1819 101.199 56.9973C101.48 56.8128 101.699 56.5412 101.856 56.1825C102.013 55.8239 102.091 55.3855 102.091 54.8672C102.091 54.3441 102.013 53.9029 101.856 53.5434C101.699 53.1839 101.48 52.9118 101.199 52.7273C100.918 52.5427 100.589 52.4504 100.212 52.4504C99.835 52.4504 99.506 52.5431 99.224 52.7284C98.942 52.9137 98.722 53.1861 98.565 53.5456C98.407 53.9051 98.328 54.3456 98.328 54.8672C98.328 55.3855 98.407 55.8236 98.565 56.1814C98.722 56.5393 98.942 56.8109 99.224 56.9962C99.506 57.1815 99.835 57.2742 100.212 57.2742ZM105.113 52.4616V51.2246H111.054V52.4616H108.832V58.5H107.34V52.4616H105.113ZM111.769 58.5L114.258 51.2246H116.208L118.76 58.5H117.103L115.937 54.9905C115.795 54.5372 115.652 54.0409 115.508 53.5015C115.364 52.9621 115.213 52.3744 115.053 51.7383H115.376C115.222 52.3774 115.077 52.9681 114.942 53.5105C114.808 54.0529 114.673 54.5462 114.539 54.9905L113.415 58.5H111.769ZM113.324 56.8115V55.6424H117.205V56.8115H113.324ZM120.654 58.5V51.2246H122.147V57.2631H125.284V58.5H120.654Z"
          fill="#474551"
        />
      </g>
      <defs>
        <filter
          id="filter_kpi2"
          x="0"
          y="0"
          width="282"
          height="217"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="16" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.0784314 0 0 0 0 0.392157 0 0 0 0.04 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

function KpiCard3Svg() {
  return (
    <svg
      viewBox="0 0 282 219"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="KPI card"
      preserveAspectRatio="xMidYMid meet"
    >
      <g filter="url(#filter_kpi3)">
        <rect x="32" y="20" width="218" height="155" rx="12" fill="white" shapeRendering="crispEdges" />
        <path
          d="M56 65V63.425C56 62.7083 56.3667 62.125 57.1 61.675C57.8333 61.225 58.8 61 60 61C60.2167 61 60.425 61.0042 60.625 61.0125C60.825 61.0208 61.0167 61.0417 61.2 61.075C60.9667 61.425 60.7917 61.7917 60.675 62.175C60.5583 62.5583 60.5 62.9583 60.5 63.375V65H56ZM62 65V63.375C62 62.8417 62.1458 62.3542 62.4375 61.9125C62.7292 61.4708 63.1417 61.0833 63.675 60.75C64.2083 60.4167 64.8458 60.1667 65.5875 60C66.3292 59.8333 67.1333 59.75 68 59.75C68.8833 59.75 69.6958 59.8333 70.4375 60C71.1792 60.1667 71.8167 60.4167 72.35 60.75C72.8833 61.0833 73.2917 61.4708 73.575 61.9125C73.8583 62.3542 74 62.8417 74 63.375V65H62ZM75.5 65V63.375C75.5 62.9417 75.4458 62.5333 75.3375 62.15C75.2292 61.7667 75.0667 61.4083 74.85 61.075C75.0333 61.0417 75.2208 61.0208 75.4125 61.0125C75.6042 61.0042 75.8 61 76 61C77.2 61 78.1667 61.2208 78.9 61.6625C79.6333 62.1042 80 62.6917 80 63.425V65H75.5ZM60 60C59.45 60 58.9792 59.8042 58.5875 59.4125C58.1958 59.0208 58 58.55 58 58C58 57.4333 58.1958 56.9583 58.5875 56.575C58.9792 56.1917 59.45 56 60 56C60.5667 56 61.0417 56.1917 61.425 56.575C61.8083 56.9583 62 57.4333 62 58C62 58.55 61.8083 59.0208 61.425 59.4125C61.0417 59.8042 60.5667 60 60 60ZM76 60C75.45 60 74.9792 59.8042 74.5875 59.4125C74.1958 59.0208 74 58.55 74 58C74 57.4333 74.1958 56.9583 74.5875 56.575C74.9792 56.1917 75.45 56 76 56C76.5667 56 77.0417 56.1917 77.425 56.575C77.8083 56.9583 78 57.4333 78 58C78 58.55 77.8083 59.0208 77.425 59.4125C77.0417 59.8042 76.5667 60 76 60ZM68 59C67.1667 59 66.4583 58.7083 65.875 58.125C65.2917 57.5417 65 56.8333 65 56C65 55.15 65.2917 54.4375 65.875 53.8625C66.4583 53.2875 67.1667 53 68 53C68.85 53 69.5625 53.2875 70.1375 53.8625C70.7125 54.4375 71 55.15 71 56C71 56.8333 70.7125 57.5417 70.1375 58.125C69.5625 58.7083 68.85 59 68 59Z"
          fill="#1B1464"
        />
        <path
          d="M92.238 55L94.727 47.7246H96.676L99.228 55H97.571L96.405 51.4905C96.264 51.0372 96.121 50.5409 95.977 50.0015C95.833 49.4621 95.681 48.8744 95.522 48.2383H95.845C95.691 48.8774 95.546 49.4681 95.411 50.0105C95.276 50.5529 95.142 51.0462 95.008 51.4905L93.884 55H92.238Z"
          fill="#474551"
        />
      </g>
      <defs>
        <filter
          id="filter_kpi3"
          x="0"
          y="0"
          width="282"
          height="219"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="16" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.0784314 0 0 0 0 0.392157 0 0 0 0.04 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

function KpiCard4Svg() {
  return (
    <svg
      viewBox="0 0 282 214"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="KPI card"
      preserveAspectRatio="xMidYMid meet"
    >
      <g filter="url(#filter_kpi4)">
        <mask id="mask_kpi4" fill="white">
          <path d="M32 32C32 25.3726 37.3726 20 44 20H238C244.627 20 250 25.3726 250 32V158C250 164.627 244.627 170 238 170H44C37.3726 170 32 164.627 32 158V32Z" />
        </mask>
        <path d="M32 32C32 25.3726 37.3726 20 44 20H238C244.627 20 250 25.3726 250 32V158C250 164.627 244.627 170 238 170H44C37.3726 170 32 164.627 32 158V32Z" fill="white" shapeRendering="crispEdges" />
        <path
          d="M32 20H250H32M32 20M250 170H32H250M28 170V20H36V170H28ZM36 170M250 20V170V20"
          fill="#BA1A1A"
          fillOpacity="0.2"
          mask="url(#mask_kpi4)"
        />
        <path
          d="M60 63V61H72V63H60ZM65.65 58.15L60 52.5L62.1 50.35L67.8 56L65.65 58.15ZM72 51.8L66.35 46.1L68.5 44L74.15 49.65L72 51.8ZM76.6 62L63.55 48.95L64.95 47.55L78 60.6L76.6 62Z"
          fill="#BA1A1A"
        />
      </g>
      <defs>
        <filter
          id="filter_kpi4"
          x="0"
          y="0"
          width="282"
          height="214"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="16" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.0784314 0 0 0 0 0.392157 0 0 0 0.04 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* KPI cards */}
      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[12px] sm:max-w-none lg:mx-0 lg:max-w-none lg:rounded-none">
          <div className="relative aspect-[282/211] w-full">
            <KpiCardSvg />
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[12px] sm:max-w-none lg:mx-0 lg:max-w-none lg:rounded-none">
          <div className="relative aspect-[282/217] w-full">
            <KpiCard2Svg />
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[12px] sm:max-w-none lg:mx-0 lg:max-w-none lg:rounded-none">
          <div className="relative aspect-[282/219] w-full">
            <KpiCard3Svg />
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[12px] sm:max-w-none lg:mx-0 lg:max-w-none lg:rounded-none">
          <div className="relative aspect-[282/214] w-full">
            <KpiCard4Svg />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Revenue flow */}
        <div className="lg:col-span-8">
          <div className="figma-card rounded-[12px] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-[var(--figma-text-strong)]">Monthly Revenue Flow</div>
                <div className="mt-1 text-xs text-[var(--figma-text-muted)]">
                  Calculated from practitioner earnings and payouts
                </div>
              </div>
              <div className="rounded-[10px] border border-[var(--figma-stroke)] bg-white px-3 py-2 text-xs font-semibold text-[var(--figma-text)]">
                Last 6 months
              </div>
            </div>

            <div className="mt-5">
              <div className="grid h-[220px] grid-cols-6 items-end gap-3 rounded-[12px] bg-[var(--figma-input-bg)] p-4 sm:h-[260px]">
                {[28, 34, 46, 40, 58, 78].map((h, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3">
                    <div className="w-full rounded-[10px] bg-[rgba(27,20,100,0.10)]">
                      <div
                        className="w-full rounded-[10px] bg-[var(--figma-brand)]"
                        style={{ height: `${h * 2}px` }}
                      />
                    </div>
                    <div className="text-[11px] font-semibold text-[var(--figma-text-muted)]">
                      {['APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'][idx]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Approvals */}
        <div className="lg:col-span-4">
          <div className="figma-card rounded-[12px] p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-[var(--figma-text-strong)]">Pending Approvals</div>
              <span className="rounded-full bg-rose-50 px-2 py-1 text-[11px] font-semibold text-rose-700">3</span>
            </div>
            <div className="mt-4 space-y-3">
              {approvals.map((a) => (
                <div
                  key={a.name}
                  className="flex items-center gap-3 rounded-[12px] border border-[var(--figma-stroke)] bg-white p-3"
                >
                  <div className="h-9 w-9 rounded-full bg-[var(--figma-input-bg)]" />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold text-[var(--figma-text-strong)]">{a.name}</div>
                    <div className="text-xs text-[var(--figma-text-muted)]">{a.role}</div>
                  </div>
                  <div className="text-[11px] font-semibold text-[var(--figma-text-muted)]/70">{a.time}</div>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-[10px] border border-[var(--figma-stroke)] bg-[var(--figma-input-bg)] px-3 py-2 text-xs font-semibold text-[var(--figma-text)] hover:brightness-[0.98]"
            >
              Manage approvals
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Transactions */}
        <div className="lg:col-span-8">
          <div className="figma-card rounded-[12px] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold text-[var(--figma-text-strong)]">Recent Transactions</div>
              <button type="button" className="text-xs font-semibold text-[var(--figma-brand)] hover:underline">
                View all
              </button>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead className="text-xs text-[var(--figma-text-muted)]">
                  <tr className="border-b border-[var(--figma-stroke)]">
                    <th className="pb-3 font-semibold">Name</th>
                    <th className="pb-3 font-semibold">Session type</th>
                    <th className="pb-3 text-right font-semibold">Amount</th>
                    <th className="pb-3 text-right font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((t) => (
                    <tr key={t.name} className="border-b border-[rgba(200,197,210,0.15)] last:border-b-0">
                      <td className="py-3 font-semibold text-[var(--figma-text-strong)]">{t.name}</td>
                      <td className="py-3 text-[var(--figma-text)]">{t.type}</td>
                      <td className="py-3 text-right font-semibold text-[var(--figma-text-strong)]">{t.amount}</td>
                      <td className="py-3 text-right">
                        <span
                          className={[
                            'inline-flex rounded-full px-3 py-1 text-xs font-semibold',
                            t.status === 'Completed'
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-amber-50 text-amber-700',
                          ].join(' ')}
                        >
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* System integrity */}
        <div className="lg:col-span-4">
          <div className="rounded-[12px] bg-[var(--figma-brand)] p-[1px] shadow-[var(--figma-shadow-card)]">
            <div className="rounded-[12px] bg-[var(--figma-brand)] p-5 text-white sm:p-6">
              <div className="text-sm font-semibold">System Integrity</div>
              <div className="mt-1 text-xs text-white/70">Uptime, response time, and service health</div>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <div className="text-3xl font-semibold tracking-tight">99.98%</div>
                  <div className="mt-1 text-xs text-white/70">Healthy status</div>
                </div>
                <div className="rounded-[10px] bg-white/10 px-3 py-2 text-xs font-semibold">Optimal</div>
              </div>
              <div className="mt-6 rounded-[12px] bg-white/10 p-4">
                <div className="text-xs font-semibold text-white/80">Weekly sessions trend</div>
                <div className="mt-3 grid grid-cols-7 items-end gap-2">
                  {[20, 26, 24, 30, 38, 42, 46].map((h, idx) => (
                    <div key={idx} className="w-full rounded-[10px] bg-white/20">
                      <div className="w-full rounded-[10px] bg-white" style={{ height: `${h}px` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard