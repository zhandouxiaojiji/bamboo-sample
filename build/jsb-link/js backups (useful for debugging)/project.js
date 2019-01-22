window.__require = function o(e, n, i) {
function c(r, t) {
if (!n[r]) {
if (!e[r]) {
var a = r.split("/");
a = a[a.length - 1];
if (!e[a]) {
var d = "function" == typeof __require && __require;
if (!t && d) return d(a, !0);
if (s) return s(a, !0);
throw new Error("Cannot find module '" + r + "'");
}
}
var l = n[r] = {
exports: {}
};
e[r][0].call(l.exports, function(o) {
return c(e[r][1][o] || o);
}, l, l.exports, o, e, n, i);
}
return n[r].exports;
}
for (var s = "function" == typeof __require && __require, r = 0; r < i.length; r++) c(i[r]);
return c;
}({
Admob: [ function(o, e, n) {
"use strict";
cc._RF.push(e, "9a4a3MQdE5CaKkkFLXiIoYx", "Admob");
var i = {
reward_cb: {},
init: function() {
console.log("bb.Admob init");
if (cc.sys.isMobile) {
sdkbox.PluginAdMob.setListener({
adViewDidReceiveAd: function(o) {
console.log("adViewDidReceiveAd name=" + o);
},
adViewDidFailToReceiveAdWithError: function(o, e) {
console.log("adViewDidFailToReceiveAdWithError name=" + o + " msg=" + e);
},
adViewWillPresentScreen: function(o) {
console.log("adViewWillPresentScreen name=" + o);
},
adViewDidDismissScreen: function(o) {
console.log("adViewDidDismissScreen name=" + o);
},
adViewWillDismissScreen: function(o) {
console.log("adViewWillDismissScreen=" + o);
},
adViewWillLeaveApplication: function(o) {
console.log("adViewWillLeaveApplication=" + o);
},
reward: function(o, e, n) {
console.log("reward:" + o + "," + e + "," + n);
var i = this.reward_cb[o];
i && i(e, n);
}
});
sdkbox.PluginAdMob.init();
}
},
cache: function(o) {
console.cache("cache admob " + o);
cc.sys.isMobile && sdkbox.PluginAdMob.cache(o);
},
show: function(o) {
console.log("show admob " + o);
cc.sys.isMobile && sdkbox.PluginAdMob.show(o);
},
reward: function(o, e) {
console.log("show reward " + o);
this.reward_cb[o] = e;
cc.sys.isMobile && sdkbox.PluginAdMob.show(o);
}
};
o("bb").Admob = i;
cc._RF.pop();
}, {
bb: "bb"
} ],
TestAdmob: [ function(o, e, n) {
"use strict";
cc._RF.push(e, "51826IS0pBEXaBSKRHCJRwB", "TestAdmob");
var i = o("bb");
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
i.Admob.reward("rewarded", function(o, e) {
console.log("test reward:" + o + "," + e);
});
},
start: function() {}
});
cc._RF.pop();
}, {
bb: "bb"
} ],
bb: [ function(o, e, n) {
"use strict";
cc._RF.push(e, "19cceUh1PVDhasq7gO25sZq", "bb");
e.exports = {};
cc._RF.pop();
}, {} ]
}, {}, [ "TestAdmob", "Admob", "bb" ]);