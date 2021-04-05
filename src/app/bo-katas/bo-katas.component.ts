import { Component, OnInit } from '@angular/core';

interface Kata {
  id: number;
  name: string;
  description: string;
  isOpened: boolean;
}

@Component({
  selector: 'app-bo-katas',
  templateUrl: './bo-katas.component.html',
  styleUrls: ['./bo-katas.component.scss']
})
export class BoKatasComponent implements OnInit {

  katas: Kata[] = [
    {
      id: 1,
      name: 'Monomi',
      description: `Starting position: bo in the right hand on the ground in front.
      Strike to the knee from the left,
      strike to the temple from the left,
      drop bo's end on the ground and perform men-uchi.`,
      isOpened: false
    },
    {
      id: 2,
      name: 'Kado gamae',
      description: `Drop bo's end on the ground from to the right and perform men-uchi,
      drop bo's end on the ground from to the left and perform men-uchi.`,
      isOpened: false
    },
    {
      id: 3,
      name: 'Shiba hiki',
      description: `Starting position: bo in the right hand parallel to the ground.
      Grab bo's front end with left hand and perform strike with rear end of bo to the chin from below with jump,
      land on the left knee, perform men-uchi.`,
      isOpened: false
    },
    {
      id: 4,
      name: 'Koshiguruma',
      description: `Starting position: bo behind the back on the belt level parallel to the ground.
      Strike to the knee from the right,
      strike with rear end of bo to the chin from below,
      get down on the left knee, perform men-uchi.`,
      isOpened: false
    },
    {
      id: 5,
      name: 'Kata kuzushi',
      description: `Starting position: bo behind the neck on the shoulder level parallel to the ground.
      Step back with the right leg placing bo over the head,
      perform men-uchi,
      drop bo's end on the ground to the left and perform men-uchi.`,
      isOpened: false
    },
    {
      id: 6,
      name: 'Washi no hagaeshi',
      description: `Starting position: bo in the right hand parallel to the ground.
      Strike to the knee from the left,
      strike to the temple from the left,
      drop bo's end on the ground and perform men-uchi. (Same technique as Monomi)`,
      isOpened: false
    },
    {
      id: 7,
      name: 'Tsuru no itsusoku',
      description: `Starting position: bo in the right hand parallel to the ground.
      Strike with the rear end of bo to the temple with one hand,
      rotate bo 180 degrees on the left side and change grip so that
      left hand hold center and right hand holds front end of bo,
      perform strike with rear end of bo to the chin from below,
      get down on the right knee, perform men-uchi. (Mirroring technique of Shiba hiki)`,
      isOpened: false
    },
    {
      id: 8,
      name: `Koi no mizuiri`,
      description: `Starting position: bo in the right hand parallel to the ground.
      Lift right leg and make step back with tsuki,
      perform men-uchi swapping legs position at the same time and putting bo's front end on the ground,
      tsuki to the toes, tsuki to the chin from below,
      drop bo's end on the ground and perform men-uchi.`,
      isOpened: false
    },
    {
      id: 9,
      name: 'Hige',
      description: `Starting position: bo in the right hand parallel to the ground.
      Strike with rear end of bo to the chin from below with step back with left leg,
      drop bo's end on the ground and perform men-uchi.`,
      isOpened: false
    },
    {
      id: 10,
      name: 'Tonbo gaeshi',
      description: `Starting position: bo in the right hand parallel to the ground.
      Make 3 steps, grab bo's front end with left hand and turn around,
      perform strike with rear end of bo to the chin from below with jump,
      land on the left knee, perform men-uchi. (Same as Shiba Hiki)`,
      isOpened: false
    },
    {
      id: 11,
      name: 'Junrei',
      description: `Starting position: bo perpendicularly to the ground near the right shoulder
      left hand on the bottom end and right hand in the middle of bo.
      Move bo to the left shoulder,
      step back with right leg and strike from left to right,
      perform men-uchi swapping legs position at the same time and putting bo's front end on the ground,
      tsuki to the toes, tsuki to the chin from below,
      drop bo's end on the ground and perform men-uchi. (Same as Koi no Mizuiri)
      `,
      isOpened: false
    },
    {
      id: 12,
      name: 'Niho garame',
      description: `Starting position: bo in the right hand on the ground in front.
      Strike to the knee from the left,
      strike to the temple from the left,
      tsuki,
      rotate bo on the left side of the body and perform tsuki with step,
      slide bo back and perform tsuki back,
      rotate bo on the left side of the body and perform tsuki with step,
      perform 3 men-uchi with turn`,
      isOpened: false
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
