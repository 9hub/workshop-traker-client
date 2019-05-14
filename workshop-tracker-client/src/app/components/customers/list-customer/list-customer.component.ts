import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'phone', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getListCustomers().subscribe(
      listCustomers => {
        let arrayCustomers = listCustomers;
        this.listData = new MatTableDataSource(arrayCustomers);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

}
