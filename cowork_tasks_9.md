# Enki Atelier 全站內容修正 — Claude Cowork 任務清單（第九批）

請根據以下任務逐一修改 `pages/index.vue`。
每完成一項請告知，再進行下一項。

---

## 任務一：Hero Section — 平衡 STEAM 與 STEM 關鍵字

目前 Hero 中 STEAM 出現 3 次，STEM 出現 0 次。
搜尋主流仍是 STEM，需要兩者平衡使用。

找到 Hero section，做以下修改：

1. 眉標保留 STEAM：
```
STEAM KITS · AGES 6–12 · PHD-DESIGNED
```
（不變）

2. 副標從：
```
STEAM Kits for Kids Who Like to Build.
```
改為：
```
STEM & STEAM Kits for Kids Who Like to Build.
```

3. 說明文字從：
```
Hands-on STEAM kits designed by engineers and educators who refused to settle for "good enough."
```
改為：
```
Hands-on STEM kits designed by engineers and educators who refused to settle for "good enough."
```

---

## 任務二：Trust Bar — 三項價值訴求全面修改

找到 Hero 下方的 Trust Bar（三欄 grid），將內容替換為：

```html
<div class="flex items-center gap-3 justify-center px-6">
  <span class="text-2xl flex-shrink-0">✏️</span>
  <div>
    <p class="text-sm font-semibold text-[#6B441E]">Expert-Designed</p>
    <p class="text-xs text-[#3D3D3D]">PhD engineers & art educator</p>
  </div>
</div>
<div class="flex items-center gap-3 justify-center px-6">
  <span class="text-2xl flex-shrink-0">🔬</span>
  <div>
    <p class="text-sm font-semibold text-[#6B441E]">Real Science, Real Fun</p>
    <p class="text-xs text-[#3D3D3D]">STEAM concepts kids actually enjoy</p>
  </div>
</div>
<div class="flex items-center gap-3 justify-center px-6">
  <span class="text-2xl flex-shrink-0">👐</span>
  <div>
    <p class="text-sm font-semibold text-[#6B441E]">Hands-on & Screen-free</p>
    <p class="text-xs text-[#3D3D3D]">Active building, not passive viewing</p>
  </div>
</div>
```

說明：
- 第一欄：🎓 PhD-Designed → ✏️ Expert-Designed，副標注明 PhD engineers & art educator
- 第二欄：Real STEAM Concepts → Real Science, Real Fun，強調好玩不只是嚴肅
- 第三欄：不變

---

## 任務三：About Section — 修改引言與倒數第二段

### 3-A　引言（blockquote）

現有引言強調「沒有成功」的探索過程，作為視覺重點不夠有力。
將 blockquote 改為：

```html
<blockquote
  class="text-2xl md:text-3xl font-semibold text-[#6B441E] leading-snug mb-14 max-w-2xl border-l-4 border-[#E0A939] pl-8"
  style="font-family: 'Lora', serif;"
>
  "They had a great time. And somewhere in that mess, we realized this was the most engaged we'd seen them in months."
</blockquote>
```

### 3-B　右欄倒數第二段

現有：
```
We think about what's coming for our kids. The world they're growing up in is hard to predict,
and we're not going to pretend otherwise. What we keep returning to is simpler than it sounds:
kids who know how to sit with a problem, get stuck, and keep going tend to be okay. We want to
give them more practice at that, while it still feels like play and before the stakes get real.
```

改為（強調孩子天生的學習天賦，以及好玩是核心，而不只是耐挫力）：

```html
<p>
  Kids are born curious. They don't need to be convinced to explore — they just need
  the right invitation. What we build isn't just real science content. It is genuinely
  fun. The rocket actually launches. The bird actually balances. That moment of "wait,
  it worked" is what keeps kids coming back, and it is where the real learning happens.
</p>
```

---

## 任務四：Rocket 套件 — 修正 includes 清單

找到 `products` ref 中 Rocket Launcher 的 `includes` 陣列，替換為：

```js
includes: [
  "Full-color curriculum guide (pre-punched for binders)",
  "Dual-surface heat-resistant silicone mat",
  "Safety goggles + Finger caps (child & adult sizes)",
  "Precision tweezers + thread scissors",
  "90+ project materials & components",
],
```

修改重點：
- 移除 `step-by-step`（太長）
- `finger caps` 首字改大寫為 `Finger caps`
- Safety goggles 與 Finger caps 合併為一行

---

## 任務五：在 About 或 Products Section 加入教材品質說明

在 Products Section 的標題說明文字下方（`<h2>Our Products</h2>` 之後、grid 之前），加入一段教材品質描述：

```html
<p class="text-base text-[#3D3D3D] leading-relaxed max-w-2xl mx-auto mt-4 mb-10 text-center">
  Every kit comes with a full-color curriculum guide, printed in the USA with
  real-lab step-by-step photos taken in our own studio. All guides are
  pre-punched for three-ring binders so kids can build a personal science
  library as the series grows.
</p>
```

