<template>
  <main>
    <!-- HERO -->
    <section class="relative flex flex-col justify-center overflow-hidden px-8 pt-32 pb-28" style="min-height: calc(100vh - 60px)">
      <!-- BG grid -->
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute inset-0 opacity-40 dark:opacity-15"
          style="background-image: linear-gradient(#e2e0dc 1px, transparent 1px), linear-gradient(90deg, #e2e0dc 1px, transparent 1px); background-size: 60px 60px; mask-image: radial-gradient(ellipse 80% 80% at 60% 40%, black 30%, transparent 100%)"
        ></div>
        <div
          class="absolute rounded-full blur-3xl"
          style="width: 700px; height: 700px; top: -15%; right: -10%; background: radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)"
        ></div>
        <div
          class="absolute rounded-full blur-3xl"
          style="width: 400px; height: 400px; bottom: 5%; left: -5%; background: radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)"
        ></div>
      </div>

      <div class="max-w-[1100px] mx-auto w-full relative z-10">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 mb-10"
          style="font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.4rem 1rem; border-radius: 100px; border: 1px solid #e2e0dc; color: #6b6b6b; background: #f4f3f0"
          :style="{ background: 'var(--badge-bg, #f4f3f0)', borderColor: 'var(--badge-border, #e2e0dc)' }"
        >
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Available for opportunities
        </div>

        <!-- Title -->
        <h1 class="font-display font-extrabold leading-[1.0] tracking-[-0.04em] text-stone-900 dark:text-stone-100 max-w-4xl mb-8"
          style="font-size: clamp(3.2rem, 8vw, 6rem)"
        >
          Building modern<br>
          <span class="text-stone-400 dark:text-stone-600">web experiences.</span>
        </h1>

        <!-- Sub -->
        <p class="font-light text-stone-500 dark:text-stone-400 max-w-lg leading-relaxed mb-14"
          style="font-size: 1.1rem"
        >
          Full-stack developer focused on <strong class="text-stone-700 dark:text-stone-300 font-medium">clean architecture</strong>,
          beautiful interfaces, and scalable backend systems.
        </p>

        <!-- CTA -->
        <div class="flex items-center gap-4 flex-wrap">
          <RouterLink
            to="/projects"
            class="inline-flex items-center gap-2 font-medium text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-xl transition-all hover:opacity-80 hover:-translate-y-0.5 active:translate-y-0"
            style="font-size: 0.9rem; padding: 0.75rem 1.75rem"
          >
            View Projects <span>→</span>
          </RouterLink>
          <RouterLink
            to="/contact"
            class="inline-flex items-center gap-2 font-medium text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-stone-700 rounded-xl transition-all hover:border-stone-500 dark:hover:border-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800/50"
            style="font-size: 0.9rem; padding: 0.75rem 1.75rem"
          >
            Contact Me
          </RouterLink>
        </div>
      </div>

      <!-- Scroll hint -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 animate-bounce-slow"
        style="font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase"
      >
        <div class="w-px h-10 bg-gradient-to-b from-transparent via-stone-300 to-transparent"></div>
        Scroll
      </div>
    </section>

    <!-- DIVIDER -->
    <div class="h-px bg-stone-200 dark:bg-stone-800"></div>

    <!-- STATS -->
    <div class="max-w-[1100px] mx-auto px-8 my-0">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden">
<div
  v-for="(stat, i) in stats" :key="i"
  class="bg-white dark:bg-[#141412] flex flex-col justify-center border-b border-stone-200 dark:border-stone-800 md:border-b-0"
  style="padding: 2.5rem 2rem; min-height: 140px"
  :class="i < 3 ? 'md:border-r md:border-stone-200 dark:md:border-stone-800' : ''"
>
  <div class="font-display font-extrabold tracking-[-0.04em] text-stone-900 dark:text-stone-100 leading-none"
    style="font-size: 2.5rem; margin-bottom: 0.4rem"
  >{{ stat.num }}</div>
  <div class="text-stone-400 tracking-wide" style="font-size: 0.75rem">{{ stat.label }}</div>
</div>
      </div>
    </div>

    <!-- FEATURED PROJECTS -->
    <div class="max-w-[1100px] mx-auto px-8" style="padding-top: 7rem; padding-bottom: 7rem">
      <!-- Header -->
      <div class="flex justify-between items-end gap-8 flex-wrap" style="margin-bottom: 4rem">
        <div>
          <div class="flex items-center gap-2 text-stone-400 mb-4"
            style="font-size: 0.68rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase"
          >
            <span class="bg-stone-400" style="width: 20px; height: 1px; display: inline-block"></span>Featured work
          </div>
          <h2 class="font-display font-bold tracking-[-0.03em] text-stone-900 dark:text-stone-100 leading-none mb-4"
            style="font-size: clamp(1.8rem, 4vw, 2.8rem)"
          >Selected projects</h2>
          <p class="font-light text-stone-500 dark:text-stone-400 leading-relaxed" style="font-size: 0.95rem; max-width: 420px">
            Kumpulan karya terbaik pilihan saya di bidang pengembangan web dan desain.
          </p>
        </div>
        <RouterLink
          to="/projects"
          class="shrink-0 font-medium text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700 rounded-xl transition-all hover:border-stone-400 dark:hover:border-stone-500 hover:text-stone-900 dark:hover:text-stone-200"
          style="font-size: 0.85rem; padding: 0.6rem 1.25rem; white-space: nowrap"
        >
          All projects →
        </RouterLink>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <ProjectCard v-for="p in featured" :key="p.id" :project="p" />
      </div>

      <!-- About snapshot -->
      <div class="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-8 md:p-12 rounded-3xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-[#111110]">
        <div>
          <div class="flex items-center gap-2 text-stone-400 mb-4"
            style="font-size: 0.68rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase"
          >
            <span class="bg-stone-400" style="width: 20px; height: 1px; display: inline-block"></span>About me
          </div>
          <h3 class="font-display font-bold tracking-tight text-stone-900 dark:text-stone-100 mb-4 leading-snug"
            style="font-size: 1.75rem"
          >
            Grade 11 developer<br>from Bandung, Indonesia.
          </h3>
          <p class="font-light text-stone-500 dark:text-stone-400 leading-relaxed mb-6" style="font-size: 0.9rem">
            Majoring in PPLG (Software & Game Development) at SMK Yadika Soreang. Building real full-stack apps, not just homework assignments.
          </p>
          <RouterLink
            to="/about"
            class="inline-flex items-center gap-2 font-medium text-stone-900 dark:text-stone-100 border-b border-stone-300 dark:border-stone-600 pb-0.5 transition-all hover:border-stone-900 dark:hover:border-stone-300"
            style="font-size: 0.875rem"
          >
            Read more →
          </RouterLink>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in stack" :key="tech"
            class="font-medium text-stone-600 dark:text-stone-400 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg transition-all hover:bg-stone-100 dark:hover:bg-stone-700 hover:text-stone-900 dark:hover:text-stone-100 cursor-default"
            style="font-size: 0.8rem; padding: 0.4rem 0.85rem"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import { projects, stack } from '@/data/projects.js'

const featured = projects.slice(0, 3)
const stats = [
  { num: '5+', label: 'Projects shipped' },
  { num: '2+', label: 'Years coding' },
  { num: 'PPLG', label: 'Specialization' },
  { num: '∞', label: 'Learning mindset' },
]
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.4; }
  50% { transform: translateX(-50%) translateY(6px); opacity: 0.9; }
}
.animate-bounce-slow {
  animation: bounce-slow 2.5s ease-in-out infinite;
}
</style>