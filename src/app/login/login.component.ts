import { Component , OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatFormFieldModule, 
            FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  hide = true;
  loginUsername : string = '';
  loginPassword : string = '';
  logginUrl : string = 'https://proyectmathe-production.up.railway.app/Login';

  constructor (private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const elemento = localStorage.getItem('token');
    if (elemento != null) {
      Swal.fire({"title": "you need logout", "icon": "error"});
      this.router.navigate(['/index']);
    } 
  }

  validateUserForm () {
    let username : string = this.loginUsername;
    let password : string = this.loginPassword;
    if (username == "" && password == "") {
      Swal.fire({ title: "missing data", text: "no data has been digitized", icon: "error"});
    } else if (username == "") {
        Swal.fire({ title: "username is required", icon: "error" });
    } else if (password == "") {
      Swal.fire({ title: "password is required", icon: "error" });
    } else {
      
      let userObject = { username : username, password : password }

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:4200',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type'
      });

      this.http.post(this.logginUrl, userObject, {headers}).subscribe(data => {
        if (data) {
            Swal.fire({title: "ok", icon: "success" })
            localStorage.setItem('token', JSON.stringify(data));
            this.router.navigate(['/index']);
        } else {
          Swal.fire({title: "username or password incorrect", icon: "error" });
        }
      });

    }
  }

}
