var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/vast-client/dist/vast-client.min.js
var require_vast_client_min = __commonJS({
  "node_modules/vast-client/dist/vast-client.min.js"(exports, module2) {
    !function(e, t) {
      typeof exports == "object" && typeof module2 != "undefined" ? t(exports) : typeof define == "function" && define.amd ? define(["exports"], t) : t((e = typeof globalThis != "undefined" ? globalThis : e || self).VAST = {});
    }(exports, function(e) {
      "use strict";
      function t(e2) {
        return (t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      function r(e2, t2) {
        if (!(e2 instanceof t2))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e2, t2) {
        for (var r2 = 0; r2 < t2.length; r2++) {
          var i2 = t2[r2];
          i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e2, i2.key, i2);
        }
      }
      function n(e2, t2, r2) {
        return t2 && i(e2.prototype, t2), r2 && i(e2, r2), e2;
      }
      function a(e2, t2, r2) {
        return t2 in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
      }
      function o(e2, t2) {
        var r2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var i2 = Object.getOwnPropertySymbols(e2);
          t2 && (i2 = i2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), r2.push.apply(r2, i2);
        }
        return r2;
      }
      function s(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var r2 = arguments[t2] != null ? arguments[t2] : {};
          t2 % 2 ? o(Object(r2), true).forEach(function(t3) {
            a(e2, t3, r2[t3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : o(Object(r2)).forEach(function(t3) {
            Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(r2, t3));
          });
        }
        return e2;
      }
      function l(e2, t2) {
        if (typeof t2 != "function" && t2 !== null)
          throw new TypeError("Super expression must either be null or a function");
        e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, writable: true, configurable: true } }), t2 && c(e2, t2);
      }
      function u(e2) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e3) {
          return e3.__proto__ || Object.getPrototypeOf(e3);
        })(e2);
      }
      function c(e2, t2) {
        return (c = Object.setPrototypeOf || function(e3, t3) {
          return e3.__proto__ = t3, e3;
        })(e2, t2);
      }
      function d(e2, t2) {
        return !t2 || typeof t2 != "object" && typeof t2 != "function" ? function(e3) {
          if (e3 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }(e2) : t2;
      }
      function p(e2) {
        var t2 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            })), true;
          } catch (e3) {
            return false;
          }
        }();
        return function() {
          var r2, i2 = u(e2);
          if (t2) {
            var n2 = u(this).constructor;
            r2 = Reflect.construct(i2, arguments, n2);
          } else
            r2 = i2.apply(this, arguments);
          return d(this, r2);
        };
      }
      function h() {
        var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return { id: e2.id || null, adId: e2.adId || null, sequence: e2.sequence || null, apiFramework: e2.apiFramework || null, universalAdId: { value: null, idRegistry: "unknown" }, creativeExtensions: [] };
      }
      var v = ["ADCATEGORIES", "ADCOUNT", "ADPLAYHEAD", "ADSERVINGID", "ADTYPE", "APIFRAMEWORKS", "APPBUNDLE", "ASSETURI", "BLOCKEDADCATEGORIES", "BREAKMAXADLENGTH", "BREAKMAXADS", "BREAKMAXDURATION", "BREAKMINADLENGTH", "BREAKMINDURATION", "BREAKPOSITION", "CLICKPOS", "CLICKTYPE", "CLIENTUA", "CONTENTID", "CONTENTPLAYHEAD", "CONTENTURI", "DEVICEIP", "DEVICEUA", "DOMAIN", "EXTENSIONS", "GDPRCONSENT", "IFA", "IFATYPE", "INVENTORYSTATE", "LATLONG", "LIMITADTRACKING", "MEDIAMIME", "MEDIAPLAYHEAD", "OMIDPARTNER", "PAGEURL", "PLACEMENTTYPE", "PLAYERCAPABILITIES", "PLAYERSIZE", "PLAYERSTATE", "PODSEQUENCE", "REGULATIONS", "SERVERSIDE", "SERVERUA", "TRANSACTIONID", "UNIVERSALADID", "VASTVERSIONS", "VERIFICATIONVENDORS"];
      function f(e2) {
        var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i2 = [], n2 = T(e2);
        for (var a2 in !t2.ERRORCODE || r2.isCustomCode || /^[0-9]{3}$/.test(t2.ERRORCODE) || (t2.ERRORCODE = 900), t2.CACHEBUSTING = R(Math.round(1e8 * Math.random()).toString()), t2.TIMESTAMP = new Date().toISOString(), t2.RANDOM = t2.random = t2.CACHEBUSTING, t2)
          t2[a2] = k(t2[a2]);
        for (var o2 in n2) {
          var s2 = n2[o2];
          typeof s2 == "string" && i2.push(m(s2, t2));
        }
        return i2;
      }
      function m(e2, t2) {
        var r2 = (e2 = g(e2, t2)).match(/[^[\]]+(?=])/g);
        if (!r2)
          return e2;
        var i2 = r2.filter(function(e3) {
          return v.indexOf(e3) > -1;
        });
        return i2.length === 0 ? e2 : g(e2, i2 = i2.reduce(function(e3, t3) {
          return e3[t3] = -1, e3;
        }, {}));
      }
      function g(e2, t2) {
        var r2 = e2;
        for (var i2 in t2) {
          var n2 = t2[i2];
          r2 = r2.replace(new RegExp("(?:\\[|%%)(".concat(i2, ")(?:\\]|%%)"), "g"), n2);
        }
        return r2;
      }
      function T(e2) {
        return Array.isArray(e2) ? e2.map(function(e3) {
          return e3 && e3.hasOwnProperty("url") ? e3.url : e3;
        }) : e2;
      }
      function y(e2, t2) {
        for (var r2 = 0; r2 < t2.length; r2++)
          if (A(t2[r2], e2))
            return true;
        return false;
      }
      function A(e2, t2) {
        if (e2 && t2) {
          var r2 = Object.getOwnPropertyNames(e2), i2 = Object.getOwnPropertyNames(t2);
          return r2.length === i2.length && (e2.id === t2.id && e2.url === t2.url);
        }
        return false;
      }
      function k(e2) {
        return encodeURIComponent(e2).replace(/[!'()*]/g, function(e3) {
          return "%".concat(e3.charCodeAt(0).toString(16));
        });
      }
      function R(e2) {
        var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 8, r2 = String(e2);
        return r2.length < t2 ? E(0, t2 - r2.length, false).map(function() {
          return "0";
        }).join("") + r2 : r2;
      }
      function E(e2, t2, r2) {
        for (var i2 = [], n2 = e2 < t2, a2 = r2 ? n2 ? t2 + 1 : t2 - 1 : t2, o2 = e2; n2 ? o2 < a2 : o2 > a2; n2 ? o2++ : o2--)
          i2.push(o2);
        return i2;
      }
      var b = { track: function(e2, t2, r2) {
        f(e2, t2, r2).forEach(function(e3) {
          typeof window != "undefined" && window !== null && (new Image().src = e3);
        });
      }, resolveURLTemplates: f, extractURLsFromTemplates: T, containsTemplateObject: y, isTemplateObjectEqual: A, encodeURIComponentRFC3986: k, replaceUrlMacros: m, leftpad: R, range: E, isNumeric: function(e2) {
        return !isNaN(parseFloat(e2)) && isFinite(e2);
      }, flatten: function e2(t2) {
        return t2.reduce(function(t3, r2) {
          return t3.concat(Array.isArray(r2) ? e2(r2) : r2);
        }, []);
      }, joinArrayOfUniqueTemplateObjs: function() {
        var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r2 = Array.isArray(e2) ? e2 : [], i2 = Array.isArray(t2) ? t2 : [], n2 = r2.concat(i2);
        return n2.reduce(function(e3, t3) {
          return y(t3, e3) || e3.push(t3), e3;
        }, []);
      } };
      function N(e2) {
        return ["true", "TRUE", "True", "1"].indexOf(e2) !== -1;
      }
      var L = { childByName: function(e2, t2) {
        var r2 = e2.childNodes;
        for (var i2 in r2) {
          var n2 = r2[i2];
          if (n2.nodeName === t2)
            return n2;
        }
      }, childrenByName: function(e2, t2) {
        var r2 = [], i2 = e2.childNodes;
        for (var n2 in i2) {
          var a2 = i2[n2];
          a2.nodeName === t2 && r2.push(a2);
        }
        return r2;
      }, resolveVastAdTagURI: function(e2, t2) {
        if (!t2)
          return e2;
        if (e2.indexOf("//") === 0) {
          var r2 = location.protocol;
          return "".concat(r2).concat(e2);
        }
        if (e2.indexOf("://") === -1) {
          var i2 = t2.slice(0, t2.lastIndexOf("/"));
          return "".concat(i2, "/").concat(e2);
        }
        return e2;
      }, parseBoolean: N, parseNodeText: function(e2) {
        return e2 && (e2.textContent || e2.text || "").trim();
      }, copyNodeAttribute: function(e2, t2, r2) {
        var i2 = t2.getAttribute(e2);
        i2 && r2.setAttribute(e2, i2);
      }, parseAttributes: function(e2) {
        for (var t2 = e2.attributes, r2 = {}, i2 = 0; i2 < t2.length; i2++)
          r2[t2[i2].nodeName] = t2[i2].nodeValue;
        return r2;
      }, parseDuration: function(e2) {
        if (e2 == null)
          return -1;
        if (b.isNumeric(e2))
          return parseInt(e2);
        var t2 = e2.split(":");
        if (t2.length !== 3)
          return -1;
        var r2 = t2[2].split("."), i2 = parseInt(r2[0]);
        r2.length === 2 && (i2 += parseFloat("0.".concat(r2[1])));
        var n2 = parseInt(60 * t2[1]), a2 = parseInt(60 * t2[0] * 60);
        return isNaN(a2) || isNaN(n2) || isNaN(i2) || n2 > 3600 || i2 > 60 ? -1 : a2 + n2 + i2;
      }, splitVAST: function(e2) {
        var t2 = [], r2 = null;
        return e2.forEach(function(i2, n2) {
          if (i2.sequence && (i2.sequence = parseInt(i2.sequence, 10)), i2.sequence > 1) {
            var a2 = e2[n2 - 1];
            if (a2 && a2.sequence === i2.sequence - 1)
              return void (r2 && r2.push(i2));
            delete i2.sequence;
          }
          r2 = [i2], t2.push(r2);
        }), t2;
      }, assignAttributes: function(e2, t2) {
        if (e2)
          for (var r2 in e2) {
            var i2 = e2[r2];
            if (i2.nodeName && i2.nodeValue && t2.hasOwnProperty(i2.nodeName)) {
              var n2 = i2.nodeValue;
              typeof t2[i2.nodeName] == "boolean" && (n2 = N(n2)), t2[i2.nodeName] = n2;
            }
          }
      }, mergeWrapperAdData: function(e2, t2) {
        e2.errorURLTemplates = t2.errorURLTemplates.concat(e2.errorURLTemplates), e2.impressionURLTemplates = t2.impressionURLTemplates.concat(e2.impressionURLTemplates), e2.extensions = t2.extensions.concat(e2.extensions), e2.followAdditionalWrappers = t2.followAdditionalWrappers, e2.allowMultipleAds = t2.allowMultipleAds, e2.fallbackOnNoAd = t2.fallbackOnNoAd;
        var r2 = (t2.creatives || []).filter(function(e3) {
          return e3 && e3.type === "companion";
        }), i2 = r2.reduce(function(e3, t3) {
          return (t3.variations || []).forEach(function(t4) {
            (t4.companionClickTrackingURLTemplates || []).forEach(function(t5) {
              b.containsTemplateObject(t5, e3) || e3.push(t5);
            });
          }), e3;
        }, []);
        e2.creatives = r2.concat(e2.creatives);
        var n2 = t2.videoClickTrackingURLTemplates && t2.videoClickTrackingURLTemplates.length, a2 = t2.videoCustomClickURLTemplates && t2.videoCustomClickURLTemplates.length;
        e2.creatives.forEach(function(e3) {
          if (t2.trackingEvents && t2.trackingEvents[e3.type])
            for (var r3 in t2.trackingEvents[e3.type]) {
              var o2 = t2.trackingEvents[e3.type][r3];
              Array.isArray(e3.trackingEvents[r3]) || (e3.trackingEvents[r3] = []), e3.trackingEvents[r3] = e3.trackingEvents[r3].concat(o2);
            }
          e3.type === "linear" && (n2 && (e3.videoClickTrackingURLTemplates = e3.videoClickTrackingURLTemplates.concat(t2.videoClickTrackingURLTemplates)), a2 && (e3.videoCustomClickURLTemplates = e3.videoCustomClickURLTemplates.concat(t2.videoCustomClickURLTemplates)), !t2.videoClickThroughURLTemplate || e3.videoClickThroughURLTemplate !== null && e3.videoClickThroughURLTemplate !== void 0 || (e3.videoClickThroughURLTemplate = t2.videoClickThroughURLTemplate)), e3.type === "companion" && i2.length && (e3.variations || []).forEach(function(e4) {
            e4.companionClickTrackingURLTemplates = b.joinArrayOfUniqueTemplateObjs(e4.companionClickTrackingURLTemplates, i2);
          });
        }), t2.adVerifications && (e2.adVerifications = e2.adVerifications.concat(t2.adVerifications)), t2.blockedAdCategories && (e2.blockedAdCategories = e2.blockedAdCategories.concat(t2.blockedAdCategories));
      } };
      function w(e2, t2) {
        var r2 = function() {
          var e3 = h(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}), t3 = e3.id, r3 = e3.adId, i2 = e3.sequence, n2 = e3.apiFramework;
          return { id: t3, adId: r3, sequence: i2, apiFramework: n2, type: "companion", required: null, variations: [] };
        }(t2);
        return r2.required = e2.getAttribute("required") || null, r2.variations = L.childrenByName(e2, "Companion").map(function(e3) {
          var t3 = function() {
            var e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return { id: e4.id || null, adType: "companionAd", width: e4.width || 0, height: e4.height || 0, assetWidth: e4.assetWidth || null, assetHeight: e4.assetHeight || null, expandedWidth: e4.expandedWidth || null, expandedHeight: e4.expandedHeight || null, apiFramework: e4.apiFramework || null, adSlotID: e4.adSlotID || null, pxratio: e4.pxratio || "1", renderingMode: e4.renderingMode || "default", staticResources: [], htmlResources: [], iframeResources: [], adParameters: null, xmlEncoded: null, altText: null, companionClickThroughURLTemplate: null, companionClickTrackingURLTemplates: [], trackingEvents: {} };
          }(L.parseAttributes(e3));
          t3.htmlResources = L.childrenByName(e3, "HTMLResource").reduce(function(e4, t4) {
            var r4 = L.parseNodeText(t4);
            return r4 ? e4.concat(r4) : e4;
          }, []), t3.iframeResources = L.childrenByName(e3, "IFrameResource").reduce(function(e4, t4) {
            var r4 = L.parseNodeText(t4);
            return r4 ? e4.concat(r4) : e4;
          }, []), t3.staticResources = L.childrenByName(e3, "StaticResource").reduce(function(e4, t4) {
            var r4 = L.parseNodeText(t4);
            return r4 ? e4.concat({ url: r4, creativeType: t4.getAttribute("creativeType") || null }) : e4;
          }, []), t3.altText = L.parseNodeText(L.childByName(e3, "AltText")) || null;
          var r3 = L.childByName(e3, "TrackingEvents");
          r3 && L.childrenByName(r3, "Tracking").forEach(function(e4) {
            var r4 = e4.getAttribute("event"), i3 = L.parseNodeText(e4);
            r4 && i3 && (Array.isArray(t3.trackingEvents[r4]) || (t3.trackingEvents[r4] = []), t3.trackingEvents[r4].push(i3));
          }), t3.companionClickTrackingURLTemplates = L.childrenByName(e3, "CompanionClickTracking").map(function(e4) {
            return { id: e4.getAttribute("id") || null, url: L.parseNodeText(e4) };
          }), t3.companionClickThroughURLTemplate = L.parseNodeText(L.childByName(e3, "CompanionClickThrough")) || null;
          var i2 = L.childByName(e3, "AdParameters");
          return i2 && (t3.adParameters = L.parseNodeText(i2), t3.xmlEncoded = i2.getAttribute("xmlEncoded") || null), t3;
        }), r2;
      }
      function U(e2) {
        return e2.type === "linear";
      }
      function C(e2, t2) {
        var r2, i2 = function() {
          var e3 = h(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}), t3 = e3.id, r3 = e3.adId, i3 = e3.sequence, n3 = e3.apiFramework;
          return { id: t3, adId: r3, sequence: i3, apiFramework: n3, type: "linear", duration: 0, skipDelay: null, mediaFiles: [], mezzanine: null, interactiveCreativeFile: null, closedCaptionFiles: [], videoClickThroughURLTemplate: null, videoClickTrackingURLTemplates: [], videoCustomClickURLTemplates: [], adParameters: null, icons: [], trackingEvents: {} };
        }(t2);
        i2.duration = L.parseDuration(L.parseNodeText(L.childByName(e2, "Duration")));
        var n2 = e2.getAttribute("skipoffset");
        if (n2 == null)
          i2.skipDelay = null;
        else if (n2.charAt(n2.length - 1) === "%" && i2.duration !== -1) {
          var a2 = parseInt(n2, 10);
          i2.skipDelay = i2.duration * (a2 / 100);
        } else
          i2.skipDelay = L.parseDuration(n2);
        var o2 = L.childByName(e2, "VideoClicks");
        if (o2) {
          var s2 = L.childByName(o2, "ClickThrough");
          i2.videoClickThroughURLTemplate = s2 ? { id: s2.getAttribute("id") || null, url: L.parseNodeText(s2) } : null, L.childrenByName(o2, "ClickTracking").forEach(function(e3) {
            i2.videoClickTrackingURLTemplates.push({ id: e3.getAttribute("id") || null, url: L.parseNodeText(e3) });
          }), L.childrenByName(o2, "CustomClick").forEach(function(e3) {
            i2.videoCustomClickURLTemplates.push({ id: e3.getAttribute("id") || null, url: L.parseNodeText(e3) });
          });
        }
        var l2 = L.childByName(e2, "AdParameters");
        l2 && (i2.adParameters = L.parseNodeText(l2)), L.childrenByName(e2, "TrackingEvents").forEach(function(e3) {
          L.childrenByName(e3, "Tracking").forEach(function(e4) {
            var t3 = e4.getAttribute("event"), n3 = L.parseNodeText(e4);
            if (t3 && n3) {
              if (t3 === "progress") {
                if (!(r2 = e4.getAttribute("offset")))
                  return;
                t3 = r2.charAt(r2.length - 1) === "%" ? "progress-".concat(r2) : "progress-".concat(Math.round(L.parseDuration(r2)));
              }
              Array.isArray(i2.trackingEvents[t3]) || (i2.trackingEvents[t3] = []), i2.trackingEvents[t3].push(n3);
            }
          });
        }), L.childrenByName(e2, "MediaFiles").forEach(function(e3) {
          L.childrenByName(e3, "MediaFile").forEach(function(e4) {
            i2.mediaFiles.push(function(e5) {
              var t4 = { id: null, fileURL: null, fileSize: 0, deliveryType: "progressive", mimeType: null, mediaType: null, codec: null, bitrate: 0, minBitrate: 0, maxBitrate: 0, width: 0, height: 0, apiFramework: null, scalable: null, maintainAspectRatio: null };
              t4.id = e5.getAttribute("id"), t4.fileURL = L.parseNodeText(e5), t4.deliveryType = e5.getAttribute("delivery"), t4.codec = e5.getAttribute("codec"), t4.mimeType = e5.getAttribute("type"), t4.mediaType = e5.getAttribute("mediaType") || "2D", t4.apiFramework = e5.getAttribute("apiFramework"), t4.fileSize = parseInt(e5.getAttribute("fileSize") || 0), t4.bitrate = parseInt(e5.getAttribute("bitrate") || 0), t4.minBitrate = parseInt(e5.getAttribute("minBitrate") || 0), t4.maxBitrate = parseInt(e5.getAttribute("maxBitrate") || 0), t4.width = parseInt(e5.getAttribute("width") || 0), t4.height = parseInt(e5.getAttribute("height") || 0);
              var r4 = e5.getAttribute("scalable");
              r4 && typeof r4 == "string" && (t4.scalable = L.parseBoolean(r4));
              var i3 = e5.getAttribute("maintainAspectRatio");
              i3 && typeof i3 == "string" && (t4.maintainAspectRatio = L.parseBoolean(i3));
              return t4;
            }(e4));
          });
          var t3 = L.childByName(e3, "InteractiveCreativeFile");
          t3 && (i2.interactiveCreativeFile = function(e4) {
            var t4 = function() {
              var e5 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              return { type: e5.type || null, apiFramework: e5.apiFramework || null, variableDuration: L.parseBoolean(e5.variableDuration), fileURL: null };
            }(L.parseAttributes(e4));
            return t4.fileURL = L.parseNodeText(e4), t4;
          }(t3));
          var r3 = L.childByName(e3, "ClosedCaptionFiles");
          r3 && L.childrenByName(r3, "ClosedCaptionFile").forEach(function(e4) {
            var t4 = function() {
              var e5 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              return { type: e5.type || null, language: e5.language || null, fileURL: null };
            }(L.parseAttributes(e4));
            t4.fileURL = L.parseNodeText(e4), i2.closedCaptionFiles.push(t4);
          });
          var n3, a3, o3, s3 = L.childByName(e3, "Mezzanine"), l3 = (n3 = s3, a3 = {}, o3 = false, ["delivery", "type", "width", "height"].forEach(function(e4) {
            n3 && n3.getAttribute(e4) ? a3[e4] = n3.getAttribute(e4) : o3 = true;
          }), o3 ? null : a3);
          if (l3) {
            var u3 = { id: null, fileURL: null, delivery: null, codec: null, type: null, width: 0, height: 0, fileSize: 0, mediaType: "2D" };
            u3.id = s3.getAttribute("id"), u3.fileURL = L.parseNodeText(s3), u3.delivery = l3.delivery, u3.codec = s3.getAttribute("codec"), u3.type = l3.type, u3.width = parseInt(l3.width, 10), u3.height = parseInt(l3.height, 10), u3.fileSize = parseInt(s3.getAttribute("fileSize"), 10), u3.mediaType = s3.getAttribute("mediaType") || "2D", i2.mezzanine = u3;
          }
        });
        var u2 = L.childByName(e2, "Icons");
        return u2 && L.childrenByName(u2, "Icon").forEach(function(e3) {
          i2.icons.push(function(e4) {
            var t3 = { program: null, height: 0, width: 0, xPosition: 0, yPosition: 0, apiFramework: null, offset: null, duration: 0, type: null, staticResource: null, htmlResource: null, iframeResource: null, pxratio: "1", iconClickThroughURLTemplate: null, iconClickTrackingURLTemplates: [], iconViewTrackingURLTemplate: null };
            t3.program = e4.getAttribute("program"), t3.height = parseInt(e4.getAttribute("height") || 0), t3.width = parseInt(e4.getAttribute("width") || 0), t3.xPosition = function(e5) {
              if (["left", "right"].indexOf(e5) !== -1)
                return e5;
              return parseInt(e5 || 0);
            }(e4.getAttribute("xPosition")), t3.yPosition = function(e5) {
              if (["top", "bottom"].indexOf(e5) !== -1)
                return e5;
              return parseInt(e5 || 0);
            }(e4.getAttribute("yPosition")), t3.apiFramework = e4.getAttribute("apiFramework"), t3.pxratio = e4.getAttribute("pxratio") || "1", t3.offset = L.parseDuration(e4.getAttribute("offset")), t3.duration = L.parseDuration(e4.getAttribute("duration")), L.childrenByName(e4, "HTMLResource").forEach(function(e5) {
              t3.type = e5.getAttribute("creativeType") || "text/html", t3.htmlResource = L.parseNodeText(e5);
            }), L.childrenByName(e4, "IFrameResource").forEach(function(e5) {
              t3.type = e5.getAttribute("creativeType") || 0, t3.iframeResource = L.parseNodeText(e5);
            }), L.childrenByName(e4, "StaticResource").forEach(function(e5) {
              t3.type = e5.getAttribute("creativeType") || 0, t3.staticResource = L.parseNodeText(e5);
            });
            var r3 = L.childByName(e4, "IconClicks");
            r3 && (t3.iconClickThroughURLTemplate = L.parseNodeText(L.childByName(r3, "IconClickThrough")), L.childrenByName(r3, "IconClickTracking").forEach(function(e5) {
              t3.iconClickTrackingURLTemplates.push({ id: e5.getAttribute("id") || null, url: L.parseNodeText(e5) });
            }));
            return t3.iconViewTrackingURLTemplate = L.parseNodeText(L.childByName(e4, "IconViewTracking")), t3;
          }(e3));
        }), i2;
      }
      function I(e2, t2) {
        var r2 = function() {
          var e3 = h(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}), t3 = e3.id, r3 = e3.adId, i2 = e3.sequence, n2 = e3.apiFramework;
          return { id: t3, adId: r3, sequence: i2, apiFramework: n2, type: "nonlinear", variations: [], trackingEvents: {} };
        }(t2);
        return L.childrenByName(e2, "TrackingEvents").forEach(function(e3) {
          var t3, i2;
          L.childrenByName(e3, "Tracking").forEach(function(e4) {
            t3 = e4.getAttribute("event"), i2 = L.parseNodeText(e4), t3 && i2 && (Array.isArray(r2.trackingEvents[t3]) || (r2.trackingEvents[t3] = []), r2.trackingEvents[t3].push(i2));
          });
        }), L.childrenByName(e2, "NonLinear").forEach(function(e3) {
          var t3 = { id: null, width: 0, height: 0, expandedWidth: 0, expandedHeight: 0, scalable: true, maintainAspectRatio: true, minSuggestedDuration: 0, apiFramework: "static", adType: "nonLinearAd", type: null, staticResource: null, htmlResource: null, iframeResource: null, nonlinearClickThroughURLTemplate: null, nonlinearClickTrackingURLTemplates: [], adParameters: null };
          t3.id = e3.getAttribute("id") || null, t3.width = e3.getAttribute("width"), t3.height = e3.getAttribute("height"), t3.expandedWidth = e3.getAttribute("expandedWidth"), t3.expandedHeight = e3.getAttribute("expandedHeight"), t3.scalable = L.parseBoolean(e3.getAttribute("scalable")), t3.maintainAspectRatio = L.parseBoolean(e3.getAttribute("maintainAspectRatio")), t3.minSuggestedDuration = L.parseDuration(e3.getAttribute("minSuggestedDuration")), t3.apiFramework = e3.getAttribute("apiFramework"), L.childrenByName(e3, "HTMLResource").forEach(function(e4) {
            t3.type = e4.getAttribute("creativeType") || "text/html", t3.htmlResource = L.parseNodeText(e4);
          }), L.childrenByName(e3, "IFrameResource").forEach(function(e4) {
            t3.type = e4.getAttribute("creativeType") || 0, t3.iframeResource = L.parseNodeText(e4);
          }), L.childrenByName(e3, "StaticResource").forEach(function(e4) {
            t3.type = e4.getAttribute("creativeType") || 0, t3.staticResource = L.parseNodeText(e4);
          });
          var i2 = L.childByName(e3, "AdParameters");
          i2 && (t3.adParameters = L.parseNodeText(i2)), t3.nonlinearClickThroughURLTemplate = L.parseNodeText(L.childByName(e3, "NonLinearClickThrough")), L.childrenByName(e3, "NonLinearClickTracking").forEach(function(e4) {
            t3.nonlinearClickTrackingURLTemplates.push({ id: e4.getAttribute("id") || null, url: L.parseNodeText(e4) });
          }), r2.variations.push(t3);
        }), r2;
      }
      function x(e2) {
        var t2 = [];
        return e2.forEach(function(e3) {
          var r2 = S(e3);
          r2 && t2.push(r2);
        }), t2;
      }
      function S(e2) {
        if (e2.nodeName === "#comment")
          return null;
        var t2, r2 = { name: null, value: null, attributes: {}, children: [] }, i2 = e2.attributes, n2 = e2.childNodes;
        if (r2.name = e2.nodeName, e2.attributes) {
          for (var a2 in i2)
            if (i2.hasOwnProperty(a2)) {
              var o2 = i2[a2];
              o2.nodeName && o2.nodeValue && (r2.attributes[o2.nodeName] = o2.nodeValue);
            }
        }
        for (var s2 in n2)
          if (n2.hasOwnProperty(s2)) {
            var l2 = S(n2[s2]);
            l2 && r2.children.push(l2);
          }
        if (r2.children.length === 0 || r2.children.length === 1 && ["#cdata-section", "#text"].indexOf(r2.children[0].name) >= 0) {
          var u2 = L.parseNodeText(e2);
          u2 !== "" && (r2.value = u2), r2.children = [];
        }
        return (t2 = r2).value === null && Object.keys(t2.attributes).length === 0 && t2.children.length === 0 ? null : r2;
      }
      function O(e2) {
        var t2 = [];
        return e2.forEach(function(e3) {
          var r2, i2, n2 = { id: e3.getAttribute("id") || null, adId: D(e3), sequence: e3.getAttribute("sequence") || null, apiFramework: e3.getAttribute("apiFramework") || null }, a2 = L.childByName(e3, "UniversalAdId");
          a2 && (r2 = { idRegistry: a2.getAttribute("idRegistry") || "unknown", value: L.parseNodeText(a2) });
          var o2 = L.childByName(e3, "CreativeExtensions");
          for (var s2 in o2 && (i2 = x(L.childrenByName(o2, "CreativeExtension"))), e3.childNodes) {
            var l2 = e3.childNodes[s2], u2 = void 0;
            switch (l2.nodeName) {
              case "Linear":
                u2 = C(l2, n2);
                break;
              case "NonLinearAds":
                u2 = I(l2, n2);
                break;
              case "CompanionAds":
                u2 = w(l2, n2);
            }
            u2 && (r2 && (u2.universalAdId = r2), i2 && (u2.creativeExtensions = i2), t2.push(u2));
          }
        }), t2;
      }
      function D(e2) {
        return e2.getAttribute("AdID") || e2.getAttribute("adID") || e2.getAttribute("adId") || null;
      }
      var V = { Wrapper: { subElements: ["VASTAdTagURI", "Impression"] }, BlockedAdCategories: { attributes: ["authority"] }, InLine: { subElements: ["AdSystem", "AdTitle", "Impression", "AdServingId", "Creatives"] }, Category: { attributes: ["authority"] }, Pricing: { attributes: ["model", "currency"] }, Verification: { oneOfinLineResources: ["JavaScriptResource", "ExecutableResource"], attributes: ["vendor"] }, UniversalAdId: { attributes: ["idRegistry"] }, JavaScriptResource: { attributes: ["apiFramework", "browserOptional"] }, ExecutableResource: { attributes: ["apiFramework", "type"] }, Tracking: { attributes: ["event"] }, Creatives: { subElements: ["Creative"] }, Creative: { subElements: ["UniversalAdId"] }, Linear: { subElements: ["MediaFiles", "Duration"] }, MediaFiles: { subElements: ["MediaFile"] }, MediaFile: { attributes: ["delivery", "type", "width", "height"] }, Mezzanine: { attributes: ["delivery", "type", "width", "height"] }, NonLinear: { oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"], attributes: ["width", "height"] }, Companion: { oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"], attributes: ["width", "height"] }, StaticResource: { attributes: ["creativeType"] }, Icons: { subElements: ["Icon"] }, Icon: { oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"] } };
      function P(e2, t2) {
        if (V[e2.nodeName] && V[e2.nodeName].attributes) {
          var r2 = V[e2.nodeName].attributes.filter(function(t3) {
            return !e2.getAttribute(t3);
          });
          r2.length > 0 && M({ name: e2.nodeName, parentName: e2.parentNode.nodeName, attributes: r2 }, t2);
        }
      }
      function B(e2, t2, r2) {
        var i2 = V[e2.nodeName], n2 = !r2 && e2.nodeName !== "Wrapper";
        if (i2 && !n2) {
          if (i2.subElements) {
            var a2 = i2.subElements.filter(function(t3) {
              return !L.childByName(e2, t3);
            });
            a2.length > 0 && M({ name: e2.nodeName, parentName: e2.parentNode.nodeName, subElements: a2 }, t2);
          }
          if (r2 && i2.oneOfinLineResources)
            i2.oneOfinLineResources.some(function(t3) {
              return L.childByName(e2, t3);
            }) || M({ name: e2.nodeName, parentName: e2.parentNode.nodeName, oneOfResources: i2.oneOfinLineResources }, t2);
        }
      }
      function F(e2) {
        return e2.children && e2.children.length !== 0;
      }
      function M(e2, t2) {
        var r2 = e2.name, i2 = e2.parentName, n2 = e2.attributes, a2 = e2.subElements, o2 = e2.oneOfResources, s2 = "Element '".concat(r2, "'");
        t2("VAST-warning", { message: s2 += n2 ? " missing required attribute(s) '".concat(n2.join(", "), "' ") : a2 ? " missing required sub element(s) '".concat(a2.join(", "), "' ") : o2 ? " must provide one of the following '".concat(o2.join(", "), "' ") : " is empty", parentElement: i2, specVersion: 4.1 });
      }
      var W = { verifyRequiredValues: function e2(t2, r2, i2) {
        if (t2 && t2.nodeName)
          if (t2.nodeName === "InLine" && (i2 = true), P(t2, r2), F(t2)) {
            B(t2, r2, i2);
            for (var n2 = 0; n2 < t2.children.length; n2++)
              e2(t2.children[n2], r2, i2);
          } else
            L.parseNodeText(t2).length === 0 && M({ name: t2.nodeName, parentName: t2.parentNode.nodeName }, r2);
      }, hasSubElements: F, emitMissingValueWarning: M, verifyRequiredAttributes: P, verifyRequiredSubElements: B };
      function j(e2, t2) {
        var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i2 = r2.allowMultipleAds, n2 = r2.followAdditionalWrappers, a2 = e2.childNodes;
        for (var o2 in a2) {
          var s2 = a2[o2];
          if (["Wrapper", "InLine"].indexOf(s2.nodeName) !== -1 && (s2.nodeName !== "Wrapper" || n2 !== false)) {
            if (L.copyNodeAttribute("id", e2, s2), L.copyNodeAttribute("sequence", e2, s2), L.copyNodeAttribute("adType", e2, s2), s2.nodeName === "Wrapper")
              return { ad: _(s2, t2), type: "WRAPPER" };
            if (s2.nodeName === "InLine")
              return { ad: q(s2, t2, { allowMultipleAds: i2 }), type: "INLINE" };
          }
        }
      }
      function q(e2, t2) {
        var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i2 = r2.allowMultipleAds;
        return i2 === false && e2.getAttribute("sequence") ? null : H(e2, t2);
      }
      function H(e2, t2) {
        t2 && W.verifyRequiredValues(e2, t2);
        var r2 = e2.childNodes, i2 = function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return { id: e3.id || null, sequence: e3.sequence || null, adType: e3.adType || null, adServingId: null, categories: [], expires: null, viewableImpression: {}, system: null, title: null, description: null, advertiser: null, pricing: null, survey: null, errorURLTemplates: [], impressionURLTemplates: [], creatives: [], extensions: [], adVerifications: [], blockedAdCategories: [], followAdditionalWrappers: true, allowMultipleAds: false, fallbackOnNoAd: null };
        }(L.parseAttributes(e2));
        for (var n2 in r2) {
          var a2 = r2[n2];
          switch (a2.nodeName) {
            case "Error":
              i2.errorURLTemplates.push(L.parseNodeText(a2));
              break;
            case "Impression":
              i2.impressionURLTemplates.push({ id: a2.getAttribute("id") || null, url: L.parseNodeText(a2) });
              break;
            case "Creatives":
              i2.creatives = O(L.childrenByName(a2, "Creative"));
              break;
            case "Extensions":
              var o2 = L.childrenByName(a2, "Extension");
              i2.extensions = x(o2), i2.adVerifications.length || (i2.adVerifications = z(o2));
              break;
            case "AdVerifications":
              i2.adVerifications = G(L.childrenByName(a2, "Verification"));
              break;
            case "AdSystem":
              i2.system = { value: L.parseNodeText(a2), version: a2.getAttribute("version") || null };
              break;
            case "AdTitle":
              i2.title = L.parseNodeText(a2);
              break;
            case "AdServingId":
              i2.adServingId = L.parseNodeText(a2);
              break;
            case "Category":
              i2.categories.push({ authority: a2.getAttribute("authority") || null, value: L.parseNodeText(a2) });
              break;
            case "Expires":
              i2.expires = parseInt(L.parseNodeText(a2), 10);
              break;
            case "ViewableImpression":
              i2.viewableImpression = Y(a2);
              break;
            case "Description":
              i2.description = L.parseNodeText(a2);
              break;
            case "Advertiser":
              i2.advertiser = { id: a2.getAttribute("id") || null, value: L.parseNodeText(a2) };
              break;
            case "Pricing":
              i2.pricing = { value: L.parseNodeText(a2), model: a2.getAttribute("model") || null, currency: a2.getAttribute("currency") || null };
              break;
            case "Survey":
              i2.survey = L.parseNodeText(a2);
              break;
            case "BlockedAdCategories":
              i2.blockedAdCategories.push({ authority: a2.getAttribute("authority") || null, value: L.parseNodeText(a2) });
          }
        }
        return i2;
      }
      function _(e2, t2) {
        var r2 = H(e2, t2), i2 = e2.getAttribute("followAdditionalWrappers"), n2 = e2.getAttribute("allowMultipleAds"), a2 = e2.getAttribute("fallbackOnNoAd");
        r2.followAdditionalWrappers = !i2 || L.parseBoolean(i2), r2.allowMultipleAds = !!n2 && L.parseBoolean(n2), r2.fallbackOnNoAd = a2 ? L.parseBoolean(a2) : null;
        var o2 = L.childByName(e2, "VASTAdTagURI");
        if (o2 ? r2.nextWrapperURL = L.parseNodeText(o2) : (o2 = L.childByName(e2, "VASTAdTagURL")) && (r2.nextWrapperURL = L.parseNodeText(L.childByName(o2, "URL"))), r2.creatives.forEach(function(e3) {
          if (["linear", "nonlinear"].indexOf(e3.type) !== -1) {
            if (e3.trackingEvents) {
              r2.trackingEvents || (r2.trackingEvents = {}), r2.trackingEvents[e3.type] || (r2.trackingEvents[e3.type] = {});
              var t3 = function(t4) {
                var i4 = e3.trackingEvents[t4];
                Array.isArray(r2.trackingEvents[e3.type][t4]) || (r2.trackingEvents[e3.type][t4] = []), i4.forEach(function(i5) {
                  r2.trackingEvents[e3.type][t4].push(i5);
                });
              };
              for (var i3 in e3.trackingEvents)
                t3(i3);
            }
            e3.videoClickTrackingURLTemplates && (Array.isArray(r2.videoClickTrackingURLTemplates) || (r2.videoClickTrackingURLTemplates = []), e3.videoClickTrackingURLTemplates.forEach(function(e4) {
              r2.videoClickTrackingURLTemplates.push(e4);
            })), e3.videoClickThroughURLTemplate && (r2.videoClickThroughURLTemplate = e3.videoClickThroughURLTemplate), e3.videoCustomClickURLTemplates && (Array.isArray(r2.videoCustomClickURLTemplates) || (r2.videoCustomClickURLTemplates = []), e3.videoCustomClickURLTemplates.forEach(function(e4) {
              r2.videoCustomClickURLTemplates.push(e4);
            }));
          }
        }), r2.nextWrapperURL)
          return r2;
      }
      function G(e2) {
        var t2 = [];
        return e2.forEach(function(e3) {
          var r2 = { resource: null, vendor: null, browserOptional: false, apiFramework: null, type: null, parameters: null, trackingEvents: {} }, i2 = e3.childNodes;
          for (var n2 in L.assignAttributes(e3.attributes, r2), i2) {
            var a2 = i2[n2];
            switch (a2.nodeName) {
              case "JavaScriptResource":
              case "ExecutableResource":
                r2.resource = L.parseNodeText(a2), L.assignAttributes(a2.attributes, r2);
                break;
              case "VerificationParameters":
                r2.parameters = L.parseNodeText(a2);
            }
          }
          var o2 = L.childByName(e3, "TrackingEvents");
          o2 && L.childrenByName(o2, "Tracking").forEach(function(e4) {
            var t3 = e4.getAttribute("event"), i3 = L.parseNodeText(e4);
            t3 && i3 && (Array.isArray(r2.trackingEvents[t3]) || (r2.trackingEvents[t3] = []), r2.trackingEvents[t3].push(i3));
          }), t2.push(r2);
        }), t2;
      }
      function z(e2) {
        var t2 = null, r2 = [];
        return e2.some(function(e3) {
          return t2 = L.childByName(e3, "AdVerifications");
        }), t2 && (r2 = G(L.childrenByName(t2, "Verification"))), r2;
      }
      function Y(e2) {
        var t2 = {};
        t2.id = e2.getAttribute("id") || null;
        var r2 = e2.childNodes;
        for (var i2 in r2) {
          var n2 = r2[i2], a2 = n2.nodeName, o2 = L.parseNodeText(n2);
          if ((a2 === "Viewable" || a2 === "NotViewable" || a2 === "ViewUndetermined") && o2) {
            var s2 = a2.toLowerCase();
            Array.isArray(t2[s2]) || (t2[s2] = []), t2[s2].push(o2);
          }
        }
        return t2;
      }
      var X = function() {
        function e2() {
          r(this, e2), this._handlers = [];
        }
        return n(e2, [{ key: "on", value: function(e3, r2) {
          if (typeof r2 != "function")
            throw new TypeError("The handler argument must be of type Function. Received type ".concat(t(r2)));
          if (!e3)
            throw new TypeError("The event argument must be of type String. Received type ".concat(t(e3)));
          return this._handlers.push({ event: e3, handler: r2 }), this;
        } }, { key: "once", value: function(e3, t2) {
          return this.on(e3, function(e4, t3, r2) {
            var i2 = { fired: false, wrapFn: void 0 };
            function n2() {
              i2.fired || (e4.off(t3, i2.wrapFn), i2.fired = true, r2.bind(e4).apply(void 0, arguments));
            }
            return i2.wrapFn = n2, n2;
          }(this, e3, t2));
        } }, { key: "off", value: function(e3, t2) {
          return this._handlers = this._handlers.filter(function(r2) {
            return r2.event !== e3 || r2.handler !== t2;
          }), this;
        } }, { key: "emit", value: function(e3) {
          for (var t2 = arguments.length, r2 = new Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++)
            r2[i2 - 1] = arguments[i2];
          var n2 = false;
          return this._handlers.forEach(function(t3) {
            t3.event === "*" && (n2 = true, t3.handler.apply(t3, [e3].concat(r2))), t3.event === e3 && (n2 = true, t3.handler.apply(t3, r2));
          }), n2;
        } }, { key: "removeAllListeners", value: function(e3) {
          return e3 ? (this._handlers = this._handlers.filter(function(t2) {
            return t2.event !== e3;
          }), this) : (this._handlers = [], this);
        } }, { key: "listenerCount", value: function(e3) {
          return this._handlers.filter(function(t2) {
            return t2.event === e3;
          }).length;
        } }, { key: "listeners", value: function(e3) {
          return this._handlers.reduce(function(t2, r2) {
            return r2.event === e3 && t2.push(r2.handler), t2;
          }, []);
        } }, { key: "eventNames", value: function() {
          return this._handlers.map(function(e3) {
            return e3.event;
          });
        } }]), e2;
      }();
      var K = { get: function(e2, t2, r2) {
        r2(new Error("Please bundle the library for node to use the node urlHandler"));
      } }, Q = 12e4;
      function J() {
        try {
          var e2 = new window.XMLHttpRequest();
          return "withCredentials" in e2 ? e2 : null;
        } catch (e3) {
          return null;
        }
      }
      function Z(e2, t2, r2) {
        var i2 = r2 ? 408 : e2.status, n2 = r2 ? "XHRURLHandler: Request timed out after ".concat(e2.timeout, " ms (").concat(i2, ")") : "XHRURLHandler: ".concat(e2.statusText, " (").concat(i2, ")");
        t2(new Error(n2), null, { statusCode: i2 });
      }
      var $ = { get: function(e2, t2, r2) {
        if (window.location.protocol === "https:" && e2.indexOf("http://") === 0)
          return r2(new Error("XHRURLHandler: Cannot go from HTTPS to HTTP."));
        try {
          var i2 = J();
          i2.open("GET", e2), i2.timeout = t2.timeout || Q, i2.withCredentials = t2.withCredentials || false, i2.overrideMimeType && i2.overrideMimeType("text/xml"), i2.onload = function() {
            return function(e3, t3) {
              e3.status === 200 ? t3(null, e3.responseXML, { byteLength: e3.response.length, statusCode: e3.status }) : Z(e3, t3, false);
            }(i2, r2);
          }, i2.onerror = function() {
            return Z(i2, r2, false);
          }, i2.onabort = function() {
            return Z(i2, r2, false);
          }, i2.ontimeout = function() {
            return Z(i2, r2, true);
          }, i2.send();
        } catch (e3) {
          r2(new Error("XHRURLHandler: Unexpected error"));
        }
      }, supported: function() {
        return !!J();
      } };
      var ee = { get: function(e2, t2, r2) {
        return r2 || (typeof t2 == "function" && (r2 = t2), t2 = {}), typeof window == "undefined" || window === null ? K.get(e2, t2, r2) : $.supported() ? $.get(e2, t2, r2) : r2(new Error("Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"));
      } };
      var te = { ERRORCODE: 900, extensions: [] }, re = function(e2) {
        l(i2, e2);
        var t2 = p(i2);
        function i2() {
          var e3;
          return r(this, i2), (e3 = t2.call(this)).remainingAds = [], e3.parentURLs = [], e3.errorURLTemplates = [], e3.rootErrorURLTemplates = [], e3.maxWrapperDepth = null, e3.URLTemplateFilters = [], e3.fetchingOptions = {}, e3.parsingOptions = {}, e3;
        }
        return n(i2, [{ key: "addURLTemplateFilter", value: function(e3) {
          typeof e3 == "function" && this.URLTemplateFilters.push(e3);
        } }, { key: "removeURLTemplateFilter", value: function() {
          this.URLTemplateFilters.pop();
        } }, { key: "countURLTemplateFilters", value: function() {
          return this.URLTemplateFilters.length;
        } }, { key: "clearURLTemplateFilters", value: function() {
          this.URLTemplateFilters = [];
        } }, { key: "trackVastError", value: function(e3, t3) {
          for (var r2 = arguments.length, i3 = new Array(r2 > 2 ? r2 - 2 : 0), n2 = 2; n2 < r2; n2++)
            i3[n2 - 2] = arguments[n2];
          this.emit("VAST-error", Object.assign.apply(Object, [{}, te, t3].concat(i3))), b.track(e3, t3);
        } }, { key: "getErrorURLTemplates", value: function() {
          return this.rootErrorURLTemplates.concat(this.errorURLTemplates);
        } }, { key: "fetchVAST", value: function(e3) {
          var t3 = this, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
          return new Promise(function(n2, a2) {
            t3.URLTemplateFilters.forEach(function(t4) {
              e3 = t4(e3);
            }), t3.parentURLs.push(e3);
            var o2 = Date.now();
            t3.emit("VAST-resolving", { url: e3, previousUrl: i3, wrapperDepth: r2, maxWrapperDepth: t3.maxWrapperDepth, timeout: t3.fetchingOptions.timeout }), t3.urlHandler.get(e3, t3.fetchingOptions, function(s2, l2) {
              var u2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c2 = Math.round(Date.now() - o2), d2 = Object.assign({ url: e3, previousUrl: i3, wrapperDepth: r2, error: s2, duration: c2 }, u2);
              t3.emit("VAST-resolved", d2), s2 ? a2(s2) : n2(l2);
            });
          });
        } }, { key: "initParsingStatus", value: function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          this.errorURLTemplates = [], this.fetchingOptions = { timeout: e3.timeout || Q, withCredentials: e3.withCredentials }, this.maxWrapperDepth = e3.wrapperLimit || 10, this.parentURLs = [], this.parsingOptions = { allowMultipleAds: e3.allowMultipleAds }, this.remainingAds = [], this.rootErrorURLTemplates = [], this.rootURL = "", this.urlHandler = e3.urlHandler || e3.urlhandler || ee, this.vastVersion = null;
        } }, { key: "getRemainingAds", value: function(e3) {
          var t3 = this;
          if (this.remainingAds.length === 0)
            return Promise.reject(new Error("No more ads are available for the given VAST"));
          var r2 = e3 ? b.flatten(this.remainingAds) : this.remainingAds.shift();
          return this.errorURLTemplates = [], this.parentURLs = [], this.resolveAds(r2, { wrapperDepth: 0, url: this.rootURL }).then(function(e4) {
            return t3.buildVASTResponse(e4);
          });
        } }, { key: "getAndParseVAST", value: function(e3) {
          var t3 = this, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return this.initParsingStatus(r2), this.URLTemplateFilters.forEach(function(t4) {
            e3 = t4(e3);
          }), this.rootURL = e3, this.fetchVAST(e3).then(function(i3) {
            return r2.previousUrl = e3, r2.isRootVAST = true, r2.url = e3, t3.parse(i3, r2).then(function(e4) {
              return t3.buildVASTResponse(e4);
            });
          });
        } }, { key: "parseVAST", value: function(e3) {
          var t3 = this, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return this.initParsingStatus(r2), r2.isRootVAST = true, this.parse(e3, r2).then(function(e4) {
            return t3.buildVASTResponse(e4);
          });
        } }, { key: "buildVASTResponse", value: function(e3) {
          var t3, r2 = { ads: (t3 = { ads: e3, errorURLTemplates: this.getErrorURLTemplates(), version: this.vastVersion }).ads || [], errorURLTemplates: t3.errorURLTemplates || [], version: t3.version || null };
          return this.completeWrapperResolving(r2), r2;
        } }, { key: "parseVastXml", value: function(e3, t3) {
          var r2 = t3.isRootVAST, i3 = r2 !== void 0 && r2, n2 = t3.url, a2 = n2 === void 0 ? null : n2, o2 = t3.wrapperDepth, s2 = o2 === void 0 ? 0 : o2, l2 = t3.allowMultipleAds, u2 = t3.followAdditionalWrappers;
          if (!e3 || !e3.documentElement || e3.documentElement.nodeName !== "VAST")
            throw this.emit("VAST-ad-parsed", { type: "ERROR", url: a2, wrapperDepth: s2 }), new Error("Invalid VAST XMLDocument");
          var c2 = [], d2 = e3.documentElement.childNodes, p2 = e3.documentElement.getAttribute("version");
          for (var h2 in i3 && p2 && (this.vastVersion = p2), d2) {
            var v2 = d2[h2];
            if (v2.nodeName === "Error") {
              var f2 = L.parseNodeText(v2);
              i3 ? this.rootErrorURLTemplates.push(f2) : this.errorURLTemplates.push(f2);
            } else if (v2.nodeName === "Ad") {
              if (this.vastVersion && parseFloat(this.vastVersion) < 3)
                l2 = true;
              else if (l2 === false && c2.length > 1)
                break;
              var m2 = j(v2, this.emit.bind(this), { allowMultipleAds: l2, followAdditionalWrappers: u2 });
              m2.ad ? (c2.push(m2.ad), this.emit("VAST-ad-parsed", { type: m2.type, url: a2, wrapperDepth: s2, adIndex: c2.length - 1, vastVersion: p2 })) : this.trackVastError(this.getErrorURLTemplates(), { ERRORCODE: 101 });
            }
          }
          return c2;
        } }, { key: "parse", value: function(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r2 = t3.url, i3 = r2 === void 0 ? null : r2, n2 = t3.resolveAll, a2 = n2 === void 0 || n2, o2 = t3.wrapperSequence, s2 = o2 === void 0 ? null : o2, l2 = t3.previousUrl, u2 = l2 === void 0 ? null : l2, c2 = t3.wrapperDepth, d2 = c2 === void 0 ? 0 : c2, p2 = t3.isRootVAST, h2 = p2 !== void 0 && p2, v2 = t3.followAdditionalWrappers, f2 = t3.allowMultipleAds, m2 = [];
          this.vastVersion && parseFloat(this.vastVersion) < 3 && h2 && (f2 = true);
          try {
            m2 = this.parseVastXml(e3, { isRootVAST: h2, url: i3, wrapperDepth: d2, allowMultipleAds: f2, followAdditionalWrappers: v2 });
          } catch (e4) {
            return Promise.reject(e4);
          }
          return m2.length === 1 && s2 != null && (m2[0].sequence = s2), a2 === false && (this.remainingAds = L.splitVAST(m2), m2 = this.remainingAds.shift()), this.resolveAds(m2, { wrapperDepth: d2, previousUrl: u2, url: i3 });
        } }, { key: "resolveAds", value: function() {
          var e3 = this, t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r2 = arguments.length > 1 ? arguments[1] : void 0, i3 = r2.wrapperDepth, n2 = r2.previousUrl, a2 = r2.url, o2 = [];
          return n2 = a2, t3.forEach(function(t4) {
            var r3 = e3.resolveWrappers(t4, i3, n2);
            o2.push(r3);
          }), Promise.all(o2).then(function(t4) {
            var r3 = b.flatten(t4);
            if (!r3 && e3.remainingAds.length > 0) {
              var o3 = e3.remainingAds.shift();
              return e3.resolveAds(o3, { wrapperDepth: i3, previousUrl: n2, url: a2 });
            }
            return r3;
          });
        } }, { key: "resolveWrappers", value: function(e3, t3, r2) {
          var i3 = this;
          return new Promise(function(n2) {
            var a2;
            if (t3++, !e3.nextWrapperURL)
              return delete e3.nextWrapperURL, n2(e3);
            if (t3 >= i3.maxWrapperDepth || i3.parentURLs.indexOf(e3.nextWrapperURL) !== -1)
              return e3.errorCode = 302, delete e3.nextWrapperURL, n2(e3);
            e3.nextWrapperURL = L.resolveVastAdTagURI(e3.nextWrapperURL, r2), i3.URLTemplateFilters.forEach(function(t4) {
              e3.nextWrapperURL = t4(e3.nextWrapperURL);
            });
            var o2 = (a2 = i3.parsingOptions.allowMultipleAds) !== null && a2 !== void 0 ? a2 : e3.allowMultipleAds, s2 = e3.sequence;
            i3.fetchVAST(e3.nextWrapperURL, t3, r2).then(function(a3) {
              return i3.parse(a3, { url: e3.nextWrapperURL, previousUrl: r2, wrapperSequence: s2, wrapperDepth: t3, followAdditionalWrappers: e3.followAdditionalWrappers, allowMultipleAds: o2 }).then(function(t4) {
                if (delete e3.nextWrapperURL, t4.length === 0)
                  return e3.creatives = [], n2(e3);
                t4.forEach(function(t5) {
                  t5 && L.mergeWrapperAdData(t5, e3);
                }), n2(t4);
              });
            }).catch(function(t4) {
              e3.errorCode = 301, e3.errorMessage = t4.message, n2(e3);
            });
          });
        } }, { key: "completeWrapperResolving", value: function(e3) {
          if (e3.ads.length === 0)
            this.trackVastError(e3.errorURLTemplates, { ERRORCODE: 303 });
          else
            for (var t3 = e3.ads.length - 1; t3 >= 0; t3--) {
              var r2 = e3.ads[t3];
              (r2.errorCode || r2.creatives.length === 0) && (this.trackVastError(r2.errorURLTemplates.concat(e3.errorURLTemplates), { ERRORCODE: r2.errorCode || 303 }, { ERRORMESSAGE: r2.errorMessage || "" }, { extensions: r2.extensions }, { system: r2.system }), e3.ads.splice(t3, 1));
            }
        } }]), i2;
      }(X), ie = null, ne = { data: {}, length: 0, getItem: function(e2) {
        return this.data[e2];
      }, setItem: function(e2, t2) {
        this.data[e2] = t2, this.length = Object.keys(this.data).length;
      }, removeItem: function(e2) {
        delete this.data[e2], this.length = Object.keys(this.data).length;
      }, clear: function() {
        this.data = {}, this.length = 0;
      } }, ae = function() {
        function e2() {
          r(this, e2), this.storage = this.initStorage();
        }
        return n(e2, [{ key: "initStorage", value: function() {
          if (ie)
            return ie;
          try {
            ie = typeof window != "undefined" && window !== null ? window.localStorage || window.sessionStorage : null;
          } catch (e3) {
            ie = null;
          }
          return ie && !this.isStorageDisabled(ie) || (ie = ne).clear(), ie;
        } }, { key: "isStorageDisabled", value: function(e3) {
          var t2 = "__VASTStorage__";
          try {
            if (e3.setItem(t2, t2), e3.getItem(t2) !== t2)
              return e3.removeItem(t2), true;
          } catch (e4) {
            return true;
          }
          return e3.removeItem(t2), false;
        } }, { key: "getItem", value: function(e3) {
          return this.storage.getItem(e3);
        } }, { key: "setItem", value: function(e3, t2) {
          return this.storage.setItem(e3, t2);
        } }, { key: "removeItem", value: function(e3) {
          return this.storage.removeItem(e3);
        } }, { key: "clear", value: function() {
          return this.storage.clear();
        } }]), e2;
      }(), oe = function() {
        function e2(t2, i2, n2) {
          r(this, e2), this.cappingFreeLunch = t2 || 0, this.cappingMinimumTimeInterval = i2 || 0, this.defaultOptions = { withCredentials: false, timeout: 0 }, this.vastParser = new re(), this.storage = n2 || new ae(), this.lastSuccessfulAd === void 0 && (this.lastSuccessfulAd = 0), this.totalCalls === void 0 && (this.totalCalls = 0), this.totalCallsTimeout === void 0 && (this.totalCallsTimeout = 0);
        }
        return n(e2, [{ key: "getParser", value: function() {
          return this.vastParser;
        } }, { key: "hasRemainingAds", value: function() {
          return this.vastParser.remainingAds.length > 0;
        } }, { key: "getNextAds", value: function(e3) {
          return this.vastParser.getRemainingAds(e3);
        } }, { key: "get", value: function(e3) {
          var t2 = this, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i2 = Date.now();
          return (r2 = Object.assign({}, this.defaultOptions, r2)).hasOwnProperty("resolveAll") || (r2.resolveAll = false), this.totalCallsTimeout < i2 ? (this.totalCalls = 1, this.totalCallsTimeout = i2 + 36e5) : this.totalCalls++, new Promise(function(n2, a2) {
            if (t2.cappingFreeLunch >= t2.totalCalls)
              return a2(new Error("VAST call canceled \u2013 FreeLunch capping not reached yet ".concat(t2.totalCalls, "/").concat(t2.cappingFreeLunch)));
            var o2 = i2 - t2.lastSuccessfulAd;
            if (o2 < 0)
              t2.lastSuccessfulAd = 0;
            else if (o2 < t2.cappingMinimumTimeInterval)
              return a2(new Error("VAST call canceled \u2013 (".concat(t2.cappingMinimumTimeInterval, ")ms minimum interval reached")));
            t2.vastParser.getAndParseVAST(e3, r2).then(function(e4) {
              return n2(e4);
            }).catch(function(e4) {
              return a2(e4);
            });
          });
        } }, { key: "lastSuccessfulAd", get: function() {
          return this.storage.getItem("vast-client-last-successful-ad");
        }, set: function(e3) {
          this.storage.setItem("vast-client-last-successful-ad", e3);
        } }, { key: "totalCalls", get: function() {
          return this.storage.getItem("vast-client-total-calls");
        }, set: function(e3) {
          this.storage.setItem("vast-client-total-calls", e3);
        } }, { key: "totalCallsTimeout", get: function() {
          return this.storage.getItem("vast-client-total-calls-timeout");
        }, set: function(e3) {
          this.storage.setItem("vast-client-total-calls-timeout", e3);
        } }]), e2;
      }(), se = function(e2) {
        l(i2, e2);
        var t2 = p(i2);
        function i2(e3, n2, a2) {
          var o2, s2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          for (var l2 in r(this, i2), (o2 = t2.call(this)).ad = n2, o2.creative = a2, o2.variation = s2, o2.muted = false, o2.impressed = false, o2.skippable = false, o2.trackingEvents = {}, o2.lastPercentage = 0, o2._alreadyTriggeredQuartiles = {}, o2.emitAlwaysEvents = ["creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "resume", "pause", "rewind", "skip", "closeLinear", "close"], o2.creative.trackingEvents) {
            var u2 = o2.creative.trackingEvents[l2];
            o2.trackingEvents[l2] = u2.slice(0);
          }
          return U(o2.creative) ? o2._initLinearTracking() : o2._initVariationTracking(), e3 && o2.on("start", function() {
            e3.lastSuccessfulAd = Date.now();
          }), o2;
        }
        return n(i2, [{ key: "_initLinearTracking", value: function() {
          this.linear = true, this.skipDelay = this.creative.skipDelay, this.setDuration(this.creative.duration), this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate, this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates;
        } }, { key: "_initVariationTracking", value: function() {
          if (this.linear = false, this.skipDelay = -1, this.variation) {
            for (var e3 in this.variation.trackingEvents) {
              var t3 = this.variation.trackingEvents[e3];
              this.trackingEvents[e3] ? this.trackingEvents[e3] = this.trackingEvents[e3].concat(t3.slice(0)) : this.trackingEvents[e3] = t3.slice(0);
            }
            this.variation.adType === "nonLinearAd" ? (this.clickThroughURLTemplate = this.variation.nonlinearClickThroughURLTemplate, this.clickTrackingURLTemplates = this.variation.nonlinearClickTrackingURLTemplates, this.setDuration(this.variation.minSuggestedDuration)) : function(e4) {
              return e4.adType === "companionAd";
            }(this.variation) && (this.clickThroughURLTemplate = this.variation.companionClickThroughURLTemplate, this.clickTrackingURLTemplates = this.variation.companionClickTrackingURLTemplates);
          }
        } }, { key: "setDuration", value: function(e3) {
          this.assetDuration = e3, this.quartiles = { firstQuartile: Math.round(25 * this.assetDuration) / 100, midpoint: Math.round(50 * this.assetDuration) / 100, thirdQuartile: Math.round(75 * this.assetDuration) / 100 };
        } }, { key: "setProgress", value: function(e3) {
          var t3 = this, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i3 = this.skipDelay || -1;
          if (i3 === -1 || this.skippable || (i3 > e3 ? this.emit("skip-countdown", i3 - e3) : (this.skippable = true, this.emit("skip-countdown", 0))), this.assetDuration > 0) {
            var n2 = Math.round(e3 / this.assetDuration * 100), a2 = [];
            if (e3 > 0) {
              a2.push("start");
              for (var o2 = this.lastPercentage; o2 < n2; o2++)
                a2.push("progress-".concat(o2 + 1, "%"));
              for (var s2 in a2.push("progress-".concat(Math.round(e3))), this.quartiles)
                this.isQuartileReached(s2, this.quartiles[s2], e3) && (a2.push(s2), this._alreadyTriggeredQuartiles[s2] = true);
              this.lastPercentage = n2;
            }
            a2.forEach(function(e4) {
              t3.track(e4, { macros: r2, once: true });
            }), e3 < this.progress && this.track("rewind", { macros: r2 });
          }
          this.progress = e3;
        } }, { key: "isQuartileReached", value: function(e3, t3, r2) {
          var i3 = false;
          return t3 <= r2 && !this._alreadyTriggeredQuartiles[e3] && (i3 = true), i3;
        } }, { key: "setMuted", value: function(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.muted !== e3 && this.track(e3 ? "mute" : "unmute", { macros: t3 }), this.muted = e3;
        } }, { key: "setPaused", value: function(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.paused !== e3 && this.track(e3 ? "pause" : "resume", { macros: t3 }), this.paused = e3;
        } }, { key: "setFullscreen", value: function(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.fullscreen !== e3 && this.track(e3 ? "fullscreen" : "exitFullscreen", { macros: t3 }), this.fullscreen = e3;
        } }, { key: "setExpand", value: function(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.expanded !== e3 && (this.track(e3 ? "expand" : "collapse", { macros: t3 }), this.track(e3 ? "playerExpand" : "playerCollapse", { macros: t3 })), this.expanded = e3;
        } }, { key: "setSkipDelay", value: function(e3) {
          typeof e3 == "number" && (this.skipDelay = e3);
        } }, { key: "trackImpression", value: function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          this.impressed || (this.impressed = true, this.trackURLs(this.ad.impressionURLTemplates, e3), this.track("creativeView", { macros: e3 }));
        } }, { key: "error", value: function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t3 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
          this.trackURLs(this.ad.errorURLTemplates, e3, { isCustomCode: t3 });
        } }, { key: "errorWithCode", value: function(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
          this.error({ ERRORCODE: e3 }, t3), console.log("The method errorWithCode is deprecated, please use vast tracker error method instead");
        } }, { key: "complete", value: function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          this.track("complete", { macros: e3 });
        } }, { key: "notUsed", value: function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          this.track("notUsed", { macros: e3 }), this.trackingEvents = [];
        } }, { key: "otherAdInteraction", value: function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          this.track("otherAdInteraction", { macros: e3 });
        } }, { key: "acceptInvitation", value: function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          this.track("acceptInvitation", { macros: e3 });
        } }, { key: "adExpand", value: function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          this.track("adExpand", { macros: e3 });
        } }, { key: "adCollapse", value: function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          this.track("adCollapse", { macros: e3 });
        } }, { key: "minimize", value: function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          this.track("minimize", { macros: e3 });
        } }, { key: "verificationNotExecuted", value: function(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (!this.ad || !this.ad.adVerifications || !this.ad.adVerifications.length)
            throw new Error("No adVerifications provided");
          if (!e3)
            throw new Error("No vendor provided, unable to find associated verificationNotExecuted");
          var r2 = this.ad.adVerifications.find(function(t4) {
            return t4.vendor === e3;
          });
          if (!r2)
            throw new Error("No associated verification element found for vendor: ".concat(e3));
          var i3 = r2.trackingEvents;
          if (i3 && i3.verificationNotExecuted) {
            var n2 = i3.verificationNotExecuted;
            this.trackURLs(n2, t3), this.emit("verificationNotExecuted", { trackingURLTemplates: n2 });
          }
        } }, { key: "overlayViewDuration", value: function(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          t3.ADPLAYHEAD = e3, this.track("overlayViewDuration", { macros: t3 });
        } }, { key: "close", value: function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          this.track(this.linear ? "closeLinear" : "close", { macros: e3 });
        } }, { key: "skip", value: function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          this.track("skip", { macros: e3 });
        } }, { key: "load", value: function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          this.track("loaded", { macros: e3 });
        } }, { key: "click", value: function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.clickTrackingURLTemplates && this.clickTrackingURLTemplates.length && this.trackURLs(this.clickTrackingURLTemplates, t3);
          var r2 = this.clickThroughURLTemplate || e3, i3 = s({}, t3);
          if (r2) {
            this.progress && (i3.ADPLAYHEAD = this.progressFormatted());
            var n2 = b.resolveURLTemplates([r2], i3)[0];
            this.emit("clickthrough", n2);
          }
        } }, { key: "track", value: function(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r2 = t3.macros, i3 = r2 === void 0 ? {} : r2, n2 = t3.once, a2 = n2 !== void 0 && n2;
          e3 === "closeLinear" && !this.trackingEvents[e3] && this.trackingEvents.close && (e3 = "close");
          var o2 = this.trackingEvents[e3], s2 = this.emitAlwaysEvents.indexOf(e3) > -1;
          o2 ? (this.emit(e3, { trackingURLTemplates: o2 }), this.trackURLs(o2, i3)) : s2 && this.emit(e3, null), a2 && (delete this.trackingEvents[e3], s2 && this.emitAlwaysEvents.splice(this.emitAlwaysEvents.indexOf(e3), 1));
        } }, { key: "trackURLs", value: function(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i3 = s({}, t3);
          this.linear && (this.creative && this.creative.mediaFiles && this.creative.mediaFiles[0] && this.creative.mediaFiles[0].fileURL && (i3.ASSETURI = this.creative.mediaFiles[0].fileURL), this.progress && (i3.ADPLAYHEAD = this.progressFormatted())), this.creative && this.creative.universalAdId && this.creative.universalAdId.idRegistry && this.creative.universalAdId.value && (i3.UNIVERSALADID = "".concat(this.creative.universalAdId.idRegistry, " ").concat(this.creative.universalAdId.value)), this.ad && (this.ad.sequence && (i3.PODSEQUENCE = this.ad.sequence), this.ad.adType && (i3.ADTYPE = this.ad.adType), this.ad.adServingId && (i3.ADSERVINGID = this.ad.adServingId), this.ad.categories && this.ad.categories.length && (i3.ADCATEGORIES = this.ad.categories.map(function(e4) {
            return e4.value;
          }).join(",")), this.ad.blockedAdCategories && this.ad.blockedAdCategories.length && (i3.BLOCKEDADCATEGORIES = this.ad.blockedAdCategories)), b.track(e3, i3, r2);
        } }, { key: "convertToTimecode", value: function(e3) {
          var t3 = 1e3 * e3, r2 = Math.floor(t3 / 36e5), i3 = Math.floor(t3 / 6e4 % 60), n2 = Math.floor(t3 / 1e3 % 60), a2 = Math.floor(t3 % 1e3);
          return "".concat(b.leftpad(r2, 2), ":").concat(b.leftpad(i3, 2), ":").concat(b.leftpad(n2, 2), ".").concat(b.leftpad(a2, 3));
        } }, { key: "progressFormatted", value: function() {
          return this.convertToTimecode(this.progress);
        } }]), i2;
      }(X);
      e.VASTClient = oe, e.VASTParser = re, e.VASTTracker = se, Object.defineProperty(e, "__esModule", { value: true });
    });
  }
});

