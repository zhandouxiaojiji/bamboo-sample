import Language from "../bamboo/Language";
import prop from "./Def/prop";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    onLoad () {
        Language.init(prop.language);
    }

    start () {

    }

    // update (dt) {}
}
