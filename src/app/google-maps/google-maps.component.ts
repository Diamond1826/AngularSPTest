import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from './shared/google-api.service';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {
	height = '500px';
  	myLatLng = {lat: 47.480363, lng: 9.484329};
  	map:any;

  	constructor(private googleApi:GoogleApiService) {}

  	ngOnInit() {
    	this.googleApi.initMap().then(() => {

      		let latlng = new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng);

      	this.map = new google.maps.Map(document.getElementById('map'), {
        	center: latlng,
          scrollwheel: false,
        	zoom: 18
      	});

      	new google.maps.Marker({
        	position: latlng,
        	map: this.map,
        	title: 'Arion-Wiese'
      	});
    });
  }
}