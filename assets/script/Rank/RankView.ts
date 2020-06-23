import Def from "../Def/Def";
import Rank from "../../bamboo/Service/Rank";
import RankItem from "./RankItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RankView extends cc.Component {
    @property(cc.Prefab)
    itemPrefab: cc.Prefab = null;
    @property(cc.Node)
    content: cc.Node = null;

    itemList: RankItem[] = [];

    start() {
        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            this.node.removeFromParent();
        });
        this.preload(Def.MAX_RANK_COUNT);
        this.showRank();
    }

    // 预加载
    preload(count: number) {
        for (let i = 0; i < count; i++) {
            let newNode = cc.instantiate(this.itemPrefab);
            this.content.addChild(newNode);
            this.itemList.push(newNode.getComponent(RankItem));
            newNode.active = false;
        }
    }

    showRank() {
        (async () => {
            const { list, mine } = await Rank.fetch(Def.ScoreName, Def.APPNAME);
            const itemList = this.itemList;
            if (!itemList) {
                return;
            }
            console.log(itemList);
            itemList.forEach((item) => {
                item.node.active = false;
            });
            list[0] && list.forEach((item, index) => {
                if (!itemList[index]) {
                    let newNode = cc.instantiate(this.itemPrefab);
                    this.content.addChild(newNode);
                    itemList.push(newNode.getComponent(RankItem));
                }
                itemList[index].node.active = true;
                itemList[index].initData(item.v.rank, item.v.nickName, item.v.score);
            });
        })();
    }
}
