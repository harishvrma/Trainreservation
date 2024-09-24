import { Component } from '@angular/core';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SeatBookingComponent], // Include the SeatBookingComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: any;
}