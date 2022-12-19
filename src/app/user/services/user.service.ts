import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private headers = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    })
  }

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  login(user: any): Observable<{token: string}>{
    return this.http.post<{token: string}>(`${environment.baseUrl}/tokens`, user, this.headers)
  }


  signUp(user: any): Observable<any>{
    return this.http.post<any>(`${environment.baseUrl}/users`, user, this.headers)
  }

  showMessage(msg: string, isError: boolean = false){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
     })
  }
}
