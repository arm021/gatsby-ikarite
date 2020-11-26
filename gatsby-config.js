require('dotenv').config({ path: `.env` });
const flattenMenu = require('@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu');

module.exports = {
  pathPrefix: "/gatsby-ikarite",
  plugins: [
    {
      resolve: '@gatsbystorefront/gatsby-theme-storefront-shopify',
      options: {
        shopName: `ikparis-usd`, 
        accessToken: `ce24bbb1a10df015a13972154fa07d4e`,
        basePath: '/',
        shopifyLite: false,
        enableWebp: true,
        imageQuality: '95',
        gatsbyImageProps: {
          loading: 'eager',
          fadeIn: true,
          durationFadeIn: 500,
        },
        manifest: {
          name: 'Institut Karité Paris™',
          short_name: 'Institut Karité',
          start_url: '/',
          background_color: '#fff',
          theme_color: '#323232',
          display: 'standalone',
          icon: 'src/images/shopping_bag.svg',
          icon_options: {
            purpose: 'any maskable',
          },
          cache_busting_mode: 'none',
        },
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://ikparis-usd.myshopify.com',
    gatsbyStorefrontConfig: {
      storeName: 'Institut Karité Paris',
      storeDescription: 'Demo store description',
      logoUrl: 'https://cdn.shopify.com/s/files/1/0117/9005/7534/files/karite-logo-1531214864_300x300.png',
      email: 'contact@ikparis.com',
      company: 'Institut Karité Paris™',
      location: '75008 Paris, France',
      street: '420 rue Saint Honoré',
      shipper: 'Siège Social - Head Office',
      phone: '+33 (0)1 40 07 02 85',
      workingDays: 'Mon - Fri',
      workingHours: '8AM - 6PM',
      socialNetworks: [
        'https://www.facebook.com/institutkariteparis/',
        'https://www.instagram.com/institutkarite/',
      ],
      // Payments icons are temporarily disabled, due to large package size and negative impact on Lighthouse 6 performance.
      // Need to find an alternative package to react-payment-icons-inline.
      // Default array ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal']
      payments: ['visa', 'mastercard', 'discover', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        'Facebook',
        'Pinterest',
        'Twitter',
        'Tumblr',
        'Whatsapp',
        'Line',
        'Viber',
      ],
      googleAnalyticsId: 'UA-141525658-5',
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'carousel',
          children: [
            {
              name: 'Jewelery',
              type: 'collection',
              handle: 'jewelery',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'Apparel',
              type: 'collection',
              handle: 'apparel',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Silk Summer Top',
              type: 'product',
              handle: 'silk-summer-top',
              textColor: 'white',
              textBgColor: 'primary',
            },
          ],
        },
        {
          name: 'Face',
          type: 'collection',
          handle: 'face',
          textColor: 'text',
          textBgColor: 'white',
        },
        {
          name: 'Body',
          type: 'collection',
          handle: 'body',
          textColor: 'text',
          textBgColor: 'white',
        },
        {
          name: 'Hair',
          type: 'collection',
          handle: 'hair',
          textColor: 'text',
          textBgColor: 'white',
        },
        {
          name: 'Shea Shaving Soap 100 g Milk Cream',
          type: 'product',
          handle: 'shea-shaving-soap-100-g-milk-cream',
          textColor: 'text',
          textBgColor: 'white',
        },
        {
          name: 'Shea After-Shave Balm 75 mL Milk Cream',
          type: 'product',
          handle: 'shea-after-shave-balm-75-ml-milk-cream',
          textColor: 'text',
          textBgColor: 'white',
        },
        {
          name: 'Shea Night Cream - All Skin Types 50 mL - Milk Cream',
          type: 'product',
          handle: 'shea-night-cream-all-skin-types-50-ml-milk-cream',
          textColor: 'text',
          textBgColor: 'white',
        },
        {
          name: 'Shea Day Lotion - Normal to Combination Skin 50 mL - Milk Cream',
          type: 'product',
          handle: 'shea-day-lotion-normal-to-combination-skin-50-ml-milk-cream',
          textColor: 'text',
          textBgColor: 'white',
        },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [
          {
            name: 'Face',
            type: 'header',
            handle: '',
            link: '',
            children: [
              { name: 'Hydrating Cares', type: 'collection', handle: 'hydrating-cares' },
              { name: 'Anti-Aging Cares', type: 'collection', handle: 'anti-aging-cares' },
              { name: 'Lip Cares', type: 'collection', handle: 'lip-cares' },
              { name: 'Men Cares', type: 'collection', handle: 'men-cares' },
            ],
          },
          { name: 'Body', type: 'collection', handle: 'body' },
          { name: 'Hair', type: 'collection', handle: 'hair' },
          { name: 'Best Sellers', type: 'collection', handle: 'face' },
          { name: 'The Art of Gifting', type: 'collection', handle: 'gift-sets' },
        ],
      }),
      topNavMenu: [
        { name: 'The House of Shea', link: '/pages/about-us' },
        { name: 'Journal', link: '/blog/journal' },
        { name: 'Professional Account', link: '/pages/professional-account' },
      ],
      footerLinksShop: [
        { name: 'Face', link: '/collection/face' },
        { name: 'Body', link: '/collection/body' },
        { name: 'Hair', link: '/collection/hair' },
        { name: 'Best Sellers', link: '/collection/all?=sort_by=best-selling' },
        { name: 'Gift Sets', link: '/collection/gift-sets' },
        { name: 'Accessories', link: '/collection/accessories' },
      ],
      footerLinksShea: [
        { name: 'Our Values', link: '/pages/about-us' },
        { name: 'Find a Store', link: '/pages/find-a-store' },
        { name: 'What others say about us', link: '/pages/professional-account' },
        { name: 'Benefits and Uses', link: '/pages/our-products' },
        { name: 'Origin and Manufacturing', link: '/pages/our-products' },
        { name: 'Our Journal', link: '/blog/journal' },
      ],
      footerLinksInfo: [
        { name: 'General Conditions of Sale', link: '/pages/general-conditions-of-sale' },
        { name: 'Legal Notice', link: '/pages/legal-notice' },
        { name: 'Privacy Policy', link: '/pages/privacy-policy' },
        { name: 'Returns and Refunds', link: '/pages/returns-and-refunds' },
        { name: 'Shipping', link: '/pages/shipping' },
        { name: 'Contact', link: '/pages/contact-us' },
      ],
      locales: 'en-US',
      currency: 'USD',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
};
