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
            var nameA=a.tenCV.slice(0,1).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            var nameB=b.tenCV.slice(0,1).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            console.log(nameA);
            if (nameA < nameB)
             return -1;
            if (nameA > nameB)
             return 1;
            return 0;
            
           });
    }

    sapXepGiam(){
        this.list = this.list.sort(function(a, b){
            var nameA=a.tenCV.slice(0,1).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''), nameB=b.tenCV.slice(0,1).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (nameA < nameB)
             return 1;
            if (nameA > nameB)
             return -1;
            return 0;
           });
    }
}