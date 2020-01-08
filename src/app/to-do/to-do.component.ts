import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { 
    this._toDoList = new Array<String>();
    this.toDo = "Default";
  }

  ngOnInit() {
  }

   private _toDoList: String[];
   private _toDo: String;
   
  public get toDo(): String {
    return this._toDo;
  }
  public set toDo(value: String) {
    this._toDo = value;
  }
  public get toDoList(): String[] {
    return this._toDoList;
  }
  public set toDoList(value: String[]) {
    this._toDoList = value;
  }

   add(){
    this._toDoList.push(this.toDo);
   }

   remove(item:String){
     let index =this._toDoList.indexOf(item);
     this._toDoList.splice(index,1);
     
   }


}
