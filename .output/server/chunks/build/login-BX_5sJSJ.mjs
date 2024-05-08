import { a as useSupabaseClient } from './server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    const loading = ref(false);
    const email = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "row flex-center flex" }, _attrs))}><div class="col-6 form-widget"><h1 class="header">Supabase + Nuxt 3</h1><p class="description">Sign in via magic link with your email below</p><div><input class="inputField" type="email" placeholder="Your email"${ssrRenderAttr("value", unref(email))}></div><div><input type="submit" class="button block"${ssrRenderAttr("value", unref(loading) ? "Loading" : "Send magic link")}${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}></div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-BX_5sJSJ.mjs.map
