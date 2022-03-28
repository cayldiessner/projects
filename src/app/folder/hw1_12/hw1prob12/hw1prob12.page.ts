import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1prob12',
  templateUrl: './hw1prob12.page.html',
  styleUrls: ['./hw1prob12.page.scss'],
})
export class Hw1prob12Page implements OnInit {
  upper
  lower
  numChar
  firstChar
  constructor() { }

  ngOnInit() {

    let favoriteCity = prompt('Enter favorite city')
    this.upper = favoriteCity.toUpperCase()
    this.lower = favoriteCity.toLowerCase()
    this.numChar = favoriteCity.length
    this.firstChar = favoriteCity.charAt(0)
    
  }


}
