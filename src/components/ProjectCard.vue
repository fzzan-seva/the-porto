<template>
  <RouterLink
    :to="`/projects/${project.id}`"
    class="group block bg-white dark:bg-[#141412] border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-stone-300 dark:hover:border-stone-600"
  >
    <!-- Image placeholder lebih tinggi -->
    <div
      class="relative w-full flex items-center justify-center overflow-hidden"
      style="height: 220px; background: linear-gradient(135deg, #f5f4f1 0%, #ebebea 100%)"
      :class="[
        project.id % 6 === 1 ? 'dark:bg-gradient-to-br dark:from-[#1a1f2e] dark:to-[#111318]' : '',
        project.id % 6 === 2 ? 'dark:bg-gradient-to-br dark:from-[#0f1f18] dark:to-[#0a1410]' : '',
        project.id % 6 === 3 ? 'dark:bg-gradient-to-br dark:from-[#1f150a] dark:to-[#150e06]' : '',
      ]"
    >
      <!-- Dark overlay untuk dark mode -->
      <div class="absolute inset-0 hidden dark:block" style="background: linear-gradient(135deg, #1a1a18 0%, #111110 100%)"></div>

      <!-- Nomor besar dekoratif -->
      <span class="relative z-10 font-display font-extrabold tracking-tighter select-none"
        style="font-size: 7rem; line-height: 1; color: rgba(0,0,0,0.06)"
        :class="'dark:text-white/[0.04]'"
      >
        {{ project.num }}
      </span>

      <!-- Glow subtle -->
      <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style="background: radial-gradient(circle at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)"
      ></div>

      <!-- Arrow hover -->
      <span class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 dark:bg-stone-800/80 flex items-center justify-center text-stone-500 text-sm opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 shadow-sm">↗</span>
    </div>

    <!-- Content -->
    <div class="p-7">
      <!-- Tags -->
      <div class="flex flex-wrap gap-1.5 mb-4">
        <span
          v-for="tech in project.tech.slice(0, 3)"
          :key="tech"
          class="text-[0.68rem] font-medium tracking-wide text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-2.5 py-1 rounded-full"
        >
          {{ tech }}
        </span>
      </div>

      <h3 class="font-display font-bold text-[1.15rem] tracking-tight text-stone-900 dark:text-stone-100 mb-2 leading-snug">
        {{ project.title }}
      </h3>
      <p class="text-[0.875rem] text-stone-500 dark:text-stone-400 leading-relaxed font-light">
        {{ project.description }}
      </p>

      <!-- Footer card -->
      <div class="flex items-center gap-2 mt-5 pt-4 border-t border-stone-100 dark:border-stone-800">
        <span class="text-[0.72rem] font-medium text-stone-400 dark:text-stone-500">{{ project.category }}</span>
        <span class="ml-auto text-[0.72rem] text-stone-400 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">View project →</span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({ project: Object })
</script>