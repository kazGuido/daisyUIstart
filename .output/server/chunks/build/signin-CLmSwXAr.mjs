import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-8iARqPMj.mjs';
import { useRouter } from 'vue-router';
import './server.mjs';
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
import '@supabase/supabase-js';

const _sfc_main = {
  __name: "signin",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    useRouter();
    const email = ref("");
    const password = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero min-h-screen bg-base-200 relative" }, _attrs))}>`);
      if (unref(authStore).isLoading) {
        _push(`<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"><div class="btn loading">loading</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(authStore).isLoggedIn) {
        _push(`<div class="hero-content flex-col lg:flex-row-reverse"><div class="text-center lg:text-left"><h1 class="text-5xl font-bold">SuperTicket !</h1><p class="py-6"><b>Simplify your life !</b> <br>Your solution to organize your events.<br>Your place to buy <b>any ticket</b></p></div><div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"><form class="card-body"><div class="form-control"><label class="label"><span class="label-text">Email</span></label><input type="email" placeholder="email"${ssrRenderAttr("value", email.value)} class="input input-bordered" required></div><div class="form-control"><label class="label"><span class="label-text">Password</span></label><input type="password" placeholder="password"${ssrRenderAttr("value", password.value)} class="input input-bordered" required><label class="label"><a href="#" class="label-text-alt link link-hover">Forgot password?</a></label></div><div class="form-control mt-6"><button class="btn btn-primary">Login</button></div></form></div></div>`);
      } else {
        _push(`<div class="stats shadow"><div class="stat"><div class="stat-title">Welcome back!</div><div class="stat-value">${ssrInterpolate(unref(authStore).user.name)}</div><div class="stat-desc">Here&#39;s your quick stats:</div><div class="stat-figure text-primary"><div class="text-4xl">89,400</div><div class="text-base">Page Views</div></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signin-CLmSwXAr.mjs.map
