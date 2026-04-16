# Enki Atelier 網站內容與排版改善 — Claude Cowork 任務清單（第二批）

請根據以下任務逐步修改 `pages/index.vue`。每完成一項請告知，再進行下一項。

---

## 任務一：更新品牌故事文案與 About Section 排版

### 1-A　更新引言（blockquote）

將 About Section 的 `<blockquote>` 內文改為：

```
"It didn't really work. They had a great time. That felt worth paying attention to."
```

### 1-B　更新左欄內文（兩段）

將左欄的兩個 `<p>` 改為以下三段：

```html
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
```

### 1-C　更新右欄內文（三段）

將右欄的所有 `<p>` 改為以下三段：

```html
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
```

---

## 任務二：重構產品資料結構

在 `<script setup>` 中，將 `products` ref 的資料結構改為：將原本單一的 `title`（含 HTML 標籤）拆分成 `mainTitle` 和 `subTitle` 兩個純文字欄位，並加入 `skills` 陣列。

將 `products` 替換為：

```js
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
```

---

## 任務三：重構產品卡片模板（Products Section）

將 `#themes` section 裡的 `v-for` 卡片模板整段替換為：

```html
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
```

---

## 任務四：在 Pen Comparison Section 加入引言段落

在 `#pens` section 的 `<h2>` 標題下方、表格之前，插入以下段落：

```html
<p class="text-base text-[#3D3D3D] leading-relaxed max-w-2xl mx-auto mt-6 mb-10">
  If you haven't had a 3D pen before, start with the 3Doodler Start+. It has no hot parts,
  making it the safest option for younger kids, and it works well with all of our kits.
  The table below compares the main options if you want to explore further.
</p>
```

---

## 任務五：將 Pen Comparison 表格的 Buy 欄改為按鈕

找到表格 `tbody` 中的 Buy 列，將其中的 `<a>` 連結改為圓角按鈕樣式：

將：
```html
<a :href="pen.buyLink" target="_blank" rel="noopener noreferrer"
   class="text-orange-500 font-semibold hover:underline">Amazon</a>
```

改為：
```html
<a
  :href="pen.buyLink"
  target="_blank"
  rel="noopener noreferrer"
  class="inline-block px-3 py-1.5 bg-[#6B441E] text-white text-xs font-semibold rounded-full hover:bg-[#6B441E]/85 transition-colors whitespace-nowrap"
>
  Buy on Amazon
</a>
```

---

## 最後：Commit & Push 到新 Branch

所有任務完成後，請執行：

```bash
git checkout -b design/content-layout-improvements
git add .
git commit -m "feat: rewrite brand story, restructure product cards, add pen guide intro, update buy buttons"
git push origin design/content-layout-improvements
```
