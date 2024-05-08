import { _ as __nuxt_component_0 } from './nuxt-link-yvedYU3l.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-8iARqPMj.mjs';
import { useRouter } from 'vue-router';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@supabase/supabase-js';

const _sfc_main = {
  __name: "\uFF3F\uFF3Fdefault",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Nuxt = resolveComponent("Nuxt");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col" }, _attrs))}><nav class="bg-gray-800 text-white p-4"><div class="container mx-auto flex justify-between items-center"><a href="/" class="text-lg font-bold">SuperTicket</a><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "text-white px-3 py-2 rounded hover:bg-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/events",
        class: "text-white px-3 py-2 rounded hover:bg-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Events`);
          } else {
            return [
              createTextVNode("Events")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(authStore).isLoggedIn) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/dashboard",
          class: "text-white px-3 py-2 rounded hover:bg-gray-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Dashboard`);
            } else {
              return [
                createTextVNode("Dashboard")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="ml-4 px-3 py-2 rounded bg-red-500 hover:bg-red-600">Logout</button><!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/login",
          class: "text-white px-3 py-2 rounded hover:bg-gray-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Login`);
            } else {
              return [
                createTextVNode("Login")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></div></nav><main class="flex-grow container mx-auto px-4 py-6">`);
      _push(ssrRenderComponent(_component_Nuxt, null, null, _parent));
      _push(`</main><footer class="bg-gray-800 text-white p-4"><div class="container mx-auto text-center"> \xA9 2024 SuperTicket. All rights reserved. </div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/\uFF3F\uFF3Fdefault.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=＿＿default-B1nat2lx.mjs.map
