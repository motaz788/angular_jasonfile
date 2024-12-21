import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-details',
  imports: [CommonModule],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.css'
})
export class TripDetailsComponent {
  trip: any;

  constructor(private route:Router, private http: HttpClient) {}

  // ngOnInit(): void {
  //   const tripId = this.route.snapshot.paramMap.get('id');
  //   this.http.get('assets/trip.json').subscribe((data: any) => {
  //     this.trip = data.trips.find((trip: any) => trip.id === +tripId);
  //   });
}
