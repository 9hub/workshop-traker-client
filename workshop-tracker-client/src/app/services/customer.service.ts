import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../models/baseurl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: Customer;
  constructor(private http: HttpClient) { }

  formCustomer: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', Validators.required),
    phone: new FormControl(0)
  });

  initializeFormGroup() {
    this.formCustomer.setValue({
      id: 0,
      name: '',
      lastName: '',
      email: '',
      mobile: 0,
      phone: 0
    });
  }

  getCustomer() {
    return this.customer;
  }

  insertCustomer(customer: Customer): Observable<String> {
    return this.http.post<String>(baseURL + 'customers/add', customer);
  }
  
  getListCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(baseURL + 'customers');
  }

  onEdit(idCustomer){

  }
}
