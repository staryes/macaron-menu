# Enki Atelier 多項修正 — Claude Cowork 任務清單（第十二批）

請根據以下任務逐一修改相關檔案。每完成一項請告知，再進行下一項。
寫作規則：所有文案禁止使用破折號連接子句，改用句號或逗號。

---

## 任務一：更換 Hero Image

將 `public/` 資料夾中的新圖片 `hero-image.jpg` 設定為 Hero Section 的背景圖。

找到 `#hero` section 中的 `<img>` 標籤，將 `src` 從：
```html
src="/brand-story.jpg"
```
改為：
```html
src="/hero-image.jpg"
```

---

## 任務二：導覽列 Buy Now 還原為一般連結樣式

目前 Buy Now 的 class 已被改為 `nav-cta`（按鈕樣式），在導覽列中視覺上過於突兀。
請將其還原為與其他連結一致的樣式。

找到 `<nav>` 中的 Buy Now 連結，將 class 從 `nav-cta` 改回：
```html
<a href="#cta" class="nav-link">Buy Now</a>
```

---

## 任務三：About Section — 移除 Enki 命名 callout 框，改為純文字斜體

目前 Enki 命名由來使用了帶有左側邊線和背景色的 callout 框，視覺效果不如預期。
請將其簡化為純文字斜體，融入右欄內文之中。

找到以下區塊：
```html
<div class="mt-4 px-5 py-4 bg-[#DFC6E0]/30 border-l-2 border-[#B586AC] rounded-r-lg">
  <p class="text-sm text-[#6B441E] italic leading-relaxed">
    The name comes from Enki, the Sumerian god of wisdom and craft. Old, a little obscure,
    and about the drive to make things rather than just know them. That felt right.
  </p>
</div>
```

替換為：
```html
<p class="text-sm text-[#B586AC] italic leading-relaxed mt-4">
  The name comes from Enki, the Sumerian god of wisdom and craft. Old, a little obscure,
  and about the drive to make things rather than just know them. That felt right.
</p>
```

---

## 任務四：更新 Rocket Launcher 套件的 description

找到 `products` ref 中 Rocket Launcher 的 `description` 欄位，替換為從 Amazon listing 提煉、去除廣告腔的版本：

```js
description: "A complete engineering journey designed by PhD engineers to master the physics of projectiles. The full-color, photo-guided curriculum takes kids through real science principles and STEM challenges, transforming a 3D pen into a precise engineering tool. Every build is calibrated for structural stability so the rocket actually launches. Screen-free, hands-on, and built for ages 8 and up.",
```

---

## 任務五：更新 Balancing Bird 套件的 description

找到 `products` ref 中 Balancing Bird 的 `description` 欄位，替換為：

```js
description: "A complete engineering journey through the physics of equilibrium. The PhD-designed curriculum guides kids through center-of-mass principles and STEM challenges, teaching them to find the precise balance point in every build. Whether constructing a balancing bird or an elegant hanging mobile, every creation is designed to actually stay upright and function as expected. Works with any standard 3D pen including low-temp PCL options.",
```

---

## 任務六：Buying Guide — 擴充相容 3D 筆清單

找到 `#pens` section 中的兩個套件說明卡，更新 Compatible with 說明和 Amazon 連結按鈕。

### Rocket Launcher 卡片

將 Compatible with 段落改為：
```html
<p class="text-xs text-[#B586AC] mb-3">
  Compatible with: MYNT3D Super, MYNT3D Pro, SCRIB3D P1, 7TECH 3D Pen,
  TECBOSS 3D Pen, Dikale 3D Pen, and most standard PLA or ABS pens
</p>
```

將 Amazon 連結按鈕更新為三個：
```html
<div class="flex flex-wrap gap-2">
  <a href="https://amzn.to/4pl0gYW" target="_blank" rel="noopener noreferrer"
     class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
    MYNT3D Super
  </a>
  <a href="https://amzn.to/49lsYD6" target="_blank" rel="noopener noreferrer"
     class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
    MYNT3D Pro
  </a>
  <a href="https://amzn.to/3MVjs2e" target="_blank" rel="noopener noreferrer"
     class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
    SCRIB3D P1
  </a>
</div>
```

### Balancing Bird 卡片

將 Compatible with 段落改為：
```html
<p class="text-xs text-[#B586AC] mb-3">
  Compatible with: most PLA, ABS, and PCL pens including low-temp models.
  Works with 3Doodler Start+, MYNT3D Super, MYNT3D Pro, SCRIB3D P1,
  7TECH 3D Pen, TECBOSS 3D Pen, Dikale 3D Pen, and most standard 3D pens
</p>
```

將 Amazon 連結按鈕更新為四個：
```html
<div class="flex flex-wrap gap-2">
  <a href="https://amzn.to/4aIF63E" target="_blank" rel="noopener noreferrer"
     class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
    3Doodler Start+
  </a>
  <a href="https://amzn.to/4pl0gYW" target="_blank" rel="noopener noreferrer"
     class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
    MYNT3D Super
  </a>
  <a href="https://amzn.to/49lsYD6" target="_blank" rel="noopener noreferrer"
     class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
    MYNT3D Pro
  </a>
  <a href="https://amzn.to/3MVjs2e" target="_blank" rel="noopener noreferrer"
     class="text-xs px-3 py-1.5 bg-[#6B441E] text-white rounded-full hover:bg-[#6B441E]/85 transition-colors">
    SCRIB3D P1
  </a>
</div>
```

---

## 最後：Commit & Push 到新 Branch

```bash
git checkout -b content/hero-nav-about-products-pens
git add .
git commit -m "feat: new hero image, revert nav buy now, simplify about enki callout, update product descriptions, expand pen compatibility list"
git push origin content/hero-nav-about-products-pens
```
