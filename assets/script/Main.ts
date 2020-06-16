import def from "./Def/def";
import prop from "./Def/prop";
import Language from "../bamboo/Service/Language";
import Network from "../bamboo/Service/Network";
import Wechat from "../bamboo/Wechat/Wechat";
import ConsoleService from "../bamboo/Console/ConsoleService";
import bb from "../bamboo/bb";
import Rank from "../bamboo/Service/Rank";
import {user} from "./Def/proto";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(cc.Node)
    consoleBtn: cc.Node = null;

    @property(cc.Prefab)
    consoleViewPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    rankViewPrefab: cc.Prefab = null;

    onLoad () {
        Language.init(prop.language);
    }

    start () {
        Network.init(def.HttpHost.RELEASE, def.WsHost.RELEASE);
        if(cc.sys.platform == cc.sys.WECHAT_GAME) {
            Wechat.init(def.Wechat.appId);
        }

        // ConsoleService.addCustom("切换到正式服", () => {
        //     Network.setHttpHost(def.HttpHost.RELEASE);
        // });
        // ConsoleService.addCustom("切换到测试服", () => {
        //     Network.setHttpHost(def.HttpHost.DEV);
        // });
        ConsoleService.addCustom("提交分数", () => {
            (async () => {
                let resp = await Network.setKV(def.ScoreName, String(888));
                console.log("set kv", resp);
                let userInfo = await Network.getUserInfo();
                if (userInfo) {
                    await Rank.submitScore(def.APPNAME, def.ScoreName, {
                        nickName: userInfo.nickName,
                        avatarUrl: userInfo.avatarUrl,
                        score: 888,
                    });
                    console.log("submit score done");
                }
            })();
        });
        ConsoleService.addCustom("ws连接", () => {
           Network.wsOpen();
        });

        ConsoleService.addCustom("ws发送协议", () => {
            (async () => {
                var res = await Network.wsCall({
                    name: "test.hello",
                    data: {
                        text: "hello bewater"
                    },
                    defaultRes: {text: "cannot connect to server"}
                });
                console.log("ping res", res);
            })();
        });

        ConsoleService.addCustom("测试protobuf", () => {
            console.log(user);
            let msg = user.s2c_data.create({err: 1});
            let buffer = user.s2c_data.encode(msg).finish();
            console.log("encode", buffer);
            let data: user.Is2c_data = user.s2c_data.decode(buffer);
            console.log("decode", data);
        });
    }

    // 测试登录
    onClickLogin() {
        (async () => {
            var showConsole = false;
            if (cc.sys.isBrowser) {
                await Network.login(def.APPNAME, def.TestAccount);
                showConsole = true;
            } else {
                await Network.login(def.APPNAME);
                if (def.TestAccounts[Network.account]) {
                    showConsole = true;
                }
            }
            this.consoleBtn.active = showConsole;
            if(Network.authorization) {
                bb.notify(`登录凭证:${Network.authorization}`)
            }
        })();
    }

    onClickRank() {
        bb.open(this.rankViewPrefab);
    }

    onClickConsole() {
        bb.open(this.consoleViewPrefab);
    }
}
