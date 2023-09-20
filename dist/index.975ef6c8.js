// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"62qGc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _utils = require("./utils");
var _data = require("./data");
const [user1, user2, user3, user4, user5] = _data.users;
console.log("hasId\n=================================");
console.log(user1);
console.log("\xbfTiene ID? :" + _utils.hasId(user1));
console.log(user2);
console.log("\xbfTiene ID? :" + _utils.hasId(user2));
console.log(user3);
console.log("\xbfTiene ID? :" + _utils.hasId(user3));
console.log(user4);
console.log("\xbfTiene ID? :" + _utils.hasId(user4));
console.log(user5);
console.log("\xbfTiene ID? :" + _utils.hasId(user5));
console.log("=================================\n\n\n\n\n");
console.log("head\n=================================");
console.log("Array de entrada: ", _data.users);
console.log("Primer elemento: ", _utils.head(_data.users));
console.log("=================================\n\n\n\n\n");
console.log("tail\n=================================");
console.log("Array de entrada: ", _data.users);
console.log("Todos los elementos menos el primero: ", _utils.tail(_data.users));
console.log("=================================\n\n\n\n\n");
console.log("swapFirstToLast\n=================================");
console.log("Array de entrada: ", _data.users);
console.log("Primer elemento en \xfaltima posici\xf3n: ", _utils.swapFirstToLast(_data.users));
console.log("=================================\n\n\n\n\n");
console.log("excludeId\n=================================");
console.log("Objeto de entrada: ", user1, "Objeto sin id:", _utils.excludeId(user1));
console.log("Objeto de entrada sin modificar: ", user1);
console.log("Objeto de entrada: ", user2, "Objeto sin id:", _utils.excludeId(user2));
console.log("Objeto de entrada sin modificar: ", user2);
console.log("Objeto de entrada: ", user3, "Objeto sin id:", _utils.excludeId(user3));
console.log("Objeto de entrada sin modificar: ", user3);
console.log("Objeto de entrada: ", user4, "Objeto sin id:", _utils.excludeId(user4));
console.log("Objeto de entrada sin modificar: ", user4);
console.log("Objeto de entrada: ", user5, "Objeto sin id:", _utils.excludeId(user5));
console.log("Objeto de entrada sin modificar: ", user5);
console.log("=================================\n\n\n\n\n");
console.log("wordsStartingWithA\n=================================");
console.log("String array original: ", _data.countries);
console.log('String que empiezan por "a" :', _utils.wordsStartingWithA(_data.countries));
console.log("=================================\n\n\n\n\n");
console.log("concat\n=================================");
console.log("Strings que se le pasan a la funci\xf3n como argumento: ", ..._data.countries);
console.log("\xdanico string concatenado:", _utils.concat(..._data.countries));
console.log("=================================\n\n\n\n\n");
console.log("multArray\n=================================");
console.log("Array num\xe9rico con el que vamos a generar otro cuyos elementos seran el resultado de multiplicar los del primero por 2: ", _data.numbers);
console.log(_utils.multArray(_data.numbers, 2));
console.log("=================================\n\n\n\n\n");
console.log("calcMult\n=================================");
console.log("N\xfameros que se van a pasar como argumento a la funci\xf3n: ", ..._data.numbers);
console.log("Resultado de multiplicar todos los numeros pasados como argumento: ", _utils.calcMult(..._data.numbers));
console.log("=================================\n\n\n\n\n");
console.log("swapFirstSecond\n=================================");
console.log("Array original: ", _data.countriesBeginningWithE);
console.log("Intercambio del primer elemento con el segundo: ", _utils.swapFirstSecond(_data.countriesBeginningWithE));
console.log("Array original: ", _data.countriesBeginningWithE);
console.log("=================================\n\n\n\n\n");
console.log("firstEqual\n=================================");
console.log("Lista de pa\xedses: ", ..._data.countries);
console.log('\xbfEmpizan todos por la letra "e"? :', _utils.firstEqual("e", ..._data.countries));
console.log("Lista de pa\xedses: ", ..._data.countriesBeginningWithE);
console.log('\xbfEmpizan todos por la letra "e"? :', _utils.firstEqual("e", ..._data.countriesBeginningWithE));
console.log("=================================\n\n\n\n\n");
console.log("longest\n=================================");
console.log('Array de paises que empiezan con "e" :', _data.countriesBeginningWithE);
console.log('Array de paises que empiezan con "f" :', _data.countriesBeginningWithF);
console.log("El array m\xe1s largo es :", _utils.longest(_data.countriesBeginningWithF, _data.countriesBeginningWithE));
console.log("=================================\n\n\n\n\n");
console.log("searchInStringV1\n=================================");
console.log('En la palabra "Alambrada" aparece la letra "a" : ' + _utils.searchInStringV1("Alambrada", "a") + " veces");
console.log('En la palabra "Excelentemente" aparece la letra "e" : ' + _utils.searchInStringV1("Excelentemente", "e") + " veces");
console.log("=================================\n\n\n\n\n");
console.log("searchInStringV2\n=================================");
console.log('En la palabra "Alambrada" aparece la letra "a" : ' + _utils.searchInStringV2("Alambrada", "a") + " veces");
console.log('En la palabra "Excelentemente" aparece la letra "e" : ' + _utils.searchInStringV2("Excelentemente", "e") + " veces");
console.log("=================================\n\n\n\n\n");
console.log("sortCharacters\n=================================");
const stringToSort = "zAfLser";
console.log('Cadena a ordenar "' + stringToSort + '"');
console.log('Cadena ordenada "' + _utils.sortCharacters(stringToSort) + '"');
console.log('Cadena original "' + stringToSort + '"');
console.log("=================================\n\n\n\n\n");
console.log("shout\n=================================");
console.log("Cadenas a concatenar: ", ..._data.stringToConcatenate);
console.log('Cadena resultante: "' + _utils.shout(..._data.stringToConcatenate) + '"');
console.log("=================================\n\n\n\n\n");
console.log("getVatShoppingCart\n=================================");
console.log("Cesta de la compra: ", _data.shoppingCart);
console.log("Cesta con el IVA calculado por producto : ", _utils.getVatShoppingCart(_data.shoppingCart));
console.log("=================================\n\n\n\n\n");
console.log("sortShoppingCartByUnits\n=================================");
console.log("Cesta de la compra: ", _data.shoppingCart);
console.log("Cesta de la compra ordenada por unidades de producto en descendente : ", _utils.sortShoppingCartByUnits(_data.shoppingCart));
console.log("=================================\n\n\n\n\n");
console.log("totalSpentGivenCategory\n=================================");
console.log("Cesta de la compra: ", _data.shoppingCart);
console.log("Total de Droguer\xeda: ", _utils.totalSpentGivenCategory(_data.shoppingCart, "Droguer\xeda"));
console.log("=================================\n\n\n\n\n");
console.log("showShoppingCart\n=================================");
console.log("Cesta de la compra: ", _data.shoppingCart);
_utils.showShoppingCart(_data.shoppingCart);
console.log("=================================\n\n\n\n\n");

},{"./utils":"en4he","./data":"9kapS"}],"en4he":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasId", ()=>hasId);
parcelHelpers.export(exports, "head", ()=>head);
parcelHelpers.export(exports, "tail", ()=>tail);
parcelHelpers.export(exports, "swapFirstToLast", ()=>swapFirstToLast);
parcelHelpers.export(exports, "excludeId", ()=>excludeId);
parcelHelpers.export(exports, "wordsStartingWithA", ()=>wordsStartingWithA);
parcelHelpers.export(exports, "concat", ()=>concat);
parcelHelpers.export(exports, "multArray", ()=>multArray);
parcelHelpers.export(exports, "calcMult", ()=>calcMult);
parcelHelpers.export(exports, "swapFirstSecond", ()=>swapFirstSecond);
parcelHelpers.export(exports, "firstEqual", ()=>firstEqual);
parcelHelpers.export(exports, "longest", ()=>longest);
parcelHelpers.export(exports, "searchInStringV1", ()=>searchInStringV1);
parcelHelpers.export(exports, "searchInStringV2", ()=>searchInStringV2);
parcelHelpers.export(exports, "sortCharacters", ()=>sortCharacters);
parcelHelpers.export(exports, "shout", ()=>shout);
parcelHelpers.export(exports, "getVatShoppingCart", ()=>getVatShoppingCart);
parcelHelpers.export(exports, "sortShoppingCartByUnits", ()=>sortShoppingCartByUnits);
parcelHelpers.export(exports, "totalSpentGivenCategory", ()=>totalSpentGivenCategory);
parcelHelpers.export(exports, "showShoppingCart", ()=>showShoppingCart);
const hasId = ({ id })=>id ? true : false;
const head = ([first])=>first;
const tail = ([, ...restOfElements])=>restOfElements;
const swapFirstToLast = ([first, ...restOfElements])=>[
        ...restOfElements,
        first
    ];