// src/index.ts
__markAsModule(exports);
__export(exports, {
  default: () => register
});
var import_video = __toModule(require("video.js"));

// src/errors.ts
var VAST_NO_ADS = 303;
var LINEAR_ERROR = 400;
var VPAID_ERROR = 901;
var VastError = class extends Error {
  constructor(vastErrorCode, message) {
    super(message);
    this.vastErrorCode = vastErrorCode;
    this.message = message;
    __publicField(this, "name", "VastError");
  }
};

// src/vpaid.ts
var VIEW_MODE = {
  NORMAL: "normal",
  FULLSCREEN: "fullscreen",
  THUMBNAIL: "thumbnail"
};
function displayVPAID({
  player,
  logger,
  options,
  display: { creative, media },
  tracker
}) {
  logger.debug("Displaying VPAID...");
  player.trigger("adVPAIDSelected");
  const iframe = document.createElement("iframe");
  iframe.id = `${creative.id}_${Date.now()}`;
  iframe.className = "vjs-pop-vpaid-container";
  player.el().appendChild(iframe);
  const iframeDoc = iframe.contentDocument;
  if (!iframeDoc) {
    return;
  }
  const startVPAIDTimeout = setTimeout(() => {
    if (player && player.paused()) {
      throw new VastError(VPAID_ERROR, "VPAID is not playing");
    }
  }, options.maxVPAIDAdStart);
  player.on("dispose", () => {
    clearTimeout(startVPAIDTimeout);
  });
  tracker.on("creativeView", () => {
    clearTimeout(startVPAIDTimeout);
  });
  iframe.contentWindow.onerror = (e) => {
    const message = typeof e === "string" ? e : e.message;
    throw new VastError(VPAID_ERROR, message);
  };
  const script = iframeDoc.createElement("script");
  script.src = media.fileURL || "";
  script.onload = () => {
    var _a, _b;
    logger.debug("VPAID script has loaded...");
    const adunit = (_b = (_a = iframe.contentWindow) == null ? void 0 : _a.getVPAIDAd) == null ? void 0 : _b.call(_a);
    if (!adunit) {
      throw new Error("no VPAID adunit found");
    }
    logger.debug("Subscribing to VPAID adunit events");
    const wrapper = new VPAIDWrapper(adunit, tracker);
    wrapper.registerCallbacks();
    logger.debug("Initializing VPAID adunit...");
    adunit.initAd(player.width(), player.height(), VIEW_MODE.NORMAL, media.bitrate, { AdParameters: creative.adParameters || "" }, {
      slot: iframeDoc.body,
      videoSlot: player.tech({ ignoreWarning: true }).el(),
      videoSlotCanAutoPlay: !!player.autoplay()
    });
  };
  iframeDoc.head.appendChild(script);
}
var VPAIDWrapper = class {
  constructor(adunit, tracker) {
    this.adunit = adunit;
    this.tracker = tracker;
    __publicField(this, "callbacks");
    __publicField(this, "onAdClickThru", (url, _id, playerHandles) => {
      if (!playerHandles) {
        this.tracker.click();
        return;
      }
      if (!url) {
        this.tracker.on("clickthrough", (mUrl) => {
          window.open(mUrl, "_blank");
        });
      }
      this.tracker.click();
      if (url) {
        window.open(url, "_blank");
      }
    });
    __publicField(this, "dummy", () => {
    });
    this.callbacks = {
      AdStarted: this.dummy,
      AdStopped: this.dummy,
      AdSkipped: this.dummy,
      AdLoaded: this.dummy,
      AdLinearChange: this.dummy,
      AdSizeChange: this.dummy,
      AdExpandedChange: this.dummy,
      AdSkippableStateChange: this.dummy,
      AdDurationChange: this.dummy,
      AdRemainingTimeChange: this.dummy,
      AdVolumeChange: this.dummy,
      AdImpression: this.dummy,
      AdClickThru: this.onAdClickThru,
      AdInteraction: this.dummy,
      AdVideoStart: this.dummy,
      AdVideoFirstQuartile: this.dummy,
      AdVideoMidpoint: this.dummy,
      AdVideoThirdQuartile: this.dummy,
      AdVideoComplete: this.dummy,
      AdUserAcceptInvitation: this.dummy,
      AdUserMinimize: this.dummy,
      AdUserClose: this.dummy,
      AdPaused: this.dummy,
      AdPlaying: this.dummy,
      AdError: this.dummy,
      AdLog: this.dummy
    };
  }
  registerCallbacks() {
    if (typeof this.adunit.subscribe === "function") {
      Object.keys(this.callbacks).forEach((name) => {
        const eventName = name;
        this.adunit.subscribe(this.callbacks[eventName], eventName);
      });
    }
  }
};

