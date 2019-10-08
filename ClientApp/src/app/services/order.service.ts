import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order-item';
import { shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = "/api/order/getorders";

  private OrderUrl: string = "/api/order/addorder";

  private order$: Observable<Order[]>;


  getOrders(): Observable<Order[]> {
    if (!this.order$) {
      this.order$ = this.http.get<Order[]>(this.baseUrl).pipe(shareReplay());
    }

    return this.order$;

  }
  insertOrder(newOrder: Order): Observable<Order> {
    return this.http.post<Order>(this.OrderUrl, newOrder);
  }

  clearCache() {
    this.order$ = null;
  }

}
