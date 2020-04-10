const { ccclass, property } = cc._decorator;

@ccclass
export default class RankItem extends cc.Component {
    @property(cc.Label)
    rankLabel: cc.Label = null;
    @property(cc.Label)
    nickNameLabel: cc.Label = null;
    @property(cc.Label)
    scoreLabel: cc.Label = null;

    initData(rank: number, nickname: string, score: number) {
        this.rankLabel.string = String(rank);
        this.nickNameLabel.string = String(nickname);
        this.scoreLabel.string = String(score);
    }
}
