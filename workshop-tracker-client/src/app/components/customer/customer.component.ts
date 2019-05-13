import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customer: Customer;

  constructor(private customerService: CustomerService,
    private notificationService: NotificationService) { }

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
      this.customerService.insertCustomer(this.customer).subscribe(
        data => {
          console.log(data);
          this.notificationService.success('Customer Successfully');
          this.customerService.formCustomer.reset();
        }),
        error => {
          this.notificationService.warn('Error');
        };
    }
  }
  onClose() {
    this.customerService.formCustomer.reset();
    this.customerService.initializeFormGroup();
    ///this.dia
  }
}
