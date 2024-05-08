import { _ as __nuxt_component_0 } from './nuxt-link-yvedYU3l.mjs';
import { ref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "events",
  __ssrInlineRender: true,
  setup(__props) {
    const events2 = ref([]);
    const isLoading = ref(false);
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "events-container p-4" }, _attrs))} data-v-e350f27e><h1 class="text-3xl font-bold mb-4" data-v-e350f27e>Events</h1>`);
      if (isLoading.value) {
        _push(`<div class="flex justify-center items-center" data-v-e350f27e><div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status" data-v-e350f27e><span class="visually-hidden" data-v-e350f27e></span></div></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-v-e350f27e><!--[-->`);
        ssrRenderList(events2.value, (event) => {
          _push(`<div class="card w-96 glass" data-v-e350f27e>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: `/booking/${event.id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<figure data-v-e350f27e${_scopeId}><img src="https://via.placeholder.com/400x200" alt="Event Image" data-v-e350f27e${_scopeId}></figure>`);
              } else {
                return [
                  createVNode("figure", null, [
                    createVNode("img", {
                      src: "https://via.placeholder.com/400x200",
                      alt: "Event Image"
                    })
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="card-body" data-v-e350f27e><h2 class="card-title" data-v-e350f27e>${ssrInterpolate(event.name)} <div class="badge badge-secondary" data-v-e350f27e>NEW</div></h2><p data-v-e350f27e>${ssrInterpolate(event.description)}</p><div class="card-actions justify-end" data-v-e350f27e><div class="badge badge-outline" data-v-e350f27e>Date: ${ssrInterpolate(formatDate(event.date))}</div><div class="badge badge-outline" data-v-e350f27e>Location: ${ssrInterpolate(event.location)}</div></div><div class="justify-start pt-4" data-v-e350f27e><div class="badge badge-info" data-v-e350f27e>Tickets Remaining: ${ssrInterpolate(event.tickets_remaining)}</div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const events = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e350f27e"]]);

export { events as default };
//# sourceMappingURL=events-CA6Rn-c5.mjs.map
