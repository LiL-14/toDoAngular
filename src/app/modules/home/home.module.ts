import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ToDoButtonDeleteAllComponent } from './components/to-do-button-delete-all/to-do-button-delete-all.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { InputAddItensComponent } from './components/input-add-itens/input-add-itens.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    ToDoButtonDeleteAllComponent,
    ToDoListComponent,
    InputAddItensComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
