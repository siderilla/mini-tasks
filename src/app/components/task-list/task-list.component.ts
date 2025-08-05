import { Component, computed, inject } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [TaskCardComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  tasks = inject(TaskService).tasks;

  filterControl = new FormControl('all');

  completedCount = computed(() => this.tasks().filter(task => task.completed).length);

  activeCount = computed(() => this.tasks().filter(task => !task.completed).length);

  totalCount = computed(() => this.tasks().filter(task => task).length);

}
