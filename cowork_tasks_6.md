# Enki Atelier 網站內容補強 — Claude Cowork 任務清單（第六批）

根據 Amazon listing 的說明、比較表和 FAQ，補充及修改 `pages/index.vue` 的內容。
每完成一項請告知，再進行下一項。

---

## 任務一：Pen Comparison Section 加入引言說明文字

目前 `#pens` section 的 `<h2>` 下方只有一行「The table below compares the main options...」，
缺少「為什麼需要另外買筆」的脈絡說明。

將現有引言段落替換為以下內容：

```html
<p class="text-base text-[#3D3D3D] leading-relaxed max-w-2xl mx-auto mt-6 mb-10">
  Our kits are curriculum and material sets — the 3D pen is your tool, purchased separately.
  This way, you choose the pen that fits your child's age and skill level, and you can use it
  across all future Enki kits without buying hardware again. If you're new to 3D pens,
  the 3Doodler Start+ is our top pick for ages 6–9 (no hot parts, rechargeable).
  For older kids, any standard PLA or ABS pen works well.
</p>
```

---

## 任務二：產品卡片加入「What's in the Kit」內容清單

在 `products` 的 ref 資料中，為每個產品加入 `includes` 陣列欄位，
然後在卡片模板的說明文字下方加入清單。

### 2-A　更新 products 資料，加入 `includes` 欄位：

```js
const products = ref([
  {
    mainTitle: "Rocket Launcher STEM Kit for 3D Pens",
    subTitle: "Build a Rocket. Discover the Physics of Projectiles.",
    description: "Engineer real rockets that actually launch, guided by a Ph.D.-designed curriculum — complete with safety goggles and heat-resistant finger caps for confident, hands-on building.",
    image: "/starter-kit.jpg",
    skills: ["Physics", "Projectile", "Engineering", "3D Thinking", "Space", "Ages 8-12"],
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
    skills: ["Equilibrium", "Math", "Spatial Reasoning"],
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
    skills: ["Geometry", "3D Thinking", "Creativity"],
    amazonUrl: null,
    includes: [
      "Interactive curriculum guide with handouts",
      "Paper molds for 3D shape building",
      "Accessories and reference materials",
    ],
  },
]);
```

### 2-B　在產品卡片模板的說明文字下方，加入 includes 清單：

在 `<p class="text-sm text-[#3D3D3D]...">{{ product.description }}</p>` 之後插入：

```html
<!-- Kit 內容清單 -->
<div class="mt-3 mb-4 pt-3 border-t border-[#DFC6E0]/40">
  <p class="text-xs font-semibold text-[#6B441E] uppercase tracking-wide mb-2">
    What's Included
  </p>
  <ul class="space-y-1">
    <li
      v-for="item in product.includes"
      :key="item"
      class="text-xs text-[#3D3D3D] flex items-start gap-1.5"
    >
      <span class="text-[#E0A939] mt-0.5 flex-shrink-0">✓</span>
      {{ item }}
    </li>
  </ul>
  <p class="text-xs text-[#B586AC] italic mt-2">
    3D pen required, purchased separately.
  </p>
</div>
```

---

## 任務三：更新 FAQ 內容

目前 FAQ 的問答是通用內容，需要根據 Amazon listing 上實際出現的真實問題補強。
將 `#faq` section 內的 `<div class="space-y-4">` 整段替換為：

