import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "createEvent",
  __ssrInlineRender: true,
  setup(__props) {
    const event = ref({
      name: "",
      description: "",
      date: "",
      location: ""
    });
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto p-4" }, _attrs))}><div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"><div class="card-body"><h1 class="text-4xl font-bold mb-6">Create an Event</h1><form class="form-control w-full max-w-xs" enctype="multipart/form-data"><label class="label"><span class="label-text">Event Name</span></label><input type="text"${ssrRenderAttr("value", event.value.name)} placeholder="Event Name" class="input input-bordered w-full max-w-xs" required><label class="label"><span class="label-text">Description</span></label><textarea placeholder="Description" class="textarea textarea-bordered h-24" required>${ssrInterpolate(event.value.description)}</textarea><label class="label"><span class="label-text">Date</span></label><input type="date"${ssrRenderAttr("value", event.value.date)} class="input input-bordered w-full max-w-xs" required><label class="label"><span class="label-text">Location</span></label><input type="text"${ssrRenderAttr("value", event.value.location)} placeholder="Location" class="input input-bordered w-full max-w-xs" required><label class="label"><span class="label-text">Event Image</span></label><input type="file" accept="image/*" class="file-input file-input-bordered w-full max-w-xs" required><button type="submit" class="btn btn-primary mt-6">Create Event</button></form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/createEvent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=createEvent-CCqX9oMb.mjs.map
