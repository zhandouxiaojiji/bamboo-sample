window.__require = function e(n, t, i) {
function o(a, c) {
if (!t[a]) {
if (!n[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!n[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
}
var u = t[a] = {
exports: {}
};
n[a][0].call(u.exports, function(e) {
return o(n[a][1][e] || e);
}, u, u.exports, e, n, t, i);
}
return t[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < i.length; a++) o(i[a]);
return o;
}({
Admob: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "9a4a3MQdE5CaKkkFLXiIoYx", "Admob");
var i = {
loadCallbacks: {},
rewardCallbacks: {},
init: function() {
var e = this;
console.log("bb.Admob init");
if (cc.sys.isMobile) {
sdkbox.PluginAdMob.setListener({
adViewDidReceiveAd: function(n) {
var t = e.loadCallbacks[n];
console.log("adViewDidReceiveAd name=" + n);
t && t();
},
adViewDidFailToReceiveAdWithError: function(e, n) {
console.log("adViewDidFailToReceiveAdWithError name=" + e + " msg=" + n);
},
adViewWillPresentScreen: function(e) {
console.log("adViewWillPresentScreen name=" + e);
},
adViewDidDismissScreen: function(e) {
console.log("adViewDidDismissScreen name=" + e);
},
adViewWillDismissScreen: function(e) {
console.log("adViewWillDismissScreen=" + e);
},
adViewWillLeaveApplication: function(e) {
console.log("adViewWillLeaveApplication=" + e);
},
reward: function(n, t, i) {
console.log("reward:" + n + "," + t + "," + i);
var o = e.rewardCallbacks[n];
o && o(t, i);
}
});
sdkbox.PluginAdMob.init();
}
},
cache: function(e) {
console.log("cache admob " + e);
cc.sys.isMobile && sdkbox.PluginAdMob.cache(e);
},
hide: function(e) {
console.log("hide admob " + e);
cc.sys.isMobile && sdkbox.PluginAdMob.hide(e);
},
show: function(e) {
console.log("show admob " + e);
cc.sys.isMobile && sdkbox.PluginAdMob.show(e);
},
reward: function(e, n) {
console.log("show reward " + e);
this.rewardCallbacks[e] = n;
cc.sys.isMobile && sdkbox.PluginAdMob.show(e);
},
setLoadCallback: function(e, n) {
this.loadCallbacks[e] = n;
},
removeLoadCallback: function(e) {
this.loadCallbacks[e] = null;
}
};
e("bb").Admob = i;
cc._RF.pop();
}, {
bb: "bb"
} ],
LanguageData: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
var i = e("polyglot.min"), o = null;
window.i18n || (window.i18n = {
languages: {},
curLang: ""
});
0;
function r(e) {
return window.i18n.languages[e];
}
function a(e) {
e && (o ? o.replace(e) : o = new i({
phrases: e,
allowMissing: !0
}));
}
n.exports = {
init: function(e) {
if (e !== window.i18n.curLang) {
var n = r(e) || {};
window.i18n.curLang = e;
a(n);
this.inst = o;
}
},
t: function(e, n) {
if (o) return o.t(e, n);
},
inst: o,
updateSceneRenderers: function() {
for (var e = cc.director.getScene().children, n = [], t = 0; t < e.length; ++t) {
var i = e[t].getComponentsInChildren("LocalizedLabel");
Array.prototype.push.apply(n, i);
}
for (var o = 0; o < n.length; ++o) {
var r = n[o];
r.node.active && r.updateLabel();
}
for (var a = [], c = 0; c < e.length; ++c) {
var s = e[c].getComponentsInChildren("LocalizedSprite");
Array.prototype.push.apply(a, s);
}
for (var l = 0; l < a.length; ++l) {
var u = a[l];
u.node.active && u.updateSprite(window.i18n.curLang);
}
}
};
cc._RF.pop();
}, {
"polyglot.min": "polyglot.min"
} ],
LocalizedLabel: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
var i = e("LanguageData");
cc.Class({
extends: cc.Component,
editor: {
executeInEditMode: !0,
menu: "i18n/LocalizedLabel"
},
properties: {
dataID: {
get: function() {
return this._dataID;
},
set: function(e) {
if (this._dataID !== e) {
this._dataID = e;
this.updateLabel();
}
}
},
_dataID: ""
},
onLoad: function() {
0;
i.inst || i.init();
this.fetchRender();
},
fetchRender: function() {
var e = this.getComponent(cc.Label);
if (e) {
this.label = e;
this.updateLabel();
} else ;
},
updateLabel: function() {
if (this.label) {
i.t(this.dataID) && (this.label.string = i.t(this.dataID));
} else cc.error("Failed to update localized label, label component is invalid!");
}
});
cc._RF.pop();
}, {
LanguageData: "LanguageData"
} ],
LocalizedSprite: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
var i = e("SpriteFrameSet");
cc.Class({
extends: cc.Component,
editor: {
executeInEditMode: !0,
inspector: "packages://i18n/inspector/localized-sprite.js",
menu: "i18n/LocalizedSprite"
},
properties: {
spriteFrameSet: {
default: [],
type: i
}
},
onLoad: function() {
this.fetchRender();
},
fetchRender: function() {
var e = this.getComponent(cc.Sprite);
if (e) {
this.sprite = e;
this.updateSprite(window.i18n.curLang);
} else ;
},
getSpriteFrameByLang: function(e) {
for (var n = 0; n < this.spriteFrameSet.length; ++n) if (this.spriteFrameSet[n].language === e) return this.spriteFrameSet[n].spriteFrame;
},
updateSprite: function(e) {
if (this.sprite) {
var n = this.getSpriteFrameByLang(e);
!n && this.spriteFrameSet[0] && (n = this.spriteFrameSet[0].spriteFrame);
this.sprite.spriteFrame = n;
} else cc.error("Failed to update localized sprite, sprite component is invalid!");
}
});
cc._RF.pop();
}, {
SpriteFrameSet: "SpriteFrameSet"
} ],
SpriteFrameSet: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
var i = cc.Class({
name: "SpriteFrameSet",
properties: {
language: "",
spriteFrame: cc.SpriteFrame
}
});
n.exports = i;
cc._RF.pop();
}, {} ],
TestAdmob: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "51826IS0pBEXaBSKRHCJRwB", "TestAdmob");
var i = e("bb");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
i.Admob.init();
},
cacheInterstitial: function() {
console.log("cacheInterstitial");
i.Admob.cache("gameover");
},
showInterstitial: function() {
console.log("showInterstitial");
i.Admob.show("gameover");
},
cacheBanner: function() {
console.log("cacheBanner");
i.Admob.cace("home");
},
showBanner: function() {
console.log("showBanner");
i.Admob.show("home");
},
showRewarded: function() {
console.log("showRewarded");
i.Admob.reward("rewarded", function(e, n) {
console.log("test reward:" + e + "," + n);
});
},
start: function() {}
});
cc._RF.pop();
}, {
bb: "bb"
} ],
bb: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "19cceUh1PVDhasq7gO25sZq", "bb");
n.exports = {};
cc._RF.pop();
}, {} ],
"polyglot.min": [ function(e, n, t) {
"use strict";
cc._RF.push(n, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min");
var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};
(function(e, o) {
"function" == typeof define && define.amd ? define([], function() {
return o(e);
}) : "object" == ("undefined" == typeof t ? "undefined" : i(t)) ? n.exports = o(e) : e.Polyglot = o(e);
})(void 0, function(e) {
function n(e) {
e = e || {}, this.phrases = {}, this.extend(e.phrases || {}), this.currentLocale = e.locale || "en", 
this.allowMissing = !!e.allowMissing, this.warn = e.warn || r;
}
function t(e, n, t) {
var i, r;
return null != t && e ? i = function(e) {
return e.replace(/^\s+|\s+$/g, "");
}((r = e.split(a))[o(n, t)] || r[0]) : i = e, i;
}
function o(e, n) {
return c[function(e) {
var n = function(e) {
var n, t, i, o = {};
for (n in e) if (e.hasOwnProperty(n)) {
t = e[n];
for (i in t) o[t[i]] = n;
}
return o;
}(s);
return n[e] || n.en;
}(e)](n);
}
function r(n) {
e.console && e.console.warn && e.console.warn("WARNING: " + n);
}
n.VERSION = "0.4.3", n.prototype.locale = function(e) {
return e && (this.currentLocale = e), this.currentLocale;
}, n.prototype.extend = function(e, n) {
var t;
for (var o in e) e.hasOwnProperty(o) && (t = e[o], n && (o = n + "." + o), "object" == ("undefined" == typeof t ? "undefined" : i(t)) ? this.extend(t, o) : this.phrases[o] = t);
}, n.prototype.clear = function() {
this.phrases = {};
}, n.prototype.replace = function(e) {
this.clear(), this.extend(e);
}, n.prototype.t = function(e, n) {
var i, o;
return "number" == typeof (n = null == n ? {} : n) && (n = {
smart_count: n
}), "string" == typeof this.phrases[e] ? i = this.phrases[e] : "string" == typeof n._ ? i = n._ : this.allowMissing ? i = e : (this.warn('Missing translation for key: "' + e + '"'), 
o = e), "string" == typeof i && (n = function(e) {
var n = {};
for (var t in e) n[t] = e[t];
return n;
}(n), o = function(e, n) {
for (var t in n) "_" !== t && n.hasOwnProperty(t) && (e = e.replace(new RegExp("%\\{" + t + "\\}", "g"), n[t]));
return e;
}(o = t(i, this.currentLocale, n.smart_count), n)), o;
}, n.prototype.has = function(e) {
return e in this.phrases;
};
var a = "||||", c = {
chinese: function(e) {
return 0;
},
german: function(e) {
return 1 !== e ? 1 : 0;
},
french: function(e) {
return e > 1 ? 1 : 0;
},
russian: function(e) {
return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
},
czech: function(e) {
return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2;
},
polish: function(e) {
return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
},
icelandic: function(e) {
return e % 10 != 1 || e % 100 == 11 ? 1 : 0;
}
}, s = {
chinese: [ "fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh" ],
german: [ "da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv" ],
french: [ "fr", "tl", "pt-br" ],
russian: [ "hr", "ru" ],
czech: [ "cs" ],
polish: [ "pl" ],
icelandic: [ "is" ]
};
return n;
});
cc._RF.pop();
}, {} ]
}, {}, [ "LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min", "TestAdmob", "Admob", "bb" ]);