---

## 任務六：Balance 套件 — 修正 description 與 includes

### 6-A　description 移除 3Doodler Start+ 提名

將：
```
Works with any standard PLA or PCL pen, including the 3Doodler Start+.
```
改為：
```
Works with any standard PLA or PCL pen, including low-temp options.
```

### 6-B　includes 更新為正確內容（含教材細節，移除護目鏡）

```js
includes: [
  "Curriculum guide, 60+ pages (pre-punched for binders)",
  "Template booklet (lay-flat binding for easy tracing)",
  "Clear PET building sheet",
  "Custom balancing bird stand",
  "Professional-grade acrylic rods",
  "High-strength fishing line",
  "Project materials & components",
],
```

說明：
- 第二套教材分為 curriculum guide 和 template booklet 兩本
- Template booklet 採用可完全攤平的裝訂方式，方便描繪操作
- 移除護目鏡和 finger caps（只有第一套有安全配件）

---

## 任務七：Spatial Geometry Kit — 加入 Coming Soon 標示

找到 Spatial Geometry Kit 的產品卡片，在年齡標籤旁加入 Coming Soon 標籤，
並移除 Amazon 購買連結相關的互動效果（圖片不再有 hover 放大或 cursor-pointer）。

在卡片的年齡標籤行加入：

```html
<div class="flex items-center gap-2 mb-4">
  <span class="text-xs font-semibold bg-[#FFF8EB] text-[#6B441E] border border-[#6B441E]/15 px-3 py-1 rounded-full">
    {{ product.ageTag }}
  </span>
  <span v-if="!product.amazonUrl" class="text-xs font-medium bg-[#DFC6E0] text-[#6B441E] px-3 py-1 rounded-full">
    Coming Soon
  </span>
</div>
```

同時將年齡標籤原本的獨立 `<span>` 移除，改由上方的 div 處理。

---

## 任務八：CTA Section — 改為 Storefront 連結

找到 `#cta` section 的 Buy on Amazon 連結，將 href 改為 Storefront 連結：

將：
```html
href="https://amzn.to/4jmS8G5"
```
改為：
```html
href="https://www.amazon.com/stores/EnkiAtelier/page/518CC82B-0DF3-4C27-8BB5-D45F16EC48A3?lp_asin=B0GV9CVBJ5&ref_=ast_bln"
```

---

## 任務九：重整 Pen Comparison Section

### 9-A　標題與引言修改

將 section 標題改為更明確服務產品的定位：

```html
<p class="text-xs font-medium tracking-[2px] uppercase text-[#B586AC] mb-2">Buying Guide</p>
<h2 class="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6" style="font-family: 'Lora', serif;">
  Choosing a 3D Pen for Your Enki Kit
</h2>
```

引言更新（移除 3Doodler Start+ 品牌名，改為功能描述）：

```html
<p class="text-base text-[#3D3D3D] leading-relaxed max-w-2xl mx-auto mt-0 mb-10">
  Our kits are curriculum and material sets. The 3D pen is your tool, purchased
  separately, and one pen works across all Enki kits in the series. Pen requirements
  vary by kit: the Rocket Launcher needs a standard PLA or ABS pen for structural
  reasons, while the Balancing Bird kit works with most pens including low-temp
  PCL options. The comparison below will help you choose.
</p>
```

### 9-B　在表格上方加入「Which pen for which kit?」快速對照

在表格之前插入：

```html
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto text-left">
  <div class="bg-[#FFF8EB] border border-[#6B441E]/15 rounded-xl p-4">
    <p class="text-sm font-semibold text-[#6B441E] mb-1">🚀 Rocket Launcher Kit</p>
    <p class="text-sm text-[#3D3D3D]">Requires PLA or ABS filament pen</p>
    <p class="text-xs text-[#B586AC] mt-1">Low-temp PCL pens not compatible</p>
  </div>
  <div class="bg-[#FFF8EB] border border-[#6B441E]/15 rounded-xl p-4">
    <p class="text-sm font-semibold text-[#6B441E] mb-1">🐦 Balancing Bird &amp; Mobile Kit</p>
    <p class="text-sm text-[#3D3D3D]">Works with PLA, ABS, or PCL pens</p>
    <p class="text-xs text-[#B586AC] mt-1">Compatible with low-temp pens</p>
  </div>
</div>
```

### 9-C　表格標題列加入一行說明

在表格 `<thead>` 的 Feature 欄位標題改為：

```html
<th class="table-cell bg-[#FFF8EB] text-[#6B441E] font-semibold text-left">
  3D Pen
</th>
```

---

## 任務十：FAQ 全面修訂

找到 `#faq` 內的 `<div class="space-y-4">`，整段替換：

