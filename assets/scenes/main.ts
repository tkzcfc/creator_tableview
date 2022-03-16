
const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    start () {

    }

    doTest(event, customEventData) {
        cc.director.loadScene("test_" + customEventData);
    }

    // update (dt) {}
}
