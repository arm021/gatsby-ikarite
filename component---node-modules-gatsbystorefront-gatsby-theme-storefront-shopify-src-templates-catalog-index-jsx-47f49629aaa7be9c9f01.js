(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[13],{"8Qyq":function(t){t.exports=JSON.parse('{"catalogPriceLabel":"Price:","sale":"SALE","new":"NEW","soldout":"SOLDOUT","addToCart":"+ Add to cart","selectOptions":"+ Select options"}')},EVNh:function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("+ZDr"),i=a.n(o),c=a("VdAu");e.a=function(t){var e=t.numPages,a=t.currentPage,o=t.shopifyThemePath,l=!1,s=!1;return 1!==a&&(l=o+"/"+(a-1)),2===a&&(l=o),a!==e&&(s=o+"/"+(a+1)),r.a.createElement(n.Fragment,null,e>1?r.a.createElement(c.d,{justifyContent:"center"},l?r.a.createElement(c.b,{as:i.a,to:l,mx:2,rel:"prev",variant:"pagination"},"<"):"",Array.from({length:e}).map((function(t,n){var l,s=n+1;return s>=Math.max(1,a-2)&&s<=Math.min(a+2,e)?s===a?r.a.createElement(c.b,{mx:2,variant:"pagination-active",key:s},s):(l=1===s?o:o+"/"+s,r.a.createElement(c.b,{as:i.a,to:l,mx:2,variant:"pagination",key:s},s)):""})),s?r.a.createElement(c.b,{as:i.a,to:s,mx:2,rel:"next",variant:"pagination"},">"):""):"")}},JjMb:function(t,e,a){"use strict";a.r(e),a.d(e,"catalogQuery",(function(){return k}));var n=a("q1tI"),r=a.n(n),o=a("TJpk"),i=a("X+3r"),c=a("KQm4"),l=a("VdAu"),s=a("wTIg"),m=a("Wbzz"),d=(a("9eSz"),a("+ZDr")),u=a.n(d),p=a("o0o1"),f=a.n(p),g=(a("ls82"),a("HaE+")),h=a("dh+f"),y=function(t){var e=Object(h.a)().addItem,a=t.title,n=t.shopifyId,o=t.amount,i=t.cartUrl,c=t.isSelectOptions,s=void 0!==c&&c,m=function(){var t=Object(g.a)(f.a.mark((function t(a,n,r){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({variantId:a,quantity:n}).then((function(t){Object(d.navigate)(r)}),(function(t){console.error(t)})).catch((function(t){throw new Error(t)}));case 1:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}();return s?r.a.createElement(l.h,Object.assign({as:u.a},t),a):r.a.createElement(l.h,Object.assign({onClick:function(){m(n,o,i)}},t),a)},b=function(t){var e,a=t.text,n=t.format,o=void 0===n?"circle":n,i=t.size,c=void 0===i?[48,58]:i,s=t.width,m=void 0===s?c:s,d=t.height,u=void 0===d?c:d,p=t.textColor,f=void 0===p?"white":p,g=t.bgColor,h=void 0===g?"badge":g,y=t.mx,b=t.my;return"circle"===o?e=9999:"box"===o&&(e=15),r.a.createElement(l.d,{color:f,bg:h,alignItems:"center",justifyItems:"center",justifyContent:"center",mx:y,my:b,sx:{display:"inline-block",fontSize:1,width:m,height:u,borderRadius:e}},r.a.createElement(l.a,{fontFamily:"body"},a))},E=r.a.memo(b),x=a("A8MR"),v=a("JOp6"),w=a("8Qyq");var O=function(t){var e=t.product,a=(t.gatsbyImageProps,Object(m.useStaticQuery)("2746441856").site.siteMetadata.gatsbyStorefrontConfig),n=a.locales,o=a.currency,i=e.priceRange,c=i.minVariantPrice.amount,d=i.maxVariantPrice.amount,p=e.availableForSale,f=e.variants,g=e.title,h=e.tags,b=e.fields,O=b.shopifyThemePath,S=b.firstImage,j=e.cartUrl,k=c!==d,C=1===f.length,A=Object(v.a)(c,n,o),N=Object(v.a)(d,n,o),z=f[0].compareAtPrice,I=Object(v.a)(f[0].compareAtPrice,n,o),P=!1,_=Object(s.a)(l.e,{target:"e1shlsxa1"})(""),D=Object(s.a)("strike",{target:"e1shlsxa2"})({name:"1menaah",styles:"color:#c0c0c0;"}),T=Object(s.a)(y,{target:"e1shlsxa3"})({name:"14gek7z",styles:"position:absolute;cursor:pointer;z-index:1;opacity:0;top:0;left:0;bottom:0;right:0;transition-property:all;transition-duration:0.3s;transition-timing-function:ease-in-out;transition-delay:0s;"}),L=Object(s.a)(l.a,{target:"e1shlsxa4"})("& img{width:100%;object-fit:contain;transition-property:all;transition-duration:0.6s;transition-timing-function:ease-in-out;transition-delay:0s;height:15rem;}&:hover img{transform:scale(1.05);transition-property:all;transition-duration:0.6s;transition-timing-function:ease-in-out;transition-delay:0s;}&:hover ",T,"{opacity:100;transform:translateY(-15px);transition-property:all;transition-duration:0.4s;transition-timing-function:ease-in-out;transition-delay:0s;}& ",T,"{opacity:0;margin-top:15px;transition-property:all;transition-duration:0.4s;transition-timing-function:ease-in-out;transition-delay:0s;}&:hover ",_,"{opacity:0;transform:translateY(-15px);transition-property:all;transition-duration:0.4s;transition-timing-function:ease-in-out;transition-delay:0s;}& ",_,"{opacity:100;transition-property:all;transition-duration:0.4s;transition-timing-function:ease-in-out;transition-delay:0s;}");return r.a.createElement(l.c,{px:4,py:2,mb:4,width:[1,1/3,1/4]},r.a.createElement(L,null,r.a.createElement(l.a,null,r.a.createElement(l.a,{m:2,sx:{display:"inline-block",position:"absolute","z-index":9}},h.map((function(t){return"new"===t&&p?r.a.createElement(E,{text:w.new,bgColor:"badgeNew",my:1,key:w.new}):""})),f.map((function(t,e){return t.availableForSale&&t.compareAtPrice&&!P&&p?(P=!0,r.a.createElement(E,{text:w.sale,my:1,key:w.sale+"+"+e})):""})),p?"":r.a.createElement(E,{text:w.soldout,width:90,height:35,bgColor:"badgeSoldout",format:"box",my:1,key:w.soldout})),r.a.createElement(l.a,{sx:{overflow:"hidden",mb:2}},r.a.createElement(u.a,{to:O,style:{textDecoration:"none"}},S&&S.originalSrc?r.a.createElement("img",{src:S.originalSrc,alt:g,sx:{top:["-2rem","-3rem","-5rem"],padding:["7vw","2vw"],width:"100%"}}):r.a.createElement(x.a,{width:"100%",height:"100%",color:"grey",p:4}))),r.a.createElement(l.a,{sx:{position:"relative",textAlign:"center"},mb:1},C?r.a.createElement(T,{title:w.addToCart,shopifyId:f[0].shopifyId,amount:1,cartUrl:j,sx:{color:"addToCart",bg:"white",fontFamily:"body",fontSize:[1,2,3],fontWeight:"normal",lineHeight:"1.25",py:3}}):r.a.createElement(T,{isSelectOptions:"true",title:w.selectOptions,to:O,sx:{color:"addToCart",":hover,:focus,.active":{color:"addToCart",textDecoration:"none"},bg:"white",fontFamily:"body",fontSize:[1,2,3],fontWeight:"normal",lineHeight:"1.25",py:3}}),r.a.createElement(_,{as:"h3",sx:{fontSize:2,py:3,height:["auto","120px","100px"],overflow:"hidden"}},g)),r.a.createElement(l.a,null,r.a.createElement(l.h,{sx:{color:"black",fontSize:[1],fontWeight:"bold"}},A," ",k&&"- "+N," ",C&&z>c&&r.a.createElement(D,null,I))))))},S=a("EVNh");var j=function(t){t.data.store.siteMetadata.gatsbyStorefrontConfig.gatsbyImageProps;var e=t.pageContext,a=e.limit,n=e.skip,o=e.cartUrl,i=t.data.collection.nodes[0],s=i.title,m=i.description,d=[];return t.data.collection.nodes.forEach((function(t){d=[].concat(Object(c.a)(d),Object(c.a)(t.products))})),r.a.createElement(l.a,{flexWrap:"wrap",px:2,pt:3,mx:"auto",style:{maxWidth:1300}},r.a.createElement(l.a,{className:"card border-0 text-center",sx:{background:"transparent"}},r.a.createElement(l.a,{className:"card-body"},r.a.createElement(l.a,{className:"header",fontSize:[30,36,60]},s),r.a.createElement(l.a,{className:"card-text border-0 mx-auto",width:[null,"75%"],fontSize:[1,2,18]},m)),r.a.createElement(l.a,{className:"container mx-auto"},r.a.createElement(l.a,{className:"card rounded-0 border-bottom-0",backgroundColor:"background"},r.a.createElement(l.a,{className:"card-body card-deck row"},d.map((function(t,e){return t.cartUrl=o,e+1>n&&e+1<=n+a?r.a.createElement(O,{key:t.shopifyId,product:t}):""}))),r.a.createElement(l.a,{className:"border-top border-bottom",width:1,key:"pagination"},r.a.createElement(l.h,{sx:{position:"relative"}},r.a.createElement(S.a,t.pageContext)))))))},k=(e.default=function(t){var e=t.data.collection.nodes[0],a=e.title,n=e.description,c=t.data.store.siteMetadata.gatsbyStorefrontConfig.storeName;return r.a.createElement(i.a,null,r.a.createElement(o.Helmet,{title:a,titleTemplate:"%s — "+c,defer:!1},r.a.createElement("meta",{name:"description",content:n})),r.a.createElement(j,t))},"1870731642")}}]);
//# sourceMappingURL=component---node-modules-gatsbystorefront-gatsby-theme-storefront-shopify-src-templates-catalog-index-jsx-47f49629aaa7be9c9f01.js.map