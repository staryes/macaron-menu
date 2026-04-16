# Enki Atelier 網站 SEO 優化 — Claude Cowork 任務清單（第五批）

請根據以下任務修改專案檔案。每完成一項請告知，再進行下一項。

---

## 任務一：在 nuxt.config.ts 加入全站 Meta 標籤

找到 `nuxt.config.ts`，在 `app.head` 區塊加入以下設定（若 `app.head` 不存在則新增）：

```ts
app: {
  head: {
    title: 'Enki Atelier — STEAM Kits & 3D Pen Curriculum for Kids Ages 6–12',
    meta: [
      {
        name: 'description',
        content: 'PhD-designed STEAM kits for kids ages 6–12. Build rockets, explore physics, and develop engineering skills through hands-on 3D pen projects. Screen-free. Genuinely educational.'
      },
      { name: 'keywords', content: '3D pen activities for kids, STEAM kit ages 6-12, kids engineering kit, 3D pen curriculum, hands-on STEM activities, physics activities for kids' },
      // Open Graph（Facebook / LINE 分享預覽）
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://enkiatelier.com' },
      { property: 'og:title', content: 'Enki Atelier — STEAM Kits for Kids Who Like to Build' },
      { property: 'og:description', content: 'Hands-on 3D pen STEAM kits designed by engineers and educators. For curious kids ages 6–12. Real physics. Real engineering. Screen-free.' },
      { property: 'og:image', content: 'https://enkiatelier.com/og-image.jpg' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Enki Atelier — STEAM Kits for Kids Who Like to Build' },
      { name: 'twitter:description', content: 'PhD-designed hands-on STEAM kits for kids ages 6–12. Build rockets, explore physics, develop real engineering skills.' },
      { name: 'twitter:image', content: 'https://enkiatelier.com/og-image.jpg' },
    ],
    link: [
      { rel: 'canonical', href: 'https://enkiatelier.com' }
    ]
  }
}
```

---

## 任務二：在 index.vue 的 Hero Section 優化 H1

找到 Hero Section 的 `<h1>` 標籤，在其下方新增一行副標，強化關鍵字：

將：
```html
<h1 class="text-4xl md:text-5xl font-bold text-white leading-tight" style="font-family: 'Lora', serif;">
  Big Ideas Start<br>with Little Hands.
</h1>
```

改為：
```html
<h1 class="text-4xl md:text-5xl font-bold text-white leading-tight" style="font-family: 'Lora', serif;">
  Big Ideas Start<br>with Little Hands.
</h1>
<p class="text-base md:text-lg font-medium text-white/80 tracking-wide">
  STEAM Kits for Kids Who Like to Build.
</p>
```

---

## 任務三：優化產品圖片 alt 文字

找到產品卡片模板中的 `<img>` 標籤，將 alt 從單純的產品名稱改為包含關鍵字的描述。

將：
```html
:alt="product.mainTitle"
```

改為：
```html
:alt="`${product.mainTitle} — hands-on STEAM kit for kids ages 6-12 | Enki Atelier`"
```

---

## 任務四：在 index.vue 加入 FAQ 區塊

在 Contact Section（`#contact`）之前，插入以下完整的 FAQ section。
FAQ 區塊有助於取得 Google Featured Snippet，並自然涵蓋長尾關鍵字。

