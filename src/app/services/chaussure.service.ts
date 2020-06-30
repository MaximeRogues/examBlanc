import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Chaussure } from '../models/chaussure';
import { catchError, retry } from 'rxjs/internal/operators';



@Injectable({
  providedIn: 'root'
})
export class ChaussureService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    };

  constructor(private http: HttpClient) { }

   //  Fonction en cas d'erreur http
   handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage)
  }

  apiUrl = "http://localhost:3000/chaussure";

  // on déclare un fonction qui return la liste de Chaussurex en tant qu'observable
  getAllChaussures() : Observable <Chaussure[]> {
    return this.http.get<Chaussure[]>(this.apiUrl).pipe(retry(1),catchError(this.handleError));
  }
  

  //Fonction pour retrouver un Chaussure par son nom
  getChaussureByID (id: number): Observable <Chaussure> {
    return this.http.get<Chaussure>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
  }

  // fonction pour ajouter un Chaussure au tableau listeChaussurex
  addChaussure(Chaussure: Chaussure): Observable<Chaussure> {
    return this.http.post<Chaussure>(this.apiUrl ,Chaussure).pipe(catchError(this.handleError));
   }

  //Fonction pour éditer un Chaussure
  editChaussure(Chaussure: Chaussure) {
    return this.http.put<Chaussure>(this.apiUrl + '/' + Chaussure.id, Chaussure, this.httpOptions).pipe(catchError(this.handleError))
  }


  // Fonction pour supprimer un Chaussure du tableau listeChaussurex
  deleteChaussure(id: number): Observable <Chaussure> {
    return this.http.delete<Chaussure>(this.apiUrl + '/' + id).pipe(catchError(this.handleError))
  }
}
