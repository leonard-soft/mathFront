import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-save-user-data',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './save-user-data.component.html',
  styleUrl: './save-user-data.component.css'
})
export class SaveUserDataComponent {
  name : string = "";
  lastName : string = "";
  date : string = "";
  weigth : string = "";
  height : string = "";

  saveUserData () : void {
    const name = this.name;
    const lastName = this.lastName;
    const date = this.date;
    const weigth = this.weigth
    const height = this.height;

    if (name == "" && lastName == "" && date == "" && weigth == "" && height == "") {
      Swal.fire({ title: "missing data", icon: "error" });
    }

  }

}
