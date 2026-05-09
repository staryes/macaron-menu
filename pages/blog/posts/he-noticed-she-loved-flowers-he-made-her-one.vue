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
        <h1 class="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-4" style="font-family: 'Lora', serif;">
          He Noticed She Loved Flowers. He Made Her One.
        </h1>
        <p class="text-sm text-[#B586AC]">May 5, 2026 · Enki Atelier</p>
      </div>
    </header>

    <!-- Article Body -->
    <article class="py-12 bg-white">
      <div class="max-w-[680px] mx-auto px-6 post-body">

        <p>I asked my son at dinner. What should we make for your teacher for
        Teacher Appreciation Week?</p>

        <p>He thought about it for maybe two seconds.</p>

        <p>"A snake," he said.</p>

        <p>A desert snake, specifically. His class had been in a desert unit for a
        few weeks. Sand dunes, camels, rattlesnakes. He wanted to make one with the
        3D pen and give it to her.</p>

        <p>I asked my son if he thought his teacher would want a rattlesnake on her desk.</p>

        <p>He considered this. Maybe not a rattlesnake. A friendlier desert snake.</p>

        <p>We kept going. A cactus next, still desert. Then a small car, because
        she'd mentioned once that she liked cars. Then a teddy bear, because she
        had one on her shelf and he thought it might want company.</p>

        <p>Then he said, "She told us she really likes flowers."</p>

        <p>That was the one.</p>

        <h2>Why not just bring real ones</h2>

        <p>We've brought his teacher real flowers before. She loves them. But a 3D
        pen flower lasts, and you get to choose the color. He already knew she'd
        like blue. You can't always find the right blue at a florist.</p>

        <p>He wanted to make something she'd keep.</p>

        <h2>The making</h2>

        <p>Before he touched the pen, he drew out the petal shapes on paper. He'd
        seen the project templates in our kits and wanted to do the same thing for
        himself. He wanted to figure out what he was building before he committed
        to the filament. The template he drew was very much his own. The petals
        were all different shapes and sizes.</p>

        <p>The thing about making a gift for a specific person is that you think
        differently about it. When he makes things for himself, wonky is fine. When
        it was for his teacher, he redid the petals twice because they didn't look
        right to him. Not because I said anything. He just looked at them, decided
        they weren't good enough, and started again.</p>

        <p>At one point the filament cooled unevenly on one petal and left a rough
        edge. He asked me if we should scrap it and start over. I said it was up
        to him. He held it up and looked at it for a second.</p>

        <p>"Real petals aren't perfect either," he said, and kept it.</p>

        <p>I wrote that down later so I wouldn't forget it.</p>

        <h2>This morning</h2>

        <figure>
          <img src="/blog/2026-05-05-flowers-finished-01.png" alt="A blue 3D pen flower made by a child for his teacher — Teacher Appreciation Week">
        </figure>

        <p>The flower is done. The stem has a slight bend in it and one of the
        petals is a little thicker than the others. He wrapped it in colored paper
        and wrote her name on a piece of tape.</p>

        <p>He brought it in this morning.</p>

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
        <div class="flex flex-col gap-0 max-w-2xl">
          <article class="blog-card">
            <h3 class="blog-card-title">
              <a href="/blog/posts/why-some-kids-need-to-make-something-first">Why Some Kids Need to Make Something First, and What Emotional Regulation Has to Do With It</a>
            </h3>
            <p class="blog-card-date">May 1, 2026</p>
            <a href="/blog/posts/why-some-kids-need-to-make-something-first" class="blog-card-cta">Read More →</a>
          </article>
          <article class="blog-card">
            <h3 class="blog-card-title">
              <a href="/blog/posts/he-designed-his-own-marble-run-it-started-as-a-cardboard-box">He Designed His Own Marble Run. It Started as a Cardboard Box.</a>
            </h3>
            <p class="blog-card-date">April 17, 2026</p>
            <a href="/blog/posts/he-designed-his-own-marble-run-it-started-as-a-cardboard-box" class="blog-card-cta">Read More →</a>
          </article>
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
  title: 'He Noticed She Loved Flowers. He Made Her One. — Enki Atelier',
  meta: [
    { name: 'description', content: 'My son wanted to make his teacher a desert snake with his 3D pen. Then a cactus. Then a car. Then flowers. A Teacher Appreciation Week story.' }
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
.nav-link:hover { color: #E0A939; }
.nav-link-active { color: #6B441E; font-weight: 600; }

html {
  font-family: 'DM Sans', sans-serif;
  scroll-padding-top: 80px;
}

.post-body {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.0625rem;
  color: #3D3D3D;
  line-height: 1.8;
}
.post-body p { margin-bottom: 1.6em; }
.post-body h2 {
  font-family: 'Lora', serif;
  font-size: 1.45rem;
  font-weight: 700;
  color: #1A1A1A;
  margin-top: 2.4em;
  margin-bottom: 0.8em;
  line-height: 1.35;
}
.post-body strong { font-weight: 600; color: #1A1A1A; }
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
.post-body figure { margin: 0; }
.post-link {
  color: #6B441E;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s;
}
.post-link:hover { color: #E0A939; }

.blog-card {
  border-left: 4px solid #6B441E;
  padding: 1.25rem 0 1.25rem 1.5rem;
  border-bottom: 0.5px solid rgba(223,198,224,0.4);
}
.blog-card:last-child { border-bottom: none; }
.blog-card-tag {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #B586AC;
  margin-bottom: 0.4rem;
}
.blog-card-title {
  font-family: 'Lora', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1A1A1A;
  line-height: 1.45;
  margin-bottom: 0.6rem;
}
.blog-card-title a { color: inherit; text-decoration: none; transition: color 0.2s; }
.blog-card-title a:hover { color: #6B441E; }
.blog-card-cta {
  font-size: 0.85rem;
  font-weight: 600;
  color: #6B441E;
  text-decoration: none;
  transition: color 0.2s;
}
.blog-card-cta:hover { color: #E0A939; }

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

@media (max-width: 640px) {
  .post-body h2 { font-size: 1.2rem; }
  .post-body { font-size: 1.03125rem; }
}
</style>
