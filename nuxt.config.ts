// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'
const sw = process.env.SW === 'true'
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        lang: 'fa',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "مرجع طلا  ایران - مدیران گلد",
      meta: [{ charset: 'utf-8' }, { name: 'keywords', content: 'پیچ و رولپلاک و نماشویی،طلا,طلا جدید,طلا تهران,طلا ارزان,طلا ,قیمت طلا,نصب طلا,اجاره طلا' },
      { name: 'description', content: 'مدیران گلد مرجع خرید و فروش و نصب و اجاره طلا  ایران؛تجربه ای ماندگار و لذت بخش در صنعت طلا  ایران برای كلیه ذینفعان داخلی و خارجی' },
      { property: 'og:locale', content: 'fa_IR' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'مدیران گلد' },
      { property: 'og:title', content: 'مدیران گلد' },
      { property: 'og:description', content: 'مرجع طلا ایران | تجربه ای ماندگار و لذت بخش در صنعت طلا ایران برای كلیه ذینفعان داخلی و خارجی ، طلا  نوین' },
      { property: 'og:url', content: 'https://www.darbastan.com/' },
      { property: 'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png' },
      { property: 'business:contact_data:locality', content: 'تهران' },
      { property: 'business:contact_data:country_name', content: 'ایران' },
      { property: 'business:contact_data:website', content: 'https://darbastan.com' },
      { name: 'twitter:creator', content: 'Darbastan.com' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:description', content: 'نصب طلا در تهران | اجرا و نصب طلا در تهران،مشهد،قزوین،زنجان،همدان،تبریز،کرج،اصفهان،قم | استخدام استادکاران و کارگران،آموزش کار در ارتفاع و طلا' },
      { name: 'author', content: 'Darbastan.com' },
      { httpEquiv: 'X-UA-Compatible', content: 'ie=edge' },
      { name: 'copyright', content: '2016-2025' },
      { name: 'document-type', content: 'Public' },
      { name: 'document-rating', content: 'General' },
      { name: 'resource-type', content: 'document' },
      { name: 'robots', content: 'index, follow' },
      { name: 'resource-type', content: 'document' },
      ],
      link: [
        // {
        //   href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css",
        //   rel: "stylesheet",
        // },
        // {
        //   rel:"icon",
        //   type:"image/svg+xml",
        //   href:"/darbastan.svg",
        // },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/img/favicon.ico",
        },
        {
          href: "https://www.darbastan.com/",
          rel: "canonical",
        }

      ],
      script: [

        {
          src: "/js/jquery.min.js",
          type: "text/javascript",
        },
        {
          src: "/js/bootstrap.min.js",
          type: "text/javascript",
        },
        {
          src: "/js/owl.carousel.min.js",
          type: "text/javascript",
        },
        {
          src: "/js/jquery.bxslider.js",
          type: "text/javascript",
        },
        {
          src: "/js/megamenu.js",
          type: "text/javascript",
        },
        {
          innerHTML: `
            var mega_menu = '0';
          `,
          type: 'text/javascript'
        },
        {
          src: "/js/mobile-menu.js",
          type: "text/javascript",
        },
        {
          src: "/js/jquery-ui.js",
          type: "text/javascript",
        },
        {
          src: "/js/main.js",
          type: "text/javascript",
        },
        {
          src: "/js/countdown.js",
          type: "text/javascript",
        },
        {
          src: "/js/revslider.js",
          type: "text/javascript",
        },
        {
          src: "/js/revolution.extension.js",
          type: "text/javascript",
        },
        {
          innerHTML: `var tpj = jQuery;
var revapi4;
tpj(document).ready(function() {
    if (tpj("#rev_slider_4_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_4_1");
    } else {
        revapi4 = tpj("#rev_slider_4_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "js/",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "zeus",
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    style: "metis",
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
                }
            },
            viewPort: {
                enable: true,
                outof: "pause",
                visible_area: "80%"
            },
            responsiveLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [600, 600, 500, 400],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
}); /*ready*/`,
          type: 'text/javascript'
        },


        // {
        //   async: true,
        //   src: "https://www.googletagmanager.com/gtag/js?id=G-RGGM81HNVD",
        // },
        {
          innerHTML: `
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-RGGM81HNVD');
          `,
          type: "text/javascript",
        },
        {
          type: 'text/javascript',
          innerHTML: `
            var _Hasync = _Hasync || [];
            _Hasync.push(['Histats.start', '1,4511698,4,0,0,0,00010000']);
            _Hasync.push(['Histats.fasi', '1']);
            _Hasync.push(['Histats.track_hits', '']);
            (function () {
                var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
                hs.src = ('//s10.histats.com/js15_as.js');
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
            })();
          `,
        },
      ],
      noscript: [
        {
          innerHTML: `
            <a rel="prefetch" href="/" target="_blank">
              <img src="//sstatic1.histats.com/0.gif?4511698&101" alt="طلا " border="0">
            </a>
          `,
        },
      ],
      httpEquiv: [
        {
          // هدر CSP برای امنیت بیشتر
          name: 'Content-Security-Policy',
          content: `
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com;
            style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com;
            img-src 'self' https://darbastan.storage.c2.liara.space;
            font-src 'self' https://fonts.gstatic.com;
            connect-src 'self' https://new.darbastan.org/api;
            object-src 'none';
            frame-src 'none';
            base-uri 'none';
            form-action 'self';
            upgrade-insecure-requests;
            block-all-mixed-content;
          `
        }
      ]

    },

  },
  hooks: {
    'pages:extend'(pages) {
      // Add fixed page
      pages.push({
        name: 'MetalPlankScaffold',
        path: '/MetalPlankScaffold',
        file: '~/pages/mobilescaffoldingRequest.vue',
      });
      pages.push({
        name: 'RequestDarbast',
        path: '/RequestDarbast',
        file: '~/pages/mobilescaffoldingRequest.vue',
      });
      pages.push({
        name: 'QuickOrderScaffoldRental',
        path: '/QuickOrderScaffoldRental',
        file: '~/pages/mobilescaffoldingRequest.vue',
      });
      pages.push({
        name: 'Home',
        path: '/',
        file: '~/pages/index.vue',
      });
      pages.push({
        name: 'Blog',
        path: '/Blog/:pageId/:name',
        file: '~/pages/Blog.vue',
      });
      pages.push({
        name: 'articles',
        path: '/articles/:pageId/:name',
        file: '~/pages/Blog.vue',
      });
      pages.push({
        name: 'PageDetails',
        path: '/AdminPages/PageDetails/:pageId',
        file: '~/pages/Blog.vue',
      });
      pages.push({
        name: 'Tehran',
        path: '/Tehran',
        file: '~/pages/Locations/Tehran.vue',
      });
      pages.push({
        name: 'Esfahan',
        path: '/Esfahan',
        file: '~/pages/Locations/Tehran.vue',
      });
      pages.push({
        name: 'Fars',
        path: '/Fars',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'Alborz',
        path: '/Alborz',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'AzarbaijanSharghi',
        path: '/AzarbaijanSharghi',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'Zanjan',
        path: '/Zanjan',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'Kermanshah',
        path: '/Kermanshah',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'Hormozgan',
        path: '/Hormozgan',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'Golestan',
        path: '/Golestan',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'Lorestan',
        path: '/Lorestan',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'KhorasanRazavi',
        path: '/KhorasanRazavi',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'Khozestan',
        path: '/Khozestan',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'Hamedan',
        path: '/Hamedan',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'Kerman',
        path: '/Kerman',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'Mazandaran',
        path: '/Mazandaran',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'Kordestan',
        path: '/Kordestan',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'Yazd',
        path: '/Yazd',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'SistanvaBalochestan',
        path: '/SistanvaBalochestan',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'KohgiloyevaBoyerAhmad',
        path: '/KohgiloyevaBoyerAhmad',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'Gilan',
        path: '/Gilan',
        file: '~/pages/Locations/Tehran.vue',
      });
      pages.push({
        name: 'markazi',
        path: '/markazi',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'qom',
        path: '/qom',
        file: '~/pages/Locations/Tehran.vue',
      });

      pages.push({
        name: 'Deutsch',
        path: '/Deutsch',
        file: '~/pages/Deutsch.vue',
      });

      pages.push({
        name: 'Registration',
        path: '/Registration',
        file: '~/pages/Registration.vue',
      });

      pages.push({
        name: 'RegistrationEN',
        path: '/RegistrationEN',
        file: '~/pages/Registration.vue',
      });

      pages.push({
        name: 'RegistrationDE',
        path: '/RegistrationDE',
        file: '~/pages/Registration.vue',
      });

      pages.push({
        name: 'ScaffoldingServices',
        path: '/ScaffoldingServices/:topicId/:title',
        file: '~/pages/ScaffoldingServices.vue',
      });

      pages.push({
        name: 'Post',
        path: '/Topics/Post',
        file: '~/pages/ScaffoldingServices.vue',
      });

      pages.push({
        name: 'ScaffoldingCompany',
        path: '/ScaffoldingCompany/:Id/:companyName',
        file: '~/pages/ScaffoldingCompany.vue',
      });

      pages.push({
        name: 'CustomerSatisfaction',
        path: '/CustomerSatisfaction',
        file: '~/pages/CustomerSatisfaction.vue',
      });

      pages.push({
        name: 'ShortLinkRedirect',
        path: '/q/:shortUrl',
        file: '~/pages/ShortLinkRedirect.vue',
      });


      pages.push({
        name: 'tag',
        path: '/tag',
        file: '~/pages/tag.vue',
      });

      pages.push({
        name: 'RegisterMobile',
        path: '/Account/RegisterMobile',
        file: '~/pages/RegisterMobile.vue',
      });

      pages.push({
        name: 'Login',
        path: '/Account/Login',
        file: '~/pages/Login.vue',
      });


    },
  },
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', '@vite-pwa/nuxt', '@primevue/nuxt-module', '@nuxt/image'],
  image: {
  },
  css: [
    //'~/public/css/bootstrap.min.css',
       'bootstrap/dist/css/bootstrap.rtl.min.css',
    '~/public/css/animate.css',
    '~/public/css/font-awesome.min.css',
    '~/public/css/simple-line-icons.css',
    '~/public/css/owl.carousel.css',
    '~/public/css/owl.transitions.css',
    '~/public/css/flexslider.css',
    '~/public/css/jquery-ui.css',
    '~/public/css/revolution-slider.css',
    '~/public/css/quick_view_popup.css',
    '~/public/css/blog.css',
    '~/public/css/style.css',
    '~/public/css/responsive.css',


  ],
  pwa: {
    strategies: sw ? 'injectManifest' : 'generateSW',
    srcDir: sw ? 'service-worker' : undefined,
    filename: sw ? 'sw.ts' : undefined,
    registerType: 'autoUpdate',
    manifest: {
      name: 'مدیران گلد',
      short_name: 'Darbastan',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }
})