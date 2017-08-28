import { Component, OnInit,ElementRef } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Router,ActivatedRoute } from '@angular/router';
import{ appService } from '../shared.service'

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css'],
  providers : [appService]
})
export class Question1Component implements OnInit {
  mintutes = 3;
  seconds = 1;
  timer;
  count=0;
  num = 0;
  acorrect=true;
  awrong=true;
  result = 1;
  questions = ["AngularJS uses only one way data binding","Which angular module is loaded by default","Do AngularJS provide reusable components"]
  options = [["True","False"],["ng","ng-app"],["True","False"]];
 public answers = [];
 correctAnswers = ["False","ng","True"];
 cacount = 0;
 tempcount=0;

  constructor(private elementRef : ElementRef, private router:Router,private share : appService,private route: ActivatedRoute) { }
   
  timerFunction(){
    if(this.seconds>0){
        this.seconds--;
      }
      else{
        this.mintutes--;
        if(this.mintutes==-1 && this.seconds==0){
          this.submit();
        }
        if(this.mintutes>=0 && this.seconds>=0){
          
        this.seconds = 59;
        this.getColor();
      }
      else{
        this.mintutes = 0;
        
      }
        
      }
  }
  

btnClick(event,opt,qnum){
  
  if(this.count<1){
     var temp = '#'+event;
     
      var selectedButton = this.elementRef.nativeElement.querySelector(temp)
      this.count++;
      if(qnum == 0){
        if(opt==2){
          this.acorrect = false;
          this.answers.push(2);
        }
        else{
          this.awrong = false;
          this.answers.push(1)
        }
      }
      else if(qnum == 1){
        if(opt==1){
          this.acorrect = false;
          this.answers.push(1)
        }
        else{
          this.awrong = false;
          this.answers.push(2)
        }
      }
      else if(qnum == 2){
        if(opt==1){
          this.acorrect = false;
          this.answers.push(1)
        }
        else{
          this.awrong = false;
          this.answers.push(2)
        }
      }
   setTimeout(() => { 
      selectedButton.style="background-color : yellow;width:100px;padding:10px";
      }, 400 );
  }       
}


nextQ(){
  if(this.answers[this.num]==1 || this.answers[this.num]==2 ){
    this.num++;
  this.elementRef.nativeElement.querySelector('#option1').style ="width:100px;padding:10px";
  this.elementRef.nativeElement.querySelector('#option2').style ="width:100px;padding:10px";
  this.acorrect = true;
  this.awrong = true;
  this.count = 0;
  }
  
}


public pieChartLabels:string[] = ['Correct Answers', 'Wrong Answers','unattempted'];
correcta;
wronga=0;
unattempted=0;
public pieChartData:number[];
public pieChartType:string = 'pie';
 // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

submit(){

   if(this.tempcount==0){
       if(this.correctAnswers[0]==this.options[0][this.answers[0]-1]){
        this.cacount++;
     }
     if(this.correctAnswers[1]==this.options[1][this.answers[1]-1]){
       this.cacount++;
     }
     if(this.correctAnswers[2]==this.options[2][this.answers[2]-1]){
       this.cacount++;
     }
    
   this.correcta = this.cacount*100;
   if(this.answers.length>0){
     
      if(this.answers[1]==undefined){
        this.wronga = (1-this.cacount)*100;
        this.unattempted = 200;
      }
      else if(this.answers[2]==undefined){
         this.wronga = (2-this.cacount)*100;
        this.unattempted = 100;
      }
      else{
         this.wronga = (3-this.cacount)*100;
      }
      
   }
   else {
     this.unattempted = 300;
   }
   
   this.pieChartData= [this.correcta,this.wronga,this.unattempted];
     this.result=0;
     this.tempcount++;
   }   
    
     
  }


  getColor(){
    if(this.mintutes<1){
      return "red";
    }
    else{
      return "green";
    }
  }

  ngOnInit() {
     this.timer = Observable.timer(0,1000);
    this.timer.subscribe(t=> this.timerFunction());
    if(this.mintutes==0 && this.seconds==0){
          this.submit();
        }
  }

}
