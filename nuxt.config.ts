// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Enki Atelier — 3D Pen STEAM Kits for Kids | Hands-On Science for Ages 6–12',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'PhD-designed 3D pen STEAM kits for kids ages 6–12. Build a real rocket launcher, a balancing bird, and a space mobile while learning projectile motion, equilibrium, and spatial reasoning. Screen-free, hands-on science.'
        },
        { name: 'keywords', content: '3D pen STEAM kit, 3D pen STEM activities for kids, hands-on science kit ages 6-12, 3D pen curriculum, kids engineering kit, rocket launcher STEM kit, balancing bird 3D pen kit, physics activities for kids' },
        { name: 'p:domain_verify', content: '79db93aeddb9b8b436e33951bcf4ca44' },
        // Open Graph（Facebook / LINE 分享預覽）
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://enkiatelier.com' },
        { property: 'og:title', content: 'Enki Atelier — 3D Pen STEAM Kits for Kids | Hands-On Science Ages 6–12' },
        { property: 'og:description', content: 'PhD-designed 3D pen STEAM kits that help children build real rockets, mobiles, and balancing birds while learning physics, equilibrium, and engineering. Screen-free, curriculum-backed, ages 6–12.' },
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
        { rel: 'preload', as: 'image', href: '/hero-image.jpg', fetchpriority: 'high' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap' }
      ],
      noscript: [
        {
          // Google Tag Manager (noscript) — body open
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJW95CPZ" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          tagPosition: 'bodyOpen',
        },
      ],
      script: [
        {
          // Google Tag Manager — defer to avoid blocking LCP
          innerHTML: `window.addEventListener('load',function(){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NJW95CPZ')});`,
          defer: true,
        },
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
          defer: true,
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