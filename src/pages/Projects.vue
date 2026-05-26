<template>
  <main class="pt-[60px]">
    <div class="max-w-[1100px] mx-auto px-8 pt-16 pb-8">
      <div class="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.1em] uppercase text-stone-400 mb-3">
        <span class="w-5 h-px bg-stone-400"></span>My work
      </div>
      <h1 class="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.04em] text-stone-900 dark:text-stone-100 leading-none mb-3">Projects</h1>
      <p class="text-[0.95rem] font-light text-stone-500 dark:text-stone-400 max-w-lg leading-relaxed mb-8">
        Beberapa Website Buatan Saya Dengan Bantuan AI
      </p>

      <!-- Filter -->
      <div class="flex gap-2 flex-wrap">
        <button
          v-for="f in filters"
          :key="f"
          @click="activeFilter = f"
          class="text-[0.78rem] font-medium px-4 py-1.5 rounded-lg border transition-all"
          :class="activeFilter === f
            ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 border-stone-900 dark:border-stone-100'
            : 'text-stone-500 dark:text-stone-400 border-stone-200 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-500 hover:text-stone-800 dark:hover:text-stone-200'"
        >
          {{ f }}
        </button>
      </div>
    </div>

    <div class="h-px bg-stone-200 dark:bg-stone-800"></div>

    <!-- Grid -->
    <TransitionGroup
      tag="div"
      name="card"
      class="max-w-[1100px] mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      <ProjectCard
        v-for="p in filtered"
        :key="p.id"
        :project="p"
      />
    </TransitionGroup>

    <div v-if="filtered.length === 0" class="text-center py-20 text-stone-400">
      No projects in this category yet.
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects.js'

const filters = ['All', 'Fullstack', 'Frontend', 'Backend']
const activeFilter = ref('All')

const filtered = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)
</script>

<style scoped>
.card-enter-active, .card-leave-active { transition: all 0.25s ease; }
.card-enter-from, .card-leave-to { opacity: 0; transform: scale(0.97) translateY(8px); }
.card-move { transition: transform 0.3s ease; }
</style>
