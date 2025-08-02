import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {

  taskForm = new FormGroup({
    title: new FormControl(''),
    priority: new FormControl(''),
    expiration: new FormControl(''),
    completation: new FormControl(false)
  });

  priorityArray = [
    {label: 'Alta', value: 1},
    {label: 'Media', value: 2},
    {label: 'Bassa', value: 3}
  ]

}
