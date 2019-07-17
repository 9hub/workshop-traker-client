import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from 'src/app/const/baseurl';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: Customer;
  constructor(private http: HttpClient) { }

  formCustomer: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', Validators.required),
    phone: new FormControl(0)
  });

  initializeFormGroup() {
    this.formCustomer.setValue({
      id: null,
      name: '',
      lastName: '',
      email: '',
      mobile: 0,
      phone: 0
    });
  }

  getCustomer(idCustomer): Observable<Customer> {
    return this.http.get<Customer>(baseURL + 'customers/customer/' + { idCustomer });
  }

  insertCustomer(customer: Customer): Observable<string> {
    return this.http.post<string>(baseURL + 'customers/', customer);
  }

  getListCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(baseURL + 'customers');
  }

  updateCustomer(updCustomer): Observable<string> {
    console.log(updCustomer);
    return this.http.put<string>(baseURL + 'customers/' + updCustomer.id, updCustomer);
  }

  setValueFormCustomer(customer) {
    this.formCustomer.setValue(customer);
  }
}
