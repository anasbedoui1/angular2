import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];
  newReservation: Reservation = {
    departureDate: new Date(), returnDate: new Date(), status: '',
    id: 0
  };

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getAllReservations().subscribe(reservations => {
      this.reservations = reservations;
    });
  }

  createReservation(): void {
    this.reservationService.createReservation(this.newReservation).subscribe(() => {
      this.reservations.push(this.newReservation);
      this.newReservation = { id: 0 ,departureDate: new Date(), returnDate: new Date(), status: '' };
    });
  }

  updateReservation(reservation: Reservation): void {
    this.reservationService.updateReservation(reservation).subscribe(() => {
      // Update the reservation in the list
      const index = this.reservations.indexOf(reservation);
      if (index!== -1) {
        this.reservations[index] = reservation;
      }
    });
  }

  deleteReservation(id: number): void {
    this.reservationService.deleteReservation(id).subscribe(() => {
      // Remove the reservation from the list
      this.reservations = this.reservations.filter(reservation => reservation.id!== id);
    });
  }
}
