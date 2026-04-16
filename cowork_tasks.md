# Enki Atelier 網站現代化 — Claude Cowork 任務清單

請根據以下任務逐步修改網站。每完成一項請告知，再進行下一項。

---

## 背景說明（給 Cowork 的 context）

這是一個 Vue/Nuxt 網站，銷售兒童 STEAM 教育套件，目標受眾是注重兒童教育的家長（6–12 歲）。
我會附上品牌配色 PDF，請以 PDF 中的官方色彩為準。

**官方品牌色（來自 PDF）：**
- `#6B441E` 深棕 — 主色
- `#E0A939` 金黃 — 強調 CTA
- `#DFC6E0` 淡紫 — 輔色區塊
- `#B586AC` 暗紫 — 點綴
- `#FFF8EB` 奶油白 — 淺色背景
- `#3D3D3D` 深灰 — 內文
- `#1A1A1A` 近黑 — 標題

---

## 任務一：統一品牌色彩，修正所有偏差色值

修改 `pages/index.vue` 與 `tailwind.config.js`：

1. 在 `tailwind.config.js` 的 `theme.extend.colors` 加入：
```js
enki: {
  brown:    '#6B441E',
  gold:     '#E0A939',
  lilac:    '#DFC6E0',
  mauve:    '#B586AC',
  cream:    '#FFF8EB',
  charcoal: '#3D3D3D',
  dark:     '#1A1A1A',
}
```

2. 在 `index.vue` 的 `<style>` 區塊加入 CSS 變數：
```css
:root {
  --enki-brown:    #6B441E;
  --enki-gold:     #E0A939;
  --enki-lilac:    #DFC6E0;
  --enki-mauve:    #B586AC;
  --enki-cream:    #FFF8EB;
  --enki-charcoal: #3D3D3D;
  --enki-dark:     #1A1A1A;
}
```

3. 將 `index.vue` 中所有非官方色值替換：
   - `#DCBFDB` → `#DFC6E0`
   - `#DC9F33` → `#E0A939`
   - `#603B1D` → `#6B441E`
   - `text-orange-500` / `hover:text-orange-500` → `text-[#E0A939]` / `hover:text-[#E0A939]`
   - `bg-orange-400` / `hover:bg-orange-300` → `bg-[#6B441E]` / `hover:bg-[#6B441E]/90`
   - `text-gray-800` (標題) → `text-[#1A1A1A]`
   - `text-gray-700` / `text-gray-600` (內文) → `text-[#3D3D3D]`

---

## 任務二：引入品牌字型

1. 在專案的 `<head>`（`nuxt.config.ts` 或 `app.vue`）加入 Google Fonts：
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

2. 在 `index.vue` 的 `<style>` 中將字型設定改為：
```css
html {
  font-family: 'DM Sans', sans-serif;  /* 取代 Arial */
  scroll-padding-top: 80px;
}
h1, h2, h3 {
  font-family: 'Lora', serif;
}
```

---

## 任務三：重構 Hero Section

將 `index.vue` 中的 `#hero` section 改為：

- 移除舊的 `bg-gradient-to-r from-[#DCBFDB] to-[#DC9F33]`
- 改為深棕 `#6B441E` 作主色背景遮罩（左側 95% → 右側透明漸層）
- 新增眉標文字：`STEAM Kits · Ages 6–12 · PhD-Designed`，顏色用淡紫 `#DFC6E0`
- H1 字型改用 Lora serif
- 移除舊的 `bg-white/10` 半透明白框
- 兩個按鈕：主要按鈕用金黃 `#E0A939` + 深色文字，次要按鈕用白色半透明邊框

```html
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
```

---

## 任務四：Hero 下方新增信任指標列（Trust Bar）

在 Hero section 結束後、About section 開始前，插入：

```html
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
```

---

## 任務五：改善 About Section 排版

將 `#about` section 改為：

- 背景保持白色
- 移除置中排版，改為左對齊兩欄
- 新增大引言區塊（含左側深棕邊線）
- 使用 Lora 字型於引言

