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
        <div class="max-w-7xl mx-auto text-center px-4">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Which 3D Printing Pen is Good for My Kid?</h2>
            <div class="overflow-x-auto shadow-md rounded-lg">
                <table class="w-full table-auto border-collapse text-xs md:text-sm">
                    <thead>
                        <tr class="bg-[#DCBFDB] text-gray-800">
                            <th class="px-2 py-2 md:px-4 md:py-3 bg-[#FFF8EB] text-left">Feature</th>
                            <th v-for="(pen, index) in pens" :key="index" class="px-2 py-2 md:px-4 md:py-3 text-left whitespace-nowrap">{{ pen.name }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <td class="px-2 py-2 md:px-4 md:py-3 font-medium">Age</td>
                            <td v-for="(pen, index) in pens" :key="index" class="px-2 py-2 md:px-4 md:py-3">{{ pen.age }}</td>
                        </tr>
                        <tr class="border-b">
                            <td class="px-2 py-2 md:px-4 md:py-3 font-medium">Safety</td>
                            <td v-for="(pen, index) in pens" :key="index" class="px-2 py-2 md:px-4 md:py-3">{{ pen.safety }}</td>
                        </tr>
                        <tr class="border-b">
                            <td class="px-2 py-2 md:px-4 md:py-3 font-medium">Power</td>
                            <td v-for="(pen, index) in pens" :key="index" class="px-2 py-2 md:px-4 md:py-3">{{ pen.power }}</td>
                        </tr>
                        <tr class="border-b">
                            <td class="px-2 py-2 md:px-4 md:py-3 font-medium">Filament</td>
                            <td v-for="(pen, index) in pens" :key="index" class="px-2 py-2 md:px-4 md:py-3">{{ pen.filament }}</td>
                        </tr>
                        <tr class="border-b">
                            <td class="px-2 py-2 md:px-4 md:py-3 font-medium">Price</td>
                            <td v-for="(pen, index) in pens" :key="index" class="px-2 py-2 md:px-4 md:py-3">{{ pen.price }}</td>
                        </tr>
                        <tr class="border-b">
                            <td class="px-2 py-2 md:px-4 md:py-3 font-medium">Buy</td>
                            <td v-for="(pen, index) in pens" :key="index" class="px-2 py-2 md:px-4 md:py-3">
                                <a :href="pen.buyLink" target="_blank" rel="noopener noreferrer" class="text-orange-500 font-semibold hover:underline">Amazon</a>
                            </td>
                        </tr>
                        <!-- Disclaimer -->
                        <tr>
                            <td colspan="6" class="px-2 py-2 md:px-4 text-xs text-gray-600 text-right">
                                We might receive commissions if you click on our links and make purchases.
                            </td>
                        </tr>
                    </tbody>
                </table>
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

// 產品資料
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

// 3D 列印筆資料
const pens = ref([
  {
    name: "3Doodler Start+",
    age: "6-13 years",
    safety: "No hot parts",
    power: "Rechargeable",
    filament: "Eco PCL",
    price: "$49.99",
    buyLink: "https://amzn.to/3R1SQLB"
  },
  {
    name: "MYNT3D Pro",
    age: "Teens & Adults",
    safety: "High temp",
    power: "Plug-in",
    filament: "ABS, PLA",
    price: "$59.99",
    buyLink: "https://amzn.to/3Ry7avz"
  },
  {
    name: "MYNT3D Super",
    age: "Older Kids+",
    safety: "High temp",
    power: "Plug-in",
    filament: "ABS, PLA",
    price: "$39.99",
    buyLink: "https://amzn.to/3G7Ick4"
  },
  {
    name: "SCRIB3D P1",
    age: "Older Kids+",
    safety: "High temp",
    power: "Plug-in",
    filament: "ABS, PLA",
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

/* 完全移除媒體查詢，改用 Tailwind 的響應式類別實現 */
</style> 