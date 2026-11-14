<template>
  <article class="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div
          :class="[
            'flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold',
            iconTone,
          ]"
        >
          {{ bay }}
        </div>
        <div>
          <p class="font-semibold text-slate-800">Bay {{ bay }}</p>
          <p class="text-xs text-slate-400">{{ service }}</p>
        </div>
      </div>
      <span :class="['rounded-full px-2.5 py-1 text-xs font-semibold', statusTone]">{{
        status
      }}</span>
    </div>
    <div class="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
      <div :class="['h-full rounded-full', progressTone]" :style="{ width: `${progress}%` }"></div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  bay: { type: String, required: true },
  service: { type: String, required: true },
  status: { type: String, required: true },
  progress: { type: Number, required: true },
  iconTone: { type: String, required: true },
  statusTone: { type: String, required: true },
  progressTone: { type: String, required: true },
})
</script>
