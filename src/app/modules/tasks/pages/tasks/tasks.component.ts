import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskService } from '../../../../core/services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  userId = localStorage.getItem('userId') || '';

  newTask = {
    title: '',
    description: '',
  };


  constructor(private taskService: TaskService) { }

  ngOnInit() {
    if (this.userId) {
      this.taskService.getTasks(this.userId).subscribe((tasks) => {
        this.tasks = tasks;
      });
    }
  }
}
