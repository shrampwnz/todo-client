import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoListItem } from '../interfaces/index.interface';

@Injectable()
export class DashboardService {
  constructor(private httpClient: HttpClient) { }

  public getTodosList(): Observable<TodoListItem[]> {
    return this.httpClient.get<TodoListItem[]>(`/todos`);
  }

  public addTask(data: TodoListItem): Observable<any> {
    return this.httpClient.put(`/add-task`, data);
  }

  public completeTask(id: string, isComplete: boolean): Observable<any> {
    return this.httpClient.put(`/complete-task`, { id, isComplete });
  }

  public removeTask(id: string): Observable<any> {
    return this.httpClient.put(`/remove-task`, { id });
  }

  public setDescription(id: string, description: string): Observable<any> {
    return this.httpClient.put(`/description-task`, { id, description });
  }
}
