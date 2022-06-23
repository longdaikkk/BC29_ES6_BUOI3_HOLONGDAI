export class TaskList{
    list = [];
    addTask(value){
        this.list=[...this.list, value];
    }

    render(){

    }

    remove(value){
        this.list = this.list.filter((ele) => {
            if(ele.tenCV === value){
                return false;
            }
            return true;
        });
    }

    sapXepTang(){
        this.list = this.list.sort(function(a, b){
            return a.tenCV.localeCompare(b.tenCV);
           });
    }

    sapXepGiam(){
        this.list = this.list.sort(function(a, b){
            return -a.tenCV.localeCompare(b.tenCV);
           });
    }
}