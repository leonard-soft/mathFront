import { Component, OnInit} from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-average',
  standalone: true,
  imports: [HeaderComponent, MatInputModule, FormsModule, HttpClientModule],
  templateUrl: './new-average.component.html',
  styleUrl: './new-average.component.css'
})
export class NewAverageComponent implements OnInit {
  values : string = "";
  averageUrl : string = "https://proyectmathe-production.up.railway.app/save/average";

  constructor (private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const element = localStorage.getItem('token');
    if (element == null) {
      this.router.navigate(['/login']);
    } 
  }

  calculateAverage () : void {
    let splitValues : string[] = this.values.split(" ");
    let valuesNumber : number = splitValues.length;
    let sumValues : number = 0;
    let average : number = 0;
    const averageElement : any = document.getElementById('average');
    splitValues.forEach(element => {
      sumValues += Number.parseInt(element);
    });
    average = sumValues / valuesNumber;
    averageElement.innerHTML = `<h2 align='center'>${average}</h2>`;
  }

  saveAverage () : void {
    const averageElement : any = document.querySelector("#average");
    const average : number  = Number.parseFloat(averageElement.textContent);
    if (average) {
      let averageObject = {
        "values": this.values,
        "average": average,
        "usuario": 2
      }
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:4200'
      });
  
      this.http.post(this.averageUrl, averageObject, {headers}).subscribe(data => {
        Swal.fire({ title: "average registered successfully ", icon: "success" });
      });
    } else {
      Swal.fire({ title: "average error ", icon: "error" });
    }
  }

}
