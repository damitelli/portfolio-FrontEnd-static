import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { ProfileInterface } from '../interfaces/profile-interface';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private urlData = 'http://localhost:3000/profile';
  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  getProfileData(): Observable<ProfileInterface[]> {
    return this.http.get<ProfileInterface[]>(this.urlData)
  }

  get refresh$() {
    return this._refresh$;
  }

  //////// Save methods //////////

  updateProfileData(UpdatedProfileData: ProfileInterface): Observable<ProfileInterface[]> {
    const url = `${this.urlData}/${UpdatedProfileData.id}`;
    return this.http.put<ProfileInterface[]>(url, UpdatedProfileData, httpOptions).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

}
