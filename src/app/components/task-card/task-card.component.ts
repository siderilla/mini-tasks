import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-card',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCardComponent {

  @Input() task!: Task;

  getPriorityLabel(value: number): string {
    switch (value) {
      case 1: return 'Alta';
      case 2: return 'Media';
      case 3: return 'Bassa';
      default: return 'N.D.';
    }
  }

}
