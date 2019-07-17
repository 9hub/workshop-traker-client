import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customers/customer.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Customer } from 'src/app/customers/customer';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customer: Customer;

  constructor(private customerService: CustomerService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<CustomerComponent>,
    private router: Router) { }

  ngOnInit() {
  }

  onClear() {
    this.customerService.formCustomer.reset();
    this.customerService.initializeFormGroup();
    this.notificationService.success('Submitted successfully');
  }
  onSubmit() {
    if (this.customerService.formCustomer.valid) {
      this.customer = this.customerService.formCustomer.value;
      if (!this.customer.id) {
        this.customerService.insertCustomer(this.customer).subscribe(
          data => {
            this.notificationService.success('Customer Successfully');
          }),
          error => {
            this.notificationService.warn('Error');
          };
      } else {
        this.customerService.updateCustomer(this.customer)
          .subscribe(
            resp => {
              this.notificationService.success('Customer Update');
            }),
          error => {
            this.notificationService.warn('Error');
          };

      }
      this.customerService.formCustomer.reset();
      this.customerService.initializeFormGroup();
      this.onClose();

    }
    this.router.navigate(['list-customer']);
  }
  onClose() {
    this.customerService.formCustomer.reset();
    this.customerService.initializeFormGroup();
    this.dialogRef.close();
  }
}
