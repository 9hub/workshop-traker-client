export class Customer {
    id: number;
    name: string;
    lastName: string;
    email: string;
    mobile: number;
    phone: number;


  constructor(id: number, name: string, lastName: string, email: string, mobile: number, phone: number) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.mobile = mobile;
    this.phone = phone;
  }
}
