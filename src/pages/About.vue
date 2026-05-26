<template>
  <main class="pt-[60px]">
    <div class="max-w-[1100px] mx-auto px-8 py-20">
      <!-- Header -->
      <div class="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.1em] uppercase text-stone-400 mb-4">
        <span class="w-5 h-px bg-stone-400"></span>Who I am
      </div>
      <h1 class="font-display text-[clamp(2.5rem,6vw,4rem)] font-extrabold tracking-[-0.04em] text-stone-900 dark:text-stone-100 leading-none mb-16">
        Creative AI Animation,<br>
        <span class="text-stone-400 dark:text-stone-600">Vibe Coder.</span>
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-16 items-start">
        <!-- Visual card -->
        <div class="relative">
          <div class="aspect-[4/5] bg-stone-100 dark:bg-stone-900 rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-800 flex flex-col items-center justify-center gap-3">
            <div class="w-24 h-24 rounded-full bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 flex items-center justify-center font-display text-4xl font-extrabold text-stone-400 dark:text-stone-500">
              S
            </div>
            <div class="font-display text-[0.85rem] font-semibold text-stone-400 dark:text-stone-500 tracking-wider">SEVA · DEVELOPER</div>
          </div>
          <!-- Info chip -->
          <div class="absolute bottom-5 left-5 right-5 bg-white dark:bg-[#1e1e1b] border border-stone-200 dark:border-stone-700 rounded-xl p-4 shadow-lg">
            <div class="text-[0.65rem] font-semibold tracking-[0.08em] uppercase text-stone-400 mb-1">Currently studying at</div>
            <div class="font-display font-bold text-[1rem] tracking-tight text-stone-900 dark:text-stone-100">SMK Yadika Soreang</div>
            <div class="text-[0.72rem] text-stone-400 mt-0.5">PPLG — Software & Game Dev</div>
          </div>
        </div>

        <!-- Content -->
        <div class="pt-2">
          <p class="text-[1.4rem] font-light text-stone-600 dark:text-stone-400 leading-relaxed mb-8 tracking-[-0.01em]">
            Saya Membuat Beberapa Website <strong class="text-stone-900 dark:text-stone-100 font-semibold">Menggunakan AI (VIBE CODING)</strong>, Saya Tertarik Dengan IT <strong class="text-stone-900 dark:text-stone-100 font-semibold">Karena Penasaran.</strong>
          </p>

          <div class="space-y-4 text-[0.9rem] font-light text-stone-500 dark:text-stone-400 leading-relaxed">
            <p>
              Saya Seoranng Siswa SMK kelas 11 Jurusan PPLG (Pemrograman Perangkat Lunak dan Gim). Pengalaman Saya Belajar Coding Hanya Saat Saya Mulai SMK Kelas 10 Diawali Rasa Penasaran
            </p>
            <p>
              Saya Memiliki Hobi Lain Seperti Bermain Bola Voli, Dan Mendaki Gunung. Bermain Voli Dimmulai Dari Kelas 9 SMP Hingga Saat Ini Namun, Pernah Berhenti 6 Bulan Karena Masalah Tertentu. Dan Mulai Mendaki gunung Pada Saat 31 Agustus 2025 Karena dia ajak Oleh Teman SMP Ke Gunung Burangrang, Lalu saya ketagihan Mendaki Hingga saat ini dan memiliki Wishlist Yaitu Menamatkan Seven Summits Jawa Barat.
            </p>
            <p>
              Saya Hanyalah Pemula Jika Membuat Website tanpa Bantuan AI.
            </p>
          </div>

          <!-- Philosophy -->
          <div class="mt-10 pt-8 border-t border-stone-200 dark:border-stone-800">
            <div class="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.1em] uppercase text-stone-400 mb-6">
              <span class="w-5 h-px bg-stone-400"></span>Philosophy
            </div>
            <div class="space-y-4">
              <div v-for="p in philosophy" :key="p.num" class="flex gap-4 items-start">
                <div class="w-7 h-7 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-[0.7rem] text-stone-500 font-medium shrink-0 mt-0.5">
                  {{ p.num }}
                </div>
                <div>
                  <div class="font-medium text-[0.9rem] text-stone-800 dark:text-stone-200 mb-0.5">{{ p.title }}</div>
                  <div class="text-[0.82rem] text-stone-400 font-light">{{ p.desc }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const philosophy = [
  { num: '01', title: 'Understand before abstracting', desc: 'Know what the framework is doing before using it.' },
  { num: '02', title: 'Ship, then iterate', desc: 'Done is better than perfect. Refactor with real feedback.' },
  { num: '03', title: 'Design for humans', desc: 'Code is read more often than written. UI is used by people.' },
]
</script>
