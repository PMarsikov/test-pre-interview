import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  editMode: boolean = false;

  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggle: EventEmitter<Todo> = new EventEmitter();

  toggleTodo(todo: Todo) {
    this.toggle.emit(todo);
  }
  
  constructor() {
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
