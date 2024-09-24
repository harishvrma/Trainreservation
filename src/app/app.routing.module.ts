import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatBookingComponent } from './seat-booking/seat-booking.component'; // Adjust the import as necessary

const routes: Routes = [
  { path: 'seat-booking', component: SeatBookingComponent }, // Route to the SeatBookingComponent
  { path: '', redirectTo: '/seat-booking', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}