import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService
{
    constructor(private http: HttpClient)
    {
    }

    public get<T>(endPoint: string): Observable<T>
    {
        return this.http.get<T>(`${environment.api.uri}/${endPoint}`);
    }
}
