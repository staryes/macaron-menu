# Enki Atelier FAQ 修正與標籤 SEO — Claude Cowork 任務清單（第七批）

請根據以下任務修改 `pages/index.vue`。每完成一項請告知，再進行下一項。

---

## 任務一：修正產品資料 — 年齡標籤與技能標籤

### 問題說明：
1. 目前所有產品的 `skills` 陣列都含有 `"Ages 8-12"`，但這只適用於現有上市的兩個套件，
   不代表整個 Enki 產品線（規劃目標客群為 6–12 歲）。
2. 年齡資訊應以獨立的 `ageTag` 欄位管理，而非塞在 `skills` 裡。
3. 技能標籤應對 SEO 有幫助，需改為更具搜尋意義的關鍵字。

### 修改方式：

將 `products` ref 中每個產品的資料結構更新如下：

```js
const products = ref([
  {
    mainTitle: "Rocket Launcher STEM Kit for 3D Pens",
    subTitle: "Build a Rocket. Discover the Physics of Projectiles.",
    description: "Engineer real rockets that actually launch, guided by a Ph.D.-designed curriculum — complete with safety goggles and heat-resistant finger caps for confident, hands-on building.",
    image: "/starter-kit.jpg",
    ageTag: "Ages 8–12",
    skills: ["Projectile Motion", "Physics", "3D Pen Engineering", "Hands-on STEM"],
    amazonUrl: "https://amazon.com/dp/B0FGYGBL1W",
    includes: [
      "Full-color step-by-step curriculum guide",
      "Dual-surface heat-resistant silicone mat",
      "Safety goggles + finger caps (child & adult sizes)",
      "Precision tweezers + thread scissors",
      "90+ project materials & components",
    ],
  },
  {
    mainTitle: "Balancing Bird & Mobile Engineering Kit for 3D Pens",
    subTitle: "Build to Balance. Discover the Physics of Equilibrium.",
    description: "Engineer gravity-defying birds and hanging mobiles that actually balance, guided by a Ph.D.-designed curriculum that teaches center-of-mass principles through hands-on, screen-free exploration.",
    image: "/balance.png",
    ageTag: "Ages 8–12",
    skills: ["Center of Mass", "Equilibrium", "3D Pen Engineering", "Spatial Reasoning"],
    amazonUrl: "https://amazon.com/dp/B0GV9CVBJ5",
    includes: [
      "Full-color step-by-step curriculum guide",
      "Heat-resistant silicone mat",
      "Safety goggles + finger caps",
      "Project materials & components",
    ],
  },
  {
    mainTitle: "Spatial Geometry Kit",
    subTitle: "Build, Explore, Understand.",
    description: "Transform geometry into a creative adventure. Through handouts, paper molds, and accessories, kids build and explore 3D shapes, making spatial reasoning both fun and educational.",
    image: "/spatial-geometry.png",
    ageTag: "Ages 6–12",
    skills: ["Spatial Geometry", "3D Thinking", "Math", "Hands-on Learning"],
    amazonUrl: null,
    includes: [
      "Interactive curriculum guide with handouts",
      "Paper molds for 3D shape building",
      "Accessories and reference materials",
    ],
  },
]);
```

### 同時更新產品卡片模板：

將卡片文字區頂部，把現有的年齡標籤硬編碼 `Ages 6–12` 改為動態顯示：

將：
```html
<span class="text-xs font-semibold bg-[#FFF8EB] text-[#6B441E] border border-[#6B441E]/15 px-3 py-1 rounded-full self-start mb-4">
  Ages 6–12
</span>
```

改為：
```html
<span class="text-xs font-semibold bg-[#FFF8EB] text-[#6B441E] border border-[#6B441E]/15 px-3 py-1 rounded-full self-start mb-4">
  {{ product.ageTag }}
</span>
```

### 技能標籤加入 SEO aria-label：

將技能標籤的 `<span>` 加入 `aria-label`，讓搜尋引擎讀取完整語意：

將：
```html
<span
  v-for="skill in product.skills"
  :key="skill"
  class="text-xs bg-[#B586AC]/10 text-[#B586AC] border border-[#B586AC]/20 px-2 py-0.5 rounded-full"
>
  {{ skill }}
</span>
```

