# Enki Atelier 美感改善與 Buying Guide 重整 — Claude Cowork 任務清單（第十一批）

請根據以下任務逐一修改 `pages/index.vue`。每完成一項請告知，再進行下一項。

---

## 任務一：導覽列 Buy Now 改為按鈕樣式

找到 `<nav>` 中的 Buy Now 連結，將其改為圓角按鈕以突顯購買入口：

將：
```html
<a href="#cta" class="nav-link">Buy Now</a>
```
改為：
```html
<a href="#cta" class="nav-cta">Buy Now</a>
```

確認 `<style>` 中已有 `.nav-cta` 的樣式定義（深棕背景、白色文字、圓角）。
若無，加入：
```css
.nav-cta {
  background-color: var(--enki-brown);
  color: white;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.4rem 1.1rem;
  border-radius: 999px;
  transition: background-color 0.2s;
}
.nav-cta:hover { background-color: #5a3818; }
```

---

## 任務二：Trust Bar 移除 emoji，改為 SVG icon

找到 Hero 下方的 Trust Bar 三欄 grid，將三個 `<span class="text-2xl">` emoji 換成簡潔的 SVG 線條 icon，並微調視覺。

將整個 Trust Bar 的三欄內容替換為：

```html
<!-- Expert-Designed -->
<div class="flex items-center gap-3 justify-center px-6">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B441E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
  </svg>
  <div>
    <p class="text-sm font-semibold text-[#6B441E]">Expert-Designed</p>
    <p class="text-xs text-[#3D3D3D]">PhD engineers & art educator</p>
  </div>
</div>

<!-- Real Science, Real Fun -->
<div class="flex items-center gap-3 justify-center px-6">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B441E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
  </svg>
  <div>
    <p class="text-sm font-semibold text-[#6B441E]">Real Science, Real Fun</p>
    <p class="text-xs text-[#3D3D3D]">STEAM concepts kids actually enjoy</p>
  </div>
</div>

<!-- Hands-on & Screen-free -->
<div class="flex items-center gap-3 justify-center px-6">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B441E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
  </svg>
  <div>
    <p class="text-sm font-semibold text-[#6B441E]">Hands-on & Screen-free</p>
    <p class="text-xs text-[#3D3D3D]">Active building, not passive viewing</p>
  </div>
</div>
```

---

## 任務三：About Section — Enki 典故加入 callout 樣式

找到 About Section 右欄最後一個 `<p>` 標籤（The name comes from Enki...），
將其改為有視覺區隔的 callout 框：

將：
```html
<p class="text-sm text-[#B586AC] italic">
  The name comes from Enki, the Sumerian god of wisdom and craft. Old, a little obscure,
  and about the drive to make things rather than just know them. That felt right.
</p>
```

改為：
```html
<div class="mt-4 px-5 py-4 bg-[#DFC6E0]/30 border-l-2 border-[#B586AC] rounded-r-lg">
  <p class="text-sm text-[#6B441E] italic leading-relaxed">
    The name comes from Enki, the Sumerian god of wisdom and craft. Old, a little obscure,
    and about the drive to make things rather than just know them. That felt right.
  </p>
</div>
```

---

## 任務四：Products Section 背景加深

找到 `#themes` section，將背景色從：
```
class="py-24 bg-[#DFC6E0]/40"
```
改為：
```
class="py-24 bg-[#DFC6E0]/60"
```

---

## 任務五：完整重整 Buying Guide Section

這是最大的改動。將整個 `#pens` section 的內容完整替換。

新設計移除比較表格和快速對照框，改為兩個套件各自的說明卡，搭配精簡的引言。

```html
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
          <div class="w-10 h-10 rounded-xl bg-[#FFF8EB] border border-[#6B441E]/15 flex items-center justify-center flex-shrink-0 text-lg">
            🚀
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
              Compatible with: MYNT3D Super, MYNT3D Pro, SCRIB3D P1, and most standard PLA/ABS pens
            </p>
            <div class="flex flex-wrap gap-2">
              <a href="https://amzn.to/4pl0gYW" target="_blank" rel="noopener noreferrer"
                 class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
                MYNT3D Super on Amazon
              </a>
              <a href="https://amzn.to/3MVjs2e" target="_blank" rel="noopener noreferrer"
                 class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
                SCRIB3D P1 on Amazon
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Balancing Bird Kit -->
      <div class="bg-white rounded-2xl border border-[#DFC6E0]/50 p-6">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-[#FFF8EB] border border-[#6B441E]/15 flex items-center justify-center flex-shrink-0 text-lg">
            🐦
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
              Compatible with: most PLA, ABS, and PCL pens including low-temp models
            </p>
            <div class="flex flex-wrap gap-2">
              <a href="https://amzn.to/4aIF63E" target="_blank" rel="noopener noreferrer"
                 class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
                3Doodler Start+ on Amazon
              </a>
              <a href="https://amzn.to/4pl0gYW" target="_blank" rel="noopener noreferrer"
                 class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
                MYNT3D Super on Amazon
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
```

同時在 `<script setup>` 中，移除 `pens` ref 的整個資料陣列（不再需要）。

---

## 任務六：FAQ 動畫改為 CSS max-height 過渡

目前 FAQ 使用原生 `<details>` 元素，展開無動畫。
將 FAQ 改為用 Vue 的 `v-show` 控制展開，加入平滑過渡動畫。

### 6-A　在 `<script setup>` 加入 FAQ 狀態管理：

```js
import { ref } from 'vue'

const openFaq = ref(0) // 預設第一題展開

function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? null : index
}
```

### 6-B　將 FAQ 的 `<details>` 模板改為 div + v-show：

每個 FAQ 項目從：
```html
<details class="faq-item">
  <summary class="faq-question">問題文字</summary>
  <p class="faq-answer">答案文字</p>
</details>
```

改為：
```html
<div class="faq-item">
  <button class="faq-question w-full text-left" @click="toggleFaq(N)">
    問題文字
  </button>
  <Transition name="faq">
    <p v-show="openFaq === N" class="faq-answer">答案文字</p>
  </Transition>
</div>
```

N 為每個問題的 index（0, 1, 2...）。

### 6-C　在 `<style>` 加入過渡動畫：

```css
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
```

---

## 任務七：頁面色彩區塊節奏調整

目前的區塊背景色順序是：
奶油白（Nav） → 深棕（Hero） → 奶油白（Trust Bar） → 白（About） → 淡紫（Products） → 深棕（CTA） → 奶油白（Pens） → 白（FAQ） → 奶油白（Contact） → 近黑（Footer）

深棕（CTA）緊接在淡紫（Products）之後，再接奶油白（Pens），跳轉太頻繁。
將 CTA Section 移到 Pens Section 之後（FAQ 之前），讓背景色節奏變為：

白（About） → 淡紫（Products） → 奶油白（Pens/Guide） → 深棕（CTA） → 白（FAQ） → 奶油白（Contact） → 近黑（Footer）

在 `index.vue` 的 template 中，將 `#cta` section 整段從目前位置（Products 之後）
剪下，貼到 `#pens` section 之後、`#faq` section 之前。

---

## 最後：Commit & Push 到新 Branch

```bash
git checkout -b design/aesthetic-improvements
git add .
git commit -m "design: nav buy button, SVG trust icons, about callout, products bg, buying guide redesign, FAQ animation, section order"
git push origin design/aesthetic-improvements
```
