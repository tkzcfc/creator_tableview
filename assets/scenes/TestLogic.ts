import TableView from "./tv/TableView";
import TableViewDelegate from "./tv/TableViewDelegate";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TestLogic extends TableViewDelegate {

    protected start(): void {
        let datas: string[] = []
        datas.length = this.numberOfItem();

        for(let i = 0; i < datas.length; ++i) {
            datas[i] = `data_${i}`;
        }

        // 列表加载
        this.getComponent(TableView).reload(datas);
    }

    /**
     * 获取item大小
     * @param index 
     */
     getItemSize(index: number) : cc.Size {
         if(this.getItemType(index) == 0)
            return new cc.Size(100, 200);
        return new cc.Size(200, 200);
    }

    /**
     * 获取item类型
     * @param index 
     */
    getItemType(index: number): number {
        if(index % 3 == 0)
            return 1;
        return 0;
    }
    
    test1() {
        this.getComponent(TableView).scrollToWithSpeed(99, new cc.Vec2(0.5, 0.5), new cc.Vec2(0.5, 0.5), 2000);
    }
    
    test2() {
        this.getComponent(TableView).scrollTo(99, new cc.Vec2(1, 1), new cc.Vec2(1, 1), 1.0);
    }

    test3() {
        let datas: string[] = []
        datas.length = this.numberOfItem();

        for(let i = 0; i < datas.length; ++i) {
            datas[i] = `new_data_${i}`;
        }

        // 列表加载
        this.getComponent(TableView).reload(datas, true);        
    }

    
    back() {
        cc.director.loadScene("main");
    }
}
