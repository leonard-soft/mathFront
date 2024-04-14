import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatFormFieldModule,
            FormsModule, HttpClientModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent implements OnInit {
  hide = true;
  username : string = "";
  password : string = "";
  registerUrl : string = "https://proyectmathe-production.up.railway.app/register/user";
 
  constructor (private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const elemento = localStorage.getItem('token');
    if (elemento != null) {
      Swal.fire({"title": "you need logout", "icon": "error"});
      this.router.navigate(['/index']);
    } 
  }

  validateUserRegistration () {
    let username : string = this.username;
    let password : string = this.password;
    if (username == "" && password == "") {
      Swal.fire({ title: "missing data", text: "no data has been digitized", icon: "error"});
    } else if (username == "") {
        Swal.fire({ title: "missing username", icon: "error"});
    } else if (password == "") {
      Swal.fire({ title: "missing password", icon: "error"});
    } else {

      let userObject = JSON.stringify({ "username": username, "password": password });

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:4200',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type'
      });
      
      this.http.post(this.registerUrl, userObject, {headers}).subscribe(data => {
        if (data) {
          Swal.fire({ title: "successfully registered user", icon: "success" });
          this.router.navigate(['/login']);
        } else {
          Swal.fire({ title: "error in the request", icon: "error" });
        } 
      });

    }
  }

}
