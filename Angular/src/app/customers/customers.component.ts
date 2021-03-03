import { Component, OnInit } from '@angular/core';
import {CustomersService} from './customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
	todaydate: any;
	time: any;
	apiData: any;
  constructor(private customer: CustomersService) { }

  ngOnInit(): void {
		this.customer.todayDate().then( data => {
			this.todaydate = data;
		});

		this.customer.getTime().subscribe( data => this.time = data );
		this.customer.getApi().subscribe( data => this.apiData = data );
	}

}
