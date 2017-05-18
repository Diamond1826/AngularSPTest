import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var google: any;

@Component({
  selector: 'app-standort',
  templateUrl: './standort.component.html',
  styleUrls: ['./standort.component.scss']
})
export class StandortComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('standort'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

  }
}
