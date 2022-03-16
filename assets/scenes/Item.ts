import TableView from "./tv/TableView";
import TableViewItem from "./tv/TableViewItem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Item1 extends TableViewItem {

    @property(cc.Label)
    label: cc.Label;


    curData : any;

    /**
     * 需要刷新item时调用此函数
     */
     onUpdateItem(datas: any, tableView: TableView) {
         this.label.string = `${this.itemIndex}`;

         this.curData = datas[this.itemIndex];
    }

    printTouch() {
        cc.log("touch data:", <string>this.curData);
    }
}
