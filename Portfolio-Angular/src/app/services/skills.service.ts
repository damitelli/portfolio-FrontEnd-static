import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { SkillsInterface } from '../interfaces/skills-interface';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private urlData = 'http://localhost:3000/skills';
  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  getSkillsData(): Observable<SkillsInterface[]> {
    return this.http.get<SkillsInterface[]>(this.urlData)
  }

  get refresh$() {
    return this._refresh$;
  }

  //////// Save methods //////////

  addSkillData(skillData: SkillsInterface[]): Observable<SkillsInterface[]> {
    const url = `${this.urlData}`;
    return this.http.post<SkillsInterface[]>(url, skillData).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  updateSkillData(UpdatedSkillData: SkillsInterface): Observable<SkillsInterface[]> {
    const url = `${this.urlData}/${UpdatedSkillData.id}`;
    return this.http.put<SkillsInterface[]>(url, UpdatedSkillData, httpOptions).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  deleteSkill(skill: SkillsInterface): Observable<SkillsInterface[]> {
    const url = `${this.urlData}/${skill.id}`;
    return this.http.delete<SkillsInterface[]>(url);
  }
}
