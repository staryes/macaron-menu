# Enki Atelier Gallery 視覺改善 — Claude Cowork 任務清單（第十六批）

請修改 `pages/index.vue` 的 Gallery Section。每完成一項請告知，再進行下一項。

---

## 任務一：重構 Gallery 卡片樣式

將 Gallery section 內的橫向捲動軌道和卡片模板完整替換為以下版本。

主要改動：
- 移除圓角裁切，改為霧化邊緣（CSS mask-image）
- 加入 CSS filter 暖化每張圖片色調
- 卡片放大為 `w-72 md:w-80`，高度固定 `h-72 md:h-80`
- 標籤樣式改為更低調的底部小字
- 加入左右導覽箭頭按鈕

```html
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
  <div class="relative">

    <!-- 左箭頭 -->
    <button
      @click="scrollGallery(-1)"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#DFC6E0] shadow-sm flex items-center justify-center hover:bg-[#FFF8EB] transition-colors"
      aria-label="Scroll left"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B441E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
    </button>

    <!-- 右箭頭 -->
    <button
      @click="scrollGallery(1)"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#DFC6E0] shadow-sm flex items-center justify-center hover:bg-[#FFF8EB] transition-colors"
      aria-label="Scroll right"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B441E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </button>

    <!-- 捲動軌道 -->
    <div
      ref="galleryTrack"
      class="flex gap-2 overflow-x-auto pb-4 px-16 snap-x snap-mandatory scroll-smooth"
      style="scrollbar-width: none; -ms-overflow-style: none;"
    >
      <div
        v-for="(item, index) in galleryItems"
        :key="index"
        class="gallery-card flex-shrink-0 w-72 md:w-80 snap-start"
      >
        <div class="gallery-img-wrap w-full h-72 md:h-80 overflow-hidden">
          <img
            :src="item.src"
            :alt="item.alt"
            class="gallery-img w-full h-full object-cover"
            :class="`gallery-filter-${index}`"
            loading="lazy"
          >
        </div>
        <!-- 分類標籤：低調小字放在圖片下方 -->
        <p class="text-xs text-[#B586AC] text-center mt-2 tracking-wide">
          {{ item.label }}
        </p>
      </div>

      <!-- 右側 padding -->
      <div class="flex-shrink-0 w-10"></div>
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
```

---

## 任務二：加入 galleryTrack ref 和 scrollGallery 函式

在 `<script setup>` 中加入：

```js
import { ref } from 'vue'

const galleryTrack = ref(null)

function scrollGallery(direction) {
  if (!galleryTrack.value) return
  const cardWidth = 320 // w-80 = 320px
  galleryTrack.value.scrollBy({
    left: direction * (cardWidth + 8), // 8px = gap-2
    behavior: 'smooth'
  })
}
```

---

## 任務三：在 `<style>` 加入 Gallery 視覺樣式

在 `<style>` 區塊加入以下樣式：

```css
/* ─── Gallery ─── */

/* 隱藏捲軸（Chrome/Safari） */
#gallery div::-webkit-scrollbar {
  display: none;
}

/* 霧化邊緣：四周透明，中心清晰 */
.gallery-img-wrap {
  -webkit-mask-image: radial-gradient(ellipse 85% 85% at center, black 50%, transparent 100%);
  mask-image: radial-gradient(ellipse 85% 85% at center, black 50%, transparent 100%);
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
```

---

## 最後：Commit & Push 到新 Branch

```bash
git checkout -b design/gallery-visual-improvements
git add .
git commit -m "design: gallery feathered edges, warm color filters, nav arrows, label moved below image"
git push origin design/gallery-visual-improvements
```
