import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck{
    public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

    public deleteItemTaskList(event: number){
      this.taskList.splice(event, 1)
    }
    public deleteAllTaskList(){
      const confirm = window.confirm("Tem certeza que deseja deletar tudo?");
      if(confirm){
        this.taskList = []
      }
    }

    public setEmitTaskList(event: string){      
      this.taskList.push({task: event, checked: false});
    }
    ngDoCheck(): void {
      this.setLocalStorage();
    }
    public validationInput(event: string, index: number){
      if(!event.length){
        const confirm = window.confirm("Task esta vazia deseja Deletar?");

        if(confirm){
          this.deleteItemTaskList(index);
        }
      }
    }

    public setLocalStorage(){
      if(this.taskList){
        this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
        localStorage.setItem("list", JSON.stringify(this.taskList));
      }
    }
}
