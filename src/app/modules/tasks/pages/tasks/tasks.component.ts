import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskService } from '../../../../core/services/task.service';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { EditTaskDialogComponent } from '../../../../shared/components/edit-task-dialog/edit-task-dialog.component';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule, MatDialogModule, MatSnackBarModule],
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

  searchTerm: string = '';

  constructor(private dialog: MatDialog, private taskService: TaskService, private router: Router,
    private snackBar: MatSnackBar) { }

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
      this.snackBar.open('Tarea creada', 'Cerrar', { duration: 3000 });
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
      this.snackBar.open('Tarea eliminada', 'Cerrar', { duration: 3000 });
    });
  }

  editTask(task: Task) {
    const dialogRef = this.dialog.open(EditTaskDialogComponent, {
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskService.updateTask(task.id, result).subscribe(() => {
          Object.assign(task, result);
          this.snackBar.open('Tarea actualizada', 'Cerrar', { duration: 3000 });
        });
      }
    });
  }

  get filteredTasks(): Task[] {
    return this.tasks.filter(task =>
      task.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  logout() {
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

}
