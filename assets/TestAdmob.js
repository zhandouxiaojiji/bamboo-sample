// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var bb = require("bb");
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        }
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    onLoad: function () {
        //Add this line to onLoad
        bb.Admob.init();
    },

    hideInterstitial: function() {
        console.log("hideInterstitial");
        bb.Admob.cache('gameover');
    },

    showInterstitial: function() {
        console.log("showInterstitial");
        bb.Admob.show('gameover');
    },

    hideBanner: function() {
        console.log("hideBanner");
        bb.Admob.cace('home');
    },

    showBanner: function() {
        console.log("showBanner");
        bb.Admob.show('home');
    },

    showRewarded: function() {
        console.log("showRewarded");
        bb.Admob.reward('rewarded', function(currency, amount){
            console.log('test reward:'+currency+','+amount);
        });
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        bb.initLanguage();
    },

    start () {
        this.label.string = cc.sys.languageCode;
    },

    // update (dt) {},
});
