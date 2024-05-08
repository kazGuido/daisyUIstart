import { a as useSupabaseClient, b as useSupabaseUser } from './server.mjs';
import { ref, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
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
  __name: "Account",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const supabase = useSupabaseClient();
    const loading = ref(true);
    const username = ref("");
    const website = ref("");
    const avatar_path = ref("");
    loading.value = true;
    const user = useSupabaseUser();
    const { data } = ([__temp, __restore] = withAsyncContext(() => supabase.from("profiles").select(`username, website, avatar_url`).eq("id", user.value.id).single()), __temp = await __temp, __restore(), __temp);
    if (data) {
      username.value = data.username;
      website.value = data.website;
      avatar_path.value = data.avatar_url;
    }
    loading.value = false;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "form-widget" }, _attrs))}><div><label for="email">Email</label><input id="email" type="text"${ssrRenderAttr("value", unref(user).email)} disabled></div><div><label for="username">Username</label><input id="username" type="text"${ssrRenderAttr("value", unref(username))}></div><div><label for="website">Website</label><input id="website" type="url"${ssrRenderAttr("value", unref(website))}></div><div><input type="submit" class="button primary block"${ssrRenderAttr("value", unref(loading) ? "Loading ..." : "Update")}${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}></div><div><button class="button block"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>Sign Out</button></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Account-DUO6Y_fJ.mjs.map
