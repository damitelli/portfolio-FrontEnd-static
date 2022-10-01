import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { EducationInterface } from '../interfaces/education-interface';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private urlData = 'http://localhost:3000/education';
  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  getEducationData(): Observable<EducationInterface[]> {
    return this.http.get<EducationInterface[]>(this.urlData)
  }

  get refresh$() {
    return this._refresh$;
  }

  //////// Save methods //////////

  addEducationData(eduData: EducationInterface[]): Observable<EducationInterface[]> {
    const url = `${this.urlData}`;
    return this.http.post<EducationInterface[]>(url, eduData).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  updateEducationData(UpdatedEduData: EducationInterface): Observable<EducationInterface[]> {
    const url = `${this.urlData}/${UpdatedEduData.id}`;
    return this.http.put<EducationInterface[]>(url, UpdatedEduData, httpOptions).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  deletePortfolioEducation(eduData: EducationInterface): Observable<EducationInterface[]> {
    const url = `${this.urlData}/${eduData.id}`;
    return this.http.delete<EducationInterface[]>(url);
  }
}
