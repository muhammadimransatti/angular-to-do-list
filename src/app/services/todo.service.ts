import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../modals/Todo';
import { Observable } from 'rxjs';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https:/jsonplaceholder.typicode.com/todos';
  todoLimit = '?_limit=8';
  constructor(private http:HttpClient) { }


  //get Todos
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimit}`);
// return [
//   {
//     id: 1,
//     title: 'Todo One',
//     completed: false
//   },
//   {
//     id: 2,
//     title: 'Todo Two',
//     completed: false
//   },
//   {
//     id: 3,
//     title: 'Todo Three',
//     completed: false
//   },
//   {
//     id: 4,
//     title: 'Todo Four',
//     completed: false
//   },
//   {
//     id: 5,
//     title: 'Todo Five',
//     completed: true
//   },
//   {
//     id: 6,
//     title: 'Todo Six',
//     completed: true
//   },
//   {
//     id: 7,
//     title: 'Todo Seven',
//     completed: true
//   },
//   {
//     id: 8,
//     title: 'Todo Eight',
//     completed: true
//   },
//   {
//     id: 9,
//     title: 'Todo Nine',
//     completed: true
//   },
//   {
//     id: 10,
//     title: 'Todo Ten',
//     completed: true
//   }

// ]

//Toggle Completed


  }
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url,todo, httpOptions);
    }
}
