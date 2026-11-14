<template>
  <header
    class="flex flex-col gap-5 border-b border-slate-200 pb-5 xl:flex-row xl:items-end xl:justify-between"
  >
    <div>
      <p class="text-[10px] font-extrabold uppercase tracking-[0.18em] text-cyan-700">
        Wednesday · 16 October 2024
      </p>
      <h1 class="mt-1 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
        Station overview
      </h1>
      <p class="mt-1 text-xs font-medium text-slate-600">
        Keep every bay moving and every customer informed.
      </p>
    </div>
    <div class="flex flex-wrap items-center gap-2">
      <div
        class="flex min-w-56 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[11px] font-medium text-slate-500 shadow-sm"
      >
        ⌕ <span>Search bookings...</span>
      </div>
      <button
        class="rounded-xl bg-violet-600 px-4 py-2.5 text-[11px] font-extrabold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-700"
      >
        + New booking</button
      ><button
        class="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[11px] font-bold text-slate-700 shadow-sm hover:border-violet-300"
      >
        Today
      </button>
      <div class="relative">
        <button
          type="button"
          aria-label="Open admin profile menu"
          class="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-[10px] font-extrabold text-violet-700 ring-2 ring-transparent transition hover:ring-violet-200"
          @click="isProfileOpen = !isProfileOpen"
        >
          AD
        </button>
        <div
          v-if="isProfileOpen"
          class="absolute right-0 top-11 z-20 w-48 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-200/70"
        >
          <div class="border-b border-slate-100 px-3 py-2.5">
            <p class="text-xs font-extrabold text-slate-900">Admin account</p>
            <p class="mt-0.5 text-[10px] font-medium text-slate-500">Station manager</p>
          </div>
          <button
            type="button"
            class="flex w-full rounded-xl px-3 py-2.5 text-left text-[11px] font-semibold text-slate-600 hover:bg-violet-50 hover:text-violet-700"
          >
            My profile</button
          ><button
            type="button"
            class="flex w-full rounded-xl px-3 py-2.5 text-left text-[11px] font-semibold text-slate-600 hover:bg-violet-50 hover:text-violet-700"
          >
            Settings</button
          ><button
            type="button"
            class="flex w-full rounded-xl px-3 py-2.5 text-left text-[11px] font-semibold text-rose-600 hover:bg-rose-50"
            @click="handleLogout"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isProfileOpen = ref(false)

function handleLogout() {
  localStorage.removeItem('auth_token')
  isProfileOpen.value = false
  router.push('/admin')
}
</script>
