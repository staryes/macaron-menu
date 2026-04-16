# Enki Atelier 商品卡片加入購買按鈕 — Claude Cowork 任務清單（第十五批）

請修改 `pages/index.vue` 的產品卡片模板。

---

## 任務一：在產品卡片加入 Buy on Amazon 按鈕

找到 `#themes` section 的產品卡片模板，在技能標籤 `<div class="flex flex-wrap gap-1.5 mt-auto">` 之後，
卡片文字區的最底部加入購買按鈕。

有 `amazonUrl` 的產品顯示按鈕，沒有的（Spatial Geometry Kit）顯示 Coming Soon 標籤。

```html
<!-- 購買按鈕 / Coming Soon -->
<div class="mt-5 pt-4 border-t border-[#DFC6E0]/40">
  <a
    v-if="product.amazonUrl"
    :href="product.amazonUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="flex items-center justify-center gap-2 w-full py-2.5 bg-[#6B441E] text-white text-sm font-semibold rounded-full hover:bg-[#6B441E]/85 transition-colors"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
    Buy on Amazon
  </a>
  <div
    v-else
    class="flex items-center justify-center w-full py-2.5 bg-[#DFC6E0]/30 text-[#B586AC] text-sm font-medium rounded-full"
  >
    Coming Soon
  </div>
</div>
```

---

## 最後：Commit & Push 到新 Branch

```bash
git checkout -b feat/product-card-buy-button
git add .
git commit -m "feat: add Buy on Amazon button to product cards, Coming Soon for unreleased kit"
git push origin feat/product-card-buy-button
```
