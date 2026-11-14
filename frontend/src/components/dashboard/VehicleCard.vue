<template>
  <article
    class="relative min-h-[172px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-lg hover:shadow-slate-200/60"
  >
    <div class="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
      <div class="flex min-w-0 items-center gap-2.5">
        <div
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600"
        >
          <svg
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 14h16l-1.4-4.2A2 2 0 0 0 16.7 8H7.3a2 2 0 0 0-1.9 1.8L4 14Zm0 0v3m16-3v3M7 17h.01M17 17h.01"
            />
          </svg>
        </div>
        <div class="min-w-0">
          <p class="truncate text-[12px] font-extrabold leading-5 text-slate-900">{{ car }}</p>
          <p class="truncate text-[10px] font-medium leading-4 text-slate-500">{{ customer }}</p>
        </div>
      </div>
      <span
        :class="[
          'shrink-0 rounded-full px-2 py-1 text-[9px] font-bold uppercase tracking-wide',
          badgeTone,
        ]"
        >{{ badge }}</span
      >
    </div>
    <div class="mt-3 grid grid-cols-[1fr_auto] items-center gap-2 rounded-xl bg-slate-50 p-2.5">
      <span class="truncate text-[10px] font-bold text-slate-700">{{ service }}</span
      ><span class="rounded-md bg-white px-2 py-1 text-[9px] font-bold text-slate-500 shadow-sm">{{
        bay
      }}</span>
    </div>
    <div v-if="progress !== undefined" class="mt-4">
      <div class="mb-1.5 flex justify-between text-[10px] text-slate-400">
        <span>{{ progressLabel }}</span
        ><span>{{ progress }}%</span>
      </div>
      <div class="h-2 rounded-full bg-slate-100">
        <div
          :class="['h-full rounded-full', progressTone]"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>
    </div>
    <div class="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
      <span class="text-[10px] font-semibold text-slate-500">Today · {{ time }}</span>
      <div class="flex items-center gap-2">
        <strong class="text-xs font-extrabold text-slate-900">{{ price }}</strong
        ><button
          class="rounded-lg bg-violet-600 px-3 py-1.5 text-[9px] font-extrabold text-white transition hover:bg-violet-700"
        >
          Open
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  car: String,
  customer: String,
  service: String,
  bay: String,
  badge: String,
  badgeTone: String,
  carIcon: { type: String, default: '🚘' },
  progress: Number,
  progressLabel: { type: String, default: 'Progress' },
  progressTone: { type: String, default: 'bg-violet-500' },
  time: String,
  price: String,
})
</script>