const excludeId = ({ first_name, last_name })=>{
    return {
        first_name,
        last_name
    };
};
const wordsStartingWithA = (words)=>words.filter((word)=>{
        const [first] = word;
        return first === "a" || first === "A";
    });
const concat = (...characterStrings)=>characterStrings.join("|");
const multArray = (numberArray, multiplier)=>numberArray.map((number)=>number * multiplier);
const calcMult = (...numbers)=>[
        ...numbers
    ].reduce((product, number)=>product * number, 1);
const swapFirstSecond = ([first, second, ...remainder])=>[
        second,
        first,
        ...remainder
    ];
const firstEqual = (letter, ...characterStrings)=>characterStrings.every((characterString)=>{
        const [first] = characterString;
        return first === letter.toLowerCase() || first === letter.toUpperCase() ? true : false;
    });
const longest = (...arrays)=>{
    const maxLength = arrays.reduce((maxLength, array)=>array.length > maxLength ? maxLength = array.length : maxLength, 0);
    return arrays.find((array)=>array.length === maxLength);
};
const searchInStringV1 = (characterString, characterToFind)=>Array.from(characterString).reduce((characterOcurrences, character)=>character === characterToFind.toLowerCase() || character === characterToFind.toUpperCase() ? ++characterOcurrences : characterOcurrences, 0);
const searchInStringV2 = (characterString, characterToFind)=>Array.from(characterString).filter((character)=>character === characterToFind.toLowerCase() || character === characterToFind.toUpperCase() ? true : false).length;
const sortCharacters = (characterString)=>Array.from(characterString).sort((memberA, memberB)=>{
        memberA = memberA.toLowerCase();
        memberB = memberB.toLowerCase();
        if (memberA < memberB) return -1;
        else if (memberA > memberB) return 1;
        else return 0;
    }).join("");
