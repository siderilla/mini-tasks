import { Component, inject } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [TaskCardComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  tasks = inject(TaskService).tasks;


}
