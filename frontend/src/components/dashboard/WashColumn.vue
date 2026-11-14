<template>
  <section
    class="flex min-h-[530px] min-w-[280px] flex-1 flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-3"
  >
    <div class="mb-4 flex items-center justify-between border-b border-slate-200 px-1 pb-3">
      <div class="flex items-center gap-2.5">
        <span :class="['h-2.5 w-2.5 rounded-full', dot]"></span>
        <h2 class="text-xs font-extrabold text-slate-800">{{ title }}</h2>
      </div>
      <span
        class="rounded-lg bg-white px-2.5 py-1 text-[10px] font-extrabold text-slate-500 shadow-sm"
        >{{ cars.length }} jobs</span
      >
    </div>
    <div class="flex flex-1 flex-col gap-3">
      <VehicleCard v-for="car in cars" :key="car.car + car.bay" v-bind="car" />
    </div>
    <button
      class="mt-3 rounded-xl border border-dashed border-slate-300 bg-white/50 py-2.5 text-[10px] font-bold text-slate-400 transition hover:border-violet-400 hover:bg-white hover:text-violet-500"
    >
      + Add booking
    </button>
  </section>
</template>

<script setup>
import VehicleCard from './VehicleCard.vue'
defineProps({ title: String, dot: String, cars: { type: Array, required: true } })
</script>
