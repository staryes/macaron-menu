# Enki Atelier Balance 套件內容補強與 FAQ 改寫 — Claude Cowork 任務清單（第八批）

請根據以下任務修改 `pages/index.vue`。每完成一項請告知，再進行下一項。

寫作原則：全部 FAQ 答案禁止使用破折號（—或-）連接子句。
若需要分隔語意，改用句號另起一句，或用逗號。

---

## 任務一：更新 Balance 套件的產品資料

在 `products` ref 中，找到 mainTitle 為
「Balancing Bird & Mobile Engineering Kit for 3D Pens」的物件，
將 `description`、`skills`、`includes` 更新如下：

```js
{
  mainTitle: "Balancing Bird & Mobile Engineering Kit for 3D Pens",
  subTitle: "Build to Balance. Discover the Physics of Equilibrium.",
  description: "Engineer gravity-defying birds and hanging mobiles that actually balance. A Ph.D.-designed curriculum teaches center-of-mass principles through hands-on, screen-free exploration. Works with any standard PLA or PCL pen, including the 3Doodler Start+.",
  image: "/balance.png",
  ageTag: "Ages 8–12",
  skills: ["Center of Mass", "Equilibrium", "3D Pen Engineering", "Spatial Reasoning"],
  amazonUrl: "https://amazon.com/dp/B0GV9CVBJ5",
  includes: [
    "Full-color curriculum guide (pre-punched for binders)",
    "Custom balancing bird stand",
    "Professional-grade acrylic rods",
    "Clear PET building sheet",
    "High-strength fishing line",
    "Safety goggles + finger caps (child & adult sizes)",
    "Project materials & components",
  ],
},
```

---

## 任務二：完整替換 FAQ 區塊內容

找到 `#faq` section 內的 `<div class="space-y-4">`，整段替換為以下內容。

注意：所有答案文字不使用破折號，改用句號或逗號分隔。

```html
<div class="space-y-4">

  <details class="faq-item" open>
    <summary class="faq-question">
      Does the rocket actually fly, or is it just a decoration?
    </summary>
    <p class="faq-answer">
      It really flies. The rocket uses an elastic launch mechanism to teach projectile
      motion. It is a functional experiment, not a static decoration. If it is not
      taking off right away, it usually just needs a small alignment tweak in the
      assembly. That troubleshooting moment is actually a great part of the learning.
      The curriculum guide includes pro flight setup tips on pages 14 to 16.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      Which 3D pen works with each kit?
    </summary>
    <p class="faq-answer">
      The answer depends on which kit you are using.
      <br><br>
      <strong>Rocket Launcher Kit:</strong> The elastic launch mechanism requires
      filament with enough rigidity to hold structure under tension. Low-temp PCL
      filament is too flexible for this. You will need a standard pen that uses PLA
      or ABS filament. The MYNT3D Super ($39.99) and SCRIB3D P1 ($36.99) are solid
      options for older kids.
      <br><br>
      <strong>Balancing Bird &amp; Mobile Kit:</strong> This kit works with any
      standard PLA or PCL pen, including the 3Doodler Start+. That makes it a great
      entry point for younger kids or families who already own a low-temp pen.
      <br><br>
      See our full pen comparison guide on this page for more details.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      What age are Enki STEAM kits designed for?
    </summary>
    <p class="faq-answer">
      Enki's product line is designed for kids ages 6 to 12. Our current kits, the
      Rocket Launcher and Balancing Bird, are rated for ages 8 to 12 based on safety
      guidelines for 3D pen use and project complexity. The Balancing Bird kit is on
      the more accessible end and works well for younger kids in that range with light
      parental guidance. Future kits will extend to younger age groups, so kids can
      grow with the Enki curriculum from early exploration through more advanced
      engineering challenges.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      How is this different from regular 3D pen stencils?
    </summary>
    <p class="faq-answer">
      Most 3D pen stencils are shapes to trace. Kids finish in 20 minutes and there
      is nowhere to go next. Enki kits are built around real science concepts. The
      Rocket Launcher kit teaches projectile motion and structural stability. The
      Balancing Bird kit teaches center-of-mass principles. Kids do not just make
      something. They understand why it works, guided step by step by a curriculum
      designed by PhD engineers.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      Do kids need prior experience with 3D pens?
    </summary>
    <p class="faq-answer">
      No experience needed. Each kit includes a warm-up section that introduces 3D
      pen basics before moving into the main project. The photo-guided curriculum is
      designed to meet kids where they are and build confidence as they go.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      What is included in each kit?
    </summary>
    <p class="faq-answer">
      <strong>Rocket Launcher Kit</strong> includes a full-color step-by-step
      curriculum guide, a dual-surface heat-resistant silicone mat, safety goggles,
      heat-resistant finger caps in both child and adult sizes, precision tweezers,
      thread scissors, and 90+ project materials and components.
      <br><br>
      <strong>Balancing Bird &amp; Mobile Kit</strong> includes a full-color
      curriculum guide pre-punched for binders, a custom balancing bird stand,
      professional-grade acrylic rods, a clear PET building sheet, high-strength
      fishing line, safety goggles, and finger caps.
      <br><br>
      Neither kit includes a 3D pen. You use your own pen, which means one pen
      works across all Enki kits in the series.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      Is the curriculum guide easy to follow and store?
    </summary>
    <p class="faq-answer">
      Yes. Every guide is printed in full color with real-lab step-by-step photos.
      The Balancing Bird guide comes pre-punched for binders, so kids can collect
      each kit's curriculum into a personal science library as the series grows.
    </p>
  </details>

  <details class="faq-item">
    <summary class="faq-question">
      Where can I buy Enki kits?
    </summary>
    <p class="faq-answer">
      Enki kits are available on Amazon. You can find links to each kit in the
      Products section above, or search "Enki Atelier" on Amazon.com.
    </p>
  </details>

</div>
```

