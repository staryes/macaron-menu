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
        { rel: 'canonical', href: 'https://enkiatelier.com/' },
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
                    "name": "Does the rocket actually fly, or is it just a decoration?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It really flies. The rocket uses an elastic launch mechanism to teach projectile motion. It is a functional experiment. If it is not taking off, it usually just needs a small alignment tweak. The curriculum guide includes pro flight setup tips on pages 14 to 16."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which 3D pen works with each Enki kit?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The Rocket Launcher Kit requires a PLA or ABS pen. Low-temp PCL pens are not compatible due to the elastic launch mechanism. The Balancing Bird Kit works with any standard 3D pen including low-temp PCL options."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What age are Enki STEAM kits designed for?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Current kits are rated for ages 8 and up based on project complexity and component handling. Enki's product line targets ages 6 to 12, with future kits extending to younger groups."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is this different from regular 3D pen stencils?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Enki kits are built around real science concepts inspired by Common Core State Standards and NGSS. Kids learn projectile motion, center-of-mass, and equilibrium through hands-on builds, not just tracing shapes."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do kids need prior experience with 3D pens?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No prior experience needed. The photo-guided curriculum is accessible to first-time users and kids can work at their own pace."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is included in each kit?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The Rocket Launcher Kit includes a curriculum guide, silicone mat, safety goggles, Finger caps, tweezers, scissors, and 90+ components. The Balancing Bird Kit includes a 60+ page curriculum guide, lay-flat template booklet, PET sheet, bird stand, acrylic rods, fishing line, and components. Neither kit includes a 3D pen."
                    }
                  }
                ]
              }
            ]
          })
        },
        {
          // Google tag (gtag.js) — Google Ads AW-17856636143
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-17856636143',
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17856636143');
          `,
          type: 'text/javascript',
        },
      ]
    }
  },

  // 使用內建 CSS
  css: [
    '@/assets/css/main.css'
  ],

  compatibilityDate: '2025-04-04'
});