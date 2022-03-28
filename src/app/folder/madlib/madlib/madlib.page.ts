import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-madlib',
  templateUrl: './madlib.page.html',
  styleUrls: ['./madlib.page.scss'],
})
export class MadlibPage implements OnInit {

  message;

  constructor() { }

  ngOnInit() {

    let container = prompt('Enter a container');
    let adjective1 = prompt('Enter an adjective');
    let adjective2 = prompt('Enter an adjective');
    let noun = prompt('Enter a noun');
    let animal = prompt('Enter an animal');
    let vegtable1 = prompt('Enter a vegtable');
    let vegtable2 = prompt('Enter a vegtable');
    let color = prompt('Enter a color');
    let adjective3 = prompt('Enter an adjective');

    this.message = `Make sure your lunch ${container} is filled with nutritious ${adjective1} food. Do not go to the ${adjective2} food stand across the street form the school. The hamburgers they serve are fried in ${noun} an are made of ${animal} meat. So take a sandwhich made of ${vegtable1} or ${vegtable2} it's much healthier! Drink ${color} milk instead of ${adjective3} colas.`


  }

}
