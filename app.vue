<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
// 引入 Tailwind CSS CDN
useHead({
  script: [
    {
      src: 'https://cdn.tailwindcss.com',
      defer: true
    }
  ]
});
</script> 