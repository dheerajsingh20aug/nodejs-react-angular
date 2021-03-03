import { Injectable } from '@angular/core';
import { catchError, tap, map  } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError, merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
	counter;
	counter2;
	constructor(private http: HttpClient) {
		this.counter = 0;
		this.counter2 = 1000;
	}
	todayDate() {
		const ndate = new Date();
		const promise = new Promise((resolve, reject) => {
			resolve(ndate);
		});
		return promise;
	}

	getTime() {
		// const obj1 = Observable.create( observer => {
		// 	setInterval( () => {
		// 		observer.next(this.counter++);
		// 	}, 1000);
		// });

		// const obj2 = Observable.create( observer => {
		// 	setInterval( () => {
		// 		observer.next(this.counter2++);
		// 	}, 5000);
		// });
		// const observable3 = merge(obj1, obj2);
		// return observable3;
		return new Observable( observer => {
			setInterval( () => {
				observer.next(new Date());
			}, 1000);
		});
	}

	getApi(): Observable<any> {
		return this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees')
		.pipe(
			map( data => {
				const res = data.data.map( (el) => {
					el.profile_image = el.employee_name + '.jpg';
					return el;
				});
				data.data = res;
				return data;
			})
		);
	}
}

