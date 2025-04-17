<template>
  <div class="bg-white text-gray-800">
    <!-- Navigation Bar -->
    <nav class="sticky top-0 w-full bg-[#FFF8EB] shadow-md z-50">
        <div class="max-w-[1450px] mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center">
            <!-- Logo and Brand Name -->
            <div class="flex items-center space-x-3">
                <img src="/logo.png" alt="Enki Atelier Logo" class="h-16 w-32 object-contain">
            </div>
            
            <!-- Navigation Links (在小螢幕上顯示在 logo 下方，大螢幕上顯示在右側) -->
            <div class="flex flex-wrap justify-center gap-2 md:gap-6 mt-3 md:mt-0">
                <a href="#hero" class="hover:text-orange-500 text-sm md:text-base">Home</a>
                <a href="#about" class="hover:text-orange-500 text-sm md:text-base">About</a>
                <a href="#themes" class="hover:text-orange-500 text-sm md:text-base">Products</a>
                <a href="#pens" class="hover:text-orange-500 text-sm md:text-base">Guide</a>
                <a href="#cta" class="hover:text-orange-500 text-sm md:text-base">Buy Now</a>
                <a href="#contact" class="hover:text-orange-500 text-sm md:text-base">Contact Us</a>
            </div>
        </div>
    </nav>
    
    <!-- Mobile Side Navigation Menu -->
    <!-- 已移除側邊欄導航 -->

    <!-- Hero Section -->
    <section id="hero" class="h-screen bg-gradient-to-r from-[#DCBFDB] to-[#DC9F33] flex items-center justify-start text-left px-10 relative">
        <img src="/brand-story.jpg" alt="Enki Atelier Brand Story" class="absolute inset-0 w-full h-full object-cover opacity-50">
        <div class="relative w-full md:w-1/2 lg:w-1/3 space-y-4 text-left bg-white/10 p-4 md:p-8 rounded-lg shadow-lg mx-4 md:ml-48">
            <h1 class="text-2xl md:text-4xl font-bold text-[#FFFFFF]">Enki Atelier: Where Curiosity Meets Heartfelt Creation</h1>
            <p class="text-base md:text-lg text-[#FFFFFF]">As parents, we know the magic of watching our children's eyes light up with discovery. Those moments of wonder inspire everything we do at <strong>Enki Atelier</strong>. Founded by three PhD engineers and an art teacher, we create STEAM activity toys designed with love to nurture curiosity and spark creativity.</p>
            <p class="text-base md:text-lg text-[#FFFFFF]">Our mission is simple: to inspire a lifelong love of learning. Through hands-on play and thoughtful educational materials, we aim to create experiences that empower kids to explore, create, and dream—all while discovering the world around them.</p>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
        <div class="relative w-full sm:w-3/4 md:w-1/2 max-w-7xl mx-auto text-center px-4">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Unlock Creativity & Innovation with Hands-On STEAM Adventures!</h2>
            <p class="text-base md:text-lg text-gray-700 mb-6">Designed for curious minds grades K-5, the Enki Atelier <strong>3D Discovery Kits</strong> turn learning into an exciting, hands-on adventure. Using a 3D printing pen, kids explore engineering, design, and problem-solving in a fun, interactive way.</p>
            <p class="text-base md:text-lg text-gray-700 mb-6">In a world increasingly shaped by AI, hands-on creativity and problem-solving are more valuable than ever. Our kits empower kids with the skills AI can't replace—curiosity, adaptability, and the ability to bring ideas to life. More than just learning how things work, they'll learn how to think, create, and innovate, gaining the confidence to shape the future.</p>
            <p class="text-base md:text-lg text-gray-700">Let's build, explore, and invent together!</p>
        </div>
    </section>

    <!-- Themes Section -->
    <section id="themes" class="py-20 bg-[#DCBFDB]">
        <div class="max-w-7xl mx-auto text-center px-4">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Products</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                <!-- 使用 v-for 迴圈動態渲染產品卡片 -->
                <div v-for="(product, index) in products" :key="index" class="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4" v-html="product.title"></h3>
                    <p class="text-sm md:text-base text-gray-600">{{ product.description }}</p>
                    <img :src="product.image" :alt="product.title" class="mt-4 rounded-lg shadow-md w-2/3 mx-auto">
                </div>
            </div>
        </div>
    </section>

    <!-- Pen Comparison Section -->
    <section id="pens" class="py-20 bg-[#FFF8EB]">
        <div class="max-w-7xl mx-auto text-center px-2 sm:px-4">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Which 3D Printing Pen is Good for My Kid?</h2>
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
                            <tr class="bg-[#DCBFDB] text-gray-800 w-full">
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
                                    <a :href="pen.buyLink" target="_blank" rel="noopener noreferrer" class="text-orange-500 font-semibold hover:underline">Amazon</a>
                                </td>
                            </tr>
                            <!-- 免責聲明 - 橫跨所有列 (colspan="6") -->
                            <tr>
                                <td colspan="6" class="p-[2px] xs:px-1 xs:py-1 sm:px-2 text-[9px] sm:text-xs text-gray-600 text-right">
                                <!-- 免責聲明 -->
                                <span>We might receive commissions if you click on our links and make purchases.</span>                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action Section -->
    <section id="cta" class="py-20 bg-gradient-to-r from-[#DC9F33] to-[#603B1D] text-center text-white px-4">
        <h2 class="text-2xl md:text-3xl font-bold mb-6">Get Started Today!</h2>
        <p class="text-base md:text-lg mb-6">Empower kids with creative STEAM learning activities.</p>
        <a class="inline-block px-6 py-3 bg-white text-orange-500 font-semibold rounded-md hover:bg-gray-200">Coming Soon</a>
    </section>

    <!-- Contact Us Section -->
    <section id="contact" class="py-20 bg-[#FFF8EB]">
        <div class="max-w-4xl mx-auto text-center px-4">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p class="text-base md:text-lg text-gray-600 mb-6">Have questions? Get in touch with us!</p>

            <form action="https://formspree.io/f/mrbpyakl" method="POST" class="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-md mx-auto">
                <label class="block text-left mb-2 text-gray-700 font-semibold">Name:</label>
                <input type="text" name="name" required class="w-full border rounded-md p-2 mb-4">

                <label class="block text-left mb-2 text-gray-700 font-semibold">Email:</label>
                <input type="email" name="email" required class="w-full border rounded-md p-2 mb-4">

                <label class="block text-left mb-2 text-gray-700 font-semibold">Message:</label>
                <textarea name="message" required class="w-full border rounded-md p-2 mb-4 h-24"></textarea>

                <button type="submit" class="w-full bg-orange-400 text-white font-semibold py-2 rounded-md hover:bg-orange-300">Send Message</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#603B1D] text-white py-6 text-center px-4">
        <p class="text-sm md:text-base"><a href="mailto:info@enkiatelier.com?subject=STEAM%20Discovery%20Kit%20Inquiry&body=Hello%2C%0A%0AI%20have%20a%20question%20about%20your%20STEAM%20activity%20products." class="underline hover:text-orange-300">Email Us</a> © 2025 Enki Atelier. All rights reserved. </p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// 產品資料 - 這是我們的產品展示資訊
