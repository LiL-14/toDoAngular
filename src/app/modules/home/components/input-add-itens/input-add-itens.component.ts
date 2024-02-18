import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-itens',
  templateUrl: './input-add-itens.component.html',
  styleUrls: ['./input-add-itens.component.scss']
})
export class InputAddItensComponent {
    @Output() public emmitItemTaskList = new EventEmitter();

    public addItemTaskList: string = "";

    public submitItemTaskList(){          
      this.addItemTaskList = this.addItemTaskList.trim();
      if(this.addItemTaskList){
        this.emmitItemTaskList.emit(this.addItemTaskList);
        this.addItemTaskList = "";
      }
    }
}
