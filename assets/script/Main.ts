import Def from "./Def/Def";
import Prop from "./Def/Prop";
import Language from "../bamboo/Service/Language";
import Network from "../bamboo/Service/Network";
import Wechat from "../bamboo/Wechat/Wechat";
import ConsoleService from "../bamboo/Console/ConsoleService";
import bb from "../bamboo/bb";
import Rank from "../bamboo/Service/Rank";
import * as Proto from "./Def/Proto";
import { WsPackType } from "../bamboo/Network/WebSock";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(cc.Node)
    consoleBtn: cc.Node = null;

    @property(cc.Prefab)
    consoleViewPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    rankViewPrefab: cc.Prefab = null;

    onLoad() {
        console.log("&&&&&", Prop)
        Language.init(Prop.language);
    }

    start() {
        const protoDefine = cc.loader.loadRes("ProtoDefine.json", (err, obj) => {
            console.log("protodefine", obj.json);
            const idToProto = {}
            const protoToId = {}
            for (let name in obj.json) {
                let id = obj.json[name];
                let arr = name.split('.');
                let packageName = arr[0];
                let simpleName = arr[1];
                let proto = Proto[packageName][simpleName];
                idToProto[id] = proto;
                protoToId[proto] = id;
            }
            Network.init(Def.HttpHost.RELEASE, {
                url: Def.WsHost.RELEASE,
                packType: WsPackType.PROTOBUF,
                protobufConf: {
                    idToProto,
                    protoToId,
                }
            });
        })

        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            Wechat.init(Def.Wechat.appId);
        }

        // ConsoleService.addCustom("切换到正式服", () => {
        //     Network.setHttpHost(def.HttpHost.RELEASE);
        // });
        // ConsoleService.addCustom("切换到测试服", () => {
        //     Network.setHttpHost(def.HttpHost.DEV);
        // });
        ConsoleService.addCustom("提交分数", () => {
            (async () => {
                let resp = await Network.setKV(Def.ScoreName, String(888));
                console.log("set kv", resp);
                let userInfo = await Network.getUserInfo();
                if (userInfo) {
                    await Rank.submitScore(Def.APPNAME, Def.ScoreName, {
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
                    defaultRes: { text: "cannot connect to server" }
                });
                console.log("ping res", res);
            })();
        });

        ConsoleService.addCustom("测试protobuf", () => {
            let msg = Proto.user.s2c_data.create({ err: 1 });
            let buffer = Proto.user.s2c_data.encode(msg).finish();
            console.log("encode", buffer);
            let data: Proto.user.Is2c_data = Proto.user.s2c_data.decode(buffer);
            console.log("decode", data);
        });

        ConsoleService.addCustom("发送protobuf", () => {
            const data: Proto.test.Ic2s_hello = {
                text: "hello",
            };
            Network.wsCall({
                proto: Proto.test.c2s_hello,
                data,
            })
        });
    }

    // 测试登录
    onClickLogin() {
        (async () => {
            var showConsole = false;
            if (cc.sys.isBrowser) {
                await Network.login(Def.APPNAME, Def.TestAccount);
                showConsole = true;
            } else {
                await Network.login(Def.APPNAME);
                if (Def.TestAccounts[Network.account]) {
                    showConsole = true;
                }
            }
            this.consoleBtn.active = showConsole;
            if (Network.authorization) {
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