// src/vast.ts
var import_vast_client = __toModule(require_vast_client_min());
function isVastXMLOption(options) {
  return !!(options == null ? void 0 : options.adXml);
}
function isVastURLOption(options) {
  return !!(options == null ? void 0 : options.adTagUrl);
}
function parseVAST(_0) {
  return __async(this, arguments, function* ({ logger, options }) {
    logger.debug("Starting to parse vast...");
    const vp = new import_vast_client.VASTParser();
    vp.on("VAST-error", ({ ERRORCODE, ERRORMESSAGE }) => {
      throw new VastError(ERRORCODE, ERRORMESSAGE);
    });
    if (isVastURLOption(options)) {
      return yield vp.getAndParseVAST(options.adTagUrl, options);
    }
    if (isVastXMLOption(options)) {
      const xmlParser = new DOMParser();
      const doc = xmlParser.parseFromString(options.adXml, "text/xml");
      return yield vp.parseVAST(doc, options);
    }
    throw new Error("no vast provided in options");
  });
}
function displayVASTNative({ player, logger, display: { media }, tracker }) {
  logger.debug("Displaying native VAST...");
  tracker.on("clickthrough", (url) => {
    window.open(url, "_blank");
  });
  const source = {
    src: media.fileURL || "",
    type: media.mimeType || void 0
  };
  logger.debug("Loading selected source...", source);
  player.preload(true);
  player.src(source.src);
}

