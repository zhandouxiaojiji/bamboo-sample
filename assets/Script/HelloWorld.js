cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    showHome: function() {
        console.log("home " + sdkbox.PluginAdMob.isAvailable("home"));
        sdkbox.PluginAdMob.show("home");
    },
    showGameover: function(){
        console.log("gameover "+sdkbox.PluginAdMob.isAvailable("gameover"));
        sdkbox.PluginAdMob.show("gameover");
    },

    admobInit: function() {
        if(cc.sys.isMobile) {
            console.log("&&&&&&&&&&");
            var self = this
            sdkbox.PluginAdMob.setListener({
                adViewDidReceiveAd: function(name) {
                    console.log('adViewDidReceiveAd name=' + name);
                },
                adViewDidFailToReceiveAdWithError: function(name, msg) {
                    console.log('adViewDidFailToReceiveAdWithError name=' + name + ' msg=' + msg);
                },
                adViewWillPresentScreen: function(name) {
                    console.log('adViewWillPresentScreen name=' + name);
                },
                adViewDidDismissScreen: function(name) {
                    console.log('adViewDidDismissScreen name=' + name);
                },
                adViewWillDismissScreen: function(name) {
                    console.log('adViewWillDismissScreen=' + name);
                },
                adViewWillLeaveApplication: function(name) {
                    console.log('adViewWillLeaveApplication=' + name);
                }
            });
            sdkbox.PluginAdMob.init();
        }
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        this.admobInit();
        console.log("helloworld");
    },

    // called every frame
    update: function (dt) {
        
    },
});
