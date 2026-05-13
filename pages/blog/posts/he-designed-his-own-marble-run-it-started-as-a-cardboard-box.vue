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
          He Designed His Own Marble Run. It Started as a Cardboard Box.
        </h1>
        <p class="text-sm text-[#B586AC]">April 17, 2026 · Enki Atelier</p>
      </div>
    </header>

    <!-- Article Body -->
    <article class="py-12 bg-white">
      <div class="max-w-[680px] mx-auto px-6 post-body">

        <p>The first toy I remember making was a piece of cardboard with two holes
        punched through the center and a loop of string threaded through both. Pull
        the string taut, release, pull again. The disc spun and hummed. That was
        the whole thing, and it was enough to occupy an entire afternoon.</p>

        <p>There was also a gun made from chopsticks and rubber bands, and a small
        raft cut from strips of bamboo. None of them took long. None of them cost
        anything. And all of them got modified, because when you make something
        yourself, you can always change it.</p>

        <h2>The marble run</h2>

        <figure>
          <img src="/blog/2026-04-17-marble-run-01.png" alt="A child's handmade cardboard marble run, shown with simple string and chopstick toy materials">
        </figure>

        <p>My son doesn't have bamboo lying around. But he had a pile of delivery
        boxes, and he wanted to build a marble run. We spent most of a Saturday
        cutting channels and ramps and walls, testing marbles, arguing about the
        angles, cutting again.</p>

        <p>He could have asked for one. They sell them. But this one had scoring
        zones he designed himself, and a trap: a section where marbles fall in and
        score negative points. He was very proud of the trap.</p>

        <p>It didn't look like something you would buy. The tape was visible. One
        wall was slightly crooked. It broke in two places during testing and we
        fixed it with more tape. He kept going back to modify something.</p>

        <p>The boxes were going to recycling anyway. When he was done, they went
        back. Around Earth Day, you notice things like that: where things come
        from, where they go.</p>

        <h2>What you do with something you made</h2>

        <p>He fixed it when it broke. Not because I told him to. Because he knew
        which wall had come loose. He'd been the one to put it there.</p>

        <p>Earth Day tends to focus on where things go when you're done. Less on
        whether you understood what you were holding: where it came from, how it
        fit together, what to do when something gives. The marble run came from
        boxes. He knew all of that. When it was done, it went back.</p>

        <h2>It transfers</h2>

        <p>The chopstick gun and the bamboo raft had their version of this. So does
        a 3D pen. A child who picks one up and starts building something, adjusts
        when it doesn't work, starts a piece over because it doesn't look right,
        is doing the same thing. I recognize it.</p>

        <p>If you're looking for projects that start the same way,
        <a href="/#themes" class="post-link">you can find them in our shop.</a></p>

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
              <a href="/blog/posts/he-noticed-she-loved-flowers-he-made-her-one">He Noticed She Loved Flowers. He Made Her One.</a>
            </h3>
            <p class="blog-card-date">May 5, 2026</p>
            <a href="/blog/posts/he-noticed-she-loved-flowers-he-made-her-one" class="blog-card-cta">Read More →</a>
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
  title: 'He Designed His Own Marble Run. It Started as a Cardboard Box. — Enki Atelier',
  meta: [
    { name: 'description', content: 'A mom on childhood toys made from string and bamboo, a marble run built from cardboard, and what Earth Day is really asking us to notice.' }
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
.nav-link { font-size: 0.875rem; color: #3D3D3D; transition: color 0.2s; }
.nav-link:hover { color: #E0A939; }
.nav-link-active { color: #6B441E; font-weight: 600; }
html { font-family: 'DM Sans', sans-serif; scroll-padding-top: 80px; }

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
.post-body img { width: 100%; height: auto; border-radius: 0.75rem; margin: 2em 0 0.5em; }
.post-body figcaption { text-align: center; font-size: 0.8rem; color: #B586AC; margin-bottom: 2em; }
.post-body figure { margin: 0; }
.post-link { color: #6B441E; text-decoration: underline; text-underline-offset: 3px; transition: color 0.2s; }
.post-link:hover { color: #E0A939; }

.blog-card { border-left: 4px solid #6B441E; padding: 1.25rem 0 1.25rem 1.5rem; border-bottom: 0.5px solid rgba(223,198,224,0.4); }
.blog-card:last-child { border-bottom: none; }
.blog-card-title { font-family: 'Lora', serif; font-size: 1.1rem; font-weight: 700; color: #1A1A1A; line-height: 1.45; margin-bottom: 0.4rem; }
.blog-card-title a { color: inherit; text-decoration: none; transition: color 0.2s; }
.blog-card-title a:hover { color: #6B441E; }
.blog-card-date { font-size: 0.8rem; color: #B586AC; margin-bottom: 0.6rem; }
.blog-card-cta { font-size: 0.85rem; font-weight: 600; color: #6B441E; text-decoration: none; transition: color 0.2s; }
.blog-card-cta:hover { color: #E0A939; }

.form-input { border: 1.5px solid rgba(223,198,224,0.6); border-radius: 0.6rem; padding: 0.6rem 0.85rem; display: block; width: 100%; font-family: 'DM Sans', sans-serif; }
.form-input:focus { border-color: #6B441E; box-shadow: 0 0 0 3px rgba(107,68,30,0.1); outline: none; }

@media (max-width: 640px) {
  .post-body h2 { font-size: 1.25rem; }
  .post-body { font-size: 1.03125rem; }
}
</style>
