<template>
  <main class="pt-[60px]">
    <div v-if="project">
      <!-- Hero -->
      <div class="w-full aspect-[21/6] bg-stone-100 dark:bg-stone-900 flex items-center justify-center border-b border-stone-200 dark:border-stone-800">
        <span class="font-display text-[8rem] font-extrabold tracking-[-0.06em] text-stone-200 dark:text-stone-800 select-none">
          {{ project.num }}
        </span>
      </div>

      <div class="max-w-[760px] mx-auto px-8 py-16">
        <!-- Back -->
        <RouterLink
          to="/projects"
          class="inline-flex items-center gap-2 text-[0.8rem] text-stone-400 hover:text-stone-700 dark:hover:text-stone-300 transition-colors mb-10"
        >
          ← All projects
        </RouterLink>

        <!-- Title -->
        <div class="flex flex-wrap gap-1.5 mb-4">
          <span
            v-for="t in project.tech"
            :key="t"
            class="text-[0.68rem] font-medium text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-2 py-0.5 rounded-full"
          >
            {{ t }}
          </span>
        </div>

        <h1 class="font-display text-[2.5rem] font-extrabold tracking-[-0.04em] text-stone-900 dark:text-stone-100 mb-6 leading-none">
          {{ project.title }}
        </h1>

        <p class="text-[1.05rem] font-light text-stone-500 dark:text-stone-400 leading-relaxed mb-12">
          {{ project.longDescription }}
        </p>

        <!-- Sections -->
        <div class="space-y-10 pt-8 border-t border-stone-200 dark:border-stone-800">
          <div v-for="s in sections" :key="s.label">
            <div class="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.1em] uppercase text-stone-400 mb-3">
              <span class="w-5 h-px bg-stone-400"></span>{{ s.label }}
            </div>
            <p class="text-[0.9rem] font-light text-stone-600 dark:text-stone-400 leading-relaxed">{{ s.text }}</p>
          </div>
        </div>

        <!-- Links -->
        <div class="flex gap-3 mt-12 pt-8 border-t border-stone-200 dark:border-stone-800">
          <a
            :href="project.github"
            class="inline-flex items-center gap-2 text-[0.85rem] font-medium text-stone-900 dark:text-stone-100 bg-stone-900 dark:bg-stone-100 dark:text-stone-900 px-5 py-2.5 rounded-xl hover:opacity-80 transition-all"
          >
            View on GitHub →
          </a>
          <a
            :href="project.link"
            class="inline-flex items-center gap-2 text-[0.85rem] font-medium text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700 px-5 py-2.5 rounded-xl hover:border-stone-400 dark:hover:border-stone-500 transition-all"
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </div>
    <div v-else class="pt-32 text-center text-stone-400">Project not found.</div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects.js'

const route = useRoute()
const project = computed(() => projects.find(p => p.id === Number(route.params.id)))

const sections = [
  { label: 'Problem', text: 'Developers need tools that get out of the way — existing solutions are bloated, opinionated, or require extensive configuration before you can start shipping.' },
  { label: 'Solution', text: 'A focused, minimal implementation built around modern standards — clean API, sensible defaults, easy to override, easy to understand.' },
  { label: 'Impact', text: 'Reduced setup time from hours to minutes. Clean, maintainable codebase that can be handed off to any developer on the team.' },
]
</script>
