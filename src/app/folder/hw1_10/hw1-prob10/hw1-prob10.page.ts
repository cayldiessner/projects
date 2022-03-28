import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1-prob10',
  templateUrl: './hw1-prob10.page.html',
  styleUrls: ['./hw1-prob10.page.scss'],
})
export class Hw1Prob10Page implements OnInit {

average
  constructor() { }

  ngOnInit() {

    let testscore1 = Number(prompt('Enter a test score'));
    let testscore2 = Number(prompt('Enter a test score'));
    let testscore3 = Number(prompt('Enter a test score'));
    this.average = (testscore1 + testscore2 + testscore3) / 3;
  }

}
