import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private imagesUrl = `${environment.apiUrl}/api`;
  constructor(private http: HttpClient) { }

  getall(query: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.imagesUrl}/getImages`, { params: query })
      .pipe(
        catchError(this.handleError<any[]>('getImage', []))
      );
  }

  getallNotPagination(): Observable<any[]> {
    return this.http.get<any[]>(`${this.imagesUrl}/images/getAll`)
      .pipe(
        catchError(this.handleError<any[]>('getImage', []))
      );
  }

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', file);
    return this.http.post(`${this.imagesUrl}/uploadImage`, formData).pipe(
      catchError(this.handleError<any[]>('uploadImage', []))
    );
  }

  deleteImage(data: any): Observable<any> {
    const { path } = data;

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        path
      }
    };

    return this.http.delete<any[]>(`${this.imagesUrl}/deleteImage`, options)
      .pipe(
        catchError(this.handleError<any[]>('getImage', []))
      );
  }

  // tslint:disable-next-line: typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
