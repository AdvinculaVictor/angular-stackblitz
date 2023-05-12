import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  contador:number=0;
  persona = {
    nombre: 'Victor Aguilar',
    edad: '46'
  }
  constructor() { 
  }

  ngOnInit() {
  }

}