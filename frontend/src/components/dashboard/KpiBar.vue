<template>
  <div class="new-class grid min-w-[680px] grid-cols-5 gap-3 overflow-x-auto">
    <div
      v-for="item in items"
      :key="item.label"
      class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
    >
      <div class="flex items-center justify-between">
        <span class="text-[9px] font-extrabold uppercase tracking-wider text-slate-500">{{
          item.label
        }}</span
        ><span :class="['h-2 w-2 rounded-full', item.dot]"></span>
      </div>
      <strong class="mt-2 block text-xl font-extrabold tracking-tight text-slate-950">{{
        item.value
      }}</strong>
      <p class="mt-1 text-[10px] font-medium text-slate-500">Updated just now</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ items: { type: Array, required: true } })
</script>
