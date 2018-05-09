import { Component, Inject } from '@angular/core';
import { ITodo, ITodoStore, SHOW_ALL } from './stores/todos.store';

import { TodoListStoreService } from './stores/todo-list-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  todoStore : ITodoStore;

  constructor(private TodoStore: TodoListStoreService) {
    this.todoStore = TodoStore.TodoList.create({ todos:[], filter:SHOW_ALL });
  }

  addTodo(){
    this.todoStore.addTodo(this.title);
    this.title = '';
  }

  trackTodoById(index:number, todo: ITodo){
    return todo.id;
  }
}