const shout = (...stringArray)=>"\xa1\xa1\xa1" + [
        ...stringArray
    ].map((string)=>string.toUpperCase()).join(" ") + "!!!";
const getVatShoppingCart = (shoppingCart)=>shoppingCart.map((product)=>{
        const { price, units, ...remainderProperties } = product;
        const vat = price * units * 0.21;
        return {
            ...remainderProperties,
            price,
            units,
            vat
        };
    });
const sortShoppingCartByUnits = (shoppingCart)=>[
        ...shoppingCart
    ].sort((productA, productB)=>{
        const { units: unitsA } = productA;
        const { units: unitsB } = productB;
        if (unitsA > unitsB) return -1;
        else if (unitsA < unitsB) return 1;
        else return 0;
    });
const totalSpentGivenCategory = (shoppingCart, productCategory)=>{
    return shoppingCart.filter((product)=>{
        const { category } = product;
        return category === productCategory;
    }).reduce((total, product)=>{
        const { price, units } = product;
        return total += price * units;
    }, 0);
};
const showShoppingCart = (shoppingCart)=>[
        ...shoppingCart
    ].sort((productA, productB)=>{
        const { category: categoryA } = productA;
        const { category: categoryB } = productB;
        if (categoryA.toLowerCase() < categoryB.toLowerCase()) return -1;
        else if (categoryA.toLowerCase() > categoryB.toLowerCase()) return 1;
        else return 0;
    }).map((productItem)=>{
        const { product, price, units } = productItem;
        console.log(product + " -> " + price * units + " €");
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"7Rzro"}],"7Rzro":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9kapS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "countries", ()=>countries);
parcelHelpers.export(exports, "countriesBeginningWithE", ()=>countriesBeginningWithE);
parcelHelpers.export(exports, "countriesBeginningWithF", ()=>countriesBeginningWithF);
parcelHelpers.export(exports, "numbers", ()=>numbers);
parcelHelpers.export(exports, "shoppingCart", ()=>shoppingCart);
parcelHelpers.export(exports, "stringToConcatenate", ()=>stringToConcatenate);
parcelHelpers.export(exports, "users", ()=>users);
const countries = [
    "ANGOLA",
    "ARGELIA",
    "BENIN",
    "BOTSUANA",
    "BURKINA FASO",
    "BURUNDI",
    "CABO VERDE",
    "CAMER\xdaN",
    "CHAD",
    "COMORAS",
    "COSTA DE MARFIL",
    "EGIPTO",
    "ERITREA",
    "ETIOP\xcdA",
    "GAB\xd3N",
    "GAMBIA",
    "GHANA",
    "GUINEA",
    "GUINEA ECUATORIAL",
    "GUINEA-BISSAU",
    "KENIA",
    "LESOTO",
    "LIBERIA",
    "LIBIA",
    "MADAGASCAR",
    "MALAUI",
    "MALI",
    "MARRUECOS",
    "MAURICIO",
    "MAURITANIA",
    "MOZAMBIQUE",
    "NAMIBIA",
    "N\xcdGER",
    "NIGERIA",
    "REP\xdaBLICA CENTROAFRICANA",
    "REP\xdaBLICA DEL CONGO",
    "REP\xdaBLICA DEMOCR\xc1TICA DEL CONGO",
    "RUANDA",
    "SANTO TOM\xc9 Y PR\xcdNCIPE",
    "SENEGAL",
    "SEYCHELLES",
    "SIERRA LEONA",
    "SOMALIA",
    "SUAZILANDIA",
    "SUD\xc1FRICA",
    "SUD\xc1N",
    "SUD\xc1N DEL SUR",
    "TANZANIA",
    "TOGO",
    "T\xdaNEZ",
    "UGANDA",
    "YIBUTI",
    "ZAMBIA",
    "ZIMBABUE",
    "ANTIGUA Y BARBUDA",
    "ARGENTINA",
    "BAHAMAS",
    "BARBADOS",
    "BELICE",
    "BOLIVIA",
    "BRASIL",
    "CANAD\xc1",
    "CHILE",
    "COLOMBIA",
    "COSTA RICA",
    "CUBA",
    "DOMINICA",
    "ECUADOR",
    "EL SALVADOR",
    "ESTADOS UNIDOS",
    "GRANADA",
    "GUATEMALA",
    "GUYANA",
    "HAIT\xcd",
    "HONDURAS",
    "JAMAICA",
    "M\xc9XICO",
    "NICARAGUA",
    "PANAM\xc1",
    "PARAGUAY",
    "PER\xda",
    "PUERTO RICO",
    "REP\xdaBLICA DOMINICANA",
    "SAN CRIST\xd3BAL Y NIEVES",
    "SAN VICENTE Y LAS GRANADINAS",
    "SANTA LUC\xcdA",
    "SURINAM",
    "TRINIDAD Y TOBAGO",
    "URUGUAY",
    "VENEZUELA",
    "AFGANIST\xc1N",
    "ARABIA SAUDITA",
    "BANGLAD\xc9S",
    "BAR\xc9IN",
    "BRUNEI",
    "BUT\xc1N",
    "CAMBOYA",
    "CATAR",
    "CHINA",
    "CHIPRE",
    "COREA DEL NORTE",
    "COREA DEL SUR",
    "EMIRATOS ARABES UNIDOS",
    "FILIPINAS",
    "INDIA",
    "INDONESIA",
    "IR\xc1N",
    "IRAQ",
    "ISRAEL",
    "JAP\xd3N",
    "JORDANIA",
    "KAZAJIST\xc1N",
    "KIRGUIST\xc1N",
    "KUWAIT",
    "LAOS",
    "L\xcdBANO",
    "MALASIA",
    "MALDIVAS",
    "MONGOLIA",
    "MYANMAR (BIRMANIA)",
    "NEPAL",
    "OM\xc1N",
    "PAKIST\xc1N",
    "PALESTINA",
    "SIRIA",
    "SRI LANKA",
    "TAILANDIA",
    "TAYIKIST\xc1N",
    "TIMOR ORIENTAL",
    "TURKMENIST\xc1N",
    "TURQU\xcdA",
    "UZBEKIST\xc1N",
    "VIETNAM",
    "YEMEN",
    "ALBANIA",
    "ALEMANIA",
    "ANDORRA",
    "ARMENIA",
    "AUSTRIA",
    "AZERBAIY\xc1N",
    "B\xc9LGICA",
    "BIELORRUSIA",
    "BOSNIA Y HERZEGOVINA",
    "BULGARIA",
    "CROACIA",
    "DINAMARCA",
    "ESLOVAQUIA",
    "ESLOVENIA",
    "ESPA\xd1A",
    "ESTONIA",
    "FINLANDIA",
    "FRANCIA",
    "GEORGIA",
    "GRECIA",
    "HUNGR\xcdA",
    "IRLANDA",
    "ISLANDIA",
    "ITALIA",
    "LETONIA",
    "LIECHTENSTEIN",
    "LITUANIA",
    "LUXEMBURGO",
    "MALTA",
    "MOLDAVIA",
    "M\xd3NACO",
    "MONTENEGRO",
    "NORUEGA",
    "PA\xcdSES BAJOS",
    "POLONIA",
    "PORTUGAL",
    "REINO UNIDO",
    "REP\xdaBLICA CHECA",
    "REP\xdaBLICA DE MACEDONIA",
    "RUMANIA",
    "RUSIA",
    "SAN MARINO",
    "SERBIA",
    "SUECIA",
    "SUIZA",
    "UCRANIA",
    "AUSTRALIA",
    "FIYI",
    "ISLAS MARSHALL",
    "ISLAS SALOM\xd3N",
    "KIRIBATI",
    "MICRONESIA",
    "NAURU",
    "NUEVA ZELANDA",
    "PALAOS",
    "PAP\xdaA NUEVA GUINEA",
    "SAMOA",
    "TONGA",
    "TUVALU",
    "VANUATU"
];
const countriesBeginningWithE = [
    "EGIPTO",
    "ERITREA",
    "ETIOP\xcdA",
    "ECUADOR",
    "EL SALVADOR",
    "ESTADOS UNIDOS",
    "EMIRATOS ARABES UNIDOS",
    "ESLOVAQUIA",
    "ESLOVENIA",
    "ESPA\xd1A",
    "ESTONIA"
];
const countriesBeginningWithF = [
    "FILIPINAS",
    "FINLANDIA",
    "FRANCIA",
    "FIYI"
];
const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];
const shoppingCart = [
    {
        category: "Frutas y Verduras",
        product: "Lechuga",
        price: 0.8,
        units: 1
    },
    {
        category: "Carne y Pescado",
        product: "Pechuga pollo",
        price: 3.75,
        units: 2
    },
    {
        category: "Droguer\xeda",
        product: "Gel ducha",
        price: 1.15,
        units: 1
    },
    {
        category: "Droguer\xeda",
        product: "Papel cocina",
        price: 0.9,
        units: 3
    },
    {
        category: "Frutas y Verduras",
        product: "Sand\xeda",
        price: 4.65,
        units: 1
    },
    {
        category: "Frutas y Verduras",
        product: "Puerro",
        price: 4.65,
        units: 2
    },
    {
        category: "Carne y Pescado",
        product: "Secreto ib\xe9rico",
        price: 5.75,
        units: 2
    }
];
const stringToConcatenate = [
    "hola,",
    "hola",
    "comienza",
    "tiempo de juego"
];
const users = [
    {
        "id": 1,
        "first_name": "Herminia",
        "last_name": "Sexon"
    },
    {
        "first_name": "Prinz",
        "last_name": "Applegarth"
    },
    {
        "id": 2,
        "first_name": "Huntlee",
        "last_name": "Issacoff"
    },
    {
        "first_name": "Jacinthe",
        "last_name": "Olorenshaw"
    },
    {
        "id": 3,
        "first_name": "Vlad",
        "last_name": "Denyagin"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"7Rzro"}]},["62qGc","8lqZg"], "8lqZg", "parcelRequire847c")

//# sourceMappingURL=index.975ef6c8.js.map
