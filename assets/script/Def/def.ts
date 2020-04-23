import { AdConf } from "../../bamboo/Service/Ad"
import { WechatAdType } from "../../bamboo/Wechat/WechatAd"

const adConf: AdConf = {}

if (cc.sys.platform == cc.sys.WECHAT_GAME) {
  adConf.wechat = {
    bottom: {
      adName: "bottom",
      adType: WechatAdType.BANNER,
      adUnitId: '',
      style: {
        bottom: 0,
        width: 300,
      }
    },
    gameover: {
      adName: "bottom",
      adType: WechatAdType.INTERSTITIAL,
      adUnitId: '',
    },
    rewarded: {
      adName: "bottom",
      adType: WechatAdType.REWARDED,
      adUnitId: '',
    }
  }
}

export default {
  APPNAME: "SAMPLE",
  TestAccounts: {
    "oHuVr5fLlyaIXIqIe2SIvKWiJmgs": true,
    "ocQYG5lOk7zYKnUZpLzz1day8DcU": true,
  },
  TestAccount: "test",
  HttpHost: {
    DEV: "http://192.168.5.199:9999", // 测试服
    RELEASE: "http://192.168.5.199:8888", // 正式服
  },
  WsHost: {
    DEV: "ws://192.168.5.199:9990", // 测试服
    RELEASE: "ws://192.168.5.199:8880", // 正式服
  },
  AdName: {
    BOTTOM: 'bottom',
    GAMEOVER: 'gameover',
    REWARDED: 'rewarded',
  },
  AdConf: adConf,
  Wechat: {
    appId: 'xxx'
  },
  ScoreName: "HIGH_SOCRE",
  MAX_RANK_COUNT: 50,
}
