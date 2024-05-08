import { _ as __nuxt_component_0 } from './nuxt-link-yvedYU3l.mjs';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Register"
    });
    const { handleSubmit } = useForm({
      validationSchema: object({
        name: string().required().label("Name"),
        email: string().required().email().label("Email"),
        password: string().required().label("Password")
      })
    });
    handleSubmit((values) => {
      console.log(JSON.stringify(values, null, 2));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthHeader = resolveComponent("AuthHeader");
      const _component_VInput = resolveComponent("VInput");
      const _component_nuxt_link = __nuxt_component_0;
      const _component_VButton = resolveComponent("VButton");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center h-full" }, _attrs))}><form class="rounded-lg p-8 w-full max-w-md mx-auto">`);
      _push(ssrRenderComponent(_component_AuthHeader, {
        title: "Register",
        subtitle: "Please enter your credentials"
      }, null, _parent));
      _push(ssrRenderComponent(_component_VInput, {
        "wrapper-class": "mb-4",
        name: "name",
        label: "Name",
        placeholder: "Name"
      }, null, _parent));
      _push(ssrRenderComponent(_component_VInput, {
        "wrapper-class": "mb-4",
        name: "email",
        label: "Email",
        placeholder: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_component_VInput, {
        "wrapper-class": "mb-4",
        name: "password",
        label: "Password",
        placeholder: "Password",
        type: "password"
      }, null, _parent));
      _push(`<div class="mb-5 flex gap-2 justify-between items-center"><label class="flex flex-wrap gap-2 items-center text-sm"><input type="checkbox" class="w-4 h-4 rounded text-primary-500 focus:ring-primary-500 transition duration-300"><span> I agree with </span>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/toc",
        class: "text-primary-500 hover:underline font-semibold text-sm inline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Terms and Condition `);
          } else {
            return [
              createTextVNode(" Terms and Condition ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label></div>`);
      _push(ssrRenderComponent(_component_VButton, {
        type: "submit",
        color: "primary",
        block: "",
        class: "mb-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Register `);
          } else {
            return [
              createTextVNode(" Register ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-gray-600 text-sm"> Already have an account? `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/auth/login",
        class: "text-primary-500 hover:underline font-semibold text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Login `);
          } else {
            return [
              createTextVNode(" Login ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-BhNjeQEB.mjs.map
