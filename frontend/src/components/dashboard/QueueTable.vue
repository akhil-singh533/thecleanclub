<template>
  <section class="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="font-semibold text-slate-900">Today’s queue</h2>
        <p class="mt-1 text-xs text-slate-400">Live service overview</p>
      </div>
      <button class="text-sm font-semibold text-cyan-600 hover:text-cyan-700">View all</button>
    </div>
    <div class="mt-5 space-y-3">
      <div
        v-for="item in queue"
        :key="item.token"
        class="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3"
      >
        <div class="flex items-center gap-3">
          <span class="text-xs font-bold text-slate-400">#{{ item.token }}</span>
          <div>
            <p class="text-sm font-semibold text-slate-800">{{ item.customer }}</p>
            <p class="text-xs text-slate-400">{{ item.service }} · {{ item.bay }}</p>
          </div>
        </div>
        <span :class="['rounded-full px-2.5 py-1 text-xs font-semibold', item.tone]">{{
          item.status
        }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ queue: { type: Array, required: true } })
</script>
