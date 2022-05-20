import { HttpHeaders } from '@angular/common/http';

export const API_BASE_URL = "http://localhost:3000/api/v1/";

export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};