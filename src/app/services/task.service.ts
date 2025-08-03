import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  tasks = signal<Task[]>([])

  addTask(task: Task) {
    
  }

}