```html
<section id="about" class="py-24 bg-white">
  <div class="max-w-5xl mx-auto px-6">
    <blockquote class="text-2xl md:text-3xl font-semibold text-[#6B441E] leading-snug mb-14 max-w-2xl border-l-4 border-[#E0A939] pl-8"
                style="font-family: 'Lora', serif;">
      "We couldn't find what we were looking for — as parents, or as engineers. So we built it."
    </blockquote>
    <div class="grid md:grid-cols-2 gap-10 text-[#3D3D3D] leading-relaxed text-base">
      <div class="space-y-5">
        <p>As parents, we know that feeling — watching your child lock onto a problem, turn it over in their mind, and suddenly <em>get it</em>. That moment isn't just cute. It's the beginning of how innovators are made.</p>
        <p>The market was full of kits that looked educational on the outside but didn't go the distance. 3D pen sets that stopped at doodling. STEM kits "for girls" that just swapped in pink and called it inclusive. We knew kids deserved better.</p>
      </div>
      <div class="space-y-5">
        <p>Every Enki kit is designed from the ground up by <strong class="text-[#6B441E]">PhD engineers and an art educator</strong> who are also parents — people who've spent careers thinking about how people learn.</p>
        <p>AI is changing everything. But curiosity, adaptability, and the ability to bring an idea from your head into your hands? Those are skills no algorithm can replace. <strong class="text-[#6B441E]">That's what we're really teaching.</strong></p>
        <p class="text-sm text-[#B586AC] italic">Enki — ancient Sumerian god of wisdom and creation. Because every child is born with that same instinct.</p>
      </div>
    </div>
  </div>
</section>
```

---

## 任務六：升級產品卡片

在 `products` 的 ref 資料，為每個產品加入 `skills` 欄位：

```js
{ skills: ["Physics", "Engineering", "3D Thinking"] },   // Rocket Kit
{ skills: ["Equilibrium", "Math", "Spatial Reasoning"] }, // Balancing Bird
{ skills: ["Geometry", "3D Thinking", "Creativity"] },    // Spatial Geometry
```

將產品卡片模板改為：

```html
<div v-for="(product, index) in products" :key="index"
     class="bg-white rounded-2xl border border-[#DFC6E0]/40 shadow-sm flex flex-col overflow-hidden
            transition-all hover:-translate-y-1 hover:shadow-md">
  <div class="px-5 pt-5">
    <span class="text-xs font-semibold bg-[#FFF8EB] text-[#6B441E] border border-[#6B441E]/15 px-3 py-1 rounded-full">
      Ages 6–12
    </span>
  </div>
  <div class="p-5 flex flex-col flex-1">
    <h3 class="text-lg font-semibold text-[#1A1A1A] mb-2 leading-snug" v-html="product.title"></h3>
    <p class="text-sm text-[#3D3D3D] leading-relaxed mb-4">{{ product.description }}</p>
    <div class="flex flex-wrap gap-1.5 mt-auto mb-4">
      <span v-for="skill in product.skills" :key="skill"
            class="text-xs bg-[#B586AC]/10 text-[#B586AC] border border-[#B586AC]/20 px-2 py-0.5 rounded-full">
        {{ skill }}
      </span>
    </div>
  </div>
  <img :src="product.image" :alt="product.title"
       class="w-full h-52 object-contain bg-[#FFF8EB] px-8 py-4">
</div>
```

---

## 任務七：重構 CTA Section

將 `#cta` section 改為深棕背景 + 金黃按鈕：

```html
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
```

---

## 任務八：改善 Contact Section 與 Footer

**Contact form** — 背景改為白色，輸入框邊框用淡紫，focus 時顯示深棕邊框：

```css
.form-input {
  border: 1.5px solid rgba(223,198,224,0.6);
  border-radius: 0.6rem;
  padding: 0.6rem 0.85rem;
}
.form-input:focus {
  border-color: #6B441E;
  box-shadow: 0 0 0 3px rgba(107,68,30,0.1);
  outline: none;
}
```

Submit 按鈕改為深棕圓角：
```html
<button type="submit"
        class="w-full bg-[#6B441E] text-white font-semibold py-3 rounded-full hover:bg-[#6B441E]/90 transition-colors">
  Send Message
</button>
```

**Footer** — 背景改為近黑 `#1A1A1A`，Email 連結 hover 時顯示金黃：
```html
<footer class="bg-[#1A1A1A] text-white py-8 text-center px-4">
  <p class="text-sm text-white/60">
    <a href="mailto:info@enkiatelier.com" class="underline hover:text-[#E0A939] transition-colors">
      Email Us
    </a>
    · © 2025 Enki Atelier. All rights reserved.
  </p>
</footer>
```

---

## 最後：建立新 Branch，Commit & Push

所有任務完成後，請依序執行以下指令：

```bash
# 1. 建立並切換到新 branch
git checkout -b design/modernize-brand-colors

# 2. 加入所有修改
git add .

# 3. Commit
git commit -m "feat: modernize design with official brand colors, Lora/DM Sans fonts, trust bar, product skill tags"

# 4. 推上 GitHub
git push origin design/modernize-brand-colors
```

Push 完成後，請到 GitHub 開啟一個 Pull Request，將 `design/modernize-brand-colors` 合併回 `main`，確認視覺沒問題後再 merge。
