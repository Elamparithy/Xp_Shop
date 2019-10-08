import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Order } from '../interfaces/order-item';
import { Subject, Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { OrderService } from '../services/order.service'
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  insertForm: FormGroup;
  FirstName: FormGroup;
  LastName: FormGroup;
  Email: FormGroup;
  Phonenumber: FormGroup;
  Address: FormGroup;
  city: FormGroup;
  postcode: FormGroup;


  @ViewChild('template') modal: TemplateRef<any>;

  modalMessage: string;
  modalRef: BsModalRef;
  selectedProduct: Order;
  Orders: Order[] = [];
  order$: Observable<Order[]>;
  userRoleStatus: string;


  // Datatables Properties
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;

  constructor(private productservice: ProductService,
    private orderservice: OrderService,
    private modalService: BsModalService,
    private chRef: ChangeDetectorRef,
    private fb: FormBuilder,
    private router: Router) { }

  onAddOrder() {
    this.modalRef = this.modalService.show(this.modal);
  }

  onSubmit() {
    let newOrder = this.insertForm.value;

    this.orderservice.insertOrder(newOrder).subscribe(
      result => {
        this.orderservice.clearCache();
        this.order$ = this.orderservice.getOrders();

        this.order$.subscribe(newlist => {
          this.Orders = newlist;
          this.modalRef.hide();
          this.insertForm.reset();
          this.rerender();

        });
        console.log("New Product added");

      },
      error => console.log('Could not add Product')

    )

  }

  // We will use this method to destroy old table and re-render new table

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first in the current context
      dtInstance.destroy();

      // Call the dtTrigger to rerender again
      this.dtTrigger.next();

    });
  }

  ngOnInit() {
  }

}
