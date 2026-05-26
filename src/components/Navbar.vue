<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300"
    :class="scrolled
      ? 'bg-stone-50/90 dark:bg-[#0c0c0b]/90 border-b border-stone-200 dark:border-stone-800'
      : 'bg-transparent border-b border-transparent'"
  >
    <div class="max-w-[1100px] mx-auto px-8 h-[60px] flex items-center justify-between">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="font-display font-bold text-[1.05rem] tracking-tight text-stone-900 dark:text-stone-100"
      >
        SEVA.DEV
      </RouterLink>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-1">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-[0.85rem] text-stone-500 dark:text-stone-400 px-3 py-1.5 rounded-lg transition-all hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800"
          :class="{ 'text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-stone-800': $route.path === link.to }"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <!-- Right -->
      <div class="flex items-center gap-2">
        <button
          @click="$emit('toggleTheme')"
          class="w-[34px] h-[34px] rounded-lg flex items-center justify-center text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          {{ isDark ? '☀' : '☽' }}
        </button>
        <RouterLink
          to="/contact"
          class="text-[0.8rem] font-medium text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-4 py-1.5 rounded-lg transition-all hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900"
        >
          Get in touch
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({ isDark: Boolean })
defineEmits(['toggleTheme'])

const scrolled = ref(false)
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
