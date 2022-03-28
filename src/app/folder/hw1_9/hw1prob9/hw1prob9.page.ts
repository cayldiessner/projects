import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1prob9',
  templateUrl: './hw1prob9.page.html',
  styleUrls: ['./hw1prob9.page.scss'],
})
export class Hw1prob9Page implements OnInit {

MPG
  constructor() { }

  ngOnInit() {

    let milesdriven = Number(prompt('Enter miles driven'));
    let gallonsused = Number(prompt('Enter gallons of gas used'));
    this.MPG = milesdriven / gallonsused
    
  }

}
