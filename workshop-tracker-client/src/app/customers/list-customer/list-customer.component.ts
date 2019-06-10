import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerService } from '../customer.service';
import { NotificationService } from 'src/app/services/notification.service';

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

  constructor(private customerService: CustomerService,
    private dialog: MatDialog,
    private notificationService: NotificationService) {
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
  onEditCustomer(rowCustomer) {
    console.log(rowCustomer);
    this.customerService.setValueFormCustomer(rowCustomer);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CustomerComponent, dialogConfig);
  }

  onCreate() {
    this.customerService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CustomerComponent,dialogConfig);
  }
}
