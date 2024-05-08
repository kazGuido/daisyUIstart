import { u as useHead } from './server.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Forgot Password"
    });
    const { handleSubmit } = useForm({
      validationSchema: object({
        email: string().required().email().label("Email")
      })
    });
    handleSubmit((values) => {
      console.log(JSON.stringify(values, null, 2));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthHeader = resolveComponent("AuthHeader");
      const _component_VInput = resolveComponent("VInput");
      const _component_VButton = resolveComponent("VButton");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center h-full" }, _attrs))}><form class="rounded-lg p-8 w-full max-w-md mx-auto">`);
      _push(ssrRenderComponent(_component_AuthHeader, {
        title: "Forgot Password",
        subtitle: "Please enter your email"
      }, null, _parent));
      _push(ssrRenderComponent(_component_VInput, {
        "wrapper-class": "mb-4",
        name: "email",
        label: "Email",
        placeholder: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_component_VButton, {
        type: "submit",
        color: "primary",
        block: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Send Password Reset Link `);
          } else {
            return [
              createTextVNode(" Send Password Reset Link ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/forgot-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=forgot-password-5ogrHGgp.mjs.map
