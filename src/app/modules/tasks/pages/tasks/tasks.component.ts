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

  addTask() {
    if (!this.newTask.title || !this.newTask.description) return;

    const taskData = {
      ...this.newTask,
      userId: this.userId,
    };

    this.taskService.addTask(taskData).subscribe((task) => {
      this.tasks.unshift(task);
      this.newTask = { title: '', description: '' };
    });
  }

  toggleComplete(task: Task) {
    this.taskService.updateTask(task.id, { completed: !task.completed }).subscribe(() => {
      task.completed = !task.completed;
    });
  }

  deleteTask(task: Task) {
    if (!confirm('¿Eliminar esta tarea?')) return;

    this.taskService.deleteTask(task.id).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }

}
