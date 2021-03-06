import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Madlib', url: '/folder/madlib/madlib', icon: 'newspaper'},
    { title: 'Test Average Hw1', url: '/folder/hw1_10/hw1-prob10', icon: 'analytics'},
    { title: 'MPG Hw1', url: '/folder/hw1_9/hw1prob9', icon: 'car-sport'},
    { title: 'String Manipulator Hw1', url: '/folder/hw1_12/hw1prob12', icon: 'business'},
    { title: 'Magic 8 Ball', url: '/folder/magic8ball/magic8ball', icon: 'ellipse'},
    { title: 'Roman Numerals', url: '/folder//', icon: ''},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
