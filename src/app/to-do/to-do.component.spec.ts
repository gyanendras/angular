import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import { ToDoComponent } from './to-do.component';
import { from } from 'rxjs';

describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ToDoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add', () => {
    let tdc = new ToDoComponent();
    tdc.toDo = "Drink Water";
    tdc.add();
    expect(tdc.toDoList.indexOf("Drink Water")).toBe(0);
    expect(tdc.toDoList[0]).toEqual("Drink Water");
  });

});