// 資料結構：
// - title: 產品名稱 (支援 HTML 標籤用於換行)
// - description: 產品描述文字
// - image: 產品圖片路徑
const products = ref([
  {
    title: "Luxury Starter Kit: Ignite Creativity!",
    description: "Kickstart your child's 3D printing adventure with 100+ carefully selected items! This all-in-one kit includes a heat-resistant silicone mat, finger caps for safety, and a variety of craft materials—everything needed for endless creativity right out of the box!",
    image: "/starter-kit.png"
  },
  {
    title: "Balance: <br>Play, Learn, and Explore Stability!",
    description: "Explore the science of balance with this engaging educational pack. Packed with handouts, paper molds, and accessories, it guides kids through fun activities that teach stability and equilibrium—making learning a hands-on adventure.",
    image: "/balance.png"
  },
  {
    title: "Spatial Geometry: <br>Build, Explore, Understand!",
    description: "Transform geometry into a creative adventure with this interactive curriculum guide. Through handouts, paper molds, and accessories, kids build and explore 3D shapes, making spatial reasoning both fun and educational.",
    image: "/spatial-geometry.png"
  }
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
    filament: { short: "Eco PCL", full: "Eco PCL" },
    price: "$49.99",
    buyLink: "https://amzn.to/3R1SQLB"
  },
  {
    name: "MYNT3D Pro",
    age: { short: "Teens+", full: "Teens & Adults" },
    safety: { short: "High temp", full: "High temp" },
    power: { short: "Plug-in", full: "Plug-in" },
    filament: { short: "ABS/PLA", full: "ABS, PLA" },
    price: "$59.99",
    buyLink: "https://amzn.to/43YOZXy"
  },
  {
    name: "MYNT3D Super",
    age: { short: "Older Kids+", full: "Older Kids+" },
    safety: { short: "High temp", full: "High temp" },
    power: { short: "Plug-in", full: "Plug-in" },
    filament: { short: "ABS/PLA", full: "ABS, PLA" },
    price: "$39.99",
    buyLink: "https://amzn.to/3G7Ick4"
  },
  {
    name: "SCRIB3D P1",
    age: { short: "Older Kids+", full: "Older Kids+" },
    safety: { short: "High temp", full: "High temp" },
    power: { short: "Plug-in", full: "Plug-in" },
    filament: { short: "ABS/PLA", full: "ABS, PLA" },
    price: "$36.99",
    buyLink: "https://amzn.to/4hX7KxB"
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
html {
  scroll-padding-top: 40px; /* 根據導航欄的高度調整 */
  font-family: Arial, sans-serif;
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