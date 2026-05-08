<template>
  <div class="bg-white text-[#1A1A1A]">

    <!-- Navigation Bar -->
    <nav class="sticky top-0 w-full bg-[#FFF8EB] shadow-sm z-50 border-b border-[#DFC6E0]/40">
      <div class="max-w-[1450px] mx-auto w-full relative flex items-center py-2 px-6 md:px-12">

        <a href="/" class="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Enki Atelier Logo"
            class="object-contain"
            :style="{ height: logoHeight, width: 'auto', maxHeight: '100%' }"
          >
        </a>

        <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6">
          <a href="/#hero"    class="nav-link">Home</a>
          <a href="/#about"   class="nav-link">About</a>
          <a href="/#themes"  class="nav-link">Products</a>
          <a href="/#gallery" class="nav-link">Gallery</a>
          <a href="/#cta"     class="nav-link">Buy Now</a>
          <a href="/#pens"    class="nav-link">Guide</a>
          <a href="/blog"     class="nav-link nav-link-active">Blog</a>
          <a href="/#faq"     class="nav-link">FAQ</a>
          <a href="/#contact" class="nav-link">Contact Us</a>
        </div>

        <button
          @click="toggleMenu"
          class="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B441E" stroke-width="2" stroke-linecap="round">
            <line v-if="!mobileMenuOpen" x1="3" y1="6"  x2="21" y2="6"/>
            <line v-if="!mobileMenuOpen" x1="3" y1="12" x2="21" y2="12"/>
            <line v-if="!mobileMenuOpen" x1="3" y1="18" x2="21" y2="18"/>
            <line v-if="mobileMenuOpen"  x1="4" y1="4"  x2="20" y2="20"/>
            <line v-if="mobileMenuOpen"  x1="20" y1="4" x2="4"  y2="20"/>
          </svg>
        </button>
      </div>

      <div
        v-show="mobileMenuOpen"
        class="md:hidden border-t border-[#DFC6E0]/40 bg-[#FFF8EB] px-6 py-4 flex flex-col gap-4"
      >
        <a href="/#hero"    class="nav-link text-base py-1" @click="mobileMenuOpen = false">Home</a>
        <a href="/#about"   class="nav-link text-base py-1" @click="mobileMenuOpen = false">About</a>
        <a href="/#themes"  class="nav-link text-base py-1" @click="mobileMenuOpen = false">Products</a>
        <a href="/#gallery" class="nav-link text-base py-1" @click="mobileMenuOpen = false">Gallery</a>
        <a href="/#cta"     class="nav-link text-base py-1" @click="mobileMenuOpen = false">Buy Now</a>
        <a href="/#pens"    class="nav-link text-base py-1" @click="mobileMenuOpen = false">Guide</a>
        <a href="/blog"     class="nav-link text-base py-1 text-[#E0A939]" @click="mobileMenuOpen = false">Blog</a>
        <a href="/#faq"     class="nav-link text-base py-1" @click="mobileMenuOpen = false">FAQ</a>
        <a href="/#contact" class="nav-link text-base py-1" @click="mobileMenuOpen = false">Contact Us</a>
      </div>
    </nav>

    <!-- Article Header -->
    <header class="py-14 bg-[#FFF8EB] border-b border-[#DFC6E0]/40">
      <div class="max-w-[680px] mx-auto px-6">
        <p class="text-xs font-medium tracking-[2px] uppercase text-[#B586AC] mb-4">
        </p>
        <h1 class="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-4" style="font-family: 'Lora', serif;">
          <!-- REPLACE: 文章標題 -->
          Article Title Goes Here
        </h1>
        <p class="text-sm text-[#B586AC]">
          <!-- REPLACE: 發布日期，格式例：May 5, 2026 -->
          Published on <!-- REPLACE: date -->
        </p>
      </div>
    </header>

    <!-- Article Body -->
    <article class="py-12 bg-white">
      <div class="max-w-[680px] mx-auto px-6 post-body">

        <!-- REPLACE: 以下為文章內文，使用 <p>、<h2>、<strong>、<blockquote>、<img> 等標籤 -->

        <p>
          <!-- REPLACE: 開場段落 -->
        </p>

        <h2><!-- REPLACE: 小標題 --></h2>
        <p>
          <!-- REPLACE: 段落內文 -->
        </p>

        <blockquote>
          <!-- REPLACE: 引用文字 -->
        </blockquote>

        <figure>
          <img src="" alt="<!-- REPLACE: 圖片 alt 描述 -->">
          <figcaption><!-- REPLACE: 圖片說明（選填）--></figcaption>
        </figure>

        <!-- REPLACE: 繼續新增段落 -->

      </div>
    </article>

    <!-- Article Bottom CTA (預設隱藏，移除 style="display:none" 即可開啟) -->
    <section
      id="post-email-cta"
      style="display: none;"
      class="py-12 bg-[#FFF8EB] border-t border-[#DFC6E0]/40"
    >
      <div class="max-w-[680px] mx-auto px-6">
        <div v-if="!optinSubmitted" class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <div class="flex-1 min-w-0">
            <input
              v-model="optinEmail"
              type="email"
              placeholder="Your email — get the free starter guide"
              class="form-input w-full"
              :class="{ 'border-red-400': optinError }"
            >
            <p v-if="optinError" class="text-xs text-red-500 mt-1">{{ optinError }}</p>
          </div>
          <button
            @click="submitOptin"
            class="flex-shrink-0 px-6 py-3 bg-[#E0A939] text-[#1A1A1A] font-bold rounded-full hover:brightness-105 transition-all whitespace-nowrap"
          >
            Send Me the Guide
          </button>
        </div>
        <p v-else class="text-sm text-[#6B441E] font-medium">
          You're in! Check your inbox for the free guide.
          <span class="text-[#3D3D3D] font-normal">(Check spam if you don't see it.)</span>
        </p>
      </div>
    </section>

    <!-- More from the Studio -->
    <section class="py-14 bg-white border-t border-[#DFC6E0]/40">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-xl font-bold text-[#1A1A1A] mb-8" style="font-family: 'Lora', serif;">
          More from the Studio
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- REPLACE: 手動填入 2 篇相關文章卡片，格式同 blog/index.vue 的文章卡片 -->
          <!-- 待新增第二篇文章後填入 -->
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#1A1A1A] text-white py-8 text-center px-4">
      <p class="text-sm text-white/60">
        <a href="mailto:info@enkiatelier.com" class="underline hover:text-[#E0A939] transition-colors">
          Email Us
        </a>
        · © 2025 Enki Atelier. All rights reserved.
      </p>
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// REPLACE: 更新此頁 SEO meta
useHead({
  title: '<!-- REPLACE: 文章標題 --> — Enki Atelier',
  meta: [
    { name: 'description', content: '<!-- REPLACE: 文章摘要，約 150 字 -->' }
  ]
})

const mobileMenuOpen = ref(false)
function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const logoHeight = ref('44px')
function updateLogoSize() {
  logoHeight.value = window.innerWidth >= 768 ? '64px' : '44px'
}
onMounted(() => {
  updateLogoSize()
  window.addEventListener('resize', updateLogoSize)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateLogoSize)
})

// Email Opt-in
const optinEmail = ref('')
const optinError = ref('')
const optinSubmitted = ref(false)

function submitOptin() {
  optinError.value = ''
  const email = optinEmail.value.trim()
  if (!email) {
    optinError.value = 'Please enter your email address.'
    return
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    optinError.value = 'Please enter a valid email address.'
    return
  }
  optinSubmitted.value = true
}
</script>

<style>
.nav-link {
  font-size: 0.875rem;
  color: #3D3D3D;
  transition: color 0.2s;
}
.nav-link:hover {
  color: #E0A939;
}
.nav-link-active {
  color: #6B441E;
  font-weight: 600;
}

html {
  font-family: 'DM Sans', sans-serif;
  scroll-padding-top: 80px;
}

/* ─── Post Body Typography ─── */
.post-body {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: #3D3D3D;
  line-height: 1.8;
}
.post-body p {
  margin-bottom: 1.6em;
}
.post-body h2 {
  font-family: 'Lora', serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1A1A1A;
  margin-top: 2.4em;
  margin-bottom: 0.8em;
  line-height: 1.35;
}
.post-body strong {
  font-weight: 600;
  color: #1A1A1A;
}
.post-body blockquote {
  border-left: 4px solid #6B441E;
  padding-left: 1.25rem;
  margin: 2em 0;
  color: #6B441E;
  font-style: italic;
  font-family: 'Lora', serif;
  font-size: 1.05rem;
  line-height: 1.7;
  border-radius: 0;
}
.post-body img {
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
  margin: 2em 0 0.5em;
}
.post-body figcaption {
  text-align: center;
  font-size: 0.8rem;
  color: #B586AC;
  margin-bottom: 2em;
}
.post-body figure {
  margin: 0;
}

/* Form */
.form-input {
  border: 1.5px solid rgba(223,198,224,0.6);
  border-radius: 0.6rem;
  padding: 0.6rem 0.85rem;
  display: block;
  width: 100%;
  font-family: 'DM Sans', sans-serif;
}
.form-input:focus {
  border-color: #6B441E;
  box-shadow: 0 0 0 3px rgba(107,68,30,0.1);
  outline: none;
}

/* Mobile */
@media (max-width: 640px) {
  .post-body h2 {
    font-size: 1.2rem;
  }
  .post-body {
    font-size: 0.95rem;
  }
}
</style>