```html
<div class="space-y-4">

  <details class="faq-item" open>
    <summary class="faq-question">
      Does the rocket actually fly, or is it just a decoration?
    </summary>
    <p class="faq-answer">
      It really flies. The rocket uses an elastic launch mechanism to teach projectile
      motion. It is a functional experiment, not a decoration. If it is not taking off
      right away, it usually just needs a small alignment tweak. That troubleshooting
      moment is part of the learning. The curriculum guide includes pro flight setup
      tips on pages 14 to 16.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      Which 3D pen works with each kit?
    </summary>
    <p class="faq-answer">
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
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      What age are Enki STEAM kits designed for?
    </summary>
    <p class="faq-answer">
      Enki's product line is designed for kids ages 6 to 12. Our current kits are
      rated for ages 8 and up, based on project complexity and the handling of
      small components. Future kits will extend to younger age groups, so kids
      can grow with the Enki curriculum from early exploration through more
      advanced engineering challenges.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      How is this different from regular 3D pen stencils?
    </summary>
    <p class="faq-answer">
      Most 3D pen stencils are just shapes to trace. Kids finish in 20 minutes
      and there is nowhere to go next. Enki kits are built around real science
      concepts, with curriculum inspired by Common Core State Standards and the
      Next Generation Science Standards (NGSS). The Rocket Launcher kit teaches
      projectile motion and structural stability. The Balancing Bird kit explores
      center-of-mass and equilibrium. Kids do not just make something. They
      understand why it works.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      Do kids need prior experience with 3D pens?
    </summary>
    <p class="faq-answer">
      No prior experience needed. The curriculum is designed to be accessible
      to first-time 3D pen users. The step-by-step photo instructions make it
      easy to follow along, and kids can work at their own pace.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      What is included in each kit?
    </summary>
    <p class="faq-answer">
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
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      Is the curriculum guide easy to follow and store?
    </summary>
    <p class="faq-answer">
      Yes. Every guide is printed in full color with real step-by-step photos
      taken in our own lab. All guides are pre-punched for three-ring binders
      so kids can collect each kit's curriculum as the series grows. The
      Balancing Bird kit also includes a separate lay-flat template booklet
      that opens completely flat for easy tracing while referencing the guide.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      Where can I buy Enki kits?
    </summary>
    <p class="faq-answer">
      Enki kits are available on Amazon. You can find links to each kit in the
      Products section above, or visit our
      <a href="https://www.amazon.com/stores/EnkiAtelier/page/518CC82B-0DF3-4C27-8BB5-D45F16EC48A3?lp_asin=B0GV9CVBJ5&ref_=ast_bln"
         target="_blank" rel="noopener noreferrer"
         class="text-[#6B441E] underline hover:text-[#E0A939] transition-colors">
        Enki Atelier storefront on Amazon
      </a>.
    </p>
  </details>

</div>
```

---

## 任務十一：更新 JSON-LD FAQ Schema

在 `nuxt.config.ts` 的 FAQPage mainEntity 完整替換為與任務十相符的版本：

```ts
"mainEntity": [
  {
    "@type": "Question",
    "name": "Does the rocket actually fly, or is it just a decoration?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "It really flies. The rocket uses an elastic launch mechanism to teach projectile motion. It is a functional experiment. If it is not taking off, it usually just needs a small alignment tweak. The curriculum guide includes pro flight setup tips on pages 14 to 16."
    }
  },
  {
    "@type": "Question",
    "name": "Which 3D pen works with each Enki kit?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Rocket Launcher Kit requires a PLA or ABS pen. Low-temp PCL pens are not compatible due to the elastic launch mechanism. The Balancing Bird Kit works with any standard 3D pen including low-temp PCL options."
    }
  },
  {
    "@type": "Question",
    "name": "What age are Enki STEAM kits designed for?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Current kits are rated for ages 8 and up based on project complexity and component handling. Enki's product line targets ages 6 to 12, with future kits extending to younger groups."
    }
  },
  {
    "@type": "Question",
    "name": "How is this different from regular 3D pen stencils?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Enki kits are built around real science concepts inspired by Common Core State Standards and NGSS. Kids learn projectile motion, center-of-mass, and equilibrium through hands-on builds, not just tracing shapes."
    }
  },
  {
    "@type": "Question",
    "name": "Do kids need prior experience with 3D pens?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No prior experience needed. The photo-guided curriculum is accessible to first-time users and kids can work at their own pace."
    }
  },
  {
    "@type": "Question",
    "name": "What is included in each kit?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Rocket Launcher Kit includes a curriculum guide, silicone mat, safety goggles, Finger caps, tweezers, scissors, and 90+ components. The Balancing Bird Kit includes a 60+ page curriculum guide, lay-flat template booklet, PET sheet, bird stand, acrylic rods, fishing line, and components. Neither kit includes a 3D pen."
    }
  }
]
```

---

## 最後：Commit & Push 到新 Branch

```bash
git checkout -b content/comprehensive-review-fixes
git add .
git commit -m "feat: STEM/STEAM balance, trust bar update, about rewrite, kit includes corrections, coming soon tag, storefront link, pen guide restructure, FAQ overhaul with NGSS reference"
git push origin content/comprehensive-review-fixes
```
