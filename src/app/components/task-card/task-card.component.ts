import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-task-card',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCardComponent {

}
