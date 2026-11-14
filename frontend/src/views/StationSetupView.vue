<template>
  <main class="min-h-screen bg-[#f7f8fc] text-slate-900 lg:flex">
    <DashboardSidebar />

    <section class="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
      <header class="border-b border-slate-200 pb-5">
        <p class="text-[10px] font-extrabold uppercase tracking-[0.18em] text-cyan-700">
          Station configuration
        </p>
        <h1 class="mt-1 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
          Station setup
        </h1>
        <p class="mt-1 text-xs font-medium text-slate-600">
          Manage your wash bays, services and pricing in one place.
        </p>
      </header>

      <div class="mt-6 grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h2 class="text-base font-extrabold text-slate-950">Wash bays</h2>
              <p class="mt-1 text-xs leading-5 text-slate-500">
                Set how many bays are available at your station.
              </p>
            </div>
            <span class="rounded-xl bg-cyan-50 px-3 py-2 text-lg font-extrabold text-cyan-700">
              {{ bayCount }}
            </span>
          </div>

          <label class="mt-6 block text-xs font-bold text-slate-700" for="bay-count">
            Number of bays
          </label>
          <input
            id="bay-count"
            v-model.number="bayCount"
            type="number"
            min="1"
            max="50"
            class="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
          />
          <div class="mt-4 space-y-2">
            <div
              v-for="bay in bays"
              :key="bay.bay_number"
              class="grid grid-cols-[1fr_120px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2.5"
            >
              <input
                v-model="bay.bay_name"
                :aria-label="`Bay ${bay.bay_number} name`"
                class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-cyan-400"
              />
              <select
                v-model="bay.bay_status"
                :aria-label="`Bay ${bay.bay_number} status`"
                class="rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs font-semibold text-slate-700 outline-none focus:border-cyan-400"
              >
                <option value="available">Available</option>
                <option value="active">Active</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
          </div>
          <p class="mt-2 text-[11px] font-medium text-slate-500">
            This will be used for bay assignment and live workflow tracking.
          </p>
          <button
            type="button"
            :disabled="baySaving"
            class="mt-5 rounded-xl bg-cyan-600 px-4 py-2.5 text-[11px] font-extrabold text-white shadow-sm transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
            @click="saveBays"
          >
            {{ baySaving ? 'Saving...' : baySaved ? 'Bays saved' : 'Save bays' }}
          </button>
          <p
            v-if="bayMessage"
            class="mt-3 text-xs font-semibold"
            :class="baySaved ? 'text-emerald-600' : 'text-rose-600'"
          >
            {{ bayMessage }}
          </p>
        </section>

        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 class="text-base font-extrabold text-slate-950">Services & pricing</h2>
              <p class="mt-1 text-xs leading-5 text-slate-500">
                Add the packages your station offers to customers.
              </p>
            </div>
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="rounded-xl bg-violet-600 px-3.5 py-2.5 text-[11px] font-extrabold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-700"
                @click="addService"
              >
                + Add service
              </button>
              <button
                type="button"
                class="rounded-xl border border-violet-200 bg-violet-50 px-3.5 py-2.5 text-[11px] font-extrabold text-violet-700 transition hover:bg-violet-100"
                @click="servicesSaved = true"
              >
                {{ servicesSaved ? 'Saved' : 'Save services' }}
              </button>
            </div>
          </div>

          <div class="mt-5 space-y-3">
            <div
              v-for="(service, index) in services"
              :key="service.id"
              class="grid gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:grid-cols-[1fr_120px_105px_auto] sm:items-center"
            >
              <input
                v-model="service.name"
                :aria-label="`Service ${index + 1} name`"
                class="new-class rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-800 outline-none focus:border-violet-400"
                placeholder="Service name"
              />
              <div class="relative">
                <span
                  class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400"
                  >₹</span
                >
                <input
                  v-model.number="service.price"
                  :aria-label="`${service.name} price`"
                  type="number"
                  min="0"
                  class="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-7 pr-2 text-xs font-bold text-slate-800 outline-none focus:border-violet-400"
                  placeholder="Price"
                />
              </div>
              <input
                v-model="service.duration"
                :aria-label="`${service.name} duration`"
                class="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-800 outline-none focus:border-violet-400"
                placeholder="Duration"
              />
              <button
                type="button"
                class="rounded-lg px-3 py-2.5 text-xs font-bold text-rose-500 hover:bg-rose-50"
                @click="removeService(index)"
              >
                Remove
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, watch } from 'vue'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue'
import { storeBay } from '@/api/baysApi'

const bayCount = ref(4)
const bays = ref(createBays(4))
const baySaved = ref(false)
const baySaving = ref(false)
const bayMessage = ref('')
const servicesSaved = ref(false)
let nextServiceId = 3

function createBays(count) {
  const safeCount = Math.max(1, Math.min(Number(count) || 1, 50))

  return Array.from({ length: safeCount }, (_, index) => ({
    bay_name: `Bay ${index + 1}`,
    bay_number: index + 1,
    bay_status: 'available',
  }))
}

watch(bayCount, (count) => {
  bays.value = createBays(count)
  baySaved.value = false
  bayMessage.value = ''
})

const services = ref([
  { id: 1, name: 'Express Wash', price: 1200, duration: '30 min' },
  { id: 2, name: 'Full Detailing', price: 3900, duration: '90 min' },
])

function addService() {
  services.value.push({
    id: nextServiceId++,
    name: '',
    price: 0,
    duration: '30 min',
  })
  servicesSaved.value = false
}

function removeService(index) {
  services.value.splice(index, 1)
  servicesSaved.value = false
}

async function saveBays() {
  baySaving.value = true
  baySaved.value = false
  bayMessage.value = ''

  try {
    await Promise.all(bays.value.map((bay) => storeBay(bay)))
    baySaved.value = true
    bayMessage.value = `${bays.value.length} bays saved successfully.`
  } catch (error) {
    bayMessage.value = error.response?.data?.message || 'Unable to save bays.'
  } finally {
    baySaving.value = false
  }
}
</script>
