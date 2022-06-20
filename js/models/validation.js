export class Validation{
    kiemTraRong(value){
        if(value == ""){
            alert("Không để trống");
            return false;
        }
        return true;
    }

    kiemTraTrung(data, value){
        let index = -1;
        data.forEach((ele, idx) => {
            if(ele.tenCV.trim().toLowerCase() === value.trim().toLowerCase()){
                alert("Bị trùng công việc");
                index = idx;
            }
        });
        if(index === -1){
            return true;
        }
        return false;
    }
}