import { Component, OnInit, Input  } from '@angular/core';
import { Hero } from '../hero'; 

@Component({
  selector: 'app-hero-detail',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {
  
  @Input() hero : Hero;

  constructor() { }

  ngOnInit() {
  }

}
