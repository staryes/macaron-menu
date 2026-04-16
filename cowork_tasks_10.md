# Enki Atelier 副標、商品說明、表格整理 — Claude Cowork 任務清單（第十批）

請根據以下任務修改 `pages/index.vue`。每完成一項請告知，再進行下一項。

寫作原則：所有文案禁止使用破折號（— 或 --）連接子句。
若需要分隔語意，改用句號另起一句，或用逗號。

---

## 任務一：修正 Hero Section 副標與說明文字

### 1-A　副標（H1 下方的 <p>）

將：
```
STEM & STEAM Kits for Kids Who Like to Build.
```
改為：
```
Science Kits for Kids Who Like to Build.
```

### 1-B　說明文字

將：
```
Hands-on STEAM kits designed by engineers and educators who refused to settle for "good enough."
```
改為：
```
Hands-on STEM kits with real science and art, designed by engineers and educators who refused to settle for "good enough."
```

---

## 任務二：Rocket 套件 description 豐富化

找到 `products` ref 中 Rocket Launcher 的 `description` 欄位，替換為：

```js
description: "Build rockets that actually launch and learn the physics behind why they fly. The PhD-designed curriculum takes kids through projectile motion, structural stability, and experimental thinking with step-by-step full-color photo instructions photographed in our own lab. Every build is calibrated so the rocket stays together and performs as expected. No flimsy designs, no guesswork.",
```

說明：
- 移除所有破折號
- 加入「step-by-step full-color photo instructions photographed in our own lab」呼應教材賣點
- 加入「structural stability」和「experimental thinking」強化科學感
- 加入「No flimsy designs, no guesswork」對應 Amazon listing 的 stability-first 定位
- 不提安全配件（includes 清單已有）

---

## 任務三：Rocket 套件 includes 最終確認版

確認 Rocket Launcher 的 `includes` 陣列為以下內容（修正大小寫與措辭）：

```js
includes: [
  "Full-color curriculum guide (pre-punched for binders)",
  "Dual-surface heat-resistant silicone mat",
  "Safety goggles + Finger caps (child & adult sizes)",
  "Precision tweezers + thread scissors",
  "90+ project materials & components",
],
```

---

## 任務四：簡化 3D 筆比較表格

在 `pens` ref 資料中，移除 `safety`、`power`、`price` 三個欄位。
只保留 `name`、`age`、`filament`、`buyLink`。

同時在 `<table>` 的模板中，移除對應的三列：
- Safety 列（`<tr>` 含 `pen.safety`）
- Power 列（`<tr>` 含 `pen.power`）
- Price 列（`<tr>` 含 `pen.price`）

最終表格只保留以下四列：

| 欄位 | 說明 |
|------|------|
| Age | 適合年齡 |
| Filament | 耗材類型（這是最關鍵的相容性資訊）|
| Buy | Amazon 購買連結按鈕 |

表格 `<thead>` 也同步移除對應的欄位說明（若有的話只保留 Feature 和各筆品牌名稱欄）。

---

## 最後：Commit & Push 到新 Branch

```bash
git checkout -b content/hero-rocket-table-fixes
git add .
git commit -m "fix: hero subtitle natural language, rocket description enriched, table simplified to age and filament only"
git push origin content/hero-rocket-table-fixes
```
