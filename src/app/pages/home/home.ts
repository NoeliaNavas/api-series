import { Component, OnInit } from '@angular/core';
import { SeriesService, Serie } from '../../services/series';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  series: Serie[] = [];
  loading = true;
  errorMsg = '';

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getAll().subscribe({
      next: (data) => {
        this.series = data;
        this.loading = false;
      },
      error: () => {
        this.errorMsg = 'Error cargando series';
        this.loading = false;
      }
    });
  }
}
