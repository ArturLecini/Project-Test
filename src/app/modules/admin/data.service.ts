import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import { USER} from '@models/*';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly API_URL = "http://localhost:3000";
  dataChange: BehaviorSubject<USER[]> = new BehaviorSubject<USER[]>([]);
  dialogData: any;
  constructor(private httpClient: HttpClient) { }
  get data(): USER[] {
    return this.dataChange.value;
  }
}
