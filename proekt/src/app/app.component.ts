import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DriverComponent } from './driver/driver.component'; 
import { DIRVERS } from '../db-data';
import { Driver } from './module/klasa';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DriverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proekt';

  carlos = DIRVERS[1];
  charles = DIRVERS[2];
  lando = DIRVERS[3];
  oscar = DIRVERS[4];

  vozaci = DIRVERS;

  appklik(suzi: Driver){
    console.log("App e kliknat")
  }
}
