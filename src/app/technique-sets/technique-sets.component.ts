import { Component, OnInit } from '@angular/core';

interface TechniqueSet {
  name: string;
  link: string;
}

@Component({
  selector: 'app-technique-sets',
  templateUrl: './technique-sets.component.html',
  styleUrls: ['./technique-sets.component.scss']
})
export class TechniqueSetsComponent implements OnInit {

  sets: Array<TechniqueSet> = [
    {
      name: 'Bo Kata',
      link: 'bo-katas'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
