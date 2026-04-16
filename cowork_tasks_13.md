# Enki Atelier 導覽列與 Buying Guide Icon 修正 — Claude Cowork 任務清單（第十三批）

請根據以下任務修改 `pages/index.vue`。每完成一項請告知，再進行下一項。

---

## 任務一：導覽列 Buy Now 完全還原為一般文字連結

目前 Buy Now 仍顯示為深棕圓角按鈕，與其他導覽連結字型和樣式不一致。

問題根源：`nav-cta` class 還在 `<style>` 中存在，且 Buy Now 仍套用該 class。

請做以下兩件事：

### 1-A　將 Buy Now 的 class 改回與其他連結完全一致：

找到 `<nav>` 中的 Buy Now 連結，確認改為：
```html
<a href="#cta" class="hover:text-[#E0A939] text-sm md:text-base">Buy Now</a>
```

注意：class 必須和 Home、About、Products 等連結完全一樣，不能有任何差異。

### 1-B　從 `<style>` 中移除 `.nav-cta` 的樣式定義：

找到並刪除以下樣式區塊（若存在）：
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

## 任務二：Buying Guide Icon 替換為星系 SVG

找到 `#pens` section 中的兩個套件說明卡，將各自的 icon 容器內容替換。

### Rocket Launcher 卡片

將：
```html
<div class="w-10 h-10 rounded-xl bg-[#FFF8EB] border border-[#6B441E]/15 flex items-center justify-center flex-shrink-0 text-lg">
  🚀
</div>
```
改為（火箭保留，視覺上沒問題）：
```html
<div class="w-10 h-10 rounded-xl bg-[#FFF8EB] border border-[#6B441E]/15 flex items-center justify-center flex-shrink-0">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B441E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
    <path d="M12 6v6l4 2"/>
    <circle cx="12" cy="12" r="2" fill="#6B441E"/>
    <path d="M16.24 7.76l-1.42 1.42"/>
    <path d="M7.76 7.76l1.42 1.42"/>
    <path d="M7.76 16.24l1.42-1.42"/>
    <path d="M16.24 16.24l-1.42-1.42"/>
  </svg>
</div>
```

### Balancing Bird 卡片

將：
```html
<div class="w-10 h-10 rounded-xl bg-[#FFF8EB] border border-[#6B441E]/15 flex items-center justify-center flex-shrink-0 text-lg">
  🐦
</div>
```
改為（星系/軌道圖案）：
```html
<div class="w-10 h-10 rounded-xl bg-[#FFF8EB] border border-[#6B441E]/15 flex items-center justify-center flex-shrink-0">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B441E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3" fill="#6B441E" stroke="none"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
  </svg>
</div>
```

---

## 最後：Commit & Push 到新 Branch

```bash
git checkout -b fix/nav-buynow-buying-guide-icons
git add .
git commit -m "fix: revert buy now to plain nav link, replace buying guide emoji icons with SVG"
git push origin fix/nav-buynow-buying-guide-icons
```
