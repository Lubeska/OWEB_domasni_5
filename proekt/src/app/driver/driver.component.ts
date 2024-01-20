import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Driver } from '../module/klasa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent implements OnInit {
  constructor() {}

  @Input()
  ime: String = "";

  @Input()
  vozac: Driver = {} as Driver;

  @Input()
  reden: Number = 0;

  @Output()
  shofer: Driver = {} as Driver;

  @Output()
  cuci = new EventEmitter<any>();

  ngOnInit(): void {
      
  }

  /*klasi(){
    return{'poz':this.vozac.category=='Dobar','course-card':true}
  }*/

  getStyle() {
    return{
      'background-color': this.vozac.category === 'Okej' ? 'rgb(255,255,143)' : 'transparent',
      
      'font-size': this.vozac.category === 'Dobar' ? '18px' : 'inherit',
      'text-align': 'center',
      'font-weight': 'bold',
    };
  }

  getPhotoStyles() {
    return {
      'width.px': 200,
      'height.px': 200,
      //'border-radius': '50%',
      'margin': '10px auto',
      'display': 'block',
    };
  }

  getButtonStyle() {
    return{
      'background-color': 'rgb(194,30,86)',
      'color': 'white',
      'border-radius': '4px',
    };
  }

  klik(){
    var link=this.vozac.iconUrl;
    window.open(link, "_blank");
    console.log("Me klikna");
    this.cuci.emit(this.vozac);
  }
}
