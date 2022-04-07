import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic8ball',
  templateUrl: './magic8ball.page.html',
  styleUrls: ['./magic8ball.page.scss'],
})
export class Magic8ballPage implements OnInit {
  message
  constructor() { }

  ngOnInit() {

    let question1 = prompt('Ask question');
    let num = Math.floor(Math.random() * 8)+1
    if(num==1){
      this.message = ('You will live a long life.');
    } else if(num==2){
      this.message = ('You will get your dream job.');
    } else if(num==3){
      this.message = ('Your dreams will come true.');
    } else if(num==4){
      this.message = ('this.all your worries go away.');
     }else if(num==5){
      this.message = ('Live life to the fullest.');
    } else if(num==6){
      this.message = ('Today will be great!');
    } else if(num=7){
      this.message = ('Love is in your future.');
     }else if(num==8){
      this.message = ('You will soon have a great night with friends.');
    }
    
  }

}
