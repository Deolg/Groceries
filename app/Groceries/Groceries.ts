import { 
    Component,
    Input,
    trigger,
    state,
    transition,
    animate,
    keyframes,
    style,
    group,
} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'Groceries',
    templateUrl: "Groceries.html",
    animations: [
        // не доделал...
        trigger('focusPanel', [
            state('car', style({
                transform: 'scale(1)',
                position: 'absolute',
                left:'0px'
            })),
            state('home', style({
                transform: 'scale(1.1)',
                position: 'absolute',
                right:'0px'
            })),
             transition('car => home', animate('100ms ease-in')),
            transition('home => car', animate('100ms ease-out'))
        ])

    ]
})

export class GroceriesComponent {

    public defaultData=[
        {"title":"Category 1","type":0},
        {"title":"Category 2","type":1},
        {"title":"Category 3","type":0},
        {"title":"Category 4","type":1},
        {"title":"Category 5","type":0},
        {"title":"Category 6","type":1},
        {"title":"Category 7","type":1},
        {"title":"Category 8","type":0}
    ];
    public modeEdit = false;
    public Orders;
    public filter = false;
    state: string ='';

    constructor(){
        if(!localStorage.getItem('Data')){
            localStorage.setItem('Data', JSON.stringify(this.defaultData));
        }
        this._getDefaultData();
    }

    onToggleMove(index) {
        this.Orders[index].type=(this.Orders[index].type)?0:1;    
        this._setDefaultData();
    }

    onFilter(value:boolean):void{
        this.filter=value;

        /*if(!value) return this._getDefaultData();
        let result = this.Orders.filter(function(item) {
            return item.type == value;
        });

        this.Orders = result;*/
    }
    
    onModeEdit():void{
        this.modeEdit=(this.modeEdit)?false:true
    }
    
    onRemoveItem(index):void{
        this.Orders.splice(index, 1);
        this._setDefaultData();
    }

    onAddItem():void{
        bootbox.prompt("Add new list item",(res)=>{
            if(res===null) return;
            if(res.trim() == '') return bootbox.alert('Поле не может быть пустым');
            this.Orders.unshift({"title":res,"type":0});
            this._setDefaultData();
        })
    }   

    onResetData():void{
        localStorage.setItem('Data', JSON.stringify(this.defaultData));
        this._getDefaultData();
    }

    _getDefaultData():void{
        this.Orders=JSON.parse(localStorage.getItem('Data'));
        console.log(this.Orders);
    }

    _setDefaultData():void{
        localStorage.setItem('Data', JSON.stringify(this.Orders));
        console.log(this.Orders);
    }


    ngOnInit() { this.log(`onInit`); }
 
    ngOnDestroy() { this.log(`onDestroy`); }
 
    private log(msg: string) {
        console.log(msg);
    }

}