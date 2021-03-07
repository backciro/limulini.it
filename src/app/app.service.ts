import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class TempleService {
  constructor(private http: HttpClient) {}

  authService(user, pass) {}
}
