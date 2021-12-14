import { Component } from '@angular/core';
import { name, address, phone, internet } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName = name.firstName();
  surName = name.lastName();
  prefix = name.prefix();
  address = address.streetAddress();
  city = address.cityName();
  zipcode = address.zipCode();
  email = internet.email();
  phone = phone.phoneNumberFormat();

  reload() {
    // any other execution
    window.location.reload();
  }
}
