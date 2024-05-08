import { defineComponent, resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "auth",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = resolveComponent("Logo");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen flex items-center justify-center w-full" }, _attrs))}><div class="lg:w-[400px]">`);
      _push(ssrRenderComponent(_component_Logo, { class: "flex justify-center mb-5" }, null, _parent));
      _push(`<div class="bg-white rounded-xl shadow-md">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=auth-Bu4PByFT.mjs.map
