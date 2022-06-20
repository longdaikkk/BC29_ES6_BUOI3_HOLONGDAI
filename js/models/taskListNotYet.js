import {TaskList} from "./taskList.js";

export class TaskListNotYet extends TaskList{
    render(){
        const content = this.list.reduce((total, ele) =>{
            total += `
            <li>${ele.tenCV}
                <div>
                    <i onclick="deleteTask('${ele.tenCV}')" class="fa-solid fa-trash"></i>
                    <i onclick="complete('${ele.tenCV}')" class="fa-solid fa-circle-check"></i>
                </div>
            </li>
            `;
            return total;
        },"");
        return document.getElementById("todo").innerHTML = content;
    }
}