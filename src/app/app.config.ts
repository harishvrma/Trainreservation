import { provideRouter } from '@angular/router';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';

export const appConfig = {
  providers: [
    provideRouter([]),
    // Remove importProvidersFrom for standalone components
  ],
};