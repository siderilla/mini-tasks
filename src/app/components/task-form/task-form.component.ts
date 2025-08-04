import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {

  private TaskService = inject(TaskService);

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    priority: new FormControl('', [Validators.required]),
    expiration: new FormControl(''),
    completed: new FormControl(false)
  });

  priorityArray = [
    { label: 'Alta', value: 1 },
    { label: 'Media', value: 2 },
    { label: 'Bassa', value: 3 }
  ]

  submitTask() {
    console.log("submitTask() chiamato");
    if (this.taskForm.valid) {
      const newTask = { 
        ...this.taskForm.value,
        priority: Number(this.taskForm.value.priority)
      } as Task;
      this.TaskService.addTask(newTask);
      console.log("aggiunta la seguente task:", this.taskForm.value);
      console.log(this.TaskService.tasks())
    } else {
      return console.error("non valido!");
    }
  }

}
