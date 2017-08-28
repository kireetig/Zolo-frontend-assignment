import { Component, OnInit } from '@angular/core';
	import { ActivatedRoute,Router, Params, RoutesRecognized } from '@angular/router';


@Component({
  selector: 'app-resut',
  templateUrl: './resut.component.html',
  styleUrls: ['./resut.component.css'],
 
})
export class ResutComponent implements OnInit {
   public answers;
   getUrl:string;
   page;
  constructor(private route: ActivatedRoute,router: Router) { 
   router.events.subscribe(val => {

            if (val instanceof RoutesRecognized) {

                console.log(val.state.root.firstChild.params);

            }
   });

  }

  ngOnInit() {
    this.answers = this.route.data.subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.page = +params['page'] || 0;});
        console.log(this.answers)
        console.log(this.page)
  }

   ngOnDestroy() {
    this.answers.unsubscribe();
  }

}
