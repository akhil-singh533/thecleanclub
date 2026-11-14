<template>
  <aside
    class="w-full shrink-0 border-b border-slate-200 bg-white/80 px-4 py-4 text-slate-900 shadow-sm backdrop-blur-sm lg:sticky lg:top-0 lg:flex lg:h-screen lg:min-h-screen lg:w-60 lg:flex-col lg:border-b-0 lg:border-r lg:px-4 lg:py-6 lg:shadow-[4px_0_18px_rgba(15,23,42,0.03)]"
  >
    <div class="flex items-center gap-3 px-2">
      <div
        class="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20"
      >
        C
      </div>
      <div>
        <p class="text-xs font-extrabold uppercase tracking-wide text-slate-950">The Clean Club</p>
        <p class="mt-0.5 text-[10px] font-semibold text-slate-500">Station OS · Admin</p>
      </div>
    </div>
    <nav class="new-class side-bar mt-8 flex gap-1 overflow-x-auto lg:flex-col">
      <a
        v-for="(item, index) in items"
        :key="item.label"
        :href="item.path || '#'"
        :class="[
          'group flex items-center gap-3 whitespace-nowrap rounded-xl px-3 py-3 text-[11px] font-semibold transition',
          isActive(item)
            ? 'bg-violet-100 text-violet-700 shadow-sm'
            : 'text-slate-600 hover:bg-slate-50 hover:text-violet-700',
        ]"
        ><span
          :class="[
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition',
            isActive(item)
              ? 'bg-violet-200 text-violet-700'
              : 'bg-slate-100 text-slate-500 group-hover:bg-violet-50 group-hover:text-violet-600',
          ]"
          ><svg
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path :d="icons[index]" /></svg></span
        ><span>{{ item.label }}</span></a
      >
    </nav>
    <div class="mt-auto hidden border-t border-slate-200 pt-5 lg:block">
      <p class="px-2 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
        Active station
      </p>
      <div class="mt-3 flex items-center gap-3 rounded-xl bg-white px-3 py-3 shadow-sm">
        <span
          class="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.12)]"
        ></span>
        <div>
          <p class="text-[11px] font-semibold text-slate-800">Madhapur</p>
          <p class="text-[10px] text-slate-500">Hyderabad</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const items = [
  { label: 'Dashboard & POS', path: '/admin/dashboard' },
  { label: 'Schedule & Calendar' },
  { label: 'Wash Bay (Live Cam)' },
  { label: 'Station Setup', path: '/admin/station-setup' },
  { label: 'Services & Pricing' },
  { label: 'Inventory & Chemicals' },
  { label: 'Customers & Fleet' },
  { label: 'Reports & Analytics' },
  { label: 'Settings' },
]
const icons = [
  'M3 10.5 12 3l9 7.5M5.5 9v11h13V9M9 20v-6h6v6',
  'M4 5h16v14H4zM8 3v4M16 3v4M4 10h16M8 14h2M14 14h2',
  'M4 6h16v12H4zM7 9h10M7 13h6M7 16h4',
  'M4 7h16M4 12h16M4 17h16M8 5v4M15 10v4M10 15v4',
  'M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z M8 10.5 12 13l4-2.5',
  'M5 4h14v16H5zM8 8h8M8 12h8M8 16h5',
  'M20 7.5a4 4 0 0 0-7.5-1.8A4 4 0 0 0 5 7.5a4 4 0 0 0 1 7.9V18h12v-2.6a4 4 0 0 0 2-7.9ZM9 18v3M15 18v3',
  'M4 5h16v14H4zM8 15l2.5-3 2 2 2.5-4 3 5',
  'M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
]

function isActive(item) {
  return item.path === route.path
}
</script>
