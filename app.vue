<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
// 引入 Tailwind CSS CDN 與品牌色彩設定
useHead({
  script: [
    {
      children: `
        window.tailwind = window.tailwind || {};
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                enki: {
                  brown:    '#6B441E',
                  gold:     '#E0A939',
                  lilac:    '#DFC6E0',
                  mauve:    '#B586AC',
                  cream:    '#FFF8EB',
                  charcoal: '#3D3D3D',
                  dark:     '#1A1A1A',
                }
              }
            }
          }
        }
      `,
    },
    {
      src: 'https://cdn.tailwindcss.com',
    }
  ]
});
</script> 