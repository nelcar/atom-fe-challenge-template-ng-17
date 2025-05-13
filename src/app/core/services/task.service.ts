import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  id: string;
  userId: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: any;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private api = 'https://us-central1-atom-task-app.cloudfunctions.net/api/tasks';

  constructor(private http: HttpClient) {}

  getTasks(userId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.api}?userId=${userId}`);
  }

  addTask(task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(this.api, task);
  }

  updateTask(id: string, updates: Partial<Task>): Observable<void> {
    return this.http.put<void>(`${this.api}/${id}`, updates);
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
