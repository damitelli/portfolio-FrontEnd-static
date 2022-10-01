import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { ExperienceInterface } from '../interfaces/experience-interface';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private urlData = 'http://localhost:3000/experience';
  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  getExperiencesData(): Observable<ExperienceInterface[]> {
    return this.http.get<ExperienceInterface[]>(this.urlData)
  }

  get refresh$() {
    return this._refresh$;
  }

  //////// Save methods //////////

  addExperienceData(expData: ExperienceInterface[]): Observable<ExperienceInterface[]> {
    const url = `${this.urlData}`;
    return this.http.post<ExperienceInterface[]>(url, expData).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  updateExperienceData(UpdatedExpData: ExperienceInterface): Observable<ExperienceInterface[]> {
    const url = `${this.urlData}/${UpdatedExpData.id}`;
    return this.http.put<ExperienceInterface[]>(url, UpdatedExpData, httpOptions).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  deleteExperienceData(expData: ExperienceInterface): Observable<ExperienceInterface[]> {
    const url = `${this.urlData}/${expData.id}`;
    return this.http.delete<ExperienceInterface[]>(url);
  }

}
