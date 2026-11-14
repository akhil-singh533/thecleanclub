<template>
  <main class="min-h-screen overflow-hidden bg-[#eef5f9] text-slate-900">
    <div class="mx-auto grid min-h-screen max-w-[1440px] lg:grid-cols-[1.08fr_0.92fr]">
      <!-- Brand panel -->
      <section class="relative hidden overflow-hidden bg-[#09243b] px-12 py-10 text-white lg:flex lg:flex-col lg:justify-between xl:px-20">
        <div class="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl"></div>
        <div class="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-blue-500/15 blur-3xl"></div>

        <div class="relative flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300 text-[#09243b] shadow-lg shadow-cyan-300/20">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 14h18M5.5 14l1.2-4A2 2 0 0 1 8.6 8.5h6.8a2 2 0 0 1 1.9 1.5l1.2 4M6 18h.01M18 18h.01M5 14v3a1 1 0 0 0 1 1h1m12-4v3a1 1 0 0 1-1 1h-1" />
              <path stroke-linecap="round" d="M8 5.5h.01M12 4h.01M16 5.5h.01" />
            </svg>
          </div>
          <span class="text-lg font-semibold tracking-tight">The Clean Club</span>
        </div>

        <div class="relative max-w-lg py-16">
          <p class="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Station management</p>
          <h1 class="text-5xl font-bold leading-[1.08] tracking-tight xl:text-6xl">A smoother day starts with a cleaner station.</h1>
          <p class="mt-7 max-w-md text-base leading-7 text-slate-300">Keep your bays moving, your team aligned, and every customer’s car looking its best.</p>

          <div class="mt-12 flex items-center gap-3 text-sm text-slate-300">
            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m5 12 4 4L19 6" /></svg>
            </span>
            Your station workspace is ready
          </div>
        </div>

        <div class="relative flex items-center justify-between text-xs text-slate-400">
          <span>Built for busy wash teams</span>
          <span>v1.0</span>
        </div>
      </section>

      <!-- Login panel -->
      <section class="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10">
        <div class="w-full max-w-md">
          <div class="mb-10 flex items-center gap-3 lg:hidden">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#09243b] text-cyan-300">
              <span class="text-lg font-bold">C</span>
            </div>
            <span class="text-lg font-semibold tracking-tight">The Clean Club</span>
          </div>

          <div class="rounded-[2rem] border border-white/80 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:p-10">
            <div class="mb-10 flex flex-col gap-3">
              <p class="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">Welcome back</p>
              <h2 class="text-4xl font-bold leading-[1.08] tracking-tight text-slate-950">Sign in to your station</h2>
              
            </div>

            <form class="flex flex-col gap-8" @submit.prevent="login">
              <div class="pt-2">
                <label for="email" class="mb-3 block text-sm font-medium text-slate-700">Work email</label>
                <input
                  id="email"
                  v-model.trim="email"
                  type="email"
                  autocomplete="email"
                  placeholder="you@cleanclub.in"
                  required
                class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                />
              </div>

              <div>
                <div class="mb-3 flex items-center justify-between">
                  <label for="password" class="block text-sm font-medium text-slate-700">Password</label>
                  <a href="#" class="text-xs font-semibold text-cyan-600 transition hover:text-cyan-700">Forgot password?</a>
                </div>
                <div class="relative">
                  <input
                    id="password"
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    autocomplete="current-password"
                    placeholder="Enter your password"
                    required
                    class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 pr-16 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                  />
                  <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-1.5 py-1 text-xs font-semibold text-slate-400 transition hover:bg-slate-100 hover:text-slate-700" @click="showPassword = !showPassword">
                    {{ showPassword ? 'Hide' : 'Show' }}
                  </button>
                </div>
              </div>

              <label class="flex cursor-pointer items-center gap-2 pt-2 text-sm text-slate-500">
                <input v-model="rememberMe" type="checkbox" class="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                Remember this device
              </label>

              <button
                type="submit"
                :disabled="loading"
                class="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#09243b] px-4 py-4 text-sm font-semibold text-white shadow-lg shadow-[#09243b]/15 transition hover:bg-[#123753] focus:outline-none focus:ring-4 focus:ring-[#09243b]/15 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <svg v-if="loading" class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z" /></svg>
                {{ loading ? 'Signing in…' : 'Sign in to station' }}
              </button>

              <p v-if="message" class="rounded-xl bg-rose-50 px-4 py-3 text-center text-sm text-rose-600">{{ message }}</p>
            </form>

            <p class="mt-8 text-center text-xs leading-5 text-slate-400">Need access? Contact your station administrator.</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useLogin } from '@/js/login'

const showPassword = ref(false)
const rememberMe = ref(false)
const { email, password, message, loading, login } = useLogin()
</script>
