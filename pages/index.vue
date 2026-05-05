<template>
  <div class="bg-white text-[#1A1A1A]">
    <!-- Navigation Bar -->
    <nav class="sticky top-0 w-full bg-[#FFF8EB] shadow-sm z-50 border-b border-[#DFC6E0]/40">

      <!-- 主列：固定高度 64px，Logo 置左，漢堡置右 -->
      <div class="max-w-[1450px] mx-auto w-full relative flex items-center py-2 px-6 md:px-12">

        <!-- Logo -->
        <a href="#hero" class="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Enki Atelier Logo"
            class="object-contain"
            :style="{ height: logoHeight, width: 'auto', maxHeight: '100%' }"
          >
        </a>

        <!-- 桌機連結：絕對置中 -->
        <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6">
          <a href="#hero"    class="nav-link">Home</a>
          <a href="#about"   class="nav-link">About</a>
          <a href="#themes"  class="nav-link">Products</a>
          <a href="#gallery" class="nav-link">Gallery</a>
          <a href="#cta"     class="nav-link">Buy Now</a>
          <a href="#pens"    class="nav-link">Guide</a>
          <a href="/blog"    class="nav-link">Blog</a>
          <a href="#faq"     class="nav-link">FAQ</a>
          <a href="#contact" class="nav-link">Contact Us</a>
        </div>

        <!-- 漢堡按鈕：絕對靠右 -->
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

      <!-- 手機展開選單 -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden border-t border-[#DFC6E0]/40 bg-[#FFF8EB] px-6 py-4 flex flex-col gap-4"
      >
        <a href="#hero"    class="nav-link text-base py-1" @click="mobileMenuOpen = false">Home</a>
        <a href="#about"   class="nav-link text-base py-1" @click="mobileMenuOpen = false">About</a>
        <a href="#themes"  class="nav-link text-base py-1" @click="mobileMenuOpen = false">Products</a>
        <a href="#gallery" class="nav-link text-base py-1" @click="mobileMenuOpen = false">Gallery</a>
        <a href="#cta"     class="nav-link text-base py-1" @click="mobileMenuOpen = false">Buy Now</a>
        <a href="#pens"    class="nav-link text-base py-1" @click="mobileMenuOpen = false">Guide</a>
        <a href="/blog"    class="nav-link text-base py-1" @click="mobileMenuOpen = false">Blog</a>
        <a href="#faq"     class="nav-link text-base py-1" @click="mobileMenuOpen = false">FAQ</a>
        <a href="#contact" class="nav-link text-base py-1" @click="mobileMenuOpen = false">Contact Us</a>
      </div>

    </nav>
    
    <!-- Mobile Side Navigation Menu -->
    <!-- 已移除側邊欄導航 -->

    <!-- Hero Section -->
    <section id="hero" class="relative h-screen flex items-center">
      <img src="/hero-image.jpg" alt="Enki Atelier Brand Story"
           class="absolute inset-0 w-full h-full object-cover object-[center_20%] md:object-center">
      <div class="absolute inset-0 bg-gradient-to-r from-[#6B441E]/95 via-[#6B441E]/70 to-transparent"></div>
      <div class="relative z-10 w-full md:w-1/2 lg:w-2/5 space-y-5 px-10 md:px-20">
        <p class="text-[#DFC6E0] text-xs font-medium tracking-[2.5px] uppercase">
          STEAM Kits · Ages 6–12 · PhD-Designed
        </p>
        <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight" style="font-family: 'Lora', serif;">
          Big Ideas Start<br>with Little Hands.
        </h1>
        <p class="text-base md:text-lg font-medium text-white/80 tracking-wide">
          Science Kits for Kids Who Like to Build.
        </p>
        <p class="text-base md:text-lg text-white/70 leading-relaxed max-w-[480px]">
          Hands-on STEM kits with real science and art, designed by engineers and educators
          who refused to settle for "good enough."
        </p>
        <div class="flex flex-wrap gap-3 pt-2">
          <a href="#themes" class="inline-block px-6 py-3 bg-[#E0A939] text-[#1A1A1A] font-bold rounded-full hover:brightness-105 transition-all">
            Explore Kits
          </a>
          <a href="#about" class="inline-block px-6 py-3 border border-white/40 text-white/85 rounded-full hover:bg-white/10 transition-all">
            Our Story →
          </a>
        </div>
      </div>
    </section>

    <!-- Trust Bar -->
    <div class="bg-[#FFF8EB] border-b border-[#DFC6E0]/30">
      <div class="max-w-4xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-3 md:divide-x divide-[#DFC6E0]/30 gap-4 md:gap-0">

        <div class="flex items-center gap-3 justify-start md:justify-center md:px-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B441E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
          <div>
            <p class="text-sm font-semibold text-[#6B441E]">Expert-Designed</p>
            <p class="text-xs text-[#3D3D3D] hidden md:block">PhD engineers & art educator</p>
          </div>
        </div>

        <div class="flex items-center gap-3 justify-start md:justify-center md:px-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B441E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
            <path d="M9 3h6M9 3v8l-4 9h14l-4-9V3"/>
            <path d="M6 18h.01M10 16h.01"/>
          </svg>
          <div>
            <p class="text-sm font-semibold text-[#6B441E]">Standards-Aligned Curriculum</p>
            <p class="text-xs text-[#3D3D3D] hidden md:block">NGSS & Common Core Science</p>
          </div>
        </div>

        <div class="flex items-center gap-3 justify-start md:justify-center md:px-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B441E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
            <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
            <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
          </svg>
          <div>
            <p class="text-sm font-semibold text-[#6B441E]">Hands-on & Screen-free</p>
            <p class="text-xs text-[#3D3D3D] hidden md:block">Active building, not passive viewing</p>
          </div>
        </div>

      </div>
    </div>

<!-- About Section -->
<section id="about" class="py-24 bg-white">
  <div class="max-w-5xl mx-auto px-6">

    <!-- 引言 -->
    <blockquote
      class="text-2xl md:text-3xl font-semibold text-[#6B441E] leading-snug mb-14 max-w-2xl border-l-4 border-[#E0A939] pl-8"
      style="font-family: 'Lora', serif;"
    >
      "They had a great time. And somewhere in that mess, we realized this was the most engaged we'd seen them in months."
    </blockquote>

    <!-- 兩欄內文 -->
    <div class="grid md:grid-cols-2 gap-10 text-[#3D3D3D] leading-relaxed text-base">

      <!-- 左欄：起源故事 -->
      <div class="space-y-5">
        <p>
          It started with a Halloween costume. Our kid wanted legs that could collect candy on their own.
          We're a little fuzzy on the exact mechanics they had in mind, but we spent a weekend trying to
          figure it out together anyway.
        </p>
        <p>
          That weekend stuck with us. We started looking for kits that could give them more of that —
          the building, the figuring-out, the not-quite-working-but-trying-again. We couldn't find what
          we wanted. The 3D pen sets were fine for doodling and then stopped. The STEM kits "for girls"
          were just the regular ones in different packaging. Nothing was wrong with them exactly.
          They just didn't go anywhere.
        </p>
        <p>
          So we made what we wanted to exist.
        </p>
      </div>

      <!-- 右欄：理念與使命 -->
      <div class="space-y-5">
        <p>
          Every Enki kit is designed by <strong class="text-[#6B441E]">PhD engineers and an art educator
          who are also parents</strong> — not as a credential, but because it changes how you think about
          what "too hard" means for a seven-year-old, and where the real engagement lives inside a
          learning curve.
        </p>
        <p>
          Kids are born curious. They don't need to be convinced to explore — they just need
          the right invitation. What we build isn't just real science content. It is genuinely
          fun. The rocket actually launches. The bird actually balances. That moment of "wait,
          it worked" is what keeps kids coming back, and it is where the real learning happens.
        </p>
        <p class="text-sm text-[#B586AC] italic leading-relaxed mt-4">
          The name comes from Enki, the Sumerian god of wisdom and craft. Old, a little obscure,
          and about the drive to make things rather than just know them. That felt right.
        </p>
      </div>

    </div>
  </div>
</section>

    <!-- Themes Section -->
    <section id="themes" class="py-24 bg-[#FFF8EB]">
      <div class="max-w-7xl mx-auto text-center px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">Our Products</h2>
        <p class="text-base text-[#3D3D3D] leading-relaxed max-w-2xl mx-auto mt-4 mb-10 text-center">
          Every kit comes with a full-color curriculum guide, printed in the USA with
          real-lab step-by-step photos taken in our own studio. All guides are
          pre-punched for three-ring binders so kids can build a personal science
          library as the series grows.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="bg-white rounded-2xl border border-[#DFC6E0]/40 shadow-sm flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <!-- 圖片區：固定高度，有連結才包 <a> -->
            <component
              :is="product.amazonUrl ? 'a' : 'div'"
              :href="product.amazonUrl || undefined"
              :target="product.amazonUrl ? '_blank' : undefined"
              :rel="product.amazonUrl ? 'noopener noreferrer' : undefined"
              class="w-full h-64 bg-[#FFF8EB] flex items-center justify-center px-6 py-6 group flex-shrink-0"
              :class="{ 'cursor-pointer': product.amazonUrl }"
            >
              <img
                :src="product.image"
                :alt="`${product.mainTitle} — hands-on STEAM kit for kids ages 6-12 | Enki Atelier`"
                class="w-full h-full object-contain transition-transform duration-300"
                :class="{ 'group-hover:scale-105': product.amazonUrl }"
              >
            </component>

            <!-- 文字區：flex-grow 撐滿，讓所有卡片底部對齊 -->
            <div class="p-6 flex flex-col flex-grow">

              <!-- 年齡標籤 -->
              <div class="flex items-center gap-2 mb-4">
                <span class="text-xs font-semibold bg-[#FFF8EB] text-[#6B441E] border border-[#6B441E]/15 px-3 py-1 rounded-full">
                  {{ product.ageTag }}
                </span>
                <span v-if="!product.amazonUrl" class="text-xs font-medium bg-[#DFC6E0] text-[#6B441E] px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>

              <!-- 主標題 -->
              <h3
                class="text-lg font-bold text-[#1A1A1A] mb-1 leading-snug"
                style="font-family: 'Lora', serif;"
              >
                {{ product.mainTitle }}
              </h3>

              <!-- 副標題 -->
              <p class="text-sm italic text-[#B586AC] mb-3">
                {{ product.subTitle }}
              </p>

              <!-- 說明文字 -->
              <p class="text-sm text-[#3D3D3D] leading-relaxed mb-5">
                {{ product.description }}
              </p>

              <!-- Kit 內容清單 -->
              <div class="mt-3 mb-4 pt-3 border-t border-[#DFC6E0]/40">
                <p class="text-xs font-semibold text-[#6B441E] uppercase tracking-wide mb-2">
                  What's Included
                </p>
                <ul class="space-y-1">
                  <li
                    v-for="item in product.includes"
                    :key="item"
                    class="text-xs text-[#3D3D3D] flex items-start gap-1.5"
                  >
                    <span class="text-[#E0A939] mt-0.5 flex-shrink-0">✓</span>
                    {{ item }}
                  </li>
                </ul>
                <p class="text-xs text-[#B586AC] italic mt-2">
                  3D pen required, purchased separately.
                </p>
              </div>

              <!-- 技能標籤：mt-auto 推到底部，各卡片對齊 -->
              <div class="flex flex-wrap gap-1.5 mt-auto pt-2">
                <span
                  v-for="skill in product.skills"
                  :key="skill"
                  :aria-label="`STEAM skill: ${skill}`"
                  class="text-xs bg-[#B586AC]/10 text-[#B586AC] border border-[#B586AC]/20 px-2 py-0.5 rounded-full"
                >
                  {{ skill }}
                </span>
              </div>

              <!-- 購買按鈕 / Coming Soon -->
              <div class="mt-5 pt-4 border-t border-[#DFC6E0]/40">
                <a
                  v-if="product.amazonUrl"
                  :href="product.amazonUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center gap-2 w-full py-2.5 bg-[#6B441E] text-white text-sm font-semibold rounded-full hover:bg-[#6B441E]/85 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Buy on Amazon
                </a>
                <div
                  v-else
                  class="flex items-center justify-center w-full py-2.5 bg-[#DFC6E0]/30 text-[#B586AC] text-sm font-medium rounded-full"
                >
                  Coming Soon
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 md:px-12">

        <p class="text-xs font-medium tracking-[2px] uppercase text-[#B586AC] mb-2 text-center">What Parents Say</p>
        <h2 class="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-16" style="font-family: 'Lora', serif;">
          Heard from the Field
        </h2>

        <!-- 手機版：輪播 -->
        <div class="md:hidden"
             @touchstart="testimonialTouchStart"
             @touchend="testimonialTouchEnd">
          <div class="overflow-hidden">
            <div class="flex transition-transform duration-400 ease-in-out"
                 :style="{ transform: `translateX(-${testimonialIndex * 100}%)` }">
              <div v-for="(t, i) in testimonials" :key="i" class="w-full flex-shrink-0 px-2 text-center">
                <div class="text-[2.5rem] leading-none text-[#DFC6E0]/60 font-serif mb-3 select-none">&ldquo;</div>
                <p class="text-base text-[#3D3D3D] leading-relaxed font-light mb-6" style="font-family: 'Lora', serif;">{{ t.quote }}</p>
                <p class="text-xs font-semibold text-[#6B441E] tracking-wide">{{ t.author }}</p>
              </div>
            </div>
          </div>
          <!-- 圓點指示器 -->
          <div class="flex justify-center gap-2 mt-10">
            <button v-for="(t, i) in testimonials" :key="i"
                    @click="testimonialIndex = i"
                    class="rounded-full transition-all duration-300"
                    :class="testimonialIndex === i ? 'w-5 h-2 bg-[#6B441E]' : 'w-2 h-2 bg-[#DFC6E0]'"
                    :aria-label="`Go to testimonial ${i + 1}`">
            </button>
          </div>
        </div>

        <!-- 桌機版：兩欄留白排版 -->
        <div class="hidden md:grid grid-cols-2 gap-x-16 gap-y-12">
          <div v-for="(t, i) in testimonials" :key="i">
            <div class="text-[2rem] leading-none text-[#DFC6E0]/60 font-serif mb-3 select-none">&ldquo;</div>
            <p class="text-base text-[#3D3D3D] leading-relaxed font-light mb-5" style="font-family: 'Lora', serif;">{{ t.quote }}</p>
            <p class="text-xs font-semibold text-[#6B441E] tracking-wide">{{ t.author }}</p>
          </div>
        </div>

      </div>
    </section>

    <!-- Buying Guide Section -->
    <section id="pens" class="py-24 bg-[#FFF8EB]">
      <div class="max-w-3xl mx-auto px-6">

        <!-- 標題 -->
        <div class="text-center mb-10">
          <p class="text-xs font-medium tracking-[2px] uppercase text-[#B586AC] mb-2">Buying Guide</p>
          <h2 class="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-5" style="font-family: 'Lora', serif;">
            Choosing a 3D Pen for Your Enki Kit
          </h2>
          <p class="text-base text-[#3D3D3D] leading-relaxed max-w-xl mx-auto">
            Our kits are curriculum and material sets. You bring the 3D pen, and one pen
            works across all kits in the Enki series. Pen requirements vary by kit, so
            use the guide below to find the right match.
          </p>
        </div>

        <!-- 兩個套件說明卡 -->
        <div class="space-y-5 mb-10">

          <!-- Rocket Kit -->
          <div class="bg-white rounded-2xl border border-[#DFC6E0]/50 p-6">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-[#FFF8EB] border border-[#6B441E]/15 flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B441E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2c-4 3-5 7-5 10h10c0-3-1-7-5-10z"/>
                  <circle cx="12" cy="9" r="1.5" fill="#6B441E" stroke="none"/>
                  <path d="M7 12l-3 5h4"/>
                  <path d="M17 12l3 5h-4"/>
                  <path d="M10 17a2 2 0 0 0 4 0"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base font-bold text-[#1A1A1A] mb-1" style="font-family: 'Lora', serif;">
                  Rocket Launcher Kit
                </h3>
                <p class="text-sm text-[#3D3D3D] mb-3">
                  Requires a pen that uses <strong class="text-[#6B441E]">PLA or ABS filament</strong>.
                  Low-temp PCL pens cannot provide the rigidity needed for the elastic launch mechanism.
                </p>
                <p class="text-xs text-[#B586AC] mb-3">
                  Compatible with: MYNT3D Super, MYNT3D Pro, SCRIB3D P1, 7TECH 3D Pen,
                  TECBOSS 3D Pen, Dikale 3D Pen, and most standard PLA or ABS pens
                </p>
                <div class="flex flex-wrap gap-2">
                  <a href="https://amzn.to/4pl0gYW" target="_blank" rel="noopener noreferrer"
                     class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
                    MYNT3D Super
                  </a>
                  <a href="https://amzn.to/49lsYD6" target="_blank" rel="noopener noreferrer"
                     class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
                    MYNT3D Pro
                  </a>
                  <a href="https://amzn.to/3MVjs2e" target="_blank" rel="noopener noreferrer"
                     class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
                    SCRIB3D P1
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Balancing Bird Kit -->
          <div class="bg-white rounded-2xl border border-[#DFC6E0]/50 p-6">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-[#FFF8EB] border border-[#6B441E]/15 flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B441E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="3" x2="12" y2="21"/>
                  <polyline points="4 7 12 3 20 7"/>
                  <line x1="4" y1="21" x2="20" y2="21"/>
                  <path d="M4 7l-2 5.5a4 4 0 0 0 8 0z"/>
                  <path d="M16 7l-2 5.5a4 4 0 0 0 8 0z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base font-bold text-[#1A1A1A] mb-1" style="font-family: 'Lora', serif;">
                  Balancing Bird &amp; Mobile Kit
                </h3>
                <p class="text-sm text-[#3D3D3D] mb-3">
                  Works with <strong class="text-[#6B441E]">any standard 3D pen</strong>, including
                  low-temp PCL options. A flexible starting point for families new to 3D pens.
                </p>
                <p class="text-xs text-[#B586AC] mb-3">
                  Compatible with: most PLA, ABS, and PCL pens including low-temp models.
                  Works with 3Doodler Start+, MYNT3D Super, MYNT3D Pro, SCRIB3D P1,
                  7TECH 3D Pen, TECBOSS 3D Pen, Dikale 3D Pen, and most standard 3D pens
                </p>
                <div class="flex flex-wrap gap-2">
                  <a href="https://amzn.to/4aIF63E" target="_blank" rel="noopener noreferrer"
                     class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
                    3Doodler Start+
                  </a>
                  <a href="https://amzn.to/4pl0gYW" target="_blank" rel="noopener noreferrer"
                     class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
                    MYNT3D Super
                  </a>
                  <a href="https://amzn.to/49lsYD6" target="_blank" rel="noopener noreferrer"
                     class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
                    MYNT3D Pro
                  </a>
                  <a href="https://amzn.to/3MVjs2e" target="_blank" rel="noopener noreferrer"
                     class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
                    SCRIB3D P1
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- 免責聲明 -->
        <p class="text-xs text-[#3D3D3D]/50 text-center italic">
          We may receive commissions if you purchase through our links.
          These are pens we recommend based on compatibility, not paid partnerships.
        </p>

      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-20 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 mb-10">
        <p class="text-xs font-medium tracking-[2px] uppercase text-[#B586AC] mb-2 text-center">
          In the Wild
        </p>
        <h2
          class="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center"
          style="font-family: 'Lora', serif;"
        >
          Real Kids. Real Builds.
        </h2>
      </div>

      <!-- 捲動容器 + 箭頭 -->
      <div class="relative px-4 md:px-8">

        <!-- 左箭頭 -->
        <button
          @click="scrollGallery(-1)"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#DFC6E0] shadow-sm flex items-center justify-center hover:bg-[#FFF8EB] transition-colors"
          aria-label="Scroll left"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B441E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <!-- 右箭頭 -->
        <button
          @click="scrollGallery(1)"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#DFC6E0] shadow-sm flex items-center justify-center hover:bg-[#FFF8EB] transition-colors"
          aria-label="Scroll right"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B441E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        <!-- 捲動軌道 -->
        <div
          ref="galleryTrack"
          @scroll="onScroll"
          class="flex overflow-x-auto scroll-smooth gap-3"
          style="scrollbar-width: none; -ms-overflow-style: none;"
        >
          <!-- 左側佔位：讓第一張可以置中 -->
          <div ref="leftSpacer" class="flex-shrink-0" style="width: 0px;"></div>

          <div
            v-for="(item, index) in galleryItems"
            :key="index"
            class="gallery-card flex-shrink-0 w-64 md:w-80"
            :style="getCardStyle(index)"
          >
            <div class="gallery-img-wrap w-full aspect-square md:aspect-auto md:h-80 overflow-hidden">
              <img
                :src="item.src"
                :alt="item.alt"
                class="gallery-img w-full h-full object-contain md:object-cover bg-[#F5F0EB]"
                :style="{ objectPosition: item.position }"
                :class="`gallery-filter-${index}`"
                loading="lazy"
              >
            </div>
          </div>

          <!-- 右側佔位：讓最後一張可以置中 -->
          <div ref="rightSpacer" class="flex-shrink-0" style="width: 0px;"></div>
        </div>
      </div>

      <!-- 點點指示器 -->
      <div class="flex justify-center mt-4 gap-1.5">
        <span
          v-for="(item, index) in galleryItems"
          :key="index"
          class="w-1.5 h-1.5 rounded-full bg-[#DFC6E0]"
        ></span>
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

        <!-- 表單 -->
        <div id="optin-form-wrap">
          <form
            id="optin-form"
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

        <!-- 感謝訊息（送出後顯示） -->
        <div v-if="optinSubmitted" class="py-4">
          <p class="text-base text-[#6B441E] font-medium leading-relaxed">
            You're in! Check your inbox for the free guide.
            <span class="text-[#3D3D3D] font-normal">(If you don't see it in a few minutes, check your spam folder.)</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section id="cta" class="py-24 bg-[#6B441E] text-center px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4" style="font-family: 'Lora', serif;">
        Build Something Real.
      </h2>
      <p class="text-white/75 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
        Full curriculum, all materials, photo-guided instructions. For kids who want to understand why it works — not just that it does.
      </p>
      <a href="https://www.amazon.com/stores/page/518CC82B-0DF3-4C27-8BB5-D45F16EC48A3?channel=Official%20Website" target="_blank" rel="noopener noreferrer"
         class="inline-block px-8 py-4 bg-[#E0A939] text-[#1A1A1A] font-bold rounded-full hover:brightness-105 transition-all text-base">
        Buy on Amazon
      </a>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-24 bg-white">
      <div class="max-w-3xl mx-auto px-6">
        <div class="text-center mb-12">
          <p class="text-xs font-medium tracking-[2px] uppercase text-[#B586AC] mb-2">Got Questions</p>
          <h2 class="text-3xl md:text-4xl font-bold text-[#1A1A1A]" style="font-family: 'Lora', serif;">
            Frequently Asked Questions
          </h2>
        </div>

        <div class="space-y-4">

          <!-- FAQ 0 -->
          <div class="faq-item" :class="{ open: openFaq === 0 }">
            <button class="faq-question w-full text-left" @click="toggleFaq(0)">
              Does the rocket actually fly, or is it just a decoration?
            </button>
            <Transition name="faq">
              <p v-show="openFaq === 0" class="faq-answer">
                It really flies. The rocket uses an elastic launch mechanism to teach projectile
                motion. It is a functional experiment, not a decoration. If it is not taking off
                right away, it usually just needs a small alignment tweak. That troubleshooting
                moment is part of the learning. The curriculum guide includes pro flight setup
                tips on pages 14 to 16.
              </p>
            </Transition>
          </div>

          <!-- FAQ 1 -->
          <div class="faq-item" :class="{ open: openFaq === 1 }">
            <button class="faq-question w-full text-left" @click="toggleFaq(1)">
              Which 3D pen works with each kit?
            </button>
            <Transition name="faq">
              <p v-show="openFaq === 1" class="faq-answer">
                The answer depends on which kit you are using.
                <br><br>
                <strong>Rocket Launcher Kit</strong> requires a pen that uses PLA or ABS
                filament. Low-temp PCL filament is too flexible for the elastic launch
                mechanism and will not hold the structure needed for a successful launch.
                Common compatible pens include MYNT3D, SCRIB3D, and most standard PLA pens.
                <br><br>
                <strong>Balancing Bird &amp; Mobile Kit</strong> works with any standard
                3D pen, including low-temp PCL pens. This makes it a flexible choice for
                families who already own a pen of any type.
                <br><br>
                See the pen comparison guide on this page for more details.
              </p>
            </Transition>
          </div>

          <!-- FAQ 2 -->
          <div class="faq-item" :class="{ open: openFaq === 2 }">
            <button class="faq-question w-full text-left" @click="toggleFaq(2)">
              What age are Enki STEAM kits designed for?
            </button>
            <Transition name="faq">
              <p v-show="openFaq === 2" class="faq-answer">
                Enki's product line is designed for kids ages 6 to 12. Our current kits are
                rated for ages 8 and up, based on project complexity and the handling of
                small components. Future kits will extend to younger age groups, so kids
                can grow with the Enki curriculum from early exploration through more
                advanced engineering challenges.
              </p>
            </Transition>
          </div>

          <!-- FAQ 3 -->
          <div class="faq-item" :class="{ open: openFaq === 3 }">
            <button class="faq-question w-full text-left" @click="toggleFaq(3)">
              How is this different from regular 3D pen stencils?
            </button>
            <Transition name="faq">
              <p v-show="openFaq === 3" class="faq-answer">
                Most 3D pen stencils are just shapes to trace. Kids finish in 20 minutes
                and there is nowhere to go next. Enki kits are built around real science
                concepts, with curriculum inspired by Common Core State Standards and the
                Next Generation Science Standards (NGSS). The Rocket Launcher kit teaches
                projectile motion and structural stability. The Balancing Bird kit explores
                center-of-mass and equilibrium. Kids do not just make something. They
                understand why it works.
              </p>
            </Transition>
          </div>

          <!-- FAQ 4 -->
          <div class="faq-item" :class="{ open: openFaq === 4 }">
            <button class="faq-question w-full text-left" @click="toggleFaq(4)">
              Do kids need prior experience with 3D pens?
            </button>
            <Transition name="faq">
              <p v-show="openFaq === 4" class="faq-answer">
                No prior experience needed. The curriculum is designed to be accessible
                to first-time 3D pen users. The step-by-step photo instructions make it
                easy to follow along, and kids can work at their own pace.
              </p>
            </Transition>
          </div>

          <!-- FAQ 5 -->
          <div class="faq-item" :class="{ open: openFaq === 5 }">
            <button class="faq-question w-full text-left" @click="toggleFaq(5)">
              What is included in each kit?
            </button>
            <Transition name="faq">
              <p v-show="openFaq === 5" class="faq-answer">
                <strong>Rocket Launcher Kit</strong> includes a full-color curriculum guide
                (pre-punched for binders), a dual-surface heat-resistant silicone mat,
                safety goggles, Finger caps in child and adult sizes, precision tweezers,
                thread scissors, and 90+ project materials and components.
                <br><br>
                <strong>Balancing Bird &amp; Mobile Kit</strong> includes a curriculum
                guide of 60+ pages (pre-punched for binders), a lay-flat template booklet
                for easy tracing, a clear PET building sheet, a custom balancing bird
                stand, professional-grade acrylic rods, high-strength fishing line, and
                project materials and components.
                <br><br>
                Neither kit includes a 3D pen. You use your own, and one pen works across
                all kits in the Enki series.
              </p>
            </Transition>
          </div>

          <!-- FAQ 6 -->
          <div class="faq-item" :class="{ open: openFaq === 6 }">
            <button class="faq-question w-full text-left" @click="toggleFaq(6)">
              Is the curriculum guide easy to follow and store?
            </button>
            <Transition name="faq">
              <p v-show="openFaq === 6" class="faq-answer">
                Yes. Every guide is printed in full color with real step-by-step photos
                taken in our own lab. All guides are pre-punched for three-ring binders
                so kids can collect each kit's curriculum as the series grows. The
                Balancing Bird kit also includes a separate lay-flat template booklet
                that opens completely flat for easy tracing while referencing the guide.
              </p>
            </Transition>
          </div>

          <!-- FAQ 7 -->
          <div class="faq-item" :class="{ open: openFaq === 7 }">
            <button class="faq-question w-full text-left" @click="toggleFaq(7)">
              Where can I buy Enki kits?
            </button>
            <Transition name="faq">
              <p v-show="openFaq === 7" class="faq-answer">
                Enki kits are available on Amazon. You can find links to each kit in the
                Products section above, or visit our
                <a href="https://www.amazon.com/stores/EnkiAtelier/page/518CC82B-0DF3-4C27-8BB5-D45F16EC48A3?lp_asin=B0GV9CVBJ5&ref_=ast_bln"
                   target="_blank" rel="noopener noreferrer"
                   class="text-[#6B441E] underline hover:text-[#E0A939] transition-colors">
                  Enki Atelier storefront on Amazon
                </a>.
              </p>
            </Transition>
          </div>

        </div>
      </div>
    </section>

    <!-- Contact Us Section -->
    <section id="contact" class="py-20 bg-white">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">Contact Us</h2>
        <p class="text-base md:text-lg text-[#3D3D3D] mb-6">Have questions? Get in touch with us!</p>

        <form action="https://formspree.io/f/mrbpyakl" method="POST" class="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-md mx-auto border border-[#DFC6E0]/30">
          <label class="block text-left mb-2 text-[#3D3D3D] font-semibold">Name:</label>
          <input type="text" name="name" required class="form-input w-full mb-4">

          <label class="block text-left mb-2 text-[#3D3D3D] font-semibold">Email:</label>
          <input type="email" name="email" required class="form-input w-full mb-4">

          <label class="block text-left mb-2 text-[#3D3D3D] font-semibold">Message:</label>
          <textarea name="message" required class="form-input w-full mb-4 h-24"></textarea>

          <button type="submit"
                  class="w-full bg-[#6B441E] text-white font-semibold py-3 rounded-full hover:bg-[#6B441E]/90 transition-colors">
            Send Message
          </button>
        </form>
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
import { onMounted, onUnmounted, nextTick, ref } from 'vue';

const mobileMenuOpen = ref(false)
function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

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

// Testimonials 輪播
const testimonials = [
  { quote: "It was his first time making something with a 3D pen, completely new for him!! Even after we left, he was still playing with the rocket at the restaurant.", author: "— TJ, mom" },
  { quote: "What I really loved was watching how it got them thinking — trying out their own tweaks, comparing what worked and what didn't. I could see their confidence growing with each try. It's rare to find something that keeps them curious, keeps them safe, and lets you enjoy being right there with them.", author: "— K., Verified Amazon Customer" },
  { quote: "My daughter was able to understand what she was building and it kept her interest the whole time. I also liked that the designs are more stable than other kits we've tried; the finished pieces hold up well instead of falling apart right away.", author: "— J., Verified Amazon Customer" },
  { quote: "I'm an engineer. We were honestly surprised how much we can do with it. This kit does not feel like the usual craft-style 3D pen projects — it's more open-ended, but still clearly about science. I tried other STEM kits before, and many of them my kid forgets after one time.", author: "— X., Verified Amazon Customer" },
  { quote: "Standard stencils are basically just glorified coloring books — my kids lost interest fast. This kit changed everything. If you want actual quality time instead of just 'busy work,' this is the one to get.", author: "— Ja., Verified Amazon Customer" },
  { quote: "My daughter and I had a much more detailed investigation after it didn't balance at first — figuring out where to add weight to make it work. What most people call 'trouble-shooting' I call 'creative problem solving.' That's actually where the learning takes place.", author: "— A., Verified Amazon Customer" },
]
const testimonialIndex = ref(0)
let testimonialTouchStartX = 0

function testimonialTouchStart(e) {
  testimonialTouchStartX = e.touches[0].clientX
}
function testimonialTouchEnd(e) {
  const dx = e.changedTouches[0].clientX - testimonialTouchStartX
  if (dx < -40 && testimonialIndex.value < testimonials.length - 1) testimonialIndex.value++
  if (dx > 40 && testimonialIndex.value > 0) testimonialIndex.value--
}

// Logo 響應式尺寸
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

// 產品資料 - 這是我們的產品展示資訊
// 資料結構：
// - mainTitle: 產品主標題（純文字）
// - subTitle: 產品副標題（純文字）
// - description: 產品描述文字
// - image: 產品圖片路徑
// - skills: 技能標籤陣列
const products = ref([
  {
    mainTitle: "Projectile Science STEM Kit for 3D Pens | Rocket Launcher Project",
    subTitle: "Build a Rocket. Discover the Physics of Projectiles.",
    description: "A complete engineering journey designed by PhD engineers to master the physics of projectiles. The full-color, photo-guided curriculum takes kids through real science principles and STEM challenges, transforming a 3D pen into a precise engineering tool. Every build is calibrated for structural stability so the rocket actually launches. Screen-free, hands-on, and built for ages 8 and up.",
    image: "/starter-kit.jpg",
    ageTag: "Ages 8–12",
    skills: ["Projectile Motion", "Physics", "3D Pen Engineering", "Hands-on STEM"],
    amazonUrl: "https://amazon.com/dp/B0FGYGBL1W",
    includes: [
      "Full-color curriculum guide (pre-punched for binders)",
      "Dual-surface heat-resistant silicone mat",
      "Safety goggles",
      "Finger caps (child & adult sizes)",
      "Precision tweezers + thread scissors",
      "90+ project materials & components",
    ],
  },
  {
    mainTitle: "Balancing Science STEM Kit for 3D Pens | Balancing Bird & 4-in-1 Space Mobile Projects",
    subTitle: "Build to Balance. Discover the Physics of Equilibrium.",
    description: "A complete engineering journey through the physics of equilibrium. The PhD-designed curriculum guides kids through center-of-mass principles and STEM challenges, teaching them to find the precise balance point in every build. Whether constructing a balancing bird or an elegant hanging mobile, every creation is designed to actually stay upright and function as expected.",
    image: "/balance.png",
    ageTag: "Ages 8–12",
    skills: ["Center of Mass", "Equilibrium", "3D Pen Engineering", "Spatial Reasoning"],
    amazonUrl: "https://www.amazon.com/dp/B0GV9CVBJ5?maas=maas_adg_BE3AA8DDFDE8D152411F56AD6DE1278B_afap_abs&ref_=aa_maas&tag=maas",
    includes: [
      "Curriculum guide, 60+ pages (pre-punched for binders)",
      "Template booklet (lay-flat binding for easy tracing)",
      "Clear PET building sheet",
      "Custom balancing bird stand",
      "Professional-grade acrylic rods",
      "High-strength fishing line",
      "Project materials & components",
    ],
  },
  {
    mainTitle: "Spatial Geometry STEM Kit for 3D Pens",
    subTitle: "Build, Explore, Understand.",
    description: "Transform geometry into a creative adventure. Through handouts, paper molds, and accessories, kids build and explore 3D shapes, making spatial reasoning both fun and educational.",
    image: "/spatial-geometry.png",
    ageTag: "Ages 8–12",
    skills: ["Spatial Geometry", "3D Thinking", "Math", "Hands-on Learning"],
    amazonUrl: null,
    includes: [
      "Interactive curriculum guide with handouts",
      "Paper molds for 3D shape building",
      "Accessories and reference materials",
    ],
  },
]);

const galleryTrack = ref(null)
const leftSpacer = ref(null)
const rightSpacer = ref(null)
const centerIndex = ref(4)

function getCardStyle(index) {
  const dist = Math.abs(index - centerIndex.value)
  const scale = Math.max(0.84, 1 - dist * 0.07)
  const opacity = Math.max(0.75, 1 - dist * 0.10)
  return {
    transform: `scale(${scale})`,
    opacity,
    transition: 'transform 0.35s ease, opacity 0.35s ease'
  }
}

function getCardMeasure() {
  const track = galleryTrack.value
  if (!track) return { cardWidth: 256, gap: 12 }
  const cards = track.querySelectorAll('.gallery-card')
  if (cards.length < 2) return { cardWidth: 256, gap: 12 }
  const c0 = cards[0].getBoundingClientRect()
  const c1 = cards[1].getBoundingClientRect()
  const cardWidth = c0.width
  const gap = c1.left - c0.right
  return { cardWidth, gap }
}

function getTargetScroll(index) {
  const track = galleryTrack.value
  if (!track) return 0
  const { cardWidth, gap } = getCardMeasure()
  const spacerWidth = parseFloat(leftSpacer.value?.style.width || '0')
  return spacerWidth + index * (cardWidth + gap) - track.clientWidth / 2 + cardWidth / 2
}

function setupSpacersAndCenter() {
  const track = galleryTrack.value
  if (!track || track.clientWidth === 0) return false

  const { cardWidth } = getCardMeasure()
  const spacerWidth = track.clientWidth / 2 - cardWidth / 2

  if (leftSpacer.value)  leftSpacer.value.style.width  = spacerWidth + 'px'
  if (rightSpacer.value) rightSpacer.value.style.width = spacerWidth + 'px'

  track.scrollLeft = getTargetScroll(4)
  centerIndex.value = 4
  return true
}

function scrollGallery(direction) {
  const track = galleryTrack.value
  if (!track) return
  const newIndex = Math.max(0, Math.min(galleryItems.value.length - 1, centerIndex.value + direction))
  track.scrollTo({ left: getTargetScroll(newIndex), behavior: 'smooth' })
  centerIndex.value = newIndex
}

function onScroll() {
  const track = galleryTrack.value
  if (!track) return
  const { cardWidth, gap } = getCardMeasure()
  const spacerWidth = parseFloat(leftSpacer.value?.style.width || '0')
  const trackCenter = track.scrollLeft + track.clientWidth / 2
  const closest = Math.round((trackCenter - spacerWidth - cardWidth / 2) / (cardWidth + gap))
  centerIndex.value = Math.max(0, Math.min(galleryItems.value.length - 1, closest))
}

const galleryItems = ref([
  {
    src: "/Gallery/In_the_lab_01.png",
    alt: "PhD engineer designing rocket trajectory in the lab",
    position: "center center",
  },
  {
    src: "/Gallery/Workshop_01.png",
    alt: "Hands holding completed 3D pen rocket at workshop",
    position: "center center",
  },
  {
    src: "/Gallery/Workshop_02.png",
    alt: "Child using 3D pen with safety goggles and curriculum guide",
    position: "center top",
  },
  {
    src: "/Gallery/Built_by_kids_05.png",
    alt: "Testing a balancing mobile — Enki Atelier STEAM kit",
    position: "center center",
  },
  {
    src: "/Gallery/Built_by_kids_01.png",
    alt: "3D pen rocket built by a kid — Enki Atelier STEAM kit",
    position: "center center",
  },
  {
    src: "/Gallery/Workshop_04.png",
    alt: "Hands using 3D pen with finger caps and rocket template",
    position: "center top",
  },
  {
    src: "/Gallery/Built_by_kids_02.png",
    alt: "Balancing bird mobile completed — Enki Atelier STEAM kit",
    position: "center center",
  },
  {
    src: "/Gallery/Built_by_kids_04.png",
    alt: "Completed rocket and mobile from Enki Atelier kits",
    position: "center center",
  },
  {
    src: "/Gallery/Backup_01.png",
    alt: "Two pairs of hands holding completed 3D pen creations",
    position: "center center",
  },
])

onMounted(async () => {
  await nextTick()
  const tryCenter = (attempt = 0) => {
    if (attempt > 5) return
    const ok = setupSpacersAndCenter()
    if (!ok) setTimeout(() => tryCenter(attempt + 1), 200)
  }
  setTimeout(() => tryCenter(), 100)
})

// FAQ 展開/收合狀態管理
const openFaq = ref(0) // 預設第一題展開

function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? null : index
}

// 頁面渲染後綁定平滑捲動功能
// 使所有內部連結 (#hero, #about 等) 點擊後平滑捲動到目標位置
onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
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

:root {
  --enki-brown:    #6B441E;
  --enki-gold:     #E0A939;
  --enki-lilac:    #DFC6E0;
  --enki-mauve:    #B586AC;
  --enki-cream:    #FFF8EB;
  --enki-charcoal: #3D3D3D;
  --enki-dark:     #1A1A1A;
}

html {
  font-family: 'DM Sans', sans-serif;
  scroll-padding-top: 80px;
}
h1, h2, h3 {
  font-family: 'Lora', serif;
}


/* 聯絡表單樣式 */
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

/* ─── FAQ 過渡動畫 ─── */
.faq-enter-active,
.faq-leave-active {
  transition: opacity 0.2s ease, max-height 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}
.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  max-height: 0;
}

/* ─── FAQ ─── */
.faq-item {
  border: 0.5px solid rgba(223,198,224,0.5);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: box-shadow 0.2s;
}
.faq-item.open {
  box-shadow: 0 2px 12px rgba(107,68,30,0.06);
}
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--enki-dark);
  cursor: pointer;
  list-style: none;
  background: var(--enki-cream);
  gap: 1rem;
}
.faq-question::-webkit-details-marker { display: none; }
.faq-question::after {
  content: '+';
  font-size: 1.25rem;
  font-weight: 300;
  color: var(--enki-brown);
  flex-shrink: 0;
  transition: transform 0.2s;
}
.faq-item.open .faq-question::after {
  content: '−';
  transform: none;
}
.faq-answer {
  padding: 0.75rem 1.25rem 1.25rem;
  font-size: 0.9rem;
  color: var(--enki-charcoal);
  line-height: 1.7;
  background: white;
}

/* 自定義響應式斷點 */
@media (min-width: 375px) {
  .xs\:text-xs {
    font-size: 0.75rem;
  }
  .xs\:text-\[8px\] {
    font-size: 8px;
  }
  .xs\:text-\[9px\] {
    font-size: 9px;
  }
  .xs\:text-\[10px\] {
    font-size: 10px;
  }
  .xs\:px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .xs\:py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
}

/* ─── Gallery ─── */

/* 隱藏捲軸（Chrome/Safari） */
#gallery div::-webkit-scrollbar {
  display: none;
}

