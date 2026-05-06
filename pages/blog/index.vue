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

    <!-- Page Header -->
    <section class="py-16 bg-[#FFF8EB] border-b border-[#DFC6E0]/40">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4" style="font-family: 'Lora', serif;">
          From the Studio
        </h1>
        <p class="text-base text-[#3D3D3D] leading-relaxed max-w-xl mx-auto">
          3D pen tips, project stories, and ideas for curious kids (and adults).
        </p>
      </div>
    </section>

    <!-- Article Grid -->
    <section class="py-16 bg-white">
      <div class="max-w-3xl mx-auto px-6">
        <div class="flex flex-col gap-0">

          <!-- Article Card: he-noticed-she-loved-flowers -->
          <article class="blog-card">
            <p class="blog-card-tag">From the Studio</p>
            <h2 class="blog-card-title">
              <a href="/blog/posts/he-noticed-she-loved-flowers-he-made-her-one">He Noticed She Loved Flowers. He Made Her One.</a>
            </h2>
            <p class="blog-card-date">May 5, 2026</p>
            <p class="blog-card-excerpt">My son wanted to make his teacher a desert snake with his 3D pen. Then a cactus. Then a car. Then flowers.</p>
            <a href="/blog/posts/he-noticed-she-loved-flowers-he-made-her-one" class="blog-card-cta">Read More →</a>
          </article>

          <!-- Article Card: first-3d-pen -->
          <article class="blog-card">
            <p class="blog-card-tag">From the Studio</p>
            <h2 class="blog-card-title">
              <a href="/blog/posts/first-3d-pen">I Thought the 3D Pen Was for My Kid. Then I Picked It Up.</a>
            </h2>
            <p class="blog-card-date"><!-- 待內容確認後填入 --></p>
            <p class="blog-card-excerpt"><!-- 待內容確認後填入 --></p>
            <a href="/blog/posts/first-3d-pen" class="blog-card-cta">Read More →</a>
          </article>

        </div>
      </div>
    </section>

    <!-- Email Opt-in Section (預設隱藏，移除 style="display:none" 即可開啟) -->
    <section
      id="email-optin-section"
      style="display: none;"
      class="py-20 bg-[#FFF8EB]"
    >
      <div class="max-w-xl mx-auto px-6 text-center">
        <p class="text-xs font-medium tracking-[2px] uppercase text-[#B586AC] mb-3">Free Resource</p>
        <h2 class="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4" style="font-family: 'Lora', serif;">
          Get Your Free Starter Guide
        </h2>
        <p class="text-base text-[#3D3D3D] leading-relaxed mb-8 max-w-md mx-auto">
          A beginner-friendly 3D pen project — yours free. Drop your email and we'll send it right over.
        </p>

        <div v-if="!optinSubmitted">
          <form
            @submit.prevent="submitOptin"
            class="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <div class="flex-1 min-w-0">
              <input
                v-model="optinEmail"
                type="email"
                placeholder="Your email address"
                class="form-input w-full"
                :class="{ 'border-red-400': optinError }"
              >
              <p v-if="optinError" class="text-xs text-red-500 text-left mt-1">{{ optinError }}</p>
            </div>
            <button
              type="submit"
              class="flex-shrink-0 px-6 py-3 bg-[#E0A939] text-[#1A1A1A] font-bold rounded-full hover:brightness-105 transition-all whitespace-nowrap"
            >
              Send Me the Guide
            </button>
          </form>
        </div>

        <div v-else class="py-4">
          <p class="text-base text-[#6B441E] font-medium leading-relaxed">
            You're in! Check your inbox for the free guide.
            <span class="text-[#3D3D3D] font-normal">(If you don't see it in a few minutes, check your spam folder.)</span>
          </p>
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

useHead({
  title: 'From the Studio — Enki Atelier Blog',
  meta: [
    { name: 'description', content: '3D pen tips, project stories, and ideas for curious kids and adults. From the Enki Atelier studio.' }
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

.form-input {
  border: 1.5px solid rgba(223,198,224,0.6);
  border-radius: 0.6rem;
  padding: 0.6rem 0.85rem;
  display: block;
  width: 100%;
}
.form-input:focus {
  border-color: #6B441E;
  box-shadow: 0 0 0 3px rgba(107,68,30,0.1);
  outline: none;
}

/* ─── Blog Card (方案 D: 編輯風格) ─── */
.blog-card {
  border-left: 4px solid #6B441E;
  padding: 1.5rem 0 1.5rem 1.5rem;
  border-bottom: 0.5px solid rgba(223,198,224,0.4);
}
.blog-card:last-child {
  border-bottom: none;
}
.blog-card-tag {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #B586AC;
  margin-bottom: 0.5rem;
}
.blog-card-title {
  font-family: 'Lora', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1A1A1A;
  line-height: 1.45;
  margin-bottom: 0.4rem;
}
.blog-card-title a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}
.blog-card-title a:hover {
  color: #6B441E;
}
.blog-card-date {
  font-size: 0.8rem;
  color: #B586AC;
  margin-bottom: 0.6rem;
}
.blog-card-excerpt {
  font-size: 0.9rem;
  color: #3D3D3D;
  line-height: 1.7;
  margin-bottom: 0.9rem;
}
.blog-card-cta {
  font-size: 0.85rem;
  font-weight: 600;
  color: #6B441E;
  text-decoration: none;
  transition: color 0.2s;
}
.blog-card-cta:hover {
  color: #E0A939;
}
</style>