// src/logger.ts
var LogWrapper = class {
  constructor(prefix, logger) {
    this.prefix = prefix;
    this.logger = logger;
  }
  call(level, ...message) {
    this.logger[level](this.prefix, ...message);
  }
  log(...message) {
    this.call("log", ...message);
  }
  debug(...message) {
    this.call("debug", ...message);
  }
  warn(...message) {
    this.call("warn", ...message);
  }
  error(...message) {
    this.call("error", ...message);
  }
};
function getLogger(prefix, debug) {
  if (debug && console) {
    return new LogWrapper(prefix, console);
  }
  return new LogWrapper(prefix, {
    log: () => {
    },
    debug: () => {
    },
    warn: () => {
    },
    error: () => {
    }
  });
}

// src/component/close.ts
function CloseComponent({ onClick }) {
  const closeButton = document.createElement("div");
  closeButton.className = "vjs-pop-close";
  closeButton.addEventListener("click", onClick);
  return closeButton;
}

// src/tracker.ts
var import_vast_client2 = __toModule(require_vast_client_min());
function createTracker({ player, logger, display: { creative, ad } }) {
  const beforeAdLoad = player.currentSrc();
  const tracker = new import_vast_client2.VASTTracker(null, ad, creative);
  let canplay = false;
  player.on("canplay", () => {
    var _a;
    if (beforeAdLoad === ((_a = player.el().querySelector("video")) == null ? void 0 : _a.src)) {
      return;
    }
    canplay = true;
    logger.debug("Sending tracking impression...");
    player.trigger("adImpression");
    tracker.trackImpression();
  });
  tracker.on("creativeView", () => {
    player.trigger("adImpressionSent");
  });
  player.on("ended", () => {
    if (!canplay) {
      return;
    }
    logger.debug("Sending tracking complete...");
    player.trigger("adComplete");
    tracker.complete();
  });
  tracker.on("complete", () => {
    player.trigger("adCompleteSent");
  });
  player.on("timeupdate", () => {
    tracker.setProgress(player.currentTime());
  });
  player.on("fullscreenchange", () => {
    logger.debug("Sending full screen change...", player.isFullscreen());
    tracker.setFullscreen(player.isFullscreen());
  });
  player.on("volumechange", () => {
    tracker.setMuted(player.muted());
  });
  player.on("play", () => {
    if (!canplay) {
      return;
    }
    logger.debug("Sending resume tracking...");
    tracker.setPaused(false);
  });
  player.on("pause", () => {
    if (!canplay) {
      return;
    }
    logger.debug("Sending pause tracking...");
    tracker.setPaused(true);
  });
  tracker.on("skip", () => {
    player.trigger("adSkipSent");
  });
  tracker.on("clickthrough", () => {
    logger.debug("Clickthrough tracking sent...");
    player.trigger("adClickSent");
  });
  return tracker;
}

