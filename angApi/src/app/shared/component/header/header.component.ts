import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { Trip } from '../../../model/class/trip';
import { TripsResponse } from '../../../model/class/trip';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  imports: [CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  trips: Trip[] = []; // Use the interface for type safety
  isLoading = true;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTrips();
  }

  fetchTrips(): void {
    this.http.get<TripsResponse>('assets/trip.json').subscribe(
      (response) => {
        this.trips = response.trips; // Type-safe access to the `trips` property
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.errorMessage = 'Failed to load trips. Please try again later.';
        this.isLoading = false;
      }
    );
  }
   
  
  }
  

