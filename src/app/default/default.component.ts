import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit () : void {
    this.router.navigate(['/login'])
  }
}
