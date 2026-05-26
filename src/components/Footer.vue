<template>
  <footer class="border-t border-stone-200 dark:border-stone-800 py-8">
    <div class="max-w-[1100px] mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
      <span class="text-[0.8rem] text-stone-400">
        © {{ year }} Seva. Built with Vue 3 + Vite.
      </span>
      <div class="flex gap-6">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-[0.8rem] text-stone-400 hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]
</script>
