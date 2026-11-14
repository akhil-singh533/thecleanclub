<template>
  <main class="min-h-screen bg-[#f7f8fc] px-5 py-6 text-slate-900 sm:px-8 lg:px-12 lg:py-10">
    <div class="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-between">
      <header class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20">
          C
        </div>
        <div>
          <p class="text-xs font-extrabold uppercase tracking-wide text-slate-950">The Clean Club</p>
          <p class="mt-0.5 text-[10px] font-semibold text-slate-500">Station OS · Admin</p>
        </div>
      </header>

      <section class="grid items-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p class="text-xs font-extrabold uppercase tracking-[0.24em] text-cyan-700">Error 404</p>
          <h1 class="mt-4 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            This page took a wrong turn.
          </h1>
          <p class="mt-5 max-w-md text-base leading-7 text-slate-600">
            The page you are looking for is not available at this station. Let’s get you back to a cleaner view.
          </p>
          <RouterLink
            to="/admin"
            class="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#09243b] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:bg-[#123753]"
          >
            Back to sign in
            <span aria-hidden="true">→</span>
          </RouterLink>
        </div>

        <div class="relative overflow-hidden rounded-[2rem] border border-white bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:p-7">
          <div class="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl"></div>
          <div class="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-violet-300/20 blur-3xl"></div>
          <div class="relative overflow-hidden rounded-2xl bg-[#eef5f9]">
            <img
              src="https://media.giphy.com/media/FYUnDtud95kMKCovAY/giphy.gif"
              alt="Animated technical error illustration"
              class="mx-auto h-72 w-full object-contain sm:h-80"
            />
          </div>
          <div class="relative mt-5 flex items-center justify-between gap-4">
            <div>
              <p class="text-sm font-extrabold text-slate-900">No wash bay found here</p>
              <p class="mt-1 text-xs font-medium text-slate-500">Check the URL or return to the station.</p>
            </div>
            <span class="rounded-full bg-violet-100 px-3 py-1.5 text-[10px] font-extrabold text-violet-700">404</span>
          </div>
          <a
            href="https://giphy.com/gifs/uci-ucipeter-ucioit-FYUnDtud95kMKCovAY"
            target="_blank"
            rel="noreferrer"
            class="relative mt-4 inline-block text-[10px] font-semibold text-slate-400 underline decoration-slate-300 underline-offset-2 hover:text-violet-600"
          >
            Animation source: GIPHY
          </a>
        </div>
      </section>

      <footer class="flex items-center justify-between border-t border-slate-200 pt-5 text-[10px] font-medium text-slate-400">
        <span>Built for busy wash teams</span>
        <span>Need help? Contact your station administrator.</span>
      </footer>
    </div>
  </main>
</template>
