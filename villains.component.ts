import { Component, OnInit } from '@angular/core';
//it is important to import the villains constant variable
import { VILLAIN } from '../mock-villains';
import { Villain } from '../villain';


@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {


  villains = VILLAIN;
  selectedVillain: Villain;


  onSelect(v: Villain): void{
    this.selectedVillain = v;
  }
  constructor() { }

  ngOnInit() {
  }

}
