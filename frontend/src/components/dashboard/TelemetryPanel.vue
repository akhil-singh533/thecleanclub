<template>
  <section class="new-class rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
    <div class="mb-4 flex items-center justify-between">
      <div>
        <h2 class="text-sm font-extrabold text-slate-900">Bay CCTV & active station telemetry</h2>
        <p class="mt-0.5 text-[10px] font-medium text-slate-500">Live operational view</p>
      </div>
      <span class="rounded-full bg-rose-50 px-2.5 py-1 text-[9px] font-extrabold text-rose-600"
        >LIVE OFF</span
      >
    </div>
    <div class="grid gap-3 sm:grid-cols-3">
      <div
        v-for="camera in cameras"
        :key="camera"
        class="flex h-20 items-end rounded-xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950 p-3 text-[10px] font-bold text-white"
      >
        <span>{{ camera }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const cameras = ['Bay 01 · Wash', 'Bay 02 · Detail', 'Bay 03 · Ready']
</script>