```html
<div class="space-y-4">

  <details class="faq-item" open>
    <summary class="faq-question">
      Does the rocket actually fly, or is it just a decoration?
    </summary>
    <p class="faq-answer">
      It really flies. The rocket uses an elastic launch mechanism to teach projectile motion —
      it's a functional experiment, not a static decoration. If it's not taking off right away,
      it usually just needs a small alignment tweak in the assembly. That troubleshooting moment
      is actually a great part of the learning. Our curriculum guide includes pro flight setup
      tips on pages 14–16.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      The kit requires a 3D pen — which one should I get?
    </summary>
    <p class="faq-answer">
      For kids ages 6–9, we recommend the 3Doodler Start+. It has no hot parts, making it
      the safest option, and it's rechargeable. For older kids (10+), any standard pen that
      uses PLA or ABS filament works well — the MYNT3D Super and SCRIB3D P1 are solid
      mid-range options. See our full comparison guide on this page.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      What age are Enki STEAM kits designed for?
    </summary>
    <p class="faq-answer">
      Our kits are designed for ages 6–12. The Rocket Launcher kit is best suited for ages 8–12.
      Younger kids can join in with light parental guidance — the step-by-step photo instructions
      make it easy to follow along together. Each kit builds skills progressively, so there's
      always a next challenge as kids grow.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      How is this different from regular 3D pen stencils?
    </summary>
    <p class="faq-answer">
      Most 3D pen stencils are shapes to trace — kids finish in 20 minutes and there's nowhere
      to go. Enki kits are built around real science concepts. The Rocket Launcher kit teaches
      projectile motion and structural stability. The Balancing Bird kit teaches center-of-mass
      principles. Kids don't just make something — they understand why it works, and the
      curriculum is designed by PhD engineers to get them there step by step.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      Do kids need prior experience with 3D pens?
    </summary>
    <p class="faq-answer">
      No experience needed. Each kit includes a warm-up section that introduces 3D pen basics
      before moving into the main project. The photo-guided curriculum is designed to meet kids
      where they are and build confidence as they go.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      What exactly is included in the kit?
    </summary>
    <p class="faq-answer">
      The Rocket Launcher kit includes a full-color step-by-step curriculum guide,
      a dual-surface heat-resistant silicone mat, safety goggles, heat-resistant finger caps
      in both child and adult sizes, precision tweezers, thread scissors, and 90+ project
      materials and components. The 3D pen is not included — you use your own, which means
      one pen works for all future Enki kits.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      Where can I buy Enki kits?
    </summary>
    <p class="faq-answer">
      Enki kits are available on Amazon. You can find links to each kit in our Products section
      above, or search "Enki Atelier" on Amazon.com.
    </p>
  </details>

</div>
```

---

## 任務四：更新 JSON-LD FAQ Schema

在 `nuxt.config.ts` 的 JSON-LD script 中，將 FAQPage 的 mainEntity 更新為與任務三相符的問題和答案：

```ts
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does the rocket actually fly, or is it just a decoration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It really flies. The rocket uses an elastic launch mechanism to teach projectile motion. It's a functional experiment, not a static decoration. If it's not taking off, it usually just needs a small alignment tweak. The curriculum guide includes pro flight setup tips on pages 14–16."
      }
    },
    {
      "@type": "Question",
      "name": "The kit requires a 3D pen — which one should I get?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For kids ages 6–9, we recommend the 3Doodler Start+ — no hot parts, rechargeable, and safe. For older kids (10+), any standard PLA or ABS pen works well. The MYNT3D Super and SCRIB3D P1 are solid mid-range options."
      }
    },
    {
      "@type": "Question",
      "name": "How is this different from regular 3D pen stencils?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most 3D pen stencils are just shapes to trace. Enki kits are built around real science concepts — projectile motion, center-of-mass, spatial geometry — with step-by-step curriculum designed by PhD engineers."
      }
    },
    {
      "@type": "Question",
      "name": "What exactly is included in the kit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Rocket Launcher kit includes a full-color curriculum guide, dual-surface heat-resistant silicone mat, safety goggles, finger caps in child and adult sizes, precision tweezers, thread scissors, and 90+ project materials. The 3D pen is not included."
      }
    },
    {
      "@type": "Question",
      "name": "Do kids need prior experience with 3D pens?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No experience needed. Each kit includes a warm-up section that introduces 3D pen basics before moving into the main project."
      }
    }
  ]
}
```

---

## 最後：Commit & Push 到新 Branch

```bash
git checkout -b content/sync-amazon-listing
git add .
git commit -m "feat: add kit includes list, update FAQ with real questions from Amazon, clarify 3D pen requirement"
git push origin content/sync-amazon-listing
```
