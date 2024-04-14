import { Component, OnInit} from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-averages',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './my-averages.component.html',
  styleUrl: './my-averages.component.css'
})
export class MyAveragesComponent implements OnInit {
  constructor (private router: Router) {}
  ngOnInit(): void {
    const element = localStorage.getItem('token');
    if (element == null) {
      this.router.navigate(['/login']);
    } 
  }
}
