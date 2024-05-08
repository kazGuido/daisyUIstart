import { j as useState, k as __nuxt_component_0 } from './server.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-8iARqPMj.mjs';
import { useRouter } from 'vue-router';
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

const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useColorMode();
    const authStore = useAuthStore();
    useRouter();
    ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<!--[--><div class="navbar bg-base-100"><div class="navbar-start"><div class="dropdown"><div tabindex="0" role="button" class="btn btn-ghost btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg></div><ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"><li><a href="/">Homepage</a></li>`);
      if (!unref(authStore).isLoggedIn) {
        _push(`<li><a href="/login">Login</a></li>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(authStore).isLoggedIn) {
        _push(`<li><a href="/dashboard">Dashboard</a></li>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(authStore).isLoggedIn) {
        _push(`<li><a href="/createEvent">Organize an Event</a></li>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(authStore).isLoggedIn) {
        _push(`<li><a href="#">Logout</a></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li><a href="/events">Events</a></li></ul></div></div><div class="navbar-center"><a class="btn btn-ghost text-xl">SuperTicket</a></div><div class="navbar-end"><button class="btn btn-ghost btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button><button class="btn btn-ghost btn-circle"><div class="indicator"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg><span class="badge badge-xs badge-primary indicator-item"></span></div></button></div></div><div class="hero bg-base-200 py-10">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-DZwcQ7y6.mjs.map