```html
<!-- FAQ Section -->
<section id="faq" class="py-24 bg-white">
  <div class="max-w-3xl mx-auto px-6">
    <div class="text-center mb-12">
      <p class="text-xs font-medium tracking-[2px] uppercase text-[#B586AC] mb-2">Got Questions</p>
      <h2 class="text-3xl md:text-4xl font-bold text-[#1A1A1A]" style="font-family: 'Lora', serif;">
        Frequently Asked Questions
      </h2>
    </div>

    <div class="space-y-4">
      <details class="faq-item" open>
        <summary class="faq-question">
          What age are Enki STEAM kits designed for?
        </summary>
        <p class="faq-answer">
          Enki kits are designed for kids ages 6–12. The curriculum is structured so that younger kids
          can work through activities with light parental guidance, while older kids (10–12) can work
          more independently. Each kit builds skills progressively, so there's always a next challenge.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-question">
          Which 3D pen works best with Enki kits?
        </summary>
        <p class="faq-answer">
          Our kits are compatible with most standard 3D pens that use PLA or ABS filament. For kids
          ages 6–9, we recommend the 3Doodler Start+ — it has no hot parts, making it the safest
          option. For older kids, the MYNT3D Super or SCRIB3D P1 offer more precision. See our
          full comparison guide on this page.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-question">
          Do kids need prior experience with 3D pens to use these kits?
        </summary>
        <p class="faq-answer">
          No experience needed. Each kit includes a warm-up section that introduces 3D pen basics
          before moving into the main project. The PhD-designed curriculum is built to meet kids
          where they are and guide them step by step.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-question">
          How is Enki different from other STEM kits or 3D pen stencils?
        </summary>
        <p class="faq-answer">
          Most 3D pen stencils are just shapes to trace — there's no learning structure, and kids
          finish in 20 minutes with nowhere to go. Enki kits are built around real physics and
          engineering concepts, with a curriculum designed by PhD engineers and an art educator.
          Kids don't just make something — they understand why it works.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-question">
          What skills do kids develop with Enki kits?
        </summary>
        <p class="faq-answer">
          Depending on the kit, kids develop skills in physics (projectile motion, center of mass,
          spatial geometry), engineering design, 3D thinking, and hands-on problem solving. These
          are screen-free, active learning experiences — the kind that build the habits of mind
          that matter long-term.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-question">
          Where can I buy Enki kits?
        </summary>
        <p class="faq-answer">
          Enki kits are currently available on Amazon. You can find links to each kit on this page,
          or search "Enki Atelier" on Amazon.com.
        </p>
      </details>
    </div>
  </div>
</section>
```

同時在 `<style>` 區塊加入 FAQ 的樣式：

```css
/* ─── FAQ ─── */
.faq-item {
  border: 0.5px solid rgba(223,198,224,0.5);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: box-shadow 0.2s;
}
.faq-item[open] {
  box-shadow: 0 2px 12px rgba(107,68,30,0.06);
}
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--enki-dark);
  cursor: pointer;
  list-style: none;
  background: var(--enki-cream);
  gap: 1rem;
}
.faq-question::-webkit-details-marker { display: none; }
.faq-question::after {
  content: '+';
  font-size: 1.25rem;
  font-weight: 300;
  color: var(--enki-brown);
  flex-shrink: 0;
  transition: transform 0.2s;
}
.faq-item[open] .faq-question::after {
  transform: rotate(45deg);
}
.faq-answer {
  padding: 0.75rem 1.25rem 1.25rem;
  font-size: 0.9rem;
  color: var(--enki-charcoal);
  line-height: 1.7;
  background: white;
}
```

---

## 任務五：加入 JSON-LD 結構化資料

在 `nuxt.config.ts` 的 `app.head` 的 `script` 陣列中加入結構化資料，幫助 Google 理解網站內容：

```ts
script: [
  {
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "Enki Atelier",
          "url": "https://enkiatelier.com",
          "logo": "https://enkiatelier.com/logo.png",
          "description": "PhD-designed STEAM kits for kids ages 6–12. Hands-on engineering and physics activities using 3D pens.",
          "sameAs": [
            "https://www.instagram.com/enkiatelier",
            "https://www.facebook.com/enkiatelier",
            "https://www.pinterest.com/enkiatelier"
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What age are Enki STEAM kits designed for?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Enki kits are designed for kids ages 6–12. The curriculum is structured so that younger kids can work through activities with light parental guidance, while older kids can work more independently."
              }
            },
            {
              "@type": "Question",
              "name": "Which 3D pen works best with Enki kits?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our kits are compatible with most standard 3D pens that use PLA or ABS filament. For kids ages 6–9, we recommend the 3Doodler Start+ for safety. For older kids, the MYNT3D Super or SCRIB3D P1 offer more precision."
              }
            },
            {
              "@type": "Question",
              "name": "How is Enki different from other STEM kits or 3D pen stencils?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most 3D pen stencils are just shapes to trace with no learning structure. Enki kits are built around real physics and engineering concepts, with a curriculum designed by PhD engineers and an art educator."
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
      ]
    })
  }
]
```

---

## 任務六：在導覽列加入 FAQ 連結

找到 `<nav>` 中的導覽連結區塊，加入 FAQ 連結：

```html
<a href="#faq" class="nav-link">FAQ</a>
```

位置放在「Guide」和「Contact Us」之間。

---

## 最後：Commit & Push 到新 Branch

```bash
git checkout -b seo/meta-tags-faq-schema
git add .
git commit -m "feat: add meta tags, H1 keyword, FAQ section, JSON-LD schema, optimized image alt text"
git push origin seo/meta-tags-faq-schema
```
