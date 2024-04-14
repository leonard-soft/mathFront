import { Component , OnInit} from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.css'
})
export class ThemesComponent implements OnInit {

  constructor (private router: Router) {}

  ngOnInit(): void {
    const element = localStorage.getItem('token');
    if (element == null) {
      this.router.navigate(['/login']);
    } 
  }

}
