import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-seat-booking',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import CommonModule and FormsModule here
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css'],
})
export class SeatBookingComponent {
  seats: { row: number; seats: { booked: boolean }[] }[] = [];
  bookedSeats: number[] = [];
  requestedSeats: number = 0;

  constructor() {
    this.initializeSeats(); // Initialize seats when the component is created
  }

  initializeSeats() {
    // Initialize seats: 7 seats in 10 rows, last row with 3 seats
    for (let i = 0; i < 10; i++) {
      const seatsInRow = [];
      for (let j = 0; j < 7; j++) {
        seatsInRow.push({ booked: false }); // Create a new object for each seat
      }
      this.seats.push({ row: i + 1, seats: seatsInRow });
    }

    // Last row with 3 seats
    const lastRowSeats = [];
    for (let j = 0; j < 3; j++) {
      lastRowSeats.push({ booked: false }); // Create a new object for each seat
    }
    this.seats.push({ row: 11, seats: lastRowSeats });
  }

  bookSeats() {
    const availableSeats: { rowIndex: number; seatIndex: number }[] = [];

    // Find available seats
    for (let rowIndex = 0; rowIndex < this.seats.length; rowIndex++) {
      for (let seatIndex = 0; seatIndex < this.seats[rowIndex].seats.length; seatIndex++) {
        if (!this.seats[rowIndex].seats[seatIndex].booked) {
          availableSeats.push({ rowIndex, seatIndex });
          if (availableSeats.length === this.requestedSeats) {
            this.reserveSeats(availableSeats);
            return;
          }
        }
      }
    }

    alert('Not enough seats available!');
  }

  reserveSeats(seatsToBook: { rowIndex: number; seatIndex: number }[]) {
    const seatNumbers: number[] = []; // Ensure seatNumbers is properly typed

    seatsToBook.forEach((seat) => {
      // Mark the specific seat as booked
      this.seats[seat.rowIndex].seats[seat.seatIndex].booked = true;

      // Calculate the seat number (1-based index)
      const seatNumber = seat.rowIndex * 7 + seat.seatIndex + 1;
      seatNumbers.push(seatNumber); // Store booked seat number
    });

    // Update bookedSeats
    this.bookedSeats = seatNumbers;

    console.log('Booked Seats:', this.bookedSeats); // For debugging
  }
}