import { Component, OnInit, Input} from '@angular/core';
import { Todo } from 'src/app/modals/Todo';
import {TodoService} from '../../services/todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo: Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
//set dynamic classes
setClasses(){
  let classes ={
    todo: true, 
    'is-complete': this.todo.completed
  }
  return classes;
}

onToggle(todo){
  //toggle on UI
  todo.completed = !todo.completed;
  //console.log('toggle');
  //toggle on server
  this.todoService.toggleComplted(todo).subscribe(todo => console.log(todo));
}
onDelete(todo){
  console.log('delete');
}
}
