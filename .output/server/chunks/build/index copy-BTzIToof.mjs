import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index copy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero min-h-screen bg-base-200" }, _attrs))} data-v-cf3d7ddb><div class="hero-content flex-col lg:flex-row-reverse" data-v-cf3d7ddb><div class="text-center lg:text-left" data-v-cf3d7ddb><h1 class="text-5xl font-bold" data-v-cf3d7ddb>Login now!</h1><p class="py-6" data-v-cf3d7ddb>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p></div><div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" data-v-cf3d7ddb><form class="card-body" data-v-cf3d7ddb><div class="form-control" data-v-cf3d7ddb><label class="label" data-v-cf3d7ddb><span class="label-text" data-v-cf3d7ddb>Email</span></label><input type="email" placeholder="email" class="input input-bordered" required data-v-cf3d7ddb></div><div class="form-control" data-v-cf3d7ddb><label class="label" data-v-cf3d7ddb><span class="label-text" data-v-cf3d7ddb>Password</span></label><input type="password" placeholder="password" class="input input-bordered" required data-v-cf3d7ddb><label class="label" data-v-cf3d7ddb><a href="#" class="label-text-alt link link-hover" data-v-cf3d7ddb>Forgot password?</a></label></div><div class="form-control mt-6" data-v-cf3d7ddb><button class="btn btn-primary" data-v-cf3d7ddb>Login</button></div></form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_copy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf3d7ddb"]]);

export { index_copy as default };
//# sourceMappingURL=index copy-BTzIToof.mjs.map
