import def from "./Def/def";
import prop from "./Def/prop";
import Language from "../bamboo/Language";
import Network from "../bamboo/Service/Network";
import Wechat from "../bamboo/Wechat/Wechat";
import ConsoleService from "../bamboo/Console/ConsoleService";
import bb from "../bamboo/bb";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    consoleNode: cc.Node;

    onLoad () {
        Language.init(prop.language);
    }

    start () {
        Network.init(def.HttpHost.RELEASE);
        if(cc.sys.platform == cc.sys.WECHAT_GAME) {
            Wechat.init(def.Wechat.appId);
        }

        ConsoleService.addCustom("切换到正式服", () => {
            Network.setHost(def.HttpHost.RELEASE);
        });
        ConsoleService.addCustom("切换到测试服", () => {
            Network.setHost(def.HttpHost.DEV);
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
                if (def.TestAccounts[Network.acc]) {
                    showConsole = true;
                }
            }
            this.consoleNode.active = showConsole;
            if(Network.authorization) {
                bb.notify(`登录凭证:${Network.authorization}`)
            }
        })();
    }

    onClickRank() {

    }

    onClickConsole() {

    }
}