/* 霧化邊緣：四周透明，中心清晰 */
.gallery-img-wrap {
  -webkit-mask-image: radial-gradient(ellipse 75% 95% at center, black 55%, transparent 92%);
  mask-image: radial-gradient(ellipse 75% 95% at center, black 55%, transparent 92%);
}

/* 基礎暖化：所有圖片統一套用 */
.gallery-img {
  filter: brightness(1.05) saturate(0.9) sepia(0.08);
  transition: filter 0.3s;
}

/* 個別圖片微調（降低各張色調差異） */

/* Built_by_kids_01：自然光基準，輕微調整 */
.gallery-filter-0 {
  filter: brightness(1.02) saturate(0.95) sepia(0.06);
}

/* Workshop_02：偏冷偏白，加暖降亮 */
.gallery-filter-1 {
  filter: brightness(0.95) saturate(0.85) sepia(0.12) warmth(1);
}

/* Built_by_kids_05：逆光，降對比加暖 */
.gallery-filter-2 {
  filter: brightness(0.92) contrast(0.9) saturate(0.9) sepia(0.1);
}

/* Built_by_kids_04：藍色背景，降飽和加暖 */
.gallery-filter-3 {
  filter: brightness(1.05) saturate(0.75) sepia(0.15);
}

/* Workshop_04：偏冷偏白，加暖 */
.gallery-filter-4 {
  filter: brightness(0.95) saturate(0.85) sepia(0.12);
}

/* Built_by_kids_02：灰色背景，輕微暖化 */
.gallery-filter-5 {
  filter: brightness(1.05) saturate(0.85) sepia(0.08);
}

/* Workshop_01：偏暗，提亮加暖 */
.gallery-filter-6 {
  filter: brightness(1.1) saturate(0.9) sepia(0.1);
}

/* In_the_lab_01：色調尚可，輕微暖化 */
.gallery-filter-7 {
  filter: brightness(1.02) saturate(0.9) sepia(0.08);
}
</style> 
