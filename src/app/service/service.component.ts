import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$(window).scroll(function() {
  		$(".slideanim").each(function(){
    		var pos = $(this).offset().top;
    		var winTop = $(window).scrollTop();
    		if (pos < winTop + 600) {
      			$(this).addClass("slide");
    		}
  		});
	}); 
  }
}