---

## 任務三：更新 Pen Comparison Section 引言

將 `#pens` section 的引言段落替換為：

```html
<p class="text-base text-[#3D3D3D] leading-relaxed max-w-2xl mx-auto mt-6 mb-10">
  Our kits are curriculum and material sets. The 3D pen is your tool, purchased
  separately, and one pen works across all Enki kits in the series. Pen requirements
  vary by kit: the Rocket Launcher needs a standard PLA or ABS pen for structural
  reasons, while the Balancing Bird kit works with most pens including low-temp PCL
  options like the 3Doodler Start+. The comparison below will help you choose.
</p>
```

---

## 任務四：更新 JSON-LD FAQ Schema

在 `nuxt.config.ts` 的 JSON-LD FAQPage schema 中，
將 `mainEntity` 陣列完整替換為以下內容：

```ts
"mainEntity": [
  {
    "@type": "Question",
    "name": "Does the rocket actually fly, or is it just a decoration?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "It really flies. The rocket uses an elastic launch mechanism to teach projectile motion. It is a functional experiment, not a static decoration. If it is not taking off, it usually just needs a small alignment tweak. The curriculum guide includes pro flight setup tips on pages 14 to 16."
    }
  },
  {
    "@type": "Question",
    "name": "Which 3D pen works with each Enki kit?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "It depends on the kit. The Rocket Launcher Kit requires a standard PLA or ABS pen. Low-temp PCL pens are too flexible for the elastic launch mechanism. The Balancing Bird Kit works with any standard PLA or PCL pen, including the 3Doodler Start+."
    }
  },
  {
    "@type": "Question",
    "name": "What age are Enki STEAM kits designed for?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Enki's product line targets kids ages 6 to 12. Current kits are rated for ages 8 to 12 based on safety guidelines. Future kits will extend to younger age groups within the 6 to 12 range."
    }
  },
  {
    "@type": "Question",
    "name": "How is this different from regular 3D pen stencils?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Most 3D pen stencils are just shapes to trace. Enki kits are built around real science concepts including projectile motion, center-of-mass, and spatial geometry, with step-by-step curriculum designed by PhD engineers."
    }
  },
  {
    "@type": "Question",
    "name": "Do kids need prior experience with 3D pens?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No experience needed. Each kit includes a warm-up section that introduces 3D pen basics before the main project."
    }
  },
  {
    "@type": "Question",
    "name": "What is included in each kit?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Rocket Launcher Kit includes a full-color curriculum guide, silicone mat, safety goggles, finger caps, tweezers, scissors, and 90+ components. The Balancing Bird Kit includes a curriculum guide pre-punched for binders, custom bird stand, acrylic rods, PET sheet, fishing line, goggles, and finger caps. Neither kit includes a 3D pen."
    }
  }
]
```

---

## 最後：Commit & Push 到新 Branch

```bash
git checkout -b content/balance-kit-faq-update
git add .
git commit -m "feat: update Balance kit description and includes, rewrite FAQ with pen compatibility by kit, remove dashes"
git push origin content/balance-kit-faq-update
```
