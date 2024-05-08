import { _ as __nuxt_component_0 } from './nuxt-link-yvedYU3l.mjs';
import { u as useHead, c as useRouter, d as useRoute } from './server.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, unref, isRef, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useForm, useField } from 'vee-validate';
import { object, string } from 'yup';
import { u as useAuthStore } from './auth-8iARqPMj.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Login"
    });
    const { handleSubmit } = useForm({
      validationSchema: object({
        email: string().required().email().label("Email"),
        password: string().required().label("Password")
      })
    });
    const auth = useAuthStore();
    const router = useRouter();
    const error = ref();
    const route = useRoute();
    const { store } = useAuthStorage();
    const { value: email } = useField("email", void 0, {
      initialValue: ""
    });
    const { value: password } = useField("password", void 0, {
      initialValue: ""
    });
    handleSubmit(async (values) => {
      error.value = "";
      try {
        const res = await $fetch("/api/auth/login", {
          method: "post",
          body: values
        });
        const token = res.token;
        const user = res.user;
        store(token, user);
        auth.user = user;
        auth.loggedIn = true;
        router.push(route.query.next || "/");
      } catch (e) {
        error.value = e.data.error;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthHeader = resolveComponent("AuthHeader");
      const _component_VInput = resolveComponent("VInput");
      const _component_nuxt_link = __nuxt_component_0;
      const _component_VButton = resolveComponent("VButton");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center h-full" }, _attrs))}><form class="rounded-lg px-10 py-8 w-full max-w-md mx-auto">`);
      _push(ssrRenderComponent(_component_AuthHeader, {
        title: "Login",
        subtitle: "Please enter your credentials"
      }, null, _parent));
      if (unref(error)) {
        _push(`<div class="bg-error-600 text-white text-sm px-4 py-3 rounded-lg mb-4">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_VInput, {
        modelValue: unref(email),
        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
        "wrapper-class": "mb-4",
        name: "email",
        label: "Email",
        placeholder: "Email",
        hint: "Email: admin@example.com"
      }, null, _parent));
      _push(ssrRenderComponent(_component_VInput, {
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        "wrapper-class": "mb-4",
        name: "password",
        label: "Password",
        placeholder: "Password",
        type: "password",
        hint: "Password: admin"
      }, null, _parent));
      _push(`<div class="mb-5 flex gap-2 justify-between items-center"><label class="flex gap-2 items-center text-sm"><input type="checkbox" class="w-4 h-4 rounded text-primary-500 focus:ring-primary-500 transition duration-300"> Remember me </label>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/auth/forgot-password",
        class: "text-primary-500 hover:underline font-semibold text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Forgot Password? `);
          } else {
            return [
              createTextVNode(" Forgot Password? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_VButton, {
        type: "submit",
        color: "primary",
        block: "",
        class: "mb-5"
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
      _push(`<div class="text-gray-600 text-sm"> Don&#39;t have account? `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/auth/register",
        class: "text-primary-500 hover:underline font-semibold text-sm"
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
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-BFJyrwbt.mjs.map
