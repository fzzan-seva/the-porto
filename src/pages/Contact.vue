<template>
  <main class="pt-[60px]">
    <div class="max-w-[1100px] mx-auto px-8 py-20">
      <div class="max-w-[560px] mx-auto text-center">
        <div class="flex items-center justify-center gap-2 text-[0.68rem] font-semibold tracking-[0.1em] uppercase text-stone-400 mb-4">
          <span class="w-5 h-px bg-stone-400"></span>Get in touch<span class="w-5 h-px bg-stone-400"></span>
        </div>

        <h1 class="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.04em] text-stone-900 dark:text-stone-100 leading-none mb-4">
          Let's work<br>together.
        </h1>
        <p class="text-[0.95rem] font-light text-stone-500 dark:text-stone-400 leading-relaxed">
          Have a project in mind? I'd love to hear about it.
        </p>

        <!-- Social links -->
        <div class="flex justify-center gap-2 mt-8 flex-wrap">
          <a
            v-for="s in socials"
            :key="s.label"
            :href="s.href"
            target="_blank"
            class="inline-flex items-center gap-2 text-[0.8rem] font-medium text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-4 py-2 rounded-lg transition-all hover:text-stone-900 dark:hover:text-stone-100 hover:border-stone-300 dark:hover:border-stone-600"
          >
            {{ s.icon }} {{ s.label }}
          </a>
        </div>

        <!-- Form -->
        <div class="mt-12 text-left">
          <div class="space-y-4">
            <div>
              <label class="block text-[0.72rem] font-semibold tracking-[0.05em] uppercase text-stone-400 mb-1.5">Name</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Your full name"
                class="w-full bg-white dark:bg-[#1e1e1b] border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-3 text-[0.875rem] text-stone-900 dark:text-stone-100 placeholder-stone-400 outline-none transition-all focus:border-stone-400 dark:focus:border-stone-500 focus:ring-0"
              />
            </div>
            <div>
              <label class="block text-[0.72rem] font-semibold tracking-[0.05em] uppercase text-stone-400 mb-1.5">Email</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="your@email.com"
                class="w-full bg-white dark:bg-[#1e1e1b] border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-3 text-[0.875rem] text-stone-900 dark:text-stone-100 placeholder-stone-400 outline-none transition-all focus:border-stone-400 dark:focus:border-stone-500"
              />
            </div>
            <div>
              <label class="block text-[0.72rem] font-semibold tracking-[0.05em] uppercase text-stone-400 mb-1.5">Message</label>
              <textarea
                v-model="form.message"
                rows="5"
                placeholder="Tell me about your project..."
                class="w-full bg-white dark:bg-[#1e1e1b] border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-3 text-[0.875rem] text-stone-900 dark:text-stone-100 placeholder-stone-400 outline-none transition-all focus:border-stone-400 dark:focus:border-stone-500 resize-none leading-relaxed"
              ></textarea>
            </div>
            <button
              @click="handleSubmit"
              :disabled="sent || sending"
              class="w-full font-display text-[0.9rem] font-bold tracking-wide py-3 rounded-xl transition-all"
              :class="sent
                ? 'bg-emerald-500 text-white cursor-default'
                : 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 hover:opacity-80'"
            >
              {{ sent ? 'Message sent ✓' : sending ? 'Sending...' : 'Send message →' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })
const sending = ref(false)
const sent = ref(false)

const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: '⌥' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
  { label: 'Email', href: 'mailto:seva@example.com', icon: '✉' },
]

function handleSubmit() {
  if (sending.value || sent.value) return
  sending.value = true
  setTimeout(() => {
    sending.value = false
    sent.value = true
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => { sent.value = false }, 4000)
  }, 1400)
}
</script>
