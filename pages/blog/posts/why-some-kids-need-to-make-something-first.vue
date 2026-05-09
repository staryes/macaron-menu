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
          Why Some Kids Need to Make Something First, and What Emotional Regulation Has to Do With It
        </h1>
        <p class="text-sm text-[#B586AC]">May 1, 2026</p>
      </div>
    </header>

    <!-- Article Body -->
    <article class="py-12 bg-white">
      <div class="max-w-[680px] mx-auto px-6 post-body">

        <p>A parent at one of our workshops said something I've heard from a lot of
        different parents, in a lot of different words. Her son had been impossible
        all afternoon. Then he sat down to build something, and didn't move for
        forty minutes.</p>

        <p>"I don't understand it," she said. "He can't sit still for five minutes,
        but give him something to make and he just disappears into it."</p>

        <p>She wasn't wrong to find it strange. It looks like a contradiction. The
        same child who can't get through dinner without getting up three times will
        sometimes work through a full project without looking up once. What's
        happening in those forty minutes is worth understanding, because it's not
        a coincidence, and it doesn't happen by accident.</p>

        <p>May is Mental Health Awareness Month. Most of the conversation this month
        focuses on awareness and access to professional support. What families can
        do at home to actively support children's mental health gets less attention.
        Emotional regulation sits at the center of that question: the capacity to
        manage one's internal state well enough to focus, tolerate frustration, and
        stay with something difficult. Children who develop this skill early carry
        it into every area of their lives. Making things is one of the most direct
        ways to build it.</p>

        <h2>The nervous system is looking for something to hold onto</h2>

        <p>When a child is dysregulated, wound up, scattered, on edge, their nervous
        system is scanning for input it can organize around. Physical, hands-on work
        with immediate sensory feedback gives it exactly that: the warmth and slight
        resistance of the material, the visible result of each movement, the
        predictable loop of action and outcome. The body settles. The brain
        follows.</p>

        <p>For some children, this effect is especially pronounced. Children whose
        nervous systems require more sensory input to find equilibrium, or who have
        a harder time filtering out the noise of a busy day, often become
        surprisingly focused once their hands are fully engaged. The activity isn't
        competing with their energy. It's giving it somewhere to go.</p>

        <h2>What parents call "focused," researchers call flow</h2>

        <p>Psychologist Mihaly Csikszentmihalyi described flow as complete absorption in an activity
        where skill and challenge are well matched, feedback is immediate, and the
        sense of time dissolves. It's been studied extensively in adults, but
        children enter it too, and they enter it through exactly the kind of
        activity that looks like play.</p>

        <p>Most of the conditions for flow appear in hands-on making almost by
        default. Building a structure that has to balance. Running a circuit and
        watching it light up. Shaping something with a 3D pen. The task is physical
        and visible. Progress is immediate. Difficulty scales naturally with
        developing skill. The feedback is real-time, and that feedback loop is what
        keeps attention engaged rather than drifting.</p>

        <p>When a parent says "he's so focused when he's building," they're
        describing a child in flow. That's not a personality quirk. Given the right
        activity, it shows up reliably.</p>

        <h2>Why this matters beyond the forty minutes</h2>

        <p>Flow and the regulation that makes it possible aren't just pleasant while
        they're happening. The research on self-regulation in children consistently
        shows it is one of the strongest predictors of later academic performance
        and long-term wellbeing. In several studies, the correlation is stronger
        than IQ or socioeconomic background.</p>

        <p>A 2011 study by psychologist Dr. Terrie Moffitt and colleagues followed participants across 32
        years and found that childhood self-control predicted adult health, financial
        stability, and a range of other outcomes more reliably than intelligence or
        family circumstances. Dr. Clancy Blair and Dr. Rachel Razza (2007) found that effortful control
        and executive function in kindergarten-age children were significantly
        associated with emerging math and literacy ability. The correlation was
        stronger than general intelligence measures.</p>

        <p>Making things is one of the most accessible ways for a young child to
        practice exactly this capacity. Sustained attention. Tolerance for
        frustration. The ability to return to a task after the structure collapses,
        the circuit doesn't close, or the filament does something unexpected. No
        one is teaching those things explicitly. The activity demands them, and the
        child rises to meet it.</p>

        <h2>The homework after the making</h2>

        <p>Something I've observed consistently, in workshop settings and in
        conversations with parents: when a child spends thirty or forty minutes in
        focused making before a transition to more cognitively demanding work, the
        transition tends to go better. Not always, and not as a formula. But often
        enough to be worth noting.</p>

        <p>The child who has just come out of flow is not the same child who walked
        in still carrying the residue of the school day. Something has reset. The
        regulated state doesn't disappear the moment the project is set down. It
        carries, at least partially, into what comes next.</p>

        <p>Parents sometimes describe this as their child being "easier to reach"
        after making something. More willing to try a hard problem. Less likely to
        shut down at the first sign of difficulty. That's not coincidence. That's
        what a regulated nervous system looks like from the outside.</p>

        <h2>What this looks like in practice</h2>

        <p>The activity doesn't need to be long. For many children, twenty to thirty
        minutes of absorbed making is enough to produce a noticeable shift. Duration
        matters less than the quality of engagement: a task with a clear goal, real
        sensory feedback, and enough structure to prevent frustration without
        removing the sense of genuine problem-solving.</p>

        <p>This is something we think about carefully when designing projects. The
        goal isn't just a finished object. It's the particular kind of focused
        engagement that produces the object, and what that engagement does for the
        child in the time after.</p>

        <p>If you're looking for projects designed with that balance in mind,
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
              <a href="/blog/posts/he-noticed-she-loved-flowers-he-made-her-one">He Noticed She Loved Flowers. He Made Her One.</a>
            </h3>
            <p class="blog-card-date">May 5, 2026</p>
            <a href="/blog/posts/he-noticed-she-loved-flowers-he-made-her-one" class="blog-card-cta">Read More →</a>
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
  title: 'Why Some Kids Need to Make Something First, and What Emotional Regulation Has to Do With It — Enki Atelier',
  meta: [
    { name: 'description', content: 'Why does your child focus better when building? The neuroscience of making, emotional regulation, and why the calm that follows carries into everything else.' }
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
  margin-bottom: 0.4rem;
}
.blog-card-title a { color: inherit; text-decoration: none; transition: color 0.2s; }
.blog-card-title a:hover { color: #6B441E; }
.blog-card-date { font-size: 0.8rem; color: #B586AC; margin-bottom: 0.6rem; }
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
