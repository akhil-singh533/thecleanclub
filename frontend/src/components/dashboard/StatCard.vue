<template>
  <article class="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
    <div class="flex items-start justify-between">
      <p class="text-sm font-medium text-slate-500">{{ label }}</p>
      <span :class="['rounded-lg px-2 py-1 text-xs font-bold', tone]">{{ trend }}</span>
    </div>
    <p class="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{{ value }}</p>
    <p class="mt-1 text-xs text-slate-400">Compared with yesterday</p>
  </article>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: String, required: true },
  trend: { type: String, required: true },
  tone: { type: String, default: 'bg-emerald-50 text-emerald-600' },
})
</script>
