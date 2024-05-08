import { _ as __nuxt_component_0$1 } from './nuxt-link-yvedYU3l.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/supabase-js';

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-white" }, _attrs))}><div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48"><div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8"><div class="sm:max-w-lg"><h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> Summer styles are finally here </h1><p class="mt-4 text-xl text-gray-500"> This year, our new summer collection will shelter you from the harsh elements of a world that doesn&#39;t care if you live or die. </p></div><div><div class="mt-10"><div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"><div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"><div class="flex items-center space-x-6 lg:space-x-8"><div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"><div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"><img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" class="h-full w-full object-cover object-center"></div><div class="h-64 w-44 overflow-hidden rounded-lg"><img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" class="h-full w-full object-cover object-center"></div></div><div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"><div class="h-64 w-44 overflow-hidden rounded-lg"><img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" class="h-full w-full object-cover object-center"></div><div class="h-64 w-44 overflow-hidden rounded-lg"><img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" class="h-full w-full object-cover object-center"></div><div class="h-64 w-44 overflow-hidden rounded-lg"><img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" class="h-full w-full object-cover object-center"></div></div><div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"><div class="h-64 w-44 overflow-hidden rounded-lg"><img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" class="h-full w-full object-cover object-center"></div><div class="h-64 w-44 overflow-hidden rounded-lg"><img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" class="h-full w-full object-cover object-center"></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/store/products",
    class: "inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Shop Collection `);
      } else {
        return [
          createTextVNode(" Shop Collection ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "Collection",
  __ssrInlineRender: true,
  setup(__props) {
    const callouts = [
      {
        name: "Desk and Office",
        description: "Work from home accessories",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
        imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        href: "#"
      },
      {
        name: "Self-Improvement",
        description: "Journals and note-taking",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
        imageAlt: "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#"
      },
      {
        name: "Travel",
        description: "Daily commute essentials",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
        href: "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100" }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32"><h2 class="text-2xl font-bold text-gray-900"> Collections </h2><div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"><!--[-->`);
      ssrRenderList(callouts, (callout) => {
        _push(`<div class="group relative"><div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"><img${ssrRenderAttr("src", callout.imageSrc)}${ssrRenderAttr("alt", callout.imageAlt)} class="h-full w-full object-cover object-center"></div><h3 class="mt-6 text-sm text-gray-500"><a${ssrRenderAttr("href", callout.href)}><span class="absolute inset-0"></span> ${ssrInterpolate(callout.name)}</a></h3><p class="text-base font-semibold text-gray-900">${ssrInterpolate(callout.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Collection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "TechnicalSpecs",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      { name: "Origin", description: "Designed by Good Goods, Inc." },
      { name: "Material", description: "Solid walnut base with rare earth magnets and powder coated steel card cover" },
      { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
      { name: "Finish", description: "Hand sanded and finished with natural oil" },
      { name: "Includes", description: "Wood card tray and 3 refill packs" },
      { name: "Considerations", description: "Made from natural materials. Grain and color vary with each item." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"><div><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Technical Specifications </h2><p class="mt-4 text-gray-500"> The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists. </p><dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="border-t border-gray-200 pt-4"><dt class="font-medium text-gray-900">${ssrInterpolate(feature.name)}</dt><dd class="mt-2 text-sm text-gray-500">${ssrInterpolate(feature.description)}</dd></div>`);
      });
      _push(`<!--]--></dl></div><div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"><img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100"><img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100"><img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100"><img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100"></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TechnicalSpecs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = __nuxt_component_0;
      const _component_Collection = _sfc_main$2;
      const _component_TechnicalSpecs = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Hero, null, null, _parent));
      _push(ssrRenderComponent(_component_Collection, null, null, _parent));
      _push(ssrRenderComponent(_component_TechnicalSpecs, null, null, _parent));
      _push(`s <!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BEeBY7pO.mjs.map