// src/index.ts
function register(vjs = import_video.default) {
  const vjsPlugin = vjs.getPlugin("plugin");
  const Plugin = class Plugin extends vjsPlugin {
    constructor(player, options) {
      super(player, options);
      __publicField(this, "player");
      __publicField(this, "options");
      __publicField(this, "onVisibilityChange", () => {
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const minLeft = windowWidth - this.player.width() > 0 ? 0 : windowWidth - this.player.width();
        const playerLocation = this.player.el().getBoundingClientRect();
        const isPlayerVisible = playerLocation.top >= 0 && playerLocation.left >= minLeft && playerLocation.bottom <= windowHeight && playerLocation.right <= windowWidth;
        if (isPlayerVisible && !document.hidden && this.player.paused()) {
          this.player.play();
        }
        if (document.hidden) {
          this.player.pause();
        }
      });
      this.player = player;
      const adControls = __spreadValues(__spreadValues({}, {
        volumePanel: true,
        playToggle: false,
        captionsButton: true,
        chaptersButton: false,
        subtitlesButton: false,
        remainingTimeDisplay: true,
        progressControl: false,
        fullscreenToggle: true,
        playbackRateMenuButton: false,
        pictureInPictureToggle: false,
        currentTimeDisplay: false,
        timeDivider: false,
        durationDisplay: false,
        liveDisplay: false,
        seekToLive: false,
        customControlSpacer: false,
        descriptionsButton: false,
        subsCapsButton: false,
        audioTrackButton: false
      }), options == null ? void 0 : options.adControls);
      this.options = __spreadValues(__spreadValues(__spreadValues({}, {
        adTagUrl: "",
        adXml: "",
        debug: false,
        useVPAID: true,
        showClose: true,
        resolveAll: false,
        maxVPAIDAdStart: 5e3
      }), options), { adControls });
      this.setup();
    }
    setup() {
      return __async(this, null, function* () {
        var _a;
        const logger = getLogger(`prebid-outstream: ${this.player.id()}:`, this.options.debug);
        logger.debug("Initialize plugin with options", this.options);
        let tracker;
        try {
          const props = { player: this.player, options: this.options, logger };
          const response = yield parseVAST(props);
          logger.debug("Vast parsed: ", response);
          if (!response.ads) {
            throw new VastError(VAST_NO_ADS, "no ads found in vast");
          }
          const originalSourceOrder = this.player.options_.sourceOrder;
          this.player.options({ sourceOrder: true });
          let display = {};
          for (const ad of response.ads) {
            if (!ad.creatives) {
              continue;
            }
            for (const creative of ad.creatives) {
              if (!this.isLinearCreative(creative) || !creative.mediaFiles) {
                continue;
              }
              let media = creative.mediaFiles.find((m) => m.apiFramework === "VPAID");
              if (!media) {
                const sortedFiles = creative.mediaFiles.filter((mediaFile) => mediaFile.mimeType !== "video/x-flv").sort((a, b) => {
                  const distanceA = Math.hypot(a.width - this.player.width(), a.height - this.player.height());
                  const distanceB = Math.hypot(b.width - this.player.width(), b.height - this.player.height());
                  return distanceA - distanceB;
                });
                const sources = sortedFiles.map((mediaFile, index) => ({
                  src: mediaFile.fileURL || "",
                  type: mediaFile.mimeType || void 0,
                  index
                }));
                const source = this.player.selectSource(sources);
                if (source) {
                  media = sortedFiles[source.source.index];
                }
              }
              if (media) {
                display = {
                  ad,
                  creative,
                  media
                };
                break;
              }
            }
          }
          this.player.options({ sourceOrder: originalSourceOrder });
          if (!display.media) {
            throw new VastError(LINEAR_ERROR, "no suitable media found in vast");
          }
          logger.debug("Loading creative: ", display.creative);
          logger.debug("Loading media: ", display.media);
          const propsWithCreative = __spreadProps(__spreadValues({}, props), { display });
          logger.debug("Setting up tracker...");
          tracker = createTracker(propsWithCreative);
          Object.keys(this.options.adControls).forEach((key) => {
            var _a2, _b;
            if (this.options.adControls[key]) {
              (_a2 = this.player.controlBar.getChild(key)) == null ? void 0 : _a2.show();
            } else {
              (_b = this.player.controlBar.getChild(key)) == null ? void 0 : _b.hide();
            }
          });
          if (display.creative.apiFramework === "VPAID" || display.media.apiFramework === "VPAID") {
            displayVPAID(__spreadProps(__spreadValues({}, propsWithCreative), { tracker }));
          } else {
            displayVASTNative(__spreadProps(__spreadValues({}, propsWithCreative), { tracker }));
          }
          if (this.options.showClose) {
            this.player.el().appendChild(CloseComponent({
              onClick: () => {
                logger.debug("Sending ad closed...");
                this.player.trigger("adClose");
                tracker.skip();
              }
            }));
          }
          if ((_a = display.creative.videoClickThroughURLTemplate) == null ? void 0 : _a.url) {
            ["mouseup", "touchend"].forEach((eventName) => {
              this.player.el().addEventListener(eventName, (e) => {
                const elem = e.target;
                if (elem.tagName === "VIDEO") {
                  logger.debug("Sending click event on video...");
                  this.player.trigger("adClick");
                  tracker.click();
                }
              }, { capture: true, passive: true });
            });
          }
          window.addEventListener("visibilitychange", this.onVisibilityChange);
          this.player.on("dispose", () => {
            window.removeEventListener("visibilitychange", this.onVisibilityChange);
          });
        } catch (e) {
          logger.error("Exception caught: ", e);
          this.player.error(`POP: ${e.message}`);
          if (e instanceof VastError) {
            if (tracker) {
              tracker.errorWithCode(e.vastErrorCode.toString());
            }
            this.player.trigger("adError");
          }
          this.player.trigger("error");
        }
      });
    }
    isLinearCreative(creative) {
      return (creative == null ? void 0 : creative.type) === "linear";
    }
  };
  vjs.registerPlugin("outstream", Plugin);
}
//# sourceMappingURL=index.js.map
