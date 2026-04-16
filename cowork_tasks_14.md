# Enki Atelier Gallery 新增 — Claude Cowork 任務清單（第十四批）

請根據以下任務在 `pages/index.vue` 新增橫向捲動 Gallery Section。
每完成一項請告知，再進行下一項。

---

## 任務一：在 products ref 下方新增 gallery 資料

在 `<script setup>` 中，在 `products` ref 之後加入 `galleryItems` ref：

```js
const galleryItems = ref([
  {
    src: "/Gallery/Built_by_kids_01.png",
    alt: "3D pen rocket built by a kid — Enki Atelier STEAM kit",
    label: "Built by kids",
  },
  {
    src: "/Gallery/Workshop_02.png",
    alt: "Child using 3D pen with safety goggles and curriculum guide",
    label: "Workshop",
  },
  {
    src: "/Gallery/Built_by_kids_05.png",
    alt: "Testing a balancing mobile — Enki Atelier STEAM kit",
    label: "Built by kids",
  },
  {
    src: "/Gallery/Built_by_kids_04.png",
    alt: "Completed rocket and mobile from Enki Atelier kits",
    label: "Built by kids",
  },
  {
    src: "/Gallery/Workshop_04.png",
    alt: "Hands using 3D pen with finger caps and rocket template",
    label: "Workshop",
  },
  {
    src: "/Gallery/Built_by_kids_02.png",
    alt: "Balancing bird mobile completed — Enki Atelier STEAM kit",
    label: "Built by kids",
  },
  {
    src: "/Gallery/Workshop_01.png",
    alt: "Hands holding completed 3D pen rocket at workshop",
    label: "Workshop",
  },
  {
    src: "/Gallery/In_the_lab_01.png",
    alt: "PhD engineer designing rocket trajectory in the lab",
    label: "In the lab",
  },
])
```

---

## 任務二：新增 Gallery Section

在 `#themes` section（Products）和 `#cta` section（CTA）之間插入以下完整的 Gallery section：

```html
<!-- Gallery Section -->
<section id="gallery" class="py-20 bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 mb-8">
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

  <!-- 橫向捲動軌道 -->
  <div
    class="flex gap-4 overflow-x-auto pb-4 px-6 snap-x snap-mandatory scroll-smooth"
    style="scrollbar-width: none; -ms-overflow-style: none;"
  >
    <div
      v-for="(item, index) in galleryItems"
      :key="index"
      class="flex-shrink-0 w-64 md:w-72 snap-start"
    >
      <!-- 圖片 -->
      <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#FFF8EB]">
        <img
          :src="item.src"
          :alt="item.alt"
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        >
        <!-- 分類標籤 -->
        <span
          class="absolute top-3 left-3 text-xs font-medium bg-white/85 text-[#6B441E] px-2.5 py-1 rounded-full backdrop-blur-sm"
        >
          {{ item.label }}
        </span>
      </div>
    </div>

    <!-- 右側 padding 用的空白佔位 -->
    <div class="flex-shrink-0 w-6"></div>
  </div>

  <!-- 捲動提示 -->
  <div class="flex justify-center mt-6 gap-1.5">
    <span
      v-for="(item, index) in galleryItems"
      :key="index"
      class="w-1.5 h-1.5 rounded-full bg-[#DFC6E0]"
    ></span>
  </div>
</section>
```

---

## 任務三：在 `<style>` 加入隱藏捲軸樣式

在 `<style>` 區塊加入：

```css
/* 隱藏 gallery 橫向捲動條（Chrome/Safari） */
#gallery div::-webkit-scrollbar {
  display: none;
}
```

---

## 任務四：在導覽列加入 Gallery 連結

找到 `<nav>` 中的導覽連結區塊，在 `Products` 和 `Guide` 之間加入：

```html
<a href="#gallery" class="hover:text-[#E0A939] text-sm md:text-base">Gallery</a>
```

---

## 最後：Commit & Push 到新 Branch

```bash
git checkout -b feat/gallery-section
git add .
git commit -m "feat: add horizontal scroll gallery section with 9 images between products and cta"
git push origin feat/gallery-section
```
