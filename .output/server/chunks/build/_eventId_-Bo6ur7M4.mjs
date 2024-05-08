import { d as useRoute, h as fetchDefaults, e as asyncDataDefaults, i as useRequestFetch, f as useNuxtApp, g as createError } from './server.mjs';
import { ref, mergeProps, unref, useSSRContext, computed, toValue, reactive, shallowRef, toRef, getCurrentInstance, onServerPrefetch } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { G as hash } from '../runtime.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/supabase-js';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i;
  var _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const hasCachedData = () => options.getCachedData(key, nuxtApp) != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = null;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref((_i = options.getCachedData(key, nuxtApp)) != null ? _i : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxtApp.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key, nuxtApp));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = null;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = null;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key].cancelled = true;
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = [{}, arg1];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    if (timeoutLength) {
      setTimeout(() => controller.abort(), timeoutLength);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const _sfc_main = {
  __name: "[eventId]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const eventId = route.params.eventId;
    const { data: event } = useFetch(`https://8f7532c3-ae66-446a-9029-19b1eeebab3b-00-30hfb3eka4tfa.kirk.replit.dev/events/${eventId}`, "$DBxtfsckbW");
    const booking = ref({
      quantity: 1
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "py-6 px-4 sm:p-6 md:py-10 md:px-8" }, _attrs))}><div class="card max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2"><div class="card-body relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1"><h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">${ssrInterpolate(unref(event).name)}</h1><p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Categoryname</p></div><div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">`);
      if (unref(event).images && unref(event).images.length > 0) {
        _push(`<img${ssrRenderAttr("src", unref(event).images[0])}${ssrRenderAttr("alt", `Image of ${unref(event).name}`)} class="w-full h-60 object-cover rounded-lg" loading="lazy">`);
      } else {
        _push(`<!---->`);
      }
      if (unref(event).images && unref(event).images.length > 0) {
        _push(`<img${ssrRenderAttr("src", unref(event).images[0])}${ssrRenderAttr("alt", `Image of ${unref(event).name}`)} class="hidden w-full h-60 object-cover rounded-lg" loading="lazy">`);
      } else {
        _push(`<!---->`);
      }
      if (unref(event).images && unref(event).images.length > 0) {
        _push(`<img${ssrRenderAttr("src", unref(event).images[0])}${ssrRenderAttr("alt", `Image of ${unref(event).name}`)} class="hidden w-full h-60 object-cover rounded-lg" loading="lazy">`);
      } else {
        _push(`<!---->`);
      }
      if (unref(event).images && unref(event).images.length > 0) {
        _push(`<img${ssrRenderAttr("src", unref(event).images[0])}${ssrRenderAttr("alt", `Image of ${unref(event).name}`)} class="hidden w-full h-60 object-cover rounded-lg" loading="lazy">`);
      } else {
        _push(`<!---->`);
      }
      if (unref(event).images && unref(event).images.length > 0) {
        _push(`<img${ssrRenderAttr("src", unref(event).images[0])}${ssrRenderAttr("alt", `Image of ${unref(event).name}`)} class="hidden w-full h-60 object-cover rounded-lg" loading="lazy">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2"><dt class="sr-only">Reviews</dt><dd class="text-indigo-600 flex items-center dark:text-indigo-400"><svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500"><path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>5 ${ssrInterpolate(unref(event).rating)}<span class="text-slate-400 font-normal">(128)</span></span></dd><dt class="sr-only">Location</dt><dd class="flex items-center"><svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300"><circle cx="1" cy="1" r="1"></circle></svg><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true"><path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z"></path><path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path></svg> ${ssrInterpolate(unref(event).location)}</dd></dl><div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4"><form class="space-y-4"><input type="number"${ssrRenderAttr("value", booking.value.quantity)} min="1" max="10" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Number of Tickets"><button type="submit" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Buy Ticket</button><span><span class="text-slate-400 font-normal"></span></span><button type="button" class="bg-yellow-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Add to Cart</button></form></div><p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">${ssrInterpolate(unref(event).description)}${ssrInterpolate(unref(event).description)}${ssrInterpolate(unref(event).description)}${ssrInterpolate(unref(event).description)}${ssrInterpolate(unref(event).description)}${ssrInterpolate(unref(event).description)}${ssrInterpolate(unref(event).description)}${ssrInterpolate(unref(event).description)}</p></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/booking/[eventId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_eventId_-Bo6ur7M4.mjs.map
