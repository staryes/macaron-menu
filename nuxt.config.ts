// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Enki Atelier — STEAM Kits & 3D Pen Curriculum for Kids Ages 6–12',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://enkiatelier.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap' }
      ],
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
    }
  },

  // 使用內建 CSS
  css: [
    '@/assets/css/main.css'
  ],

  compatibilityDate: '2025-04-04'
});