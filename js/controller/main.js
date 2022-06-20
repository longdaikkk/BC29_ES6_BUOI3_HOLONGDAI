import { TaskList } from "../models/taskList.js";
import { Task } from "../models/task.js";
import { TaskListNotYet } from "../models/taskListNotYet.js";
import { TaskListDone } from "../models/taskListDone.js";
import { Validation } from "../models/validation.js";

const taskList = new TaskList();
const taskListNotYet = new TaskListNotYet();
const taskListDone = new TaskListDone();
const validation =new Validation();

const getEle = (id) =>{
    return document.getElementById(id);
}

getEle("addItem").onclick = () =>{
    const congViec = getEle("newTask").value;
    let isVlid = true;
    isVlid = validation.kiemTraRong(congViec) && validation.kiemTraTrung(taskListNotYet.list, congViec);
    
    if(!isVlid){
        return;
    }
    const task = new Task(congViec);
    taskListNotYet.addTask(task);

    console.log(taskListNotYet);
    taskListNotYet.render(); 
    getEle("newTask").value = "";
}

window.complete = (value) => {
    taskListNotYet.list.forEach((ele, idx)=>{
        if(ele.tenCV === value){
            taskListDone.addTask(taskListNotYet.list[idx]);
            taskListNotYet.remove(value);
        }
    })
    taskListDone.render(); 
    taskListNotYet.render(); 
}   

window.deleteTask = (value) =>{
    taskListNotYet.remove(value);
    taskListDone.remove(value);
    taskListDone.render(); 
    taskListNotYet.render(); 
}

getEle("one").onclick = () =>{
    taskListDone.render(); 
    getEle("todo").innerHTML = "";
}

getEle("all").onclick = () =>{
    taskListNotYet.render(); 
    taskListDone.render(); 
}

getEle("two").onclick = () =>{
    taskListNotYet.sapXepTang();
    taskListNotYet.render(); 
    taskListDone.sapXepTang();
    taskListDone.render(); 
}

getEle("three").onclick = () =>{
    taskListNotYet.sapXepGiam();
    taskListNotYet.render(); 
    taskListDone.sapXepGiam();
    taskListDone.render(); 
}

const stringa = "Ỉa nhậu";
const stringb = "ĐI ỉa";

const result = stringa.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
console.log(result);
