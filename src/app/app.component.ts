import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotelInventoryApp';

  hotelName = 'Taj Hotel';

  role = "admin";

  hideRooms = false;

  numberOfRooms = 10;

  toggle()
  {
    this.hideRooms = !this.hideRooms;
  }
}