改為：
```html
<span
  v-for="skill in product.skills"
  :key="skill"
  :aria-label="`STEAM skill: ${skill}`"
  class="text-xs bg-[#B586AC]/10 text-[#B586AC] border border-[#B586AC]/20 px-2 py-0.5 rounded-full"
>
  {{ skill }}
</span>
```

---

## 任務二：修正 FAQ — 3D 筆相容性說明（區分火箭與平衡套件）

找到 FAQ section，將「The kit requires a 3D pen — which one should I get?」這個問題的答案替換為以下內容，明確區分兩個套件的需求：

```html
<details class="faq-item">
  <summary class="faq-question">
    The kit requires a 3D pen — which one should I get?
  </summary>
  <p class="faq-answer">
    It depends on which kit you're using.
    <br><br>
    <strong>Rocket Launcher Kit:</strong> The rocket's elastic launch mechanism requires
    filament with enough rigidity to hold structure under tension. Low-temp PCL filament
    (used in pens like the 3Doodler Start+) is too flexible for this — it won't hold
    the shape needed for a successful launch. You'll need a standard pen that uses
    PLA or ABS filament. The MYNT3D Super ($39.99) and SCRIB3D P1 ($36.99) are
    solid options for older kids.
    <br><br>
    <strong>Balancing Bird & Mobile Kit:</strong> This kit doesn't have the same
    structural rigidity requirement, so low-temp PCL pens like the 3Doodler Start+
    work well — making it a great option for younger kids ages 6–9.
    <br><br>
    See our full pen comparison guide on this page for more details.
  </p>
</details>
```

---

## 任務三：修正 FAQ — 年齡說明（區分現有套件與整體產品線）

找到「What age are Enki STEAM kits designed for?」這個問題，將答案替換為：

```html
<details class="faq-item">
  <summary class="faq-question">
    What age are Enki STEAM kits designed for?
  </summary>
  <p class="faq-answer">
    Enki's product line is designed for kids ages 6–12. Our current kits — the
    Rocket Launcher and Balancing Bird — are rated for ages 8–12 based on safety
    guidelines for 3D pen use and project complexity. The Balancing Bird kit is
    on the more accessible end and can work well for younger kids in that range
    with light parental guidance.
    <br><br>
    Future kits will extend to younger age groups, so kids can grow with the
    Enki curriculum from early exploration through more advanced engineering challenges.
  </p>
</details>
```

---

## 任務四：修正 Pen Comparison Section 的引言文字

找到 `#pens` section 的引言段落，更新為正確反映套件差異的說明：

```html
<p class="text-base text-[#3D3D3D] leading-relaxed max-w-2xl mx-auto mt-6 mb-10">
  Our kits are curriculum and material sets — the 3D pen is your tool, purchased separately.
  This means one pen works across all future Enki kits. Note that pen requirements vary
  by kit: the Rocket Launcher requires a standard PLA or ABS pen for structural reasons,
  while the Balancing Bird kit works with most pens including low-temp options.
  Not sure where to start? The comparison below will help you choose.
</p>
```

---

## 任務五：更新 JSON-LD FAQ Schema

在 `nuxt.config.ts` 的 JSON-LD FAQPage schema 中，
將 3D 筆相容性和年齡的問答更新為與任務二、三相符的內容：

```ts
{
  "@type": "Question",
  "name": "Which 3D pen works with Enki kits?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "It depends on the kit. The Rocket Launcher Kit requires a standard PLA or ABS pen — low-temp PCL pens like the 3Doodler Start+ won't provide enough rigidity for the elastic launch mechanism. The Balancing Bird Kit works with most pens including low-temp options, making it suitable for younger kids with the 3Doodler Start+."
  }
},
{
  "@type": "Question",
  "name": "What age are Enki STEAM kits designed for?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Enki's product line targets kids ages 6–12. Current kits are rated for ages 8–12 based on safety guidelines. Future kits will extend to younger age groups within the 6–12 range."
  }
}
```

---

## 最後：Commit & Push 到新 Branch

```bash
git checkout -b content/faq-age-pen-corrections
git add .
git commit -m "fix: correct 3D pen compatibility by kit, fix age ranges, update skill tags for SEO"
git push origin content/faq-age-pen-corrections
```
