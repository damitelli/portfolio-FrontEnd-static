import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { ProjectsInterface } from '../interfaces/projects-interface';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private urlData = 'http://localhost:3000/projects';
  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  getProjectsData(): Observable<ProjectsInterface[]> {
    return this.http.get<ProjectsInterface[]>(this.urlData)
  }

  get refresh$() {
    return this._refresh$;
  }

  //////// Save methods //////////

  addProjectData(ProjectData: ProjectsInterface[]): Observable<ProjectsInterface[]> {
    const url = `${this.urlData}`;
    return this.http.post<ProjectsInterface[]>(url, ProjectData).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  updateProjectData(UpdatedProjectData: ProjectsInterface): Observable<ProjectsInterface[]> {
    const url = `${this.urlData}/${UpdatedProjectData.id}`;
    return this.http.put<ProjectsInterface[]>(url, UpdatedProjectData, httpOptions).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  deleteProjectData(ProjectData: ProjectsInterface): Observable<ProjectsInterface[]> {
    const url = `${this.urlData}/${ProjectData.id}`;
    return this.http.delete<ProjectsInterface[]>(url);
  }
}
