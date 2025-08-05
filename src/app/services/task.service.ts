import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {

    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks.set(JSON.parse(storedTasks));
    }

  }

  tasks = signal<Task[]>([])

  addTask(nuovaTask: Task) {
    this.tasks.update(current => [...current, nuovaTask]);
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }

  
  
}
