<template>
  <main class="dashboard-shell min-h-screen bg-[#f7f8fc] text-slate-900 lg:flex">
    <DashboardSidebar />
    <section class="min-w-0 flex-1 overflow-hidden px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
      <DashboardHeader />
      <div class="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <button
            class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-[10px] font-bold text-slate-600 shadow-sm"
          >
            ⌄ All bays
          </button>
          <button
            class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-[10px] font-bold text-slate-600 shadow-sm"
          >
            All staff
          </button>
        </div>
        <span class="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600"
          >● Station live</span
        >
      </div>
      <div class="mt-4"><KpiBar :items="kpis" /></div>

      <div class="mt-8 flex items-end justify-between">
        <div>
          <h2 class="text-base font-extrabold text-slate-950">Live wash workflow</h2>
          <p class="mt-1 text-xs text-slate-500">Track each vehicle from queue to handover.</p>
        </div>
        <button class="hidden text-[11px] font-bold text-violet-600 sm:block">
          View schedule →
        </button>
      </div>
      <section class="mt-4 overflow-x-auto pb-2">
        <div class="flex min-w-[1180px] gap-4">
          <WashColumn v-for="column in columns" :key="column.title" v-bind="column" />
        </div>
      </section>
      <div class="new-class mt-5"><TelemetryPanel /></div>
    </section>
  </main>
</template>

<script setup>
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue'
import KpiBar from '@/components/dashboard/KpiBar.vue'
import WashColumn from '@/components/dashboard/WashColumn.vue'
import TelemetryPanel from '@/components/dashboard/TelemetryPanel.vue'

const kpis = [
  { label: 'TOTAL BOOKINGS', value: '18 Today', dot: 'bg-violet-500' },
  { label: 'IN-BAY ACTIVE', value: '4 Units', dot: 'bg-cyan-500' },
  { label: 'IN-QUEUE', value: '6 Waiting', dot: 'bg-amber-500' },
  { label: 'READY / DONE', value: '8 Completed', dot: 'bg-emerald-500' },
  { label: 'TOTAL REVENUE', value: '₹38,400', dot: 'bg-violet-500' },
]

const columns = [
  {
    title: 'Waiting / Queue',
    dot: 'bg-violet-500',
    cars: [
      {
        car: 'BMW M4 Competition',
        customer: 'Karan Zahir · VIP Tier',
        service: 'Full Detailing + Ceramic',
        bay: 'Walk-in',
        badge: 'Walk-in',
        badgeTone: 'bg-violet-100 text-violet-700',
        carIcon: '🚘',
        time: '10:15 AM',
        price: '₹3,900',
      },
      {
        car: 'Audi RS6 Avant',
        customer: 'Rohan Shah',
        service: 'Underbody Blast + Foam',
        bay: 'Token 026',
        badge: 'Confirmed',
        badgeTone: 'bg-cyan-100 text-cyan-700',
        carIcon: '🚙',
        time: '10:30 AM',
        price: '₹2,800',
      },
      {
        car: 'Mercedes-AMG G63',
        customer: 'Nikhil Batra',
        service: 'Ceramic Top Coat',
        bay: 'Token 027',
        badge: 'Walk-in',
        badgeTone: 'bg-violet-100 text-violet-700',
        carIcon: '🚗',
        time: '10:45 AM',
        price: '₹6,500',
      },
    ],
  },
  {
    title: 'In Pre-Wash',
    dot: 'bg-cyan-500',
    cars: [
      {
        car: 'Hyundai Creta',
        customer: 'Express Car Wash',
        service: 'Express Wash',
        bay: 'Bay 1',
        badge: '22 min left',
        badgeTone: 'bg-cyan-100 text-cyan-700',
        carIcon: '🚙',
        progress: 48,
        progressLabel: 'Pre-wash',
        progressTone: 'bg-cyan-500',
        time: '10:04 AM',
        price: '₹1,200',
      },
      {
        car: 'Tata Harrier',
        customer: 'SUV · Wash + Wax',
        service: 'Wash + Wax',
        bay: 'Bay 2',
        badge: 'Active',
        badgeTone: 'bg-cyan-100 text-cyan-700',
        carIcon: '🚘',
        progress: 32,
        progressLabel: 'Foaming',
        progressTone: 'bg-cyan-500',
        time: '10:12 AM',
        price: '₹1,800',
      },
    ],
  },
  {
    title: 'Detailing & Coating',
    dot: 'bg-violet-600',
    cars: [
      {
        car: 'BMW 3 Series Gran Lim.',
        customer: 'Vikram Mehta · Premium',
        service: 'Ceramic Coating',
        bay: 'Bay 3',
        badge: 'Ceramic',
        badgeTone: 'bg-violet-100 text-violet-700',
        carIcon: '🚘',
        progress: 72,
        progressLabel: 'Coating',
        progressTone: 'bg-violet-500',
        time: '09:40 AM',
        price: '₹14,500',
      },
      {
        car: 'Rivian R1S EV',
        customer: 'Leather treatment',
        service: 'EV Battery Safe',
        bay: 'Bay 4',
        badge: 'Coating',
        badgeTone: 'bg-cyan-100 text-cyan-700',
        carIcon: '🚙',
        progress: 56,
        progressLabel: 'Interior',
        progressTone: 'bg-violet-500',
        time: '09:55 AM',
        price: '₹7,200',
      },
    ],
  },
  {
    title: 'QC & Ready',
    dot: 'bg-emerald-500',
    cars: [
      {
        car: 'Porsche 911 GTS',
        customer: 'QC Passed Inspection',
        service: 'Premium Wash',
        bay: 'Ready',
        badge: 'Ready',
        badgeTone: 'bg-emerald-100 text-emerald-700',
        carIcon: '🏎️',
        progress: 100,
        progressLabel: 'Complete',
        progressTone: 'bg-emerald-500',
        time: '09:15 AM',
        price: '₹4,800',
      },
      {
        car: 'Mercedes E-Class',
        customer: 'E-Glass Protection',
        service: 'Customer notified',
        bay: 'Ready',
        badge: 'Ready',
        badgeTone: 'bg-emerald-100 text-emerald-700',
        carIcon: '🚘',
        progress: 100,
        progressLabel: 'Complete',
        progressTone: 'bg-emerald-500',
        time: '09:05 AM',
        price: '₹5,600',
      },
      {
        car: 'Honda City',
        customer: 'Basic wash package',
        service: 'Express Wash',
        bay: 'Ready',
        badge: 'Ready',
        badgeTone: 'bg-emerald-100 text-emerald-700',
        carIcon: '🚗',
        progress: 100,
        progressLabel: 'Complete',
        progressTone: 'bg-emerald-500',
        time: '08:50 AM',
        price: '₹900',
      },
    ],
  },
]
</script>
