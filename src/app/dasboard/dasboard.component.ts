import { Component ,OnInit} from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.css'
})
export class DasboardComponent implements OnInit {
  
  constructor (private router : Router) {}
  ngOnInit(): void {
    Swal.fire({ title: "No Authorization", icon: "error" });
    const element = localStorage.getItem('token');
    if (element == null) {
      this.router.navigate(['/login']);
    } 
  }

}
