<template>
  <div class="bg-white text-[#1A1A1A]">
    <!-- Navigation Bar -->
    <nav class="sticky top-0 w-full bg-[#FFF8EB] shadow-md z-50">
        <div class="max-w-[1450px] mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center">
            <!-- Logo and Brand Name -->
            <div class="flex items-center space-x-3">
                <img src="/logo.png" alt="Enki Atelier Logo" class="h-16 w-32 object-contain">
            </div>
            
            <!-- Navigation Links (在小螢幕上顯示在 logo 下方，大螢幕上顯示在右側) -->
            <div class="flex flex-wrap justify-center gap-2 md:gap-6 mt-3 md:mt-0">
                <a href="#hero" class="hover:text-[#E0A939] text-sm md:text-base">Home</a>
                <a href="#about" class="hover:text-[#E0A939] text-sm md:text-base">About</a>
                <a href="#themes" class="hover:text-[#E0A939] text-sm md:text-base">Products</a>
                <a href="#cta" class="hover:text-[#E0A939] text-sm md:text-base">Buy Now</a>
                <a href="#pens" class="hover:text-[#E0A939] text-sm md:text-base">Guide</a>
                <a href="#contact" class="hover:text-[#E0A939] text-sm md:text-base">Contact Us</a>
            </div>
        </div>
    </nav>
    
    <!-- Mobile Side Navigation Menu -->
    <!-- 已移除側邊欄導航 -->

    <!-- Hero Section -->
    <section id="hero" class="relative h-screen flex items-center">
      <img src="/brand-story.jpg" alt="Enki Atelier Brand Story"
           class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-[#6B441E]/95 via-[#6B441E]/70 to-transparent"></div>
      <div class="relative z-10 w-full md:w-1/2 lg:w-2/5 space-y-5 px-10 md:px-20">
        <p class="text-[#DFC6E0] text-xs font-medium tracking-[2.5px] uppercase">
          STEAM Kits · Ages 6–12 · PhD-Designed
        </p>
        <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight" style="font-family: 'Lora', serif;">
          Big Ideas Start<br>with Little Hands.
        </h1>
        <p class="text-base md:text-lg text-white/70 leading-relaxed max-w-[480px]">
          Hands-on STEAM kits designed by engineers and educators
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
      <div class="max-w-4xl mx-auto px-6 py-6 grid grid-cols-3 divide-x divide-[#DFC6E0]/30">
        <div class="flex items-center gap-3 justify-center px-6">
          <span class="text-2xl">🎓</span>
          <div>
            <p class="text-sm font-semibold text-[#6B441E]">PhD-Designed</p>
            <p class="text-xs text-[#3D3D3D]">Curriculum by engineers & educators</p>
          </div>
        </div>
        <div class="flex items-center gap-3 justify-center px-6">
          <span class="text-2xl">🔬</span>
          <div>
            <p class="text-sm font-semibold text-[#6B441E]">Real STEAM Concepts</p>
            <p class="text-xs text-[#3D3D3D]">Physics, math & spatial reasoning</p>
          </div>
        </div>
        <div class="flex items-center gap-3 justify-center px-6">
          <span class="text-2xl">👐</span>
          <div>
            <p class="text-sm font-semibold text-[#6B441E]">Hands-on & Screen-free</p>
            <p class="text-xs text-[#3D3D3D]">Active building, not passive viewing</p>
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
      "It didn't really work. They had a great time. That felt worth paying attention to."
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
          We think about what's coming for our kids. The world they're growing up in is hard to predict,
          and we're not going to pretend otherwise. What we keep returning to is simpler than it sounds:
          kids who know how to sit with a problem, get stuck, and keep going tend to be okay. We want to
          give them more practice at that, while it still feels like play and before the stakes get real.
        </p>
        <p class="text-sm text-[#B586AC] italic">
          The name comes from Enki, the Sumerian god of wisdom and craft. Old, a little obscure,
          and about the drive to make things rather than just know them. That felt right.
        </p>
      </div>

    </div>
  </div>
</section>

    <!-- Themes Section -->
    <section id="themes" class="py-20 bg-[#DFC6E0]">
      <div class="max-w-7xl mx-auto text-center px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-10">Our Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="bg-white rounded-2xl border border-[#DFC6E0]/40 shadow-sm flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <!-- 圖片區：放大置頂，高度 h-64 -->
            <div class="w-full h-64 bg-[#FFF8EB] flex items-center justify-center px-6 pt-6">
              <img
                :src="product.image"
                :alt="product.mainTitle"
                class="w-full h-full object-contain"
              >
            </div>

            <!-- 文字區 -->
            <div class="p-6 flex flex-col flex-1">
              <!-- 年齡標籤 -->
              <span class="text-xs font-semibold bg-[#FFF8EB] text-[#6B441E] border border-[#6B441E]/15 px-3 py-1 rounded-full self-start mb-4">
                Ages 6–12
              </span>

              <!-- 主標題：Lora serif、大、深色 -->
              <h3
                class="text-xl font-bold text-[#1A1A1A] mb-1 leading-snug"
                style="font-family: 'Lora', serif;"
              >
                {{ product.mainTitle }}
              </h3>

              <!-- 副標題：小、斜體、暗紫，與主標題明顯區隔 -->
              <p class="text-sm italic text-[#B586AC] mb-3">
                {{ product.subTitle }}
              </p>

              <!-- 說明文字 -->
              <p class="text-sm text-[#3D3D3D] leading-relaxed mb-5">
                {{ product.description }}
              </p>

              <!-- 技能標籤 -->
              <div class="flex flex-wrap gap-1.5 mt-auto">
                <span
                  v-for="skill in product.skills"
                  :key="skill"
                  class="text-xs bg-[#B586AC]/10 text-[#B586AC] border border-[#B586AC]/20 px-2 py-0.5 rounded-full"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section id="cta" class="py-24 bg-[#6B441E] text-center px-4">
      <p class="text-[#DFC6E0] text-xs font-medium tracking-[2px] uppercase mb-4">Start the Journey</p>
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4" style="font-family: 'Lora', serif;">
        Get Started Today!
      </h2>
      <p class="text-white/65 text-lg mb-8 max-w-md mx-auto">
        Empower kids with creative STEAM learning activities.
      </p>
      <a href="https://amzn.to/4jmS8G5" target="_blank" rel="noopener noreferrer"
         class="inline-block px-8 py-4 bg-[#E0A939] text-[#1A1A1A] font-bold rounded-full hover:brightness-105 transition-all text-base">
        Buy on Amazon
      </a>
    </section>
    
    <!-- Pen Comparison Section -->
    <section id="pens" class="py-20 bg-[#FFF8EB]">
        <div class="max-w-7xl mx-auto text-center px-2 sm:px-4">
            <h2 class="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">Which 3D Printing Pen is Good for My Kid?</h2>
            <p class="text-base text-[#3D3D3D] leading-relaxed max-w-2xl mx-auto mt-6 mb-10">
              If you haven't had a 3D pen before, start with the 3Doodler Start+. It has no hot parts,
              making it the safest option for younger kids, and it works well with all of our kits.
              The table below compares the main options if you want to explore further.
            </p>
            <div class="flex justify-center">
                <div class="overflow-x-auto shadow-md rounded-lg w-full max-w-full sm:max-w-full mx-auto">
                    <!-- 
                      表格設計說明：
                      1. 使用 table-auto 自動佈局表格，讓瀏覽器根據內容自動調整列寬
                      2. 響應式文字策略：
                         - 在最小螢幕上使用 9px 字體 
                         - xs 螢幕 (375px+) 使用 12px 字體
                         - sm 螢幕 (640px+) 使用 14px 字體
                         - md 螢幕 (768px+) 使用 16px 字體
                      3. 響應式內容：
                         - 小螢幕顯示縮寫版本 (inline sm:hidden)
                         - 大螢幕顯示完整版本 (hidden sm:inline)
                      4. 內邊距響應式設計：
                         - 最小螢幕: p-[2px] (非常小的內邊距)
                         - xs: px-1 py-1 (左右上下各 0.25rem)
                         - sm: px-2 py-2 (左右上下各 0.5rem)
                         - md: px-4 py-3 (左右 1rem，上下 0.75rem)
                      5. 表格容器設置：
                         - 小螢幕和大螢幕都撐滿容器寬度
                         - overflow-x-auto 允許在需要時水平捲動
                    -->
                    <table class="w-full table-auto border-collapse text-[9px] xs:text-[12px] sm:text-[14px] md:text-[16px] mx-auto">
                        <thead class="w-full">
                            <!-- 表頭行：使用淺紫色背景，Feature 欄位使用淺黃背景區分 -->
                            <tr class="bg-[#DFC6E0] text-[#1A1A1A] w-full">
                                <!-- Feature 標題列居中對齊 -->
                                <th class="p-[2px] xs:px-1 xs:py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 bg-[#FFF8EB] text-center w-1/5">Feature</th>
                                <!-- 筆品牌名稱：使用 whitespace-nowrap 防止文字換行 -->
                                <th v-for="(pen, index) in pens" :key="index" class="p-[2px] xs:px-1 xs:py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 whitespace-nowrap w-1/5">{{ pen.name }}</th>
                            </tr>
                        </thead>
                        <tbody class="w-full">
                            <!-- 年齡範圍行 -->
                            <tr class="border-b">
                                <!-- 特性名稱使用 font-medium 稍微增強顯示 -->
                                <td class="p-[2px] xs:px-1 xs:py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 font-medium">Age</td>
                                <!-- 循環渲染每支筆的資訊 -->
                                <td v-for="(pen, index) in pens" :key="index" class="p-[2px] xs:px-1 xs:py-1 sm:px-2 sm:py-2 md:px-4 md:py-3">
                                    <!-- 小螢幕顯示短版本 (6-13y)，大螢幕隱藏 -->
                                    <span class="inline sm:hidden">{{ pen.age.short }}</span>
                                    <!-- 小螢幕隱藏，大螢幕顯示完整版本 (6-13 years) -->
                                    <span class="hidden sm:inline">{{ pen.age.full }}</span>
                                </td>
                            </tr>
                            <!-- 安全性行 -->
                            <tr class="border-b">
                                <td class="p-[2px] xs:px-1 xs:py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 font-medium">Safety</td>
                                <td v-for="(pen, index) in pens" :key="index" class="p-[2px] xs:px-1 xs:py-1 sm:px-2 sm:py-2 md:px-4 md:py-3">
                                    <!-- 小螢幕顯示短版本，大螢幕隱藏 -->
                                    <span class="inline sm:hidden">{{ pen.safety.short }}</span>
                                    <!-- 小螢幕隱藏，大螢幕顯示完整版本 -->
                                    <span class="hidden sm:inline">{{ pen.safety.full }}</span>
                                </td>
                            </tr>
                            <!-- 電源類型行 -->
                            <tr class="border-b">
                                <td class="p-[2px] xs:px-1 xs:py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 font-medium">Power</td>
                                <td v-for="(pen, index) in pens" :key="index" class="p-[2px] xs:px-1 xs:py-1 sm:px-2 sm:py-2 md:px-4 md:py-3">
                                    <span class="inline sm:hidden">{{ pen.power.short }}</span>
                                    <span class="hidden sm:inline">{{ pen.power.full }}</span>
                                </td>
                            </tr>
                            <!-- 耗材類型行 -->
                            <tr class="border-b">
                                <td class="p-[2px] xs:px-1 xs:py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 font-medium">Filament</td>
                                <td v-for="(pen, index) in pens" :key="index" class="p-[2px] xs:px-1 xs:py-1 sm:px-2 sm:py-2 md:px-4 md:py-3">
                                    <span class="inline sm:hidden">{{ pen.filament.short }}</span>
                                    <span class="hidden sm:inline">{{ pen.filament.full }}</span>
                                </td>
                            </tr>
                            <!-- 價格行 -->
                            <tr class="border-b">
                                <td class="p-[2px] xs:px-1 xs:py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 font-medium">Price</td>
                                <td v-for="(pen, index) in pens" :key="index" class="p-[2px] xs:px-1 xs:py-1 sm:px-2 sm:py-2 md:px-4 md:py-3">{{ pen.price }}</td>
                            </tr>
                            <!-- 購買鏈接行 -->
                            <tr class="border-b">
                                <td class="p-[2px] xs:px-1 xs:py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 font-medium">Buy</td>
                                <td v-for="(pen, index) in pens" :key="index" class="p-[2px] xs:px-1 xs:py-1 sm:px-2 sm:py-2 md:px-4 md:py-3">
                                    <a
                                      :href="pen.buyLink"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      class="inline-block px-3 py-1.5 bg-[#6B441E] text-white text-xs font-semibold rounded-full hover:bg-[#6B441E]/85 transition-colors whitespace-nowrap"
                                    >
                                      Buy on Amazon
                                    </a>
                                </td>
                            </tr>
                            <!-- 免責聲明 - 橫跨所有列 (colspan="6") -->
                            <tr>
                                <td colspan="6" class="p-[2px] xs:px-1 xs:py-1 sm:px-2 text-[9px] sm:text-xs text-[#3D3D3D] text-right">
                                <!-- 免責聲明 -->
                                <span>We might receive commissions if you click on our links and make purchases.</span>                                </td>
                            </tr>
                        </tbody>
                    </table>
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
import { onMounted, ref } from 'vue';

// 產品資料 - 這是我們的產品展示資訊
// 資料結構：
// - mainTitle: 產品主標題（純文字）
// - subTitle: 產品副標題（純文字）
// - description: 產品描述文字
// - image: 產品圖片路徑
// - skills: 技能標籤陣列
const products = ref([
  {
    mainTitle: "Rocket Launcher STEM Kit for 3D Pens",
    subTitle: "Build a Rocket. Discover the Physics of Projectiles.",
    description: "Engineer real rockets that actually launch, guided by a Ph.D.-designed curriculum — complete with safety goggles and heat-resistant finger caps for confident, hands-on building.",
    image: "/starter-kit.jpg",
    skills: ["Physics", "Engineering", "3D Thinking"],
  },
  {
    mainTitle: "Balancing Bird & Mobile Engineering Kit for 3D Pens",
    subTitle: "Build to Balance. Discover the Physics of Equilibrium.",
    description: "Engineer gravity-defying birds and hanging mobiles that actually balance, guided by a Ph.D.-designed curriculum that teaches center-of-mass principles through hands-on, screen-free exploration.",
    image: "/balance.png",
    skills: ["Equilibrium", "Math", "Spatial Reasoning"],
  },
  {
    mainTitle: "Spatial Geometry Kit",
    subTitle: "Build, Explore, Understand.",
    description: "Transform geometry into a creative adventure. Through handouts, paper molds, and accessories, kids build and explore 3D shapes, making spatial reasoning both fun and educational.",
    image: "/spatial-geometry.png",
    skills: ["Geometry", "3D Thinking", "Creativity"],
  },
]);

// 3D 列印筆資料 - 用於比較表格
// 資料結構：
// - name: 筆的品牌名稱
// - age: 適合年齡 {short: 小螢幕顯示, full: 大螢幕顯示}
// - safety: 安全性描述 {short: 小螢幕顯示, full: 大螢幕顯示}
// - power: 電源類型 {short: 小螢幕顯示, full: 大螢幕顯示}
// - filament: 耗材類型 {short: 小螢幕顯示, full: 大螢幕顯示}
// - price: 價格顯示文字
// - buyLink: 亞馬遜購買連結 (含聯盟行銷代碼)
const pens = ref([
  {
    name: "3Doodler Start+",
    age: { short: "6-13y", full: "6-13 years" },
    safety: { short: "No hot", full: "No hot parts" },
    power: { short: "Recharge", full: "Rechargeable" },
    filament: { short: "Eco PCL\n(Limited Use)", full: "Eco PCL\n(Not fit all activities)" },
    price: "$49.99",
    buyLink: "https://amzn.to/4aIF63E"
  },
  {
    name: "MYNT3D Pro",
    age: { short: "Teens+", full: "Teens & Adults" },
    safety: { short: "High temp", full: "High temp" },
    power: { short: "Plug-in", full: "Plug-in" },
    filament: { short: "ABS/PLA", full: "ABS, PLA" },
    price: "$59.99",
    buyLink: "https://amzn.to/49lsYD6"
  },
  {
    name: "MYNT3D Super",
    age: { short: "Older Kids+", full: "Older Kids+" },
    safety: { short: "High temp", full: "High temp" },
    power: { short: "Plug-in", full: "Plug-in" },
    filament: { short: "ABS/PLA", full: "ABS, PLA" },
    price: "$39.99",
    buyLink: "https://amzn.to/4pl0gYW"
  },
  {
    name: "SCRIB3D P1",
    age: { short: "Older Kids+", full: "Older Kids+" },
    safety: { short: "High temp", full: "High temp" },
    power: { short: "Plug-in", full: "Plug-in" },
    filament: { short: "ABS/PLA", full: "ABS, PLA" },
    price: "$36.99",
    buyLink: "https://amzn.to/3MVjs2e"
  }
//   ,
//   {
//     name: "Pika3D Junior",
//     age: "6+ years",
//     safety: "No hot parts",
//     power: "Rechargeable",
//     filament: "Low-temp PCL",
//     price: "$39.99",
//     buyLink: "https://amzn.to/3E7aryP"
//   }
]);

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
</style> 
