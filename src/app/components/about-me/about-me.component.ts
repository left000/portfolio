import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  
  @Input() persona!: Persona; 

  constructor() { }

  ngOnInit(): void {
  }

}
