import { Component, OnInit } from '@angular/core';
//import { smoothScroll } from 'ng-smooth-scroll';
declare var $: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
	ngOnInit() {
		$('a[href^="#"]').on('click', function(event) {
        	var target = $(this.getAttribute('href'));
        	if( target.length ) {
            	event.preventDefault();
            	$('html, body').stop().animate({
                	scrollTop: target.offset().top
            	}, 1000);
        	}
    	});
      /*link: function($scope, $elem, $attrs){
        var options = $attrs;

        smoothScroll($elem[0], options);
      }*/
  	}
